/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */

export const Layout = (props) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{props.title || "ToolStaq | Hyper-Fast Developer & Text Utilities"}</title>
      <meta name="description" content={props.description || "Stunning, privacy-first, zero-bloat developer and text tools running on the edge."} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title || "ToolStaq"} />
      <meta property="og:description" content={props.description || "Zero-bloat edge utilities."} />

      <link rel="stylesheet" href="/style.css" />

      {/* 💰 Google AdSense Publisher Script */}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5823178475198610" crossorigin="anonymous"></script>

      {/* BLOCKING FOUC SCRIPT: Reads local storage before the browser paints */}
      <script dangerouslySetInnerHTML={{
        __html: `
        (function() {
          try {
            var savedTheme = localStorage.getItem('theme');
            var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
              document.documentElement.setAttribute('data-theme', 'dark');
            }
          } catch (e) {}
        })();
      `}} />
    </head>
    <body>
      <header>yes, help me start building out the SEO infrastructure (like dynamic meta tags and proper canonical URLs for each tool) to ensure you get the traffic needed to hit those AdSense goals
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

        {/* Theme Toggle Button */}
        <button id="theme-toggle" class="theme-btn" aria-label="Toggle Dark Mode" title="Toggle Dark Mode">
          <svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
          <svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        </button>
      </header>

      {/* Global Leaderboard Ad Slot (Can be disabled per-page via props) */}
      {props.hideLeaderboard !== true && (
        <div class="container" style="padding-top: var(--space-24); padding-bottom: 0;">
          <div class="ad-container ad-leaderboard">
            {/* AdSense `ins` tag goes here later */}
            Ad Space (970x90 / Mobile Banner)
          </div>
        </div>
      )}

      <main>
        {props.children}
      </main>

      <footer>
        <p class="footer-text">© {new Date().getFullYear()} ToolStaq.online. Powered by Cloudflare Workers and Hono JSX.</p>
      </footer>

      {/* CLIENT-SIDE THEME HANDLER */}
      <script dangerouslySetInnerHTML={{
        __html: `
        document.addEventListener('DOMContentLoaded', () => {
          const themeBtn = document.getElementById('theme-toggle');
          
          themeBtn.addEventListener('click', () => {
            const root = document.documentElement;
            const isDark = root.getAttribute('data-theme') === 'dark';
            
            if (isDark) {
              root.removeAttribute('data-theme');
              localStorage.setItem('theme', 'light');
            } else {
              root.setAttribute('data-theme', 'dark');
              localStorage.setItem('theme', 'dark');
            }
          });
        });
      `}} />
    </body>
  </html>
)
