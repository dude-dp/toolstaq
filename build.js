import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🚀 Starting dynamic JSX compilation for Cloudflare Pages...');

// Ensure clean build output directory
const distDir = path.resolve('dist');
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// 1. Bundle Hono JSX application into dist/_worker.js
console.log('📦 Bundling application JSX components with esbuild...');
try {
  // Bundle using platform=browser and WORKER/WORKERD conditions to make it Cloudflare runtime compatible
  execSync('npx esbuild src/index.jsx --bundle --minify --platform=browser --format=esm --conditions=workerd,worker,browser --outfile=dist/_worker.js', { stdio: 'inherit' });
} catch (err) {
  console.error('❌ esbuild bundling failed:', err);
  process.exit(1);
}

// 2. Copy public assets (style.css, etc.)
console.log('🎨 Copying public assets...');
const publicDir = path.resolve('public');
if (fs.existsSync(publicDir)) {
  const assets = fs.readdirSync(publicDir);
  for (const asset of assets) {
    const srcPath = path.join(publicDir, asset);
    const destPath = path.join(distDir, asset);
    if (fs.statSync(srcPath).isFile()) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`  └─ Copied ${asset}`);
    }
  }
}

console.log('✅ Build complete! Output is in the "dist" directory ready for Cloudflare Pages.');
