import fs from "node:fs";
import path from "node:path";

function cleanDir(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach((file) => {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      cleanDir(p);
      try {
        fs.rmdirSync(p);
      } catch (e) {
        console.error(`Failed to rmdir: ${p}`, e.message);
      }
    } else {
      try {
        fs.unlinkSync(p);
      } catch (e) {
        console.error(`Failed to unlink: ${p}`, e.message);
      }
    }
  });
}

const distPath = path.resolve(import.meta.dirname ?? "", "../dist");
cleanDir(distPath);
try {
  if (fs.existsSync(distPath)) {
    fs.rmdirSync(distPath);
  }
} catch (e) {
  console.error("Failed to remove dist root:", e.message);
}
