/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { Layout } from '../components/Layout.jsx'

export const JsonFormatterView = ({ input = '', output = '', error = '', indent = '2' }) => {
  return (
    <Layout title="JSON Formatter & Validator | ToolStaq" description="Beautify, minify, validate, and parse JSON instantly with zero client-side React bundle size.">
      <div class="container">
        <a href="/" class="back-btn">
          ← Back to Tools Hub
        </a>

        <div class="tool-view-layout">
          <div class="workspace-panel">
            <div class="workspace-header">
              <h1 class="workspace-title">JSON Formatter & Validator</h1>
              <p class="workspace-desc">Paste your raw JSON to validate, clean, and format it instantly using Cloudflare's sub-millisecond edge compute.</p>
            </div>

            {error && (
              <div style="padding: 1rem; background-color: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3); color: #fca5a5; border-radius: 8px; font-size: 0.9rem; margin-bottom: 1.5rem; font-family: monospace;">
                <strong>Invalid JSON:</strong> {error}
              </div>
            )}

            <form method="POST" action="/tools/json">
              <div class="btn-row" style="margin-bottom: 1.5rem; align-items: center;">
                <label for="indent" class="form-label" style="margin-bottom: 0; margin-right: 0.5rem;">Tab Size:</label>
                <select name="indent" id="indent" class="search-input" style="width: auto; padding: 0.5rem 1.5rem 0.5rem 1rem; border-radius: 8px;">
                  <option value="2" selected={indent === '2'}>2 Spaces</option>
                  <option value="4" selected={indent === '4'}>4 Spaces</option>
                  <option value="tab" selected={indent === 'tab'}>Tab</option>
                  <option value="minify" selected={indent === 'minify'}>Minified</option>
                </select>
                <button type="submit" class="btn btn-primary">Format & Validate</button>
                
                {output && (
                  <button type="button" class="btn" id="btn-copy-server" style="margin-left: auto;">Copy Output</button>
                )}
              </div>

              <div class="tool-view-layout" style="grid-template-columns: 1fr 1fr; margin-top: 0;">
                <div class="form-group" style="margin-bottom: 0;">
                  <label class="form-label" for="json-input">Raw Input JSON</label>
                  <textarea 
                    class="text-area" 
                    id="json-input" 
                    name="input"
                    placeholder='{ "name": "ToolStaq", "features": ["Edge", "JSX", "No Bloat"], "active": true }'
                    style="height: 450px;"
                  >{input}</textarea>
                </div>

                <div class="form-group" style="margin-bottom: 0;">
                  <label class="form-label">Formatted Output</label>
                  {output ? (
                    <pre class="result-box" id="output-pre" style="height: 450px; background: rgba(0,0,0,0.3); border: 1px solid var(--card-border); border-radius: 12px; margin: 0; overflow-y: auto;">{output}</pre>
                  ) : (
                    <div style="height: 450px; border: 1px dashed var(--card-border); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--text-muted); background: rgba(0,0,0,0.1);">
                      Formatted output will appear here
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>

          <div class="info-sidebar">
            <div class="sidebar-card">
              <h3>⚡ Edge Processing</h3>
              <p>Validation and formatting run on Cloudflare Workers edge nodes close to you, keeping page performance fast and resource footprint light.</p>
            </div>
            <div class="sidebar-card">
              <h3>🔒 Standard POST</h3>
              <p>Data is parsed and formatted using native V8 JSON engines. No third-party javascript libraries are loaded.</p>
            </div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        const btnCopy = document.getElementById('btn-copy-server');
        const outputPre = document.getElementById('output-pre');
        if (btnCopy && outputPre) {
          btnCopy.addEventListener('click', () => {
            navigator.clipboard.writeText(outputPre.textContent);
            const originalText = btnCopy.textContent;
            btnCopy.textContent = 'Copied!';
            setTimeout(() => btnCopy.textContent = originalText, 1500);
          });
        }
      ` }} />
    </Layout>
  )
}
