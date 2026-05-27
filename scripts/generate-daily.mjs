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
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const dateId = `${year}-${month}-${day}`;
  const dayNum = today.getDate();
  const monthName = MONTHS_TR[today.getMonth()];

  console.log(`[AI] Günlük içerik üretimi başladı: ${dayNum} ${monthName} (${dateId})`);

  // 1. Mevcut testleri oku ve slug listesini çıkar (tekrarı önlemek için)
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
  console.log(`[AI] Mevcut sayfa sayısı: ${dailyQuizzes.length}. Mevcut konular: ${previousSlugs.join(", ")}`);

  // 2. Gemini API'den içerik iste
  const prompt = `Bugünün tarihi: ${dayNum} ${monthName}.
Tarihte bugün veya yakın zamanda gerçekleşmiş, Türk okuyucusunun ilgisini çekecek önemli, merak uyandıran tarihi, bilimsel, coğrafi veya kültürel bir olay/konu seç. 
Seçtiğin bu konu hakkında detaylı, bilgilendirici, Türkçe bir SEO makalesi ve 15 soruluk bir test hazırla.

Önemli Kurallar:
1. Konu kategorisini 'tarih', 'bilim', 'sanat' veya 'genel' olarak belirt.
2. Daha önce şu konular hakkında içerik üretildi: [${previousSlugs.join(", ")}]. Lütfen bu listede yer alan konularla kesinlikle aynı veya çok benzer olmayan TAMAMEN FARKLI ve özgün bir olay seç.
3. Soruların 4 şıkkı olmalı (options dizisinde tam olarak 4 eleman).
4. correctAnswer 0 ile 3 arasında bir indeks olmalı.
5. explanation kısmında, cevabın neden doğru olduğunu ve o şıkla ilgili kısa, bilgilendirici bir açıklama yap.
6. JSON çıktısı geçerli olmalı ve şablona birebir uymalı.`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  const requestBody = {
    contents: [{
      parts: [{ text: prompt }]
    }],
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: {
        type: "OBJECT",
        properties: {
          title: { type: "STRING", description: "Sayfa SEO başlığı (örn: 'Newton Kimdir? Hayatı ve Buluşları | GenelKultur')" },
          description: { type: "STRING", description: "Sayfa SEO açıklaması (meta description)" },
          keywords: { type: "ARRAY", items: { type: "STRING" }, description: "SEO anahtar kelimeleri" },
          heading: { type: "STRING", description: "Yazının ana başlığı (örn: 'Yerçekiminin Keşfi: Isaac Newton')" },
          intro: { type: "STRING", description: "Konuya kısa, merak uyandırıcı bir giriş paragrafı" },
          article: { type: "STRING", description: "Konuyu detaylı anlatan makale içeriği (en az 3 paragraf, paragraf geçişlerinde \\n\\n kullan)" },
          category: { type: "STRING", enum: ["genel", "tarih", "bilim", "sanat"], description: "Konunun kategorisi" },
          questions: {
            type: "ARRAY",
            items: {
              type: "OBJECT",
              properties: {
                id: { type: "INTEGER" },
                text: { type: "STRING", description: "Soru metni" },
                options: { type: "ARRAY", items: { type: "STRING" } },
                correctAnswer: { type: "INTEGER", description: "Doğru şıkkın indeksi (0-3)" },
                explanation: { type: "STRING", description: "Doğru cevabın açıklaması" }
              },
              required: ["id", "text", "options", "correctAnswer", "explanation"]
            }
          }
        },
        required: ["title", "description", "keywords", "heading", "intro", "article", "category", "questions"]
      }
    }
  };

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`HATA: Gemini API yanıt vermedi. Statü: ${response.status}. Detay: ${errorText}`);
    process.exit(1);
  }

  const result = await response.json();
  const textResponse = result.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!textResponse) {
    console.error("HATA: Gemini geçerli bir yanıt üretmedi.", JSON.stringify(result));
    process.exit(1);
  }

  const parsedData = JSON.parse(textResponse);
  const slug = slugify(parsedData.heading);

  // Oluşturulan içeriğin slug'ının çakışmadığından emin ol
  if (previousSlugs.includes(slug)) {
    console.log(`[AI] '${slug}' konusu zaten mevcut. Yeni içerik üretilmedi, atlanıyor.`);
    process.exit(0); // Hata değil, başarılı çıkış — değişiklik olmadığı için deploy da tetiklenmez
  }

  const newQuiz = {
    slug,
    dateId,
    ...parsedData
  };

  // 3. dailyContent.ts dosyasını güncelle
  dailyQuizzes.push(newQuiz);
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
  questions: DailyQuestion[];
}

export const dailyQuizzes: DailyQuiz[] = ${JSON.stringify(dailyQuizzes, null, 2)};\n`;

  await fs.writeFile(dataFilePath, newFileContent, "utf-8");
  console.log(`[AI] Başarıyla yeni içerik eklendi. Konu: ${newQuiz.heading} (Kategori: ${newQuiz.category}, Rota: /test/${slug})`);

  // 4. sitemap.xml dosyasını güncelle
  try {
    let sitemapContent = await fs.readFile(sitemapPath, "utf-8");
    const targetUrl = `https://genelkultur.com.tr/test/${slug}`;
    const targetPlayUrl = `https://genelkultur.com.tr/test/${slug}/oyna`;

    if (!sitemapContent.includes(targetUrl)) {
      const closeTagIdx = sitemapContent.lastIndexOf("</urlset>");
      if (closeTagIdx !== -1) {
        const newUrls = `  <url>
    <loc>${targetUrl}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${targetPlayUrl}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
        
        sitemapContent = sitemapContent.slice(0, closeTagIdx) + newUrls + sitemapContent.slice(closeTagIdx);
        await fs.writeFile(sitemapPath, sitemapContent, "utf-8");
        console.log(`[AI] sitemap.xml güncellendi: ${targetUrl}`);
      }
    }
  } catch (err) {
    console.error("Sitemap güncellenirken bir hata oluştu:", err);
  }

  // 5. Google Indexing API — yeni sayfaları doğrudan dizine bildir
  await notifyGoogleIndexingAPI(slug);
}

// ─── Google Indexing API ──────────────────────────────────────────────────────
// Node.js built-in crypto ile RS256 JWT oluşturur — ekstra npm paketi gerekmez.

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
    await indexUrl(accessToken, `${baseUrl}/test/${slug}/oyna`);
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
