import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";
import sharp from "sharp";
import { TwitterApi } from "twitter-api-v2";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const dataFilePath = path.join(rootDir, "src", "data", "dailyContent.ts");
const sitemapPath = path.join(rootDir, "public", "sitemap.xml");

// Slug generator utility
function slugify(text) {
  const trMap = {
    'ç': 'c', 'Ç': 'c', 'ğ': 'g', 'Ğ': 'g', 'ı': 'i', 'I': 'i', 'İ': 'i',
    'ö': 'o', 'Ö': 'o', 'ş': 's', 'Ş': 's', 'ü': 'u', 'Ü': 'u',
    'â': 'a', 'î': 'i', 'û': 'u'
  };
  let slug = text.toString().toLowerCase().trim();
  for (const key in trMap) {
    slug = slug.replace(new RegExp(key, 'g'), trMap[key]);
  }
  return slug
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start
    .replace(/-+$/, '');            // Trim - from end
}

// Retrying fetch utility for API robustness
async function fetchWithRetry(url, options, retries = 3, delay = 2500) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) return response;
      
      const status = response.status;
      // 503 (Temporary Overload) or 429 (Rate Limit) or 5xx server errors
      if (status === 503 || status === 429 || status >= 500) {
        console.warn(`[AI] Gemini API geçici hata verdi (${status}). ${delay / 1000} saniye sonra tekrar deneniyor... (Deneme ${i + 1}/${retries})`);
        await new Promise(res => setTimeout(res, delay));
        delay *= 2; // Exponential backoff
        continue;
      }
      return response; // Return other errors (like 400 Bad Request) immediately
    } catch (error) {
      if (i === retries - 1) throw error;
      console.warn(`[AI] Ağ hatası oluştu, tekrar deneniyor... (${error.message})`);
      await new Promise(res => setTimeout(res, delay));
      delay *= 2;
    }
  }
  throw new Error(`Maksimum API deneme sayısına ulaşıldı (${retries})`);
}

const MONTHS_TR = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

async function generateDailyContent() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("HATA: GEMINI_API_KEY tanımlanmamış. Lütfen ortam değişkenlerini kontrol edin.");
    process.exit(1);
  }

  // API modellerini listele (hata tespiti için geçici günlük kaydı)
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    if (res.ok) {
      const data = await res.json();
      console.log("[AI] Kullanılabilir modeller:", data.models.map(m => m.name.split("/").pop()));
    }
  } catch (err) {
    console.log("[AI] Modeller listelenirken hata oluştu:", err.message);
  }

  const today = new Date();
  // Türkiye saatine (+3 saat) göre zamanı kaydır
  const turkeyTime = new Date(today.getTime() + (3 * 60 * 60 * 1000));

  const year = turkeyTime.getUTCFullYear();
  const month = String(turkeyTime.getUTCMonth() + 1).padStart(2, "0");
  const day = String(turkeyTime.getUTCDate()).padStart(2, "0");
  const hourStr = String(turkeyTime.getUTCHours()).padStart(2, "0");

  // Örn: "2026-06-13T12:00:00+03:00" -> ISO biçimi sıralamayı ve new Date() analizini kolaylaştırır
  const dateId = `${year}-${month}-${day}T${hourStr}:00:00+03:00`;
  const dayNum = turkeyTime.getUTCDate();
  const monthName = MONTHS_TR[turkeyTime.getUTCMonth()];

  console.log(`[AI] Günlük haber üretimi başladı: ${dayNum} ${monthName} ${year} saat ${hourStr}:00 (${dateId})`);

  // 1. Mevcut haberleri oku ve slug listesini çıkar (tekrarı önlemek için)
  let dailyQuizzes = [];
  try {
    const fileContent = await fs.readFile(dataFilePath, "utf-8");
    const startIdx = fileContent.indexOf("= [") + 2;
    const endIdx = fileContent.lastIndexOf("]") + 1;
    const jsonStr = fileContent.slice(startIdx, endIdx);
    dailyQuizzes = JSON.parse(jsonStr || "[]");
  } catch (err) {
    console.log("[AI] dailyContent.ts okunamadı veya boş, yeni oluşturulacak.");
  }

  const previousSlugs = dailyQuizzes.map(q => q.slug);
  console.log(`[AI] Mevcut sayfa sayısı: ${dailyQuizzes.length}. Mevcut haber slugları: ${previousSlugs.slice(-5).join(", ")}`);

  // 2. Gemini 3.1 Flash-Lite API'den Google Search Grounding ile haber içeriği ve görsel promptu iste
  const prompt = `Bugünün tarihi: ${dayNum} ${monthName} ${year}.

GÖREVİN: Google Search aracını kullanarak, SON 3 GÜN içinde Türkiye ve dünya gündemine gerçekten düşmüş, GERÇEK ve DOĞRULANABİLİR bir haber seç; ardından bu haberi profesyonel, viral potansiyeli yüksek bir Türkçe makaleye dönüştür.

═══ BÖLÜM A: GERÇEKLİK VE DOĞRULAMA (EN ÖNEMLİ KURALLAR) ═══
1. SADECE Google Search ile bulduğun, birden fazla kaynakta yer alan GERÇEK ve GÜNCEL bir olayı işle. Aramada böyle bir haber bulamazsan, varsayım üretme; başka gerçek bir konu ara.
2. KESİNLİKLE UYDURMA YASAĞI: Var olmayan şirket, ürün, kişi, kurum, yasa, istatistik, tarih veya alıntı ASLA üretme. Tüm isimler, rakamlar, tarihler ve alıntılar aramada gördüğün gerçek kaynaklara dayanmalıdır. Emin olmadığın hiçbir spesifik bilgiyi (özellikle para tutarı, yüzde, "ilk", "dünyada tek" gibi iddialar) yazma.
3. Bir bilgiden emin değilsen, o bilgiyi atla veya "iddia ediliyor / öne sürülüyor" gibi temkinli dille belirt. Spekülasyonu kesin gerçek gibi sunma.
4. "sourceName" alanına haberi aldığın gerçek ve tanınmış kaynağın adını (örn: Anadolu Ajansı, NTV, Reuters, BBC Türkçe), "sourceUrl" alanına ise o kaynaktaki gerçek haber bağlantısını yaz. Bu alanlar uydurma OLAMAZ; aramada gerçekten gördüğün bir URL olmalıdır.

═══ BÖLÜM B: VİRAL / YÜKSEK TIKLAMA (HIGH-CTR) ═══
5. Konu seçimi: Geniş kitleyi ilgilendiren, merak uyandıran, paylaşılası ve Google Discover'a düşebilecek alanlara öncelik ver — teknoloji, bilim, ekonomi-cep, magazin/popüler kültür, dizi/sinema, spor, ilginç dünya haberleri, sağlık/yaşam.
6. Başlık (heading): Merak boşluğu yaratan, duygusal veya şaşırtıcı bir kanca içeren, somut ve net bir başlık kur. Güçlü ama DÜRÜST olmalı — başlıkta vaat edileni makale mutlaka karşılamalı (yanıltıcı/abartılı clickbait YASAK). Mümkünse sayı, "neden/nasıl" veya çarpıcı bir sonuç kullan.
7. intro: İlk 2 cümlede en çarpıcı bilgiyi vererek okuru içeri çek; okumaya devam etme isteği uyandır.

═══ BÖLÜM C: BİÇİM VE KALİTE ═══
8. Makaleyi klasik, güvenilir bir haber ajansı tarzında (objektif, profesyonel, akıcı Türkçe) yaz. Mutlaka HTML formatında olsun: paragraflar <p>, en az 3 adet kısa ve ilgi çekici alt başlık <h3>, önemli isim/tarih/rakamlar <strong>, sıralı bilgiler <ul>/<li>. Makale doyurucu olmalı (en az 6 paragraf, yaklaşık 2000-3500 karakter).
9. "imagePrompt": "gemini-3.1-flash-image" için, haber konusunu profesyonel basın fotoğrafı stilinde tasvir eden detaylı İngilizce prompt. İçinde metin/yazı/logo/filigran olmamasını İngilizce belirt. Sonuna mutlaka ekle: "High-end photojournalism style, shot on 35mm lens, award-winning editorial press photograph, photorealistic, cinematic lighting, vivid colors, extremely detailed texture, 8k, no text, no logos, no watermarks, clean composition".
10. GÖRSEL GÜVENLİK FİLTRESİ: Konu hassas/negatif ise (politik gerilim, adli operasyon, gözaltı, baskın, iflas, dava, çatışma) görsel promptu şiddet/polis/kelepçe/suç/adliye hücresi içermesin. Bunun yerine nötr, sembolik basın fotoğrafları kur (modern gökdelenler, adliye binasının dış mimarisi, mahkeme tokmağı, döviz/altın sembolleri, gıda kolileri gibi güvenli nesneler). 'police','arrest','handcuffs','raid','jail','courtroom drama' gibi kelimeleri ASLA kullanma.
11. Daha önce şu konular üretildi: [${previousSlugs.join(", ")}]. Bunlarla aynı/çok benzer OLMAYAN, tamamen farklı ve güncel bir olay seç.
12. JSON çıktısı geçerli olmalı ve şablona birebir uymalı.`;

  const textApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`;

  const requestBody = {
    contents: [{
      parts: [{ text: prompt }]
    }],
    tools: [{
      googleSearch: {}
    }],
    generationConfig: {
      responseMimeType: "application/json",
      thinkingConfig: { thinkingBudget: 0 },
      responseSchema: {
        type: "OBJECT",
        properties: {
          title: { type: "STRING", description: "Haberin SEO sayfa başlığı (örn: 'Togg T10F Yol Testlerine Başladı | GK Haber')" },
          description: { type: "STRING", description: "Haberin SEO açıklaması (meta description)" },
          keywords: { type: "ARRAY", items: { type: "STRING" }, description: "Haber SEO anahtar kelimeleri" },
          heading: { type: "STRING", description: "Haberin ana başlığı (örn: 'Yollarda Yeni Dönem: Togg T10F Test Ediliyor')" },
          intro: { type: "STRING", description: "Haberin kısa, dikkat çekici özet giriş paragrafı" },
          article: { type: "STRING", description: "Detaylı haber metni (HTML formatında, paragraflar için <p>, alt başlıklar için <h3>, vurgulamalar için <strong>, listeler için <ul>/<li> kullanın)" },
          category: { type: "STRING", enum: ["gundem", "teknoloji", "bilim", "ekonomi", "dunya", "spor", "sanat", "magazin"], description: "Haberin kategorisi" },
          sourceName: { type: "STRING", description: "Haberin alındığı gerçek ve tanınmış kaynağın adı (örn: Anadolu Ajansı, NTV, Reuters). Uydurma olamaz." },
          sourceUrl: { type: "STRING", description: "Google Search'te gerçekten bulunan, habere ait kaynak URL'si. Uydurma olamaz, geçerli bir bağlantı olmalı." },
          imagePrompt: { type: "STRING", description: "Görsel üretmek için kullanılacak detaylı İngilizce prompt (görsel güvenlik filtresi kurallarına uygun)" }
        },
        required: ["title", "description", "keywords", "heading", "intro", "article", "category", "sourceName", "sourceUrl", "imagePrompt"]
      }
    }
  };

  console.log("[AI] Gemini 3.1 Flash-Lite üzerinden haber metni ve görsel promptu üretiliyor...");
  const textResponse = await fetchWithRetry(textApiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody)
  });

  if (!textResponse.ok) {
    const errorText = await textResponse.text();
    console.error(`HATA: Gemini API yanıt vermedi. Statü: ${textResponse.status}. Detay: ${errorText}`);
    process.exit(1);
  }

  const result = await textResponse.json();
  const textResponseContent = result.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!textResponseContent) {
    console.error("HATA: Gemini geçerli bir metin yanıtı üretmedi.", JSON.stringify(result));
    process.exit(1);
  }

  const parsedData = JSON.parse(textResponseContent);
  const slug = slugify(parsedData.heading);

  // Çakışmayı önle
  if (previousSlugs.includes(slug)) {
    console.log(`[AI] '${slug}' haberi zaten mevcut. Yeni haber üretilmedi, atlanıyor.`);
    process.exit(0);
  }

  // 3. Görsel API'lerini kullanarak haber görselini üret (gemini-3.1-flash-image)
  let imageUrl = "";
  if (parsedData.imagePrompt) {
    let base64Data = "";
    try {
      console.log(`[AI] gemini-3.1-flash-image üzerinden görsel üretiliyor... Prompt: "${parsedData.imagePrompt}"`);
      const imageApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image:generateContent?key=${apiKey}`;
      const imageRequestBody = {
        contents: [{
          parts: [{ text: parsedData.imagePrompt }]
        }],
        generationConfig: {
          responseModalities: ["IMAGE"],
          imageConfig: {
            aspectRatio: "16:9"
          }
        }
      };

      const imageResponse = await fetchWithRetry(imageApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(imageRequestBody)
      });

      if (imageResponse.ok) {
        const imageResult = await imageResponse.json();
        base64Data = imageResult.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data || imageResult.candidates?.[0]?.content?.parts?.[0]?.inline_data?.data;
        if (base64Data) {
          console.log(`[AI] ✅ Görsel başarıyla üretildi (gemini-3.1-flash-image)`);
        } else {
          console.warn("[AI] ⚠️ Görsel verisi base64 olarak alınamadı. Yanıt detayı:", JSON.stringify(imageResult));
        }
      } else {
        const errTxt = await imageResponse.text();
        console.warn(`[AI] ⚠️ Görsel API hatası (${imageResponse.status}): ${errTxt}`);
      }
    } catch (err) {
      console.warn(`[AI] ⚠️ Görsel üretilirken beklenmedik hata oluştu: ${err.message}`);
    }

    // Görseli WebP'ye çevirip disk'e kaydet (performans/Core Web Vitals için)
    if (base64Data) {
      try {
        const imageDir = path.join(rootDir, "public", "images", "news");
        await fs.mkdir(imageDir, { recursive: true });
        const imagePath = path.join(imageDir, `${slug}.webp`);
        const pngBuffer = Buffer.from(base64Data, "base64");
        await sharp(pngBuffer)
          .resize({ width: 1280, withoutEnlargement: true })
          .webp({ quality: 78 })
          .toFile(imagePath);
        imageUrl = `/images/news/${slug}.webp`;
        const sizeKb = Math.round((await fs.stat(imagePath)).size / 1024);
        console.log(`[AI] Görsel WebP olarak kaydedildi (${sizeKb}KB): ${imagePath}`);
      } catch (saveErr) {
        console.error(`[AI] ⚠️ Görsel kaydedilirken hata oluştu: ${saveErr.message}`);
      }
    } else {
      console.warn("[AI] ⚠️ Görsel verisi alınamadı, haber görselsiz yayınlanacak.");
    }
  }

  // imagePrompt'u TypeScript dosyasına eklemeye gerek yok, temizleyelim
  delete parsedData.imagePrompt;

  const newNewsItem = {
    slug,
    dateId,
    imageUrl: imageUrl || undefined, // Görsel üretilmişse ekle
    ...parsedData
  };

  // 4. dailyContent.ts dosyasını güncelle
  dailyQuizzes.push(newNewsItem);
  const newFileContent = `export interface DailyQuestion {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface DailyQuiz {
  slug: string;
  dateId: string;
  title: string;
  description: string;
  keywords: string[];
  heading: string;
  intro: string;
  article: string;
  category: string;
  sourceName?: string;
  sourceUrl?: string;
  imageUrl?: string;
  questions?: DailyQuestion[];
}

export const dailyQuizzes: DailyQuiz[] = ${JSON.stringify(dailyQuizzes, null, 2)};\n`;

  await fs.writeFile(dataFilePath, newFileContent, "utf-8");
  console.log(`[AI] Başarıyla yeni haber eklendi. Konu: ${newNewsItem.heading} (Kategori: ${newNewsItem.category}, Rota: /test/${slug})`);

  // 5. sitemap.xml dosyasını güncelle (tüm dosyayı yeniden üreterek güncel tut)
  try {
    const { execSync } = await import("node:child_process");
    execSync("node scripts/generate-sitemap.mjs", { stdio: "inherit" });
  } catch (err) {
    console.error("Sitemap güncellenirken bir hata oluştu:", err);
  }

  // 6. Twitter (X) — yeni haberi görseliyle otomatik paylaş
  try {
    const localImagePath = newNewsItem.imageUrl ? path.join(rootDir, "public", "images", "news", `${slug}.webp`) : null;
    await postToTwitter(newNewsItem.heading, newNewsItem.intro, slug, localImagePath);
  } catch (err) {
    console.error("Twitter paylaşılamadı:", err);
  }

  // 7. Google Indexing API — yeni sayfaları doğrudan dizine bildir
  await notifyGoogleIndexingAPI(slug);
}

// ─── Twitter (X) Otomatik Paylaşım Fonksiyonu ──────────────────────────────
async function postToTwitter(heading, intro, slug, localImagePath) {
  if (!process.env.TWITTER_API_KEY || !process.env.TWITTER_ACCESS_TOKEN) {
    console.log("[Twitter Bot] Twitter API anahtarları tanımlı değil, paylaşım atlanıyor.");
    return;
  }

  try {
    console.log("[Twitter Bot] Twitter istemcisi başlatılıyor...");
    const twitterClient = new TwitterApi({
      appKey: process.env.TWITTER_API_KEY,
      appSecret: process.env.TWITTER_API_SECRET,
      accessToken: process.env.TWITTER_ACCESS_TOKEN,
      accessSecret: process.env.TWITTER_ACCESS_SECRET,
    });

    let mediaId = null;

    if (localImagePath) {
      try {
        console.log(`[Twitter Bot] Görsel yükleniyor: ${localImagePath}`);
        mediaId = await twitterClient.v1.uploadMedia(localImagePath);
        console.log(`[Twitter Bot] Görsel yüklendi. Media ID: ${mediaId}`);
      } catch (mediaErr) {
        console.warn(`[Twitter Bot] ⚠️ Görsel yüklenirken hata oluştu: ${mediaErr.message}`);
      }
    }

    const url = `https://genelkultur.com.tr/test/${slug}`;
    const rawContent = `📢 ${heading}\n\n📝 ${intro}`;
    // Limit to 230 characters to leave space for links and format text safely (X has 280 character limit)
    const truncatedContent = rawContent.length > 230 ? rawContent.slice(0, 227) + "..." : rawContent;
    const tweetText = `${truncatedContent}\n\nDetaylar için tıklayın 👇\n🔗 ${url}`;

    console.log("[Twitter Bot] Tweet atılıyor...");
    const tweetOptions = { text: tweetText };
    if (mediaId) {
      tweetOptions.media = { media_ids: [mediaId] };
    }

    const { data } = await twitterClient.v2.tweet(tweetOptions);
    console.log(`[Twitter Bot] ✅ Tweet başarıyla atıldı! ID: ${data.id}`);
  } catch (err) {
    console.error("[Twitter Bot] ❌ Paylaşım sırasında hata oluştu:", err.message);
  }
}

// ─── Google Indexing API ──────────────────────────────────────────────────────
async function getGoogleAccessToken(serviceAccountJson) {
  const sa = JSON.parse(serviceAccountJson);
  const now = Math.floor(Date.now() / 1000);

  const header  = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
  const payload = Buffer.from(JSON.stringify({
    iss  : sa.client_email,
    scope: "https://www.googleapis.com/auth/indexing",
    aud  : "https://oauth2.googleapis.com/token",
    iat  : now,
    exp  : now + 3600,
  })).toString("base64url");

  const signingInput = `${header}.${payload}`;
  const sign = crypto.createSign("RSA-SHA256");
  sign.update(signingInput);
  sign.end();
  const signature = sign.sign(sa.private_key, "base64url");

  const jwt = `${signingInput}.${signature}`;

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method : "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body   : new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion : jwt,
    }),
  });

  if (!tokenRes.ok) {
    const err = await tokenRes.text();
    throw new Error(`Google token alınamadı: ${err}`);
  }

  const { access_token } = await tokenRes.json();
  return access_token;
}

async function indexUrl(accessToken, url) {
  const res = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
    method : "POST",
    headers: {
      "Content-Type" : "application/json",
      "Authorization": `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ url, type: "URL_UPDATED" }),
  });

  if (res.ok) {
    console.log(`[Indexing API] ✅ Dizine bildirildi: ${url}`);
  } else {
    const errText = await res.text();
    console.warn(`[Indexing API] ⚠️ Başarısız (${res.status}): ${url} — ${errText}`);
  }
}

async function notifyGoogleIndexingAPI(slug) {
  const saJson = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!saJson) {
    console.log("[Indexing API] GOOGLE_SERVICE_ACCOUNT_KEY tanımlı değil, atlanıyor.");
    return;
  }

  try {
    console.log("[Indexing API] Google erişim token'ı alınıyor...");
    const accessToken = await getGoogleAccessToken(saJson);

    const baseUrl = "https://genelkultur.com.tr";
    await indexUrl(accessToken, `${baseUrl}/test/${slug}`);
    await indexUrl(accessToken, `${baseUrl}/gunluk-haberler`);

    console.log("[Indexing API] Tüm URL bildirimleri tamamlandı.");
  } catch (e) {
    console.error("[Indexing API] Hata (kritik değil):", e.message);
  }
}
// ─────────────────────────────────────────────────────────────────────────────

generateDailyContent().catch((err) => {
  console.error("Beklenmedik Hata:", err);
  process.exit(1);
});
