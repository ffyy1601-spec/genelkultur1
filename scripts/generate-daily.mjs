import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";

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

  // 2. Gemini 3.5 Flash API'den Google Search Grounding ile haber içeriği ve görsel promptu iste
  const prompt = `Bugünün tarihi: ${dayNum} ${monthName} ${year}. 
Google Search aracını kullanarak Türkiye gündemindeki en popüler, merak uyandırıcı, 'magazin, popüler kültür, sinema, dizi, teknoloji, spor, dünya, ekonomi veya bilim' alanlarında, Google Discover (keşfet) sayfasına düşebilecek yüksek tıklama (High-CTR) potansiyeli olan güncel bir haber veya olay seç.

Seçtiğin bu konu hakkında detaylı, bilgilendirici, Türkçe bir haber makalesi ve bu haberi en iyi şekilde tasvir eden İngilizce bir görsel üretim promptu (imagePrompt) hazırla.

Önemli Kurallar:
1. Seçilen haber güncel, gerçek ve geniş kitlelerin ilgisini çekecek merak uyandırıcı bir konu olmalıdır (ünlü gelişmeleri, dizi/sinema gündemi, teknoloji trendleri, keşfet odaklı popüler konular).
2. Haberi klasik bir haber ajansı (örn. TRT Haber, NTV, CNN Türk, DonanımHaber) tarzında, profesyonel, objektif ve zengin bir Türkçe ile yaz.
3. Haber metnini zengin ve son derece profesyonel göstermek için mutlaka HTML formatında yaz. Makaleye uygun aralıklarla ilgi çekici, kısa alt başlıklar (<h3>) ekle. Önemli kişi isimleri, şirket adları, tarihler, yerler, tutarlar ve can alıcı bilgileri <strong> etiketleri içine alarak kalın yaz. Paragrafları <p> etiketleri arasına al. Eğer maddeler halinde bilgi veya maddeler veriliyorsa <ul> ve <li> etiketlerini kullan. Makalede en az 2-3 adet <h3> alt başlığı bulunmalı ve makale en az 4-5 paragraf uzunluğunda olmalıdır.
4. Başlık (heading) çarpıcı, merak uyandırıcı, merak uyandırıp tıklama isteği uyandıran ancak clickbait olmayan ve SEO uyumlu olmalıdır.
5. "imagePrompt" alanı, "gemini-3.1-flash-image" modelinde kullanılmak üzere, haber konusunu profesyonel bir haber fotoğrafçılığı veya basın fotoğrafı stilinde tasvir eden detaylı bir İngilizce prompt olmalıdır. Promptun içinde kesinlikle metin, yazı, logo, imza veya filigran (watermark) bulunmamasını İngilizce olarak belirt (örn: "professional news photo style, photorealistic, 8k resolution, no text, no logos").
6. GÖRSEL GÜVENLİK FİLTRESİ KURALI: Eğer haber konusu politik gerilim, adli operasyon, kayyum, gözaltı, baskın, iflas, dava veya çatışma gibi hassas/negatif bir durum ise; görsel promptu kesinlikle şiddet, polis, kelepçe, suç tasviri veya adliye hücresi içermemelidir. Bunun yerine, durumla ilişkili son derece nötr, sembolik veya soyut kavramsal basın fotoğrafları kurgula (Örneğin; iş dünyasını veya finansı sembolize eden modern gökdelenler, adliye binasının dıştan profesyonel mimari görünümü, bir mahkeme tokmağı, altın veya döviz sembolleri, gıda kolileri gibi tamamen güvenli nesnelerin temiz ve sanatsal fotoğrafları). Prompt içinde 'police', 'arrest', 'handcuffs', 'raid', 'jail', 'courtroom drama' gibi filtreye takılabilecek hassas ve yasaklı kelimeleri asla kullanma.
7. Daha önce şu konular hakkında haber/içerik üretildi: [${previousSlugs.join(", ")}]. Bu konularla kesinlikle aynı veya çok benzer olmayan TAMAMEN FARKLI ve özgün bir olay seç.
8. JSON çıktısı geçerli olmalı ve şablona birebir uymalı.`;

  const textApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`;

  const requestBody = {
    contents: [{
      parts: [{ text: prompt }]
    }],
    tools: [{
      googleSearch: {}
    }],
    generationConfig: {
      responseMimeType: "application/json",
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
          imagePrompt: { type: "STRING", description: "Görsel üretmek için kullanılacak detaylı İngilizce prompt (görsel güvenlik filtresi kurallarına uygun)" }
        },
        required: ["title", "description", "keywords", "heading", "intro", "article", "category", "imagePrompt"]
      }
    }
  };

  console.log("[AI] Gemini 3.5 Flash üzerinden haber metni ve görsel promptu üretiliyor...");
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
          responseMimeType: "image/png"
        }
      };

      const imageResponse = await fetchWithRetry(imageApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(imageRequestBody)
      });

      if (imageResponse.ok) {
        const imageResult = await imageResponse.json();
        const imagePart = imageResult.candidates?.[0]?.content?.parts?.find(part => part.inlineData);
        base64Data = imagePart?.inlineData?.data || imageResult.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (base64Data) {
          console.log(`[AI] ✅ Görsel başarıyla üretildi (gemini-3.1-flash-image)`);
        } else {
          console.warn("[AI] ⚠️ Görsel verisi base64 olarak alınamadı.");
        }
      } else {
        const errTxt = await imageResponse.text();
        console.warn(`[AI] ⚠️ Görsel API hatası (${imageResponse.status}): ${errTxt}`);
      }
    } catch (err) {
      console.warn(`[AI] ⚠️ Görsel üretilirken beklenmedik hata oluştu: ${err.message}`);
    }

    // Görseli disk'e kaydet
    if (base64Data) {
      try {
        const imageDir = path.join(rootDir, "public", "images", "news");
        await fs.mkdir(imageDir, { recursive: true });
        const imagePath = path.join(imageDir, `${slug}.png`);
        await fs.writeFile(imagePath, Buffer.from(base64Data, "base64"));
        imageUrl = `/images/news/${slug}.png`;
        console.log(`[AI] Görsel başarıyla diske kaydedildi: ${imagePath}`);
      } catch (saveErr) {
        console.error(`[AI] ⚠️ Görsel kaydedilirken disk hatası oluştu: ${saveErr.message}`);
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
  imageUrl?: string;
  questions?: DailyQuestion[];
}

export const dailyQuizzes: DailyQuiz[] = ${JSON.stringify(dailyQuizzes, null, 2)};\n`;

  await fs.writeFile(dataFilePath, newFileContent, "utf-8");
  console.log(`[AI] Başarıyla yeni haber eklendi. Konu: ${newNewsItem.heading} (Kategori: ${newNewsItem.category}, Rota: /test/${slug})`);

  // 5. sitemap.xml dosyasını güncelle
  try {
    let sitemapContent = await fs.readFile(sitemapPath, "utf-8");
    const targetUrl = `https://genelkultur.com.tr/test/${slug}`;

    if (!sitemapContent.includes(targetUrl)) {
      const closeTagIdx = sitemapContent.lastIndexOf("</urlset>");
      if (closeTagIdx !== -1) {
        const newUrls = `  <url>
    <loc>${targetUrl}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
        
        sitemapContent = sitemapContent.slice(0, closeTagIdx) + newUrls + sitemapContent.slice(closeTagIdx);
        await fs.writeFile(sitemapPath, sitemapContent, "utf-8");
        console.log(`[AI] sitemap.xml güncellendi: ${targetUrl}`);
      }
    }
  } catch (err) {
    console.error("Sitemap güncellenirken bir hata oluştu:", err);
  }

  // 6. Google Indexing API — yeni sayfaları doğrudan dizine bildir
  await notifyGoogleIndexingAPI(slug);
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
    await indexUrl(accessToken, `${baseUrl}/yapay-zeka-testleri`);

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
