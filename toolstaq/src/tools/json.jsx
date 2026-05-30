/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { Layout } from '../components/Layout.jsx'

export const JsonFormatterView = () => {
  return (
    <Layout title="JSON Formatter & Validator | ToolStaq" description="Beautify, minify, validate, and parse JSON instantly in your browser with zero server round-trips.">
      <div class="container">
        <a href="/" class="back-btn">
          ← Back to Tools Hub
        </a>

        <div class="tool-view-layout">
          <div class="workspace-panel">
            <div class="workspace-header">
              <h1 class="workspace-title">JSON Formatter & Validator</h1>
              <p class="workspace-desc">Paste your raw JSON to validate, clean, and format it instantly in your browser.</p>
            </div>

            <div class="btn-row" style="margin-bottom: 1.5rem; align-items: center;">
              <label for="indent" class="form-label" style="margin-bottom: 0; margin-right: 0.5rem;">Tab Size:</label>
              <select id="indent" class="search-input" style="width: auto; padding: 0.5rem 1.5rem 0.5rem 1rem; border-radius: 8px;">
                <option value="2" selected>2 Spaces</option>
                <option value="4">4 Spaces</option>
                <option value="tab">Tab</option>
                <option value="minify">Minified</option>
              </select>
              
              <button type="button" class="btn btn-primary" id="btn-format">Format & Validate</button>
              <button type="button" class="btn" id="btn-clear">Clear</button>
              
              <button type="button" class="btn" id="btn-copy-client" style="margin-left: auto; display: none;">Copy Output</button>
            </div>

            <div id="error-box" style="display: none; padding: 1rem; background-color: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3); color: #fca5a5; border-radius: 8px; font-size: 0.9rem; margin-bottom: 1.5rem; font-family: monospace;"></div>

            <div class="tool-view-layout" style="grid-template-columns: 1fr 1fr; margin-top: 0;">
              <div class="form-group" style="margin-bottom: 0;">
                <label class="form-label" for="json-input">Raw Input JSON</label>
                <textarea 
                  class="text-area" 
                  id="json-input" 
                  placeholder='{ "name": "ToolStaq", "features": ["Edge", "JSX", "No Bloat"], "active": true }'
                  style="height: 450px;"
                ></textarea>
              </div>

              <div class="form-group" style="margin-bottom: 0;">
                <label class="form-label">Formatted Output</label>
                <div id="output-placeholder" style="height: 450px; border: 1px dashed var(--card-border); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--text-muted); background: rgba(0,0,0,0.1);">
                  Formatted output will appear here
                </div>
                <pre class="result-box" id="output-pre" style="height: 450px; background: rgba(0,0,0,0.3); border: 1px solid var(--card-border); border-radius: 12px; margin: 0; overflow-y: auto; display: none;"></pre>
              </div>
            </div>
          </div>

          <div class="info-sidebar">
            <div class="sidebar-card">
              <h3>🔒 Privacy First</h3>
              <p>All formatting and validation run entirely in your browser. Your JSON data never leaves your device.</p>
            </div>
            <div class="sidebar-card">
              <h3>⚡ Sub-Millisecond Speed</h3>
              <p>Instant client-side V8-powered compilation enables zero-network latency updates.</p>
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
          const originalText = btnCopy.textContent;
          btnCopy.textContent = 'Copied!';
          setTimeout(() => btnCopy.textContent = originalText, 1500);
        });
      ` }} />
    </Layout>
  )
}
