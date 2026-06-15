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
    </body>
  </html>
)
