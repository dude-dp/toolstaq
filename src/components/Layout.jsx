/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */

export const Layout = (props) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{props.title || "ToolStaq | Hyper-Fast Developer & Text Utilities"}</title>
      <meta name="description" content={props.description || "Stunning, privacy-first, zero-bloat developer and text tools running on the edge."} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title || "ToolStaq"} />
      <meta property="og:description" content={props.description || "Zero-bloat edge utilities."} />
      
      {/* Styled with the compiled static sheet */}
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
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

      <footer>
        <p class="footer-text">© {new Date().getFullYear()} ToolStaq.online. Powered by Cloudflare Workers and Hono JSX.</p>
      </footer>
    </body>
  </html>
)
