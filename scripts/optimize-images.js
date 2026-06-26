const BRIGHTNESS = 1.08;

const fs = require("fs");
const path = require("path");

let sharp;
try {
  sharp = require("sharp");
} catch {
  console.error("sharp がインストールされていません。以下を実行してください:");
  console.error("  npm install sharp");
  process.exit(1);
}

const TARGET_DIR = path.join(__dirname, "..", "public", "images", "articles");
const MAX_WIDTH = 1000;
const JPEG_QUALITY = 80;

async function collectDirectories(dir) {
  const dirs = [dir];
  let entries;
  try {
    entries = await fs.promises.readdir(dir, { withFileTypes: true });
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error(`対象フォルダが見つかりません: ${TARGET_DIR}`);
      process.exit(1);
    }
    throw err;
  }

  for (const entry of entries) {
    if (
      entry.isDirectory() &&
      entry.name !== "_original" &&
      !entry.name.startsWith(".")
    ) {
      dirs.push(...(await collectDirectories(path.join(dir, entry.name))));
    }
  }
  return dirs;
}

async function ensureBackup(dir, filename) {
  const originalDir = path.join(dir, "_original");
  const backupPath = path.join(originalDir, filename);

  if (fs.existsSync(backupPath)) {
    return backupPath;
  }

  const sourcePath = path.join(dir, filename);
  if (!fs.existsSync(sourcePath)) {
    return null;
  }

  await fs.promises.mkdir(originalDir, { recursive: true });
  await fs.promises.copyFile(sourcePath, backupPath);
  return backupPath;
}

async function processImage(dir, filename) {
  const backupPath = await ensureBackup(dir, filename);
  if (!backupPath) {
    return;
  }

  const baseName = path.basename(filename, ".png");
  const outputPath = path.join(dir, `${baseName}.jpg`);
  const folderPngPath = path.join(dir, filename);

  await sharp(backupPath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .modulate({ brightness: BRIGHTNESS })
    .jpeg({ quality: JPEG_QUALITY })
    .toFile(outputPath);

  if (fs.existsSync(folderPngPath)) {
    await fs.promises.unlink(folderPngPath);
  }

  console.log(`  ${filename} → ${baseName}.jpg`);
}

async function processDirectory(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  const pngFiles = entries
    .filter((e) => e.isFile() && e.name.toLowerCase().endsWith(".png"))
    .map((e) => e.name);

  if (pngFiles.length === 0) {
    return 0;
  }

  const relativeDir = path.relative(TARGET_DIR, dir) || ".";
  console.log(`\n[${relativeDir}]`);

  for (const filename of pngFiles) {
    await processImage(dir, filename);
  }

  return pngFiles.length;
}

async function main() {
  console.log(`画像最適化: ${TARGET_DIR}`);
  console.log(`明るさ: ${BRIGHTNESS}x / 最大幅: ${MAX_WIDTH}px / JPEG品質: ${JPEG_QUALITY}`);

  const directories = await collectDirectories(TARGET_DIR);
  let total = 0;

  for (const dir of directories) {
    total += await processDirectory(dir);
  }

  if (total === 0) {
    console.log("\n処理対象の PNG ファイルはありませんでした。");
  } else {
    console.log(`\n完了: ${total} 件を処理しました。`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
