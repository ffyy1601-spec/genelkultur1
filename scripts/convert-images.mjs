import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const newsDir = path.join(rootDir, "public", "images", "news");
const dataFilePath = path.join(rootDir, "src", "data", "dailyContent.ts");

// 16:9 haber görselleri için maksimum genişlik (LCP için yeterli, gereksiz büyük değil)
const MAX_WIDTH = 1280;
const QUALITY = 78;

async function convertNewsImages() {
  let files = [];
  try {
    files = (await fs.readdir(newsDir)).filter((f) => f.toLowerCase().endsWith(".png"));
  } catch {
    console.log("[WebP] public/images/news bulunamadı, atlanıyor.");
    return;
  }

  if (files.length === 0) {
    console.log("[WebP] Dönüştürülecek PNG yok.");
    return;
  }

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const pngPath = path.join(newsDir, file);
    const webpPath = path.join(newsDir, file.replace(/\.png$/i, ".webp"));

    const before = (await fs.stat(pngPath)).size;
    await sharp(pngPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(webpPath);
    const after = (await fs.stat(webpPath)).size;

    totalBefore += before;
    totalAfter += after;
    await fs.unlink(pngPath); // PNG'yi sil, yerine WebP kullanılacak
    console.log(`[WebP] ${file} → ${path.basename(webpPath)} (${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB)`);
  }

  console.log(
    `[WebP] ✅ ${files.length} görsel dönüştürüldü. Toplam: ${Math.round(totalBefore / 1024 / 1024 * 10) / 10}MB → ${Math.round(totalAfter / 1024 / 1024 * 10) / 10}MB`,
  );

  // dailyContent.ts içindeki .png referanslarını .webp yap
  try {
    let content = await fs.readFile(dataFilePath, "utf-8");
    const updated = content.replace(/(\/images\/news\/[^"']+?)\.png/g, "$1.webp");
    if (updated !== content) {
      await fs.writeFile(dataFilePath, updated, "utf-8");
      console.log("[WebP] dailyContent.ts görsel uzantıları .webp olarak güncellendi.");
    }
  } catch (err) {
    console.warn("[WebP] dailyContent.ts güncellenemedi:", err.message);
  }
}

convertNewsImages().catch((err) => {
  console.error("[WebP] Hata:", err);
  process.exit(1);
});
