const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

// Configuration for optimization
const CONFIG = {
  // Quality settings (1-100)
  quality: 80,
  // Max dimensions for large images
  maxWidth: 1200,
  maxHeight: 1200,
  // WebP compression effort (0-6, higher = smaller but slower)
  effort: 4,
  // Output directory (same as input, will create WebP alongside originals)
  outputDir: IMAGES_DIR,
};

// Images to optimize with specific settings
const TARGET_IMAGES = [
  // Profile photos - highest priority
  {
    input: 'GradPhoto.jpg',
    output: 'GradPhoto.webp',
    width: 800,
    height: 800,
    quality: 85,
  },
  {
    input: 'Nikki Lionel Ocer - Grad Photoshoot.jpg',
    output: 'Nikki-Lionel-Ocer-Grad-Photoshoot.webp',
    width: 600,
    height: 800,
    quality: 85,
  },
  // Project screenshots
  {
    input: path.join('ProjectsScreenshots', 'Furniro1.png'),
    output: path.join('ProjectsScreenshots', 'Furniro1.webp'),
    width: 1200,
    quality: 80,
  },
  {
    input: path.join('ProjectsScreenshots', 'Furniro2.png'),
    output: path.join('ProjectsScreenshots', 'Furniro2.webp'),
    width: 1200,
    quality: 80,
  },
  {
    input: path.join('ProjectsScreenshots', 'Furniro3.png'),
    output: path.join('ProjectsScreenshots', 'Furniro3.webp'),
    width: 1200,
    quality: 80,
  },
  {
    input: path.join('ProjectsScreenshots', 'whispr1.png'),
    output: path.join('ProjectsScreenshots', 'whispr1.webp'),
    width: 1200,
    quality: 80,
  },
  {
    input: path.join('ProjectsScreenshots', 'whispr2.png'),
    output: path.join('ProjectsScreenshots', 'whispr2.webp'),
    width: 1200,
    quality: 80,
  },
  {
    input: path.join('ProjectsScreenshots', 'whispr3.png'),
    output: path.join('ProjectsScreenshots', 'whispr3.webp'),
    width: 1200,
    quality: 80,
  },
  // Company logos that are large
  {
    input: path.join('CompanyLogos', 'dxc_logo.png'),
    output: path.join('CompanyLogos', 'dxc_logo.webp'),
    width: 400,
    quality: 85,
  },
  {
    input: path.join('CompanyLogos', 'outsourceddoers_logo.svg'),
    output: path.join('CompanyLogos', 'outsourceddoers_logo.webp'),
    width: 400,
    quality: 85,
  },
];

async function optimizeImage(config) {
  const inputPath = path.join(IMAGES_DIR, config.input);
  const outputPath = path.join(CONFIG.outputDir, config.output);

  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Skipping ${config.input} - file not found`);
    return { skipped: true, input: config.input };
  }

  const inputStats = fs.statSync(inputPath);
  const inputSizeKB = (inputStats.size / 1024).toFixed(1);

  try {
    let pipeline = sharp(inputPath)
      .webp({ quality: config.quality || CONFIG.quality, effort: CONFIG.effort });

    // Resize if width/height specified
    if (config.width || config.height) {
      pipeline = pipeline.resize({
        width: config.width,
        height: config.height,
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    await pipeline.toFile(outputPath);

    const outputStats = fs.statSync(outputPath);
    const outputSizeKB = (outputStats.size / 1024).toFixed(1);
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

    console.log(`✅ ${config.input} → ${config.output}`);
    console.log(`   ${inputSizeKB} KB → ${outputSizeKB} KB (${savings}% smaller)`);

    return { success: true, input: config.input, output: config.output, savings };
  } catch (error) {
    console.error(`❌ Failed to optimize ${config.input}:`, error.message);
    return { error: true, input: config.input, error: error.message };
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');

  const results = [];

  for (const config of TARGET_IMAGES) {
    const result = await optimizeImage(config);
    results.push(result);
  }

  // Summary
  console.log('\n📊 Optimization Summary:');
  const successful = results.filter(r => r.success).length;
  const skipped = results.filter(r => r.skipped).length;
  const errors = results.filter(r => r.error).length;

  console.log(`   ✅ Optimized: ${successful}`);
  console.log(`   ⚠️  Skipped: ${skipped}`);
  console.log(`   ❌ Errors: ${errors}`);

  if (successful > 0) {
    const totalSavings = results
      .filter(r => r.success)
      .reduce((sum, r) => sum + parseFloat(r.savings), 0);
    console.log(`   📉 Average size reduction: ${(totalSavings / successful).toFixed(1)}%`);
  }

  console.log('\n✨ Done! WebP versions created alongside originals.');
  console.log('💡 Update your components to use .webp files for better performance.');
}

main().catch(console.error);