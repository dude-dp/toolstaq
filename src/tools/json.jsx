/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { Layout } from '../components/Layout.jsx'

export const JsonFormatterView = () => {
  return (
    <Layout title="JSON Formatter & Validator | ToolStaq" description="Beautify, minify, validate, and parse JSON instantly in your browser with zero server round-trips.">
      <div class="container">
        <a href="/" class="back-btn" id="json-back-btn">← Back to Tools Hub</a>

        <div class="tool-view-layout">
          {/* ── Main Workspace ── */}
          <div class="workspace-panel">
            <div class="workspace-header">
              <h1 class="workspace-title">JSON Formatter &amp; Validator</h1>
              <p class="workspace-desc">Paste your raw JSON to validate, beautify, minify, or parse it instantly in your browser. Your data never leaves your device.</p>
            </div>

            {/* Controls row */}
            <div class="btn-row" style="margin-bottom: var(--space-24); align-items: center;">
              <label for="indent" class="form-label" style="margin-bottom: 0;">Tab Size:</label>
              <select id="indent" class="search-input" style="width: auto; padding: var(--space-8) var(--space-16);">
                <option value="2" selected>2 Spaces</option>
                <option value="4">4 Spaces</option>
                <option value="tab">Tab</option>
                <option value="minify">Minified</option>
              </select>

              <button type="button" class="btn btn-primary" id="btn-format">Format &amp; Validate</button>
              <button type="button" class="btn" id="btn-clear">Clear</button>
              <button type="button" class="btn" id="btn-copy-client" style="margin-left: auto; display: none;">Copy Output</button>
            </div>

            {/* Error banner */}
            <div id="error-box" style="display: none;" role="alert" aria-live="polite"></div>

            {/* Side-by-side editor + output */}
            <div class="tool-view-layout" style="grid-template-columns: 1fr 1fr; margin-top: 0;">
              <div class="form-group" style="margin-bottom: 0;">
                <label class="form-label" for="json-input">Raw Input JSON</label>
                <textarea
                  class="text-area"
                  id="json-input"
                  placeholder='{ "name": "ToolStaq", "features": ["Edge", "JSX", "No Bloat"], "active": true }'
                  style="height: 450px;"
                  aria-label="JSON input"
                ></textarea>
              </div>

              <div class="form-group" style="margin-bottom: 0;">
                <label class="form-label">Formatted Output</label>
                {/* Empty state — uses design-system background + dashed border */}
                <div id="output-placeholder" style="height: 450px;" aria-hidden="true">
                  Formatted output will appear here
                </div>
                {/* Console output — mandatory §4 tokens */}
                <pre
                  class="result-box"
                  id="output-pre"
                  style="height: 450px; display: none;"
                  role="region"
                  aria-label="Formatted JSON output"
                ></pre>
              </div>
            </div>
          </div>

          {/* ── Info Sidebar ── */}
          <div class="info-sidebar">
            
            {/* Premium Sticky Ad Slot */}
            <div class="ad-container ad-sidebar-square">
              Sidebar Ad (300x250)
            </div>
            <div class="sidebar-card">
              <h3>🔒 Privacy First</h3>
              <p>All formatting and validation run entirely in your browser. Your JSON data never leaves your device.</p>
            </div>
            <div class="sidebar-card">
              <h3>⚡ Instant Speed</h3>
              <p>Client-side V8-powered parsing delivers sub-millisecond results with zero network round-trips.</p>
            </div>
            <div class="sidebar-card">
              <h3>🛠️ Modes</h3>
              <p>Beautify with 2-space, 4-space, or tab indentation — or minify to a compact single line.</p>
            </div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        const jsonInput = document.getElementById('json-input');
        const selectIndent = document.getElementById('indent');
        const btnFormat = document.getElementById('btn-format');
        const btnClear = document.getElementById('btn-clear');
        const btnCopy = document.getElementById('btn-copy-client');
        const errorBox = document.getElementById('error-box');
        const outputPlaceholder = document.getElementById('output-placeholder');
        const outputPre = document.getElementById('output-pre');

        function formatJSON() {
          const val = jsonInput.value.trim();
          if (!val) {
            errorBox.style.display = 'none';
            outputPlaceholder.style.display = 'flex';
            outputPre.style.display = 'none';
            btnCopy.style.display = 'none';
            return;
          }

          const spaceSetting = selectIndent.value;
          let indentSetting;
          if (spaceSetting === 'tab') {
            indentSetting = '\\t';
          } else if (spaceSetting === 'minify') {
            indentSetting = undefined;
          } else {
            indentSetting = parseInt(spaceSetting, 10);
          }

          try {
            const parsed = JSON.parse(val);
            const formatted = JSON.stringify(parsed, null, indentSetting);

            errorBox.style.display = 'none';
            jsonInput.classList.remove('input-error');

            outputPlaceholder.style.display = 'none';
            outputPre.style.display = 'block';
            outputPre.textContent = formatted;
            btnCopy.style.display = 'inline-flex';
          } catch (e) {
            errorBox.style.display = 'block';
            errorBox.innerHTML = '<strong>Invalid JSON:</strong> ' + e.message;
            jsonInput.classList.add('input-error');

            outputPlaceholder.style.display = 'flex';
            outputPre.style.display = 'none';
            btnCopy.style.display = 'none';
          }
        }

        btnFormat.addEventListener('click', formatJSON);
        selectIndent.addEventListener('change', formatJSON);

        btnClear.addEventListener('click', () => {
          jsonInput.value = '';
          jsonInput.classList.remove('input-error');
          errorBox.style.display = 'none';
          outputPlaceholder.style.display = 'flex';
          outputPre.style.display = 'none';
          btnCopy.style.display = 'none';
        });

        btnCopy.addEventListener('click', () => {
          navigator.clipboard.writeText(outputPre.textContent);
          const orig = btnCopy.textContent;
          btnCopy.textContent = 'Copied!';
          setTimeout(() => btnCopy.textContent = orig, 1500);
        });
      ` }} />
    </Layout>
  )
}
