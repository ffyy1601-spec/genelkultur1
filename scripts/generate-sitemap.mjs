import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const sitemapPath = path.join(rootDir, "public", "sitemap.xml");
const dailyContentPath = path.join(rootDir, "src", "data", "dailyContent.ts");

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
      { path: "tarih-sorulari", changefreq: "weekly", priority: "0.8" },
      { path: "tarih-sorulari-ve-cevaplari", changefreq: "weekly", priority: "0.8" },
      { path: "bilim-sorulari", changefreq: "weekly", priority: "0.8" },
      { path: "bilim-sorulari-ve-cevaplari", changefreq: "weekly", priority: "0.8" },
      { path: "sanat-sorulari", changefreq: "weekly", priority: "0.8" },
      { path: "sanat-sorulari-ve-cevaplari", changefreq: "weekly", priority: "0.8" },
      { path: "kpss-tarih-konulari", changefreq: "weekly", priority: "0.9" },
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
      xml += `    <loc>https://genelkultur.com.tr/${urlInfo.path}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>${urlInfo.changefreq}</changefreq>\n`;
      xml += `    <priority>${urlInfo.priority}</priority>\n`;
      xml += `  </url>\n`;
    }

    // Add dynamic news/tests
    for (const quiz of dailyQuizzes) {
      const lastmod = quiz.dateId ? quiz.dateId.slice(0, 10) : today;
      xml += `  <url>\n`;
      xml += `    <loc>https://genelkultur.com.tr/test/${quiz.slug}</loc>\n`;
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.8</priority>\n`;
      xml += `  </url>\n`;
    }

    xml += `</urlset>\n`;

    await fs.writeFile(sitemapPath, xml, "utf-8");
    console.log(`[Sitemap] ✅ sitemap.xml güncellendi (Toplam: ${staticUrls.length + dailyQuizzes.length} URL)`);
  } catch (err) {
    console.error("[Sitemap] ❌ Hata:", err);
  }
}

generateSitemap();
