import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🚀 Starting Static Site Build for Cloudflare Pages...');

// Ensure clean build output directory
const distDir = path.resolve('dist');
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// 1. Compile JSX to ESM bundle for Node.js
console.log('📦 Bundling application JSX components with esbuild...');
try {
  execSync('npx esbuild src/index.jsx --bundle --platform=node --format=esm --outfile=temp-bundle.js', { stdio: 'inherit' });
} catch (err) {
  console.error('❌ esbuild bundling failed:', err);
  process.exit(1);
}

// 2. Import compiled Hono app
console.log('⚡ Rendering pages statically using Hono app routing...');
const tempBundlePath = path.resolve('temp-bundle.js');
const { app } = await import(`file://${tempBundlePath}`);

// Define routes to render and their static file paths
const routes = {
  '/': 'index.html',
  '/tools/json': 'tools/json/index.html',
  '/tools/word-counter': 'tools/word-counter/index.html',
  '/tools/base64': 'tools/base64/index.html',
  '/tools/uuid-generator': 'tools/uuid-generator/index.html',
  '/tools/password-generator': 'tools/password-generator/index.html',
};

for (const [route, relativePath] of Object.entries(routes)) {
  console.log(`  └─ Rendering ${route} -> dist/${relativePath}`);
  
  // Make internal request to Hono routing pipeline
  const res = await app.request(`http://localhost${route}`);
  if (res.status !== 200) {
    console.error(`❌ Failed to render route ${route} (Status: ${res.status})`);
    process.exit(1);
  }
  
  const html = await res.text();
  const fileDest = path.join(distDir, relativePath);
  
  // Create nested folders if they don't exist
  fs.mkdirSync(path.dirname(fileDest), { recursive: true });
  fs.writeFileSync(fileDest, html, 'utf8');
}

// 3. Copy public assets (style.css, etc.)
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

// 4. Cleanup temporary bundle
console.log('🧹 Cleaning up temporary files...');
if (fs.existsSync(tempBundlePath)) {
  fs.unlinkSync(tempBundlePath);
}

console.log('✅ Static build complete! Output is in the "dist" directory.');
