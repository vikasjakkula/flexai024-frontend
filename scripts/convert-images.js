/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const exts = new Set(['.png', '.jpg', '.jpeg']);

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!exts.has(ext)) return;
  const dir = path.dirname(filePath);
  const base = path.basename(filePath, ext);
  const webpOut = path.join(dir, `${base}.webp`);
  // Skip if exists
  if (fs.existsSync(webpOut)) return;
  try {
    await sharp(filePath).toFormat('webp', { quality: 82 }).toFile(webpOut);
    console.log('Converted', filePath, '->', webpOut);
  } catch (e) {
    console.warn('Skipping', filePath, e.message);
  }
}

async function walk(dir) {
  const items = fs.readdirSync(dir);
  for (const name of items) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      await walk(full);
    } else {
      await convertFile(full);
    }
  }
}

(async () => {
  await walk(PUBLIC_DIR);
})();


