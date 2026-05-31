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
              <h3>What is JSON?</h3>
              <p>JSON (JavaScript Object Notation) is a lightweight, human-readable data interchange format. Originally derived from JavaScript, it has become the universal standard for transmitting structured data across APIs, configuration files, and web services.</p>
              <p style="margin-top: 8px;">A valid JSON document must have a single root element — either an object (curly braces <code>{`{}`}</code>) or an array (square brackets <code>[]</code>). Keys must be double-quoted strings, and values can be strings, numbers, booleans, <code>null</code>, objects, or arrays.</p>
            </div>

            <div class="sidebar-card">
              <h3>Why Format JSON?</h3>
              <p>Raw JSON from APIs is typically minified — stripped of all whitespace to reduce payload size. While efficient for machines, minified JSON is nearly impossible for humans to read or debug. A JSON formatter (also called a JSON beautifier or JSON prettifier) adds indentation and line breaks to restore the hierarchical structure.</p>
              <p style="margin-top: 8px;">Our formatter supports 2-space, 4-space, and tab indentation so your output matches your team's coding style guide perfectly.</p>
            </div>

            <div class="sidebar-card">
              <h3>JSON Validation Explained</h3>
              <p>JSON is strict by design. Common validation errors include:</p>
              <ul style="margin-left: 16px; margin-top: 6px; line-height: 1.8;">
                <li>Trailing commas after the last property</li>
                <li>Single quotes instead of double quotes around keys</li>
                <li>Unescaped special characters inside strings</li>
                <li>Missing commas between properties</li>
                <li>Comments (JSON does not support <code>// comments</code>)</li>
              </ul>
              <p style="margin-top: 8px;">ToolStaq's validator uses the browser's native <code>JSON.parse()</code> engine, which reports the exact character position of any syntax error.</p>
            </div>

            <div class="sidebar-card">
              <h3>🔒 Privacy First</h3>
              <p>All processing runs client-side inside your browser tab using the V8 JavaScript engine. Your JSON payload — which may contain API keys, database records, or private user data — is never transmitted to any server. There are no logs, no storage, and no third-party data sharing.</p>
            </div>

            <div class="sidebar-card">
              <h3>Minify vs Beautify</h3>
              <p>Use <strong>Beautify</strong> when debugging API responses, reading configuration files, or reviewing data from a database export. Use <strong>Minify</strong> before embedding JSON into source code, environment variables, or HTTP request bodies to reduce byte size and improve transfer speed.</p>
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
