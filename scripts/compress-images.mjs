import sharp from "sharp";
import fs from "fs";
import path from "path";

const ASSETS_DIR = path.resolve("public/assets");
const OUTPUT_DIR = ASSETS_DIR; // overwrite in place

const files = fs.readdirSync(ASSETS_DIR).filter((f) => /\.(png|jpg|jpeg)$/i.test(f));

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const filePath = path.join(ASSETS_DIR, file);
  const stat = fs.statSync(filePath);
  const sizeBefore = stat.size;
  totalBefore += sizeBefore;

  const ext = path.extname(file).toLowerCase();
  const nameNoExt = path.basename(file, ext);

  // Determine max width based on usage
  let maxWidth;
  if (file.startsWith("icon-") || file === "logo.png") {
    maxWidth = 256; // icons and logo — small
  } else if (file.startsWith("patient-")) {
    maxWidth = 400; // testimonial avatars
  } else if (file.startsWith("service-")) {
    maxWidth = 512; // service card images
  } else {
    maxWidth = 1200; // hero / about photos
  }

  const outputPath = path.join(OUTPUT_DIR, `${nameNoExt}.webp`);

  await sharp(filePath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outputPath);

  const afterStat = fs.statSync(outputPath);
  totalAfter += afterStat.size;

  const saved = (((sizeBefore - afterStat.size) / sizeBefore) * 100).toFixed(1);
  console.log(
    `${file} → ${nameNoExt}.webp  |  ${(sizeBefore / 1024).toFixed(0)} KB → ${(afterStat.size / 1024).toFixed(0)} KB  (${saved}% smaller)`
  );

  // Remove original PNG after successful conversion
  if (ext !== ".webp") {
    fs.unlinkSync(filePath);
  }
}

console.log(`\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)} MB → ${(totalAfter / 1024 / 1024).toFixed(1)} MB`);
console.log(`Saved: ${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%`);
