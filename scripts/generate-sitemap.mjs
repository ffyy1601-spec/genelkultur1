import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const dailyContentPath = path.join(rootDir, "src", "data", "dailyContent.ts");
const guidesPath = path.join(rootDir, "src", "data", "guides.ts");

// Hem public/ (kaynak) hem dist/ (deploy edilen) içine yaz.
// vite build, public/sitemap.xml'i dist/'e bu script çalışmadan ÖNCE kopyaladığı
// için sadece public'e yazmak deploy edilen dosyayı bir build geride bırakıyordu.
async function writeToBoth(filename, content) {
  await fs.writeFile(path.join(rootDir, "public", filename), content, "utf-8");
  try {
    await fs.access(distDir);
    await fs.writeFile(path.join(distDir, filename), content, "utf-8");
  } catch {
    /* dist yoksa (yalnızca kaynak güncellemesi) atla */
  }
}

const SITE = "https://genelkultur.com.tr";
const PUB_NAME = "GenelKültür Haber";

// GitHub Pages tüm sayfaları sonunda "/" ile servis ettiği için tüm
// sitemap URL'lerini slash'lı üretiyoruz (canonical ile birebir uyum için).
function withSlash(loc) {
  return loc.endsWith("/") ? loc : `${loc}/`;
}

function xmlEscape(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Google News sitemap — yalnızca son 2 günün haberleri (Google News kuralı)
async function generateNewsSitemap(dailyQuizzes) {
  const now = Date.now();
  const twoDays = 2 * 24 * 60 * 60 * 1000;
  const recent = dailyQuizzes.filter((q) => {
    const d = q.dateId ? new Date(q.dateId).getTime() : 0;
    return d && now - d <= twoDays;
  });

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n`;
  for (const q of recent) {
    xml += `  <url>\n`;
    xml += `    <loc>${withSlash(`${SITE}/test/${q.slug}`)}</loc>\n`;
    xml += `    <news:news>\n`;
    xml += `      <news:publication>\n`;
    xml += `        <news:name>${xmlEscape(PUB_NAME)}</news:name>\n`;
    xml += `        <news:language>tr</news:language>\n`;
    xml += `      </news:publication>\n`;
    xml += `      <news:publication_date>${new Date(q.dateId).toISOString()}</news:publication_date>\n`;
    xml += `      <news:title>${xmlEscape(q.heading)}</news:title>\n`;
    xml += `    </news:news>\n`;
    xml += `  </url>\n`;
  }
  xml += `</urlset>\n`;
  await writeToBoth("news-sitemap.xml", xml);
  console.log(`[News Sitemap] ✅ news-sitemap.xml güncellendi (${recent.length} güncel haber)`);
}

// RSS 2.0 feed — en yeni 20 haber
async function generateRss(dailyQuizzes) {
  const sorted = [...dailyQuizzes].sort((a, b) => (b.dateId || "").localeCompare(a.dateId || "")).slice(0, 20);
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n`;
  xml += `  <channel>\n`;
  xml += `    <title>${xmlEscape(PUB_NAME)} - Günlük Haberler</title>\n`;
  xml += `    <link>${SITE}/gunluk-haberler</link>\n`;
  xml += `    <description>GenelKültür.com.tr güncel gündem, teknoloji, bilim ve dünya haberleri.</description>\n`;
  xml += `    <language>tr</language>\n`;
  xml += `    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />\n`;
  if (sorted[0]?.dateId) {
    xml += `    <lastBuildDate>${new Date(sorted[0].dateId).toUTCString()}</lastBuildDate>\n`;
  }
  for (const q of sorted) {
    const link = `${SITE}/test/${q.slug}`;
    xml += `    <item>\n`;
    xml += `      <title>${xmlEscape(q.heading)}</title>\n`;
    xml += `      <link>${link}</link>\n`;
    xml += `      <guid isPermaLink="true">${link}</guid>\n`;
    if (q.dateId) xml += `      <pubDate>${new Date(q.dateId).toUTCString()}</pubDate>\n`;
    if (q.category) xml += `      <category>${xmlEscape(q.category)}</category>\n`;
    xml += `      <description>${xmlEscape(q.intro || q.description || "")}</description>\n`;
    xml += `    </item>\n`;
  }
  xml += `  </channel>\n`;
  xml += `</rss>\n`;
  await writeToBoth("rss.xml", xml);
  console.log(`[RSS] ✅ rss.xml güncellendi (${sorted.length} haber)`);
}

async function generateSitemap() {
  try {
    // 1. Read dailyContent.ts to get active news/tests
    let dailyQuizzes = [];
    try {
      const dailyContentText = await fs.readFile(dailyContentPath, "utf-8");
      const jsonStartIdx = dailyContentText.indexOf("= [");
      if (jsonStartIdx !== -1) {
        const startIdx = jsonStartIdx + 2;
        const endIdx = dailyContentText.lastIndexOf("]") + 1;
        const jsonStr = dailyContentText.slice(startIdx, endIdx);
        dailyQuizzes = JSON.parse(jsonStr || "[]");
      }
    } catch (err) {
      console.warn("[Sitemap] dailyContent.ts okunamadı, boş kabul ediliyor:", err.message);
    }

    // 1b. Read guides.ts to extract guide slugs
    let guideSlugs = [];
    try {
      const guidesText = await fs.readFile(guidesPath, "utf-8");
      guideSlugs = [...guidesText.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
    } catch (err) {
      console.warn("[Sitemap] guides.ts okunamadı, boş kabul ediliyor:", err.message);
    }

    // 2. Define static routes
    const staticUrls = [
      { path: "", changefreq: "daily", priority: "1.0" },
      { path: "genel-kultur-kategorileri", changefreq: "weekly", priority: "0.9" },
      { path: "sorular-ve-cevaplar", changefreq: "weekly", priority: "0.8" },
      { path: "genel-kultur-sorulari", changefreq: "weekly", priority: "0.9" },
      { path: "genel-kultur-sorulari-ve-cevaplari", changefreq: "weekly", priority: "0.9" },
      { path: "genel-kultur-testi", changefreq: "weekly", priority: "0.9" },
      { path: "genel-kultur-bilgi-yarismasi", changefreq: "weekly", priority: "0.9" },
      { path: "zor-genel-kultur-sorulari", changefreq: "weekly", priority: "0.8" },
      { path: "50-soruluk-genel-kultur-testi", changefreq: "weekly", priority: "0.9" },
      { path: "100-soruluk-genel-kultur-testi", changefreq: "weekly", priority: "0.9" },
      { path: "genel-kultur-bilgileri", changefreq: "weekly", priority: "0.8" },
      { path: "tarih-sorulari", changefreq: "weekly", priority: "0.8" },
      { path: "tarih-sorulari-ve-cevaplari", changefreq: "weekly", priority: "0.8" },
      { path: "bilim-sorulari", changefreq: "weekly", priority: "0.8" },
      { path: "bilim-sorulari-ve-cevaplari", changefreq: "weekly", priority: "0.8" },
      { path: "sanat-sorulari", changefreq: "weekly", priority: "0.8" },
      { path: "sanat-sorulari-ve-cevaplari", changefreq: "weekly", priority: "0.8" },
      { path: "kpss-tarih-konulari", changefreq: "weekly", priority: "0.9" },
      { path: "genel-kultur-rehberi", changefreq: "weekly", priority: "0.8" },
      { path: "gunluk-haberler", changefreq: "daily", priority: "0.9" },
      { path: "hakkimizda", changefreq: "monthly", priority: "0.6" },
      { path: "iletisim", changefreq: "monthly", priority: "0.5" },
      { path: "gizlilik-politikasi", changefreq: "yearly", priority: "0.3" },
      { path: "cerez-politikasi", changefreq: "yearly", priority: "0.3" },
      { path: "icerik-politikasi", changefreq: "monthly", priority: "0.5" },
      { path: "reklam-bilgilendirmesi", changefreq: "yearly", priority: "0.3" },
      { path: "kullanim-kosullari", changefreq: "yearly", priority: "0.3" },
    ];

    const today = new Date().toISOString().slice(0, 10);

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Add static routes
    for (const urlInfo of staticUrls) {
      xml += `  <url>\n`;
      xml += `    <loc>${withSlash(`${SITE}/${urlInfo.path}`)}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>${urlInfo.changefreq}</changefreq>\n`;
      xml += `    <priority>${urlInfo.priority}</priority>\n`;
      xml += `  </url>\n`;
    }

    // Add dynamic news/tests
    for (const quiz of dailyQuizzes) {
      const lastmod = quiz.dateId ? quiz.dateId.slice(0, 10) : today;
      xml += `  <url>\n`;
      xml += `    <loc>${withSlash(`${SITE}/test/${quiz.slug}`)}</loc>\n`;
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.8</priority>\n`;
      xml += `  </url>\n`;
    }

    // Add guide articles
    for (const slug of guideSlugs) {
      xml += `  <url>\n`;
      xml += `    <loc>${withSlash(`${SITE}/rehber/${slug}`)}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.7</priority>\n`;
      xml += `  </url>\n`;
    }

    xml += `</urlset>\n`;

    await writeToBoth("sitemap.xml", xml);
    console.log(`[Sitemap] ✅ sitemap.xml güncellendi (Toplam: ${staticUrls.length + dailyQuizzes.length + guideSlugs.length} URL)`);

    // Google News sitemap + RSS feed üret
    await generateNewsSitemap(dailyQuizzes);
    await generateRss(dailyQuizzes);
  } catch (err) {
    console.error("[Sitemap] ❌ Hata:", err);
  }
}

generateSitemap();
