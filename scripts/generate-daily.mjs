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

  const today = new Date();
  // UTC saatini Türkiye saatine (+3 offset) dönüştür
  const utcHour = today.getUTCHours();
  const turkeyHour = (utcHour + 3) % 24;

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const hourStr = String(turkeyHour).padStart(2, "0");

  // Örn: "2026-06-13T12:00:00+03:00" -> ISO biçimi sıralamayı ve new Date() analizini kolaylaştırır
  const dateId = `${year}-${month}-${day}T${hourStr}:00:00+03:00`;
  const dayNum = today.getDate();
  const monthName = MONTHS_TR[today.getMonth()];

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
3. Başlık (heading) çarpıcı, merak uyandırıcı, merak uyandırıp tıklama isteği uyandıran ancak clickbait olmayan ve SEO uyumlu olmalıdır.
4. Makale içeriği en az 4-5 detaylı paragraf içermelidir (paragraf geçişlerinde \\n\\n kullan).
5. "imagePrompt" alanı, "gemini-3.1-flash-image" modelinde kullanılmak üzere, haber konusunu profesyonel bir haber fotoğrafçılığı veya basın fotoğrafı stilinde tasvir eden detaylı bir İngilizce prompt olmalıdır. Promptun içinde kesinlikle metin, yazı, logo, imza veya filigran (watermark) bulunmamasını İngilizce olarak belirt (örn: "professional news photo style, photorealistic, 8k resolution, no text, no logos").
6. Daha önce şu konular hakkında haber/içerik üretildi: [${previousSlugs.join(", ")}]. Bu konularla kesinlikle aynı veya çok benzer olmayan TAMAMEN FARKLI ve özgün bir olay seç.
7. JSON çıktısı geçerli olmalı ve şablona birebir uymalı.`;

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
          article: { type: "STRING", description: "Detaylı haber metni (en az 4-5 paragraf, paragraf geçişlerinde \\n\\n kullan)" },
          category: { type: "STRING", enum: ["gundem", "teknoloji", "bilim", "ekonomi", "dunya", "spor", "sanat", "magazin"], description: "Haberin kategorisi" },
          imagePrompt: { type: "STRING", description: "Görsel üretmek için kullanılacak detaylı İngilizce prompt" }
        },
        required: ["title", "description", "keywords", "heading", "intro", "article", "category", "imagePrompt"]
      }
    }
  };

  console.log("[AI] Gemini 3.5 Flash üzerinden haber metni ve görsel promptu üretiliyor...");
  const textResponse = await fetch(textApiUrl, {
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

  // 3. Gemini 3.1 Flash Image API kullanarak haber görselini üret
  let imageUrl = "";
  if (parsedData.imagePrompt) {
    try {
      console.log(`[AI] Gemini 3.1 Flash Image üzerinden görsel üretiliyor... Prompt: "${parsedData.imagePrompt}"`);
      const imageApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image:generateContent?key=${apiKey}`;
      const imageRequestBody = {
        contents: [{
          parts: [{ text: parsedData.imagePrompt }]
        }],
        generationConfig: {
          responseMimeType: "image/png",
          aspectRatio: "16:9"
        }
      };

      const imageResponse = await fetch(imageApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(imageRequestBody)
      });

      if (imageResponse.ok) {
        const imageResult = await imageResponse.json();
        const base64Data = imageResult.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

        if (base64Data) {
          const imageDir = path.join(rootDir, "public", "images", "news");
          await fs.mkdir(imageDir, { recursive: true });
          const imagePath = path.join(imageDir, `${slug}.png`);
          await fs.writeFile(imagePath, Buffer.from(base64Data, "base64"));
          imageUrl = `/images/news/${slug}.png`;
          console.log(`[AI] Görsel başarıyla kaydedildi: ${imagePath}`);
        } else {
          console.warn("[AI] ⚠️ Görsel API'si base64 veri dönmedi, varsayılan görsel kullanılacak.");
        }
      } else {
        const errTxt = await imageResponse.text();
        console.warn(`[AI] ⚠️ Görsel API'si başarısız oldu (${imageResponse.status}): ${errTxt}`);
      }
    } catch (imageErr) {
      console.error("[AI] ⚠️ Görsel üretimi/kaydı sırasında beklenmedik hata oluştu:", imageErr.message);
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
