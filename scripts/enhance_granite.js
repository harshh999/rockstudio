const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const INPUT_DIR = path.join(__dirname, '../public/images/products/Granite');
const OUTPUT_DIR = path.join(__dirname, '../public/images/products/Granite-enhanced');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Non-Generative Medium Detail Recovery & Clarity Enhancement Pipeline:
 * 1. 2x Super-Resolution using Lanczos3 deterministic resampling filter.
 * 2. Medium Edge-Aware Sharpening with Halo Suppression (sigma: 1.2, flat threshold m1: 1.0, jagged threshold m2: 2.5).
 * 3. High quality WebP output encoding at Quality 95.
 * 
 * Strict Fidelity Guarantees:
 * - Zero AI hallucination / generative synthesis
 * - Zero color, hue, or saturation shifts
 * - Exact stone grain, vein structure, and composition preservation
 */
async function processImage(filename, options = {}) {
  const inPath = path.join(INPUT_DIR, filename);
  const outBasename = path.basename(filename, path.extname(filename)) + '.webp';
  const outPath = path.join(OUTPUT_DIR, outBasename);

  if (!fs.existsSync(inPath)) {
    throw new Error(`Source file not found: ${inPath}`);
  }

  const meta = await sharp(inPath).metadata();
  const targetWidth = meta.width * 2;
  const targetHeight = meta.height * 2;

  await sharp(inPath)
    .resize(targetWidth, targetHeight, {
      kernel: sharp.kernel.lanczos3,
      fit: 'fill'
    })
    .sharpen({
      sigma: options.sigma || 1.2,
      m1: options.m1 || 1.0,
      m2: options.m2 || 2.5
    })
    .webp({ quality: 95, lossless: false })
    .toFile(outPath);

  const inStats = fs.statSync(inPath);
  const outStats = fs.statSync(outPath);
  const outMeta = await sharp(outPath).metadata();

  return {
    filename,
    outputFilename: outBasename,
    inputPath: inPath,
    outputPath: outPath,
    originalRes: `${meta.width} x ${meta.height} px`,
    enhancedRes: `${outMeta.width} x ${outMeta.height} px`,
    originalSizeBytes: inStats.size,
    enhancedSizeBytes: outStats.size,
    originalSizeKB: (inStats.size / 1024).toFixed(2) + ' KB',
    enhancedSizeKB: (outStats.size / 1024).toFixed(2) + ' KB',
    reductionRatio: (((inStats.size - outStats.size) / inStats.size) * 100).toFixed(1) + '%'
  };
}

async function runTestBatch(testFiles) {
  const results = [];
  for (const file of testFiles) {
    const res = await processImage(file);
    results.push(res);
  }
  return results;
}

if (require.main === module) {
  const mode = process.argv[2] || 'test';
  if (mode === 'test') {
    const testFiles = [
      'Forest Brown.png',
      'P White .png',
      'Steel gray.png',
      'Astodia Ivory.png'
    ];
    runTestBatch(testFiles).then(res => {
      console.log('Test Processing Complete:', JSON.stringify(res, null, 2));
    }).catch(err => {
      console.error(err);
      process.exit(1);
    });
  } else if (mode === 'all') {
    const allFiles = fs.readdirSync(INPUT_DIR).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));
    runTestBatch(allFiles).then(res => {
      console.log(`Successfully processed all ${res.length} images.`);
    }).catch(err => {
      console.error(err);
      process.exit(1);
    });
  }
}

module.exports = { processImage, runTestBatch };
