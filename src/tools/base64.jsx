/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { Layout } from '../components/Layout.jsx'

export const Base64View = () => {
  return (
    <Layout
      title="Base64 Encoder & Decoder | ToolStaq"
      description="Free online Base64 encoder and decoder. Convert text or data to Base64 instantly in your browser. No upload required — 100% private and client-side."
    >
      <div class="container">
        <a href="/" class="back-btn" id="b64-back-btn">← Back to Tools Hub</a>

        <div class="tool-view-layout">
          {/* ── Main Workspace ── */}
          <div class="workspace-panel">
            <div class="workspace-header">
              <h1 class="workspace-title">Base64 Encoder &amp; Decoder</h1>
              <p class="workspace-desc">Convert plain text to Base64 or decode a Base64 string back to its original form — instantly, in your browser, with zero data transmitted.</p>
            </div>

            {/* Mode Toggle */}
            <div class="btn-row" style="margin-bottom: var(--space-24);">
              <button type="button" class="btn btn-primary" id="b64-encode-btn">Encode → Base64</button>
              <button type="button" class="btn" id="b64-decode-btn">Decode ← Base64</button>
              <button type="button" class="btn" id="b64-swap-btn" style="margin-left: auto;">⇅ Swap</button>
            </div>

            {/* Side-by-side editor */}
            <div class="tool-view-layout" style="grid-template-columns: 1fr 1fr; margin-top: 0;">
              <div class="form-group" style="margin-bottom: 0;">
                <label class="form-label" for="b64-input" id="b64-input-label">Plain Text (Input)</label>
                <textarea
                  class="text-area"
                  id="b64-input"
                  placeholder="Type or paste text to encode..."
                  style="height: 400px;"
                  aria-label="Base64 input"
                ></textarea>
              </div>

              <div class="form-group" style="margin-bottom: 0;">
                <label class="form-label" id="b64-output-label">Base64 Output</label>
                <textarea
                  class="text-area result-box"
                  id="b64-output"
                  readonly
                  style="height: 400px;"
                  aria-label="Base64 output"
                ></textarea>
              </div>
            </div>

            <div class="btn-row" style="margin-top: var(--space-16);">
              <button type="button" class="btn" id="b64-copy-btn">Copy Output</button>
              <button type="button" class="btn" id="b64-clear-btn">Clear</button>
            </div>
            <div id="b64-error" style="display:none; margin-top: var(--space-16);" role="alert"></div>
          </div>

          {/* ── Info Sidebar ── */}
          <div class="info-sidebar">

            {/* Premium Sticky Ad Slot */}
            <div class="ad-container ad-sidebar-square">
              Sidebar Ad (300x250)
            </div>

            <div class="sidebar-card">
              <h3>What is Base64?</h3>
              <p>Base64 is a binary-to-text encoding scheme that converts arbitrary binary data into a sequence of printable ASCII characters. It uses a 64-character alphabet consisting of A–Z, a–z, 0–9, and the symbols <code>+</code> and <code>/</code>, with <code>=</code> as a padding character.</p>
              <p style="margin-top: 8px;">The name "Base64" refers to the 64 distinct characters used in the encoding alphabet. Every 3 bytes (24 bits) of input data produce exactly 4 Base64 characters, resulting in roughly a 33% increase in size.</p>
            </div>

            <div class="sidebar-card">
              <h3>Why is Base64 Used?</h3>
              <p>Many legacy systems, protocols, and transport layers were designed to handle only ASCII text. Base64 solves the problem of transmitting binary data (images, files, cryptographic keys) through these text-only channels safely.</p>
              <p style="margin-top: 8px;">Common real-world use cases include:</p>
              <ul style="margin-left: 16px; margin-top: 6px; line-height: 1.9;">
                <li><strong>Email attachments:</strong> MIME encoding uses Base64 to embed images and files inline within email bodies</li>
                <li><strong>CSS/HTML:</strong> Embedding small images as <code>data:</code> URIs to eliminate HTTP requests</li>
                <li><strong>JSON Web Tokens (JWT):</strong> The header and payload are Base64Url encoded</li>
                <li><strong>HTTP Basic Auth:</strong> Credentials are Base64-encoded in the Authorization header</li>
                <li><strong>API keys:</strong> Binary keys are often distributed in Base64 format</li>
              </ul>
            </div>

            <div class="sidebar-card">
              <h3>Base64 vs Base64Url</h3>
              <p>Standard Base64 uses <code>+</code> and <code>/</code> as characters, which are reserved in URLs. <strong>Base64Url</strong> (used in JWTs and OAuth tokens) replaces <code>+</code> with <code>-</code> and <code>/</code> with <code>_</code>, making the output safe to include in URLs and filenames without percent-encoding.</p>
              <p style="margin-top: 8px;">ToolStaq's encoder uses standard Base64. For JWT decoding, a dedicated JWT decoder tool is recommended.</p>
            </div>

            <div class="sidebar-card">
              <h3>🔒 100% Private</h3>
              <p>All Base64 encoding and decoding runs using the browser's built-in <code>btoa()</code> and <code>atob()</code> functions. No data ever leaves your device, making this tool safe for encoding sensitive strings, API credentials, and configuration payloads.</p>
            </div>

          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        const inputEl = document.getElementById('b64-input');
        const outputEl = document.getElementById('b64-output');
        const errorEl = document.getElementById('b64-error');
        const encodeBtn = document.getElementById('b64-encode-btn');
        const decodeBtn = document.getElementById('b64-decode-btn');
        const swapBtn = document.getElementById('b64-swap-btn');
        const copyBtn = document.getElementById('b64-copy-btn');
        const clearBtn = document.getElementById('b64-clear-btn');
        let mode = 'encode';

        function run() {
          const val = inputEl.value;
          errorEl.style.display = 'none';
          if (!val.trim()) { outputEl.value = ''; return; }
          try {
            if (mode === 'encode') {
              outputEl.value = btoa(unescape(encodeURIComponent(val)));
            } else {
              outputEl.value = decodeURIComponent(escape(atob(val)));
            }
          } catch(e) {
            errorEl.style.display = 'block';
            errorEl.innerHTML = '<strong>Error:</strong> ' + (mode === 'decode' ? 'Invalid Base64 string.' : e.message);
            outputEl.value = '';
          }
        }

        function setMode(m) {
          mode = m;
          document.getElementById('b64-input-label').textContent = m === 'encode' ? 'Plain Text (Input)' : 'Base64 String (Input)';
          document.getElementById('b64-output-label').textContent = m === 'encode' ? 'Base64 Output' : 'Decoded Text';
          inputEl.placeholder = m === 'encode' ? 'Type or paste text to encode...' : 'Paste Base64 string to decode...';
          encodeBtn.className = m === 'encode' ? 'btn btn-primary' : 'btn';
          decodeBtn.className = m === 'decode' ? 'btn btn-primary' : 'btn';
          run();
        }

        encodeBtn.addEventListener('click', () => setMode('encode'));
        decodeBtn.addEventListener('click', () => setMode('decode'));
        inputEl.addEventListener('input', run);

        swapBtn.addEventListener('click', () => {
          const out = outputEl.value;
          inputEl.value = out;
          setMode(mode === 'encode' ? 'decode' : 'encode');
        });

        copyBtn.addEventListener('click', () => {
          if (!outputEl.value) return;
          navigator.clipboard.writeText(outputEl.value);
          const orig = copyBtn.textContent;
          copyBtn.textContent = 'Copied!';
          setTimeout(() => copyBtn.textContent = orig, 1500);
        });

        clearBtn.addEventListener('click', () => {
          inputEl.value = '';
          outputEl.value = '';
          errorEl.style.display = 'none';
        });
      ` }} />
    </Layout>
  )
}
