/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */

import { Footer } from './Footer';

export const Layout = (props) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{props.title || "ToolStaq | Premium Developer Utilities"}</title>
      <meta name="description" content={props.description || "Refined, edge-rendered developer and text tools."} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title || "ToolStaq"} />
      <meta property="og:description" content={props.description || "Zero-bloat edge utilities."} />

      <link rel="stylesheet" href="/style.css" />

      {/* 💰 Google AdSense Publisher Script */}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5823178475198610" crossorigin="anonymous"></script>


      {/* 🧠 SEO Structured Data (JSON-LD) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": props.title ? props.title.split(' | ')[0] : "ToolStaq",
          "url": "https://toolstaq.online",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "All",
          "description": props.description || "Privacy-first, zero-bloat developer and text tools running on the edge.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        })
      }} />
      <script src="https://unpkg.com/lucide@latest"></script>
    </head>
    <body>
      <div class="bento-layout">
        <header>
          <a href="/" class="logo-link" id="home-logo">
            <div class="logo-icon">T</div>
            <span>ToolStaq</span>
          </a>

          <nav class="nav-links">
            <a href="/tools/json" class="nav-link">JSON Formatter</a>
            <a href="/tools/word-counter" class="nav-link">Word Counter</a>
            <a href="/tools/password-generator" class="nav-link">Passwords</a>
            <a href="/tools/base64" class="nav-link">Base64</a>
          </nav>
        </header>

        <main>
          {props.children}
        </main>

        <Footer />
      </div>
      {/* ── GLOBAL UI SCRIPTS ── */}
      <script dangerouslySetInnerHTML={{ __html: `
        window.showToast = function(message, type = 'info') {
          // Initialize container if it doesn't exist
          let container = document.getElementById('toast-container');
          if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.className = 'toast-container';
            document.body.appendChild(container);
          }

          // Create Toast Node
          const toast = document.createElement('div');
          toast.className = 'toast';
          
          // Monochromatic SVG Routing
          let svgPath = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>'; // Default info
          
          if (type === 'success') {
            svgPath = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>';
          } else if (type === 'warning') {
            svgPath = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>';
          }

          toast.innerHTML = \`
            <div class="toast-icon">
              <svg fill="none" viewBox="0 0 24 24">
                \${svgPath}
              </svg>
            </div>
            <span>\${message}</span>
          \`;
          
          container.appendChild(toast);

          // Animate out and clean up DOM after 3 seconds
          setTimeout(() => {
            toast.style.animation = 'toastFadeOut 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards';
            toast.addEventListener('animationend', () => {
              if (container.contains(toast)) toast.remove();
            });
          }, 3000);
        };
      `}} />
    </body>
  </html>
)
