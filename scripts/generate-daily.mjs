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

  console.log(`[AI] Günlük genel kültür içeriği üretimi başladı: ${dayNum} ${monthName} ${year} saat ${hourStr}:00 (${dateId})`);

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

  // 2. Gemini 3.1 Flash-Lite API'den Google Search Grounding ile EVERGREEN genel kültür içeriği + mini quiz iste
  const prompt = `Bugünün tarihi: ${dayNum} ${monthName} ${year}.

GÖREVİN: Genel kültür meraklılarını şaşırtacak, ÖĞRETİCİ ve KALICI (evergreen) bir "ilginç genel kültür bilgisi" makalesi üret; ardından makaledeki bilgilere dayanan kısa bir MİNİ QUIZ hazırla. Bu içerik GÜNCEL HABER DEĞİL — bugün de bir yıl sonra da geçerli olacak, zamansız bilgi olmalı.

═══ BÖLÜM A: KONU SEÇİMİ (DISCOVER İÇİN) ═══
1. "Bunu bilmiyordum!" dedirtecek, geniş kitlenin merakını çeken bir genel kültür konusu seç. Alanlar: bilim, uzay ve astronomi, tarih, coğrafya, doğa ve hayvanlar, insan vücudu, icatlar ve buluşlar, sanat ve mimari, dünya kültürleri, dil ve kelimelerin kökeni, şaşırtıcı gerçekler.
2. Konu KALICI olmalı (örn. "Bal neden bozulmaz?", "Eyfel Kulesi yazın neden uzar?", "Antik Mısır'da diş macunu nasıl yapılırdı?"). Güncel/geçici gündem (seçim, maç, zirve, şirket haberi) SEÇME.
3. Daha önce şu konular üretildi: [${previousSlugs.join(", ")}]. Bunlarla aynı/benzer OLMAYAN, tamamen farklı bir konu seç.

═══ BÖLÜM B: GERÇEKLİK VE DOĞRULAMA ═══
4. Google Search aracını kullanarak konuyu DOĞRULA. KESİNLİKLE UYDURMA YASAĞI: var olmayan olgu, rakam, tarih, isim veya alıntı ASLA üretme. Tüm bilgiler ansiklopedik doğrulukta ve doğrulanabilir olmalı. Emin olmadığın spesifik bir bilgiyi (özellikle rakam, yüzde, "ilk/tek/en" iddiaları) yazma.
5. "sourceName": bilgiyi dayandırdığın güvenilir, gerçek kaynağın adı (örn: TÜBİTAK Bilim Genç, Britannica, National Geographic, NASA, Wikipedia). "sourceUrl": o kaynağa ait gerçek, geçerli bir bağlantı. Bu alanlar uydurma OLAMAZ.

═══ BÖLÜM C: VİRAL / DISCOVER (HIGH-CTR) ═══
6. Başlık (heading): merak boşluğu yaratan, somut ve net bir başlık kur. Güçlü ama DÜRÜST — başlıkta vaat edileni makale mutlaka karşılamalı (abartılı clickbait YASAK). Mümkünse soru biçimi, sayı veya çarpıcı bir gerçek kullan.
7. intro: ilk 2 cümlede en çarpıcı bilgiyi vererek okuru içeri çek.

═══ BÖLÜM D: BİÇİM VE KALİTE ═══
8. Makaleyi objektif, akıcı ve öğretici bir ansiklopedik dille yaz. HTML formatında: paragraflar <p>, en az 3 adet ilgi çekici alt başlık <h3>, önemli isim/tarih/rakamlar <strong>, uygunsa <ul>/<li>. Doyurucu olmalı (en az 5-6 paragraf, ~2000-3500 karakter). Özgün ol — başka bir kaynağı kopyalama, bilgiyi kendi cümlelerinle özgün biçimde anlat.
9. "questions": makaledeki bilgilere dayanan 4 adet çoktan seçmeli mini quiz sorusu üret. Her soru: "text" (soru metni), tam 4 şıklı "options" dizisi, "correctAnswer" (0-3 arası doğru şık indexi) ve "explanation" (kısa açıklama). Sorular makaleyi okuyan birinin cevaplayabileceği, öğretici sorular olmalı.
10. "imagePrompt": konuyu temsil eden, MODERN EĞİTSEL İLLÜSTRASYON / dijital illüstrasyon stilinde detaylı İngilizce prompt. Foto-gerçekçi BASIN FOTOĞRAFI ÜRETME. İçinde metin/yazı/logo/filigran olmamasını İngilizce belirt. Sonuna mutlaka ekle: "Modern flat editorial illustration, clean conceptual vector style, vibrant educational infographic aesthetic, soft shapes, no text, no letters, no logos, no watermarks, high quality, highly detailed".
11. JSON çıktısı geçerli olmalı ve şablona birebir uymalı.`;

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
          title: { type: "STRING", description: "İçeriğin SEO sayfa başlığı (örn: 'Bal Neden Asla Bozulmaz? | Genel Kültür')" },
          description: { type: "STRING", description: "İçeriğin SEO açıklaması (meta description)" },
          keywords: { type: "ARRAY", items: { type: "STRING" }, description: "Konunun SEO anahtar kelimeleri" },
          heading: { type: "STRING", description: "İçeriğin merak uyandıran ana başlığı" },
          intro: { type: "STRING", description: "Kısa, çarpıcı özet giriş paragrafı" },
          article: { type: "STRING", description: "Detaylı, öğretici, özgün bilgi metni (HTML formatında: <p>, <h3>, <strong>, <ul>/<li>)" },
          category: { type: "STRING", enum: ["genel", "bilim", "tarih", "sanat", "teknoloji"], description: "İçeriğin kategorisi" },
          sourceName: { type: "STRING", description: "Bilgiyi dayandırdığın güvenilir kaynağın adı (örn: TÜBİTAK Bilim Genç, Britannica, NASA). Uydurma olamaz." },
          sourceUrl: { type: "STRING", description: "Kaynağa ait gerçek, geçerli bir bağlantı. Uydurma olamaz." },
          imagePrompt: { type: "STRING", description: "Görsel üretmek için detaylı İngilizce prompt (modern eğitsel illüstrasyon stili, basın fotoğrafı DEĞİL)" },
          questions: {
            type: "ARRAY",
            description: "Makaledeki bilgilere dayanan 4 adet çoktan seçmeli mini quiz sorusu",
            items: {
              type: "OBJECT",
              properties: {
                text: { type: "STRING", description: "Soru metni" },
                options: { type: "ARRAY", items: { type: "STRING" }, description: "Tam 4 şık" },
                correctAnswer: { type: "NUMBER", description: "Doğru şıkkın indexi (0-3)" },
                explanation: { type: "STRING", description: "Doğru cevabın kısa açıklaması" }
              },
              required: ["text", "options", "correctAnswer", "explanation"]
            }
          }
        },
        required: ["title", "description", "keywords", "heading", "intro", "article", "category", "sourceName", "sourceUrl", "imagePrompt", "questions"]
      }
    }
  };

  console.log("[AI] Gemini 3.1 Flash-Lite üzerinden genel kültür içeriği, mini quiz ve görsel promptu üretiliyor...");
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

  // Mini quiz sorularına id ekle (DailyQuestion arayüzü id bekler)
  if (Array.isArray(parsedData.questions)) {
    parsedData.questions = parsedData.questions
      .filter((q) => q && q.text && Array.isArray(q.options) && q.options.length === 4)
      .map((q, i) => ({
        id: i + 1,
        text: q.text,
        options: q.options,
        correctAnswer: typeof q.correctAnswer === "number" ? q.correctAnswer : 0,
        explanation: q.explanation || "",
      }));
  }

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
  console.log(`[AI] Başarıyla yeni içerik eklendi. Konu: ${newNewsItem.heading} (Kategori: ${newNewsItem.category}, Rota: /test/${slug})`);

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
