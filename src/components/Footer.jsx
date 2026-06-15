/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */

export const Footer = () => (
  <footer>
    <div class="container">
      <div class="footer-grid">
        
        {/* Column 1: Brand Identifier Identity */}
        <div class="footer-brand">
          <a href="/" class="logo-link">
            <div class="logo-icon">T</div>
            <span>ToolStaq</span>
          </a>
          <p class="footer-tagline">
            Privacy-first, zero-bloat developer and text analysis utilities engineered directly on global edge servers.
          </p>
        </div>

        {/* Column 2: Popular Array Indices */}
        <div class="footer-col">
          <h5>Core Workspaces</h5>
          <ul class="footer-list">
            <li><a href="/tools/json">JSON Formatter</a></li>
            <li><a href="/tools/word-counter">Word Counter</a></li>
            <li><a href="/tools/password-generator">Password Generator</a></li>
            <li><a href="/tools/base64">Base64 Converter</a></li>
          </ul>
        </div>

        {/* Column 3: AdSense Compliance & Communication */}
        <div class="footer-col">
          <h5>Compliance &amp; Legal</h5>
          <ul class="footer-list">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/contact">Contact Support</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Attribution Anchor Bar */}
      <div class="footer-bottom">
        <p class="footer-bottom-text">
          &copy; {new Date().getFullYear()} ToolStaq.online. All calculations execute client-side.
        </p>
        <p class="footer-bottom-text" style="display: flex; align-items: center; gap: 6px;">
          <span style="display: inline-block; width: 6px; height: 6px; background: #10b981; border-radius: 50%;"></span>
          Deployed on Cloudflare V8 Network Isolates
        </p>
      </div>
    </div>
  </footer>
)
