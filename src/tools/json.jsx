/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { Layout } from '../components/Layout.jsx'

export const JsonFormatterView = ({ input = '', output = '', error = '', indent = '2' }) => {
  return (
    <Layout title="JSON Formatter & Validator | ToolStaq">
      <div class="container" style="padding-top: var(--space-48); padding-bottom: var(--space-64);">
        
        {/* Cinematic Back Button */}
        <a href="/" class="nav-link" style="display: inline-flex; align-items: center; margin-bottom: var(--space-24); padding: 0;">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to Hub
        </a>

        <header style="margin-bottom: var(--space-32);">
          <h1 style="font-size: 36px; margin-bottom: var(--space-8);">JSON Formatter</h1>
          <p>Validate, format, and minify JSON configurations instantly at the edge.</p>
        </header>

        {error && (
          <div class="toast" style="position: static; animation: none; width: 100%; border-color: rgba(227, 23, 10, 0.3); margin-bottom: var(--space-24);">
            <svg width="18" height="18" fill="none" stroke="#ff6b6b" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            <span style="color: #ff6b6b;"><strong>Validation Error:</strong> {error}</span>
          </div>
        )}

        <form method="POST" action="/tools/json">
          {/* ── ACTION BAR ── */}
          <div class="action-bar">
            <div style="display: flex; gap: var(--space-12); align-items: center;">
              <label for="indent" style="font-size: 12px; font-weight: 600; color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: 0.05em;">Indentation:</label>
              <select name="indent" id="indent" class="select-minimal">
                <option value="2" selected={indent === '2'}>2 Spaces</option>
                <option value="4" selected={indent === '4'}>4 Spaces</option>
                <option value="tab" selected={indent === 'tab'}>Tab Targets</option>
              </select>
            </div>
            <div style="display: flex; gap: var(--space-12);">
               <button type="button" class="btn btn-icon" onclick="document.getElementById('input').value=''; window.showToast('Input cleared', 'success');">Clear</button>
               <button type="submit" class="btn btn-primary">Format Data</button>
            </div>
          </div>

          {/* ── IDE WORKSPACE ── */}
          <div class="workspace-grid">
            <div class="editor-pane">
              <label class="editor-label">Input Context</label>
              <textarea
                id="input"
                name="input"
                class="ide-editor"
                placeholder="Paste raw unformatted JSON here..."
                spellcheck="false"
              >{input}</textarea>
            </div>

            <div class="editor-pane">
              <label class="editor-label">Compiled Output</label>
              {output ? (
                <pre class="ide-editor output-editor" id="output">{output}</pre>
              ) : (
                <div class="ide-editor empty-editor">
                   Awaiting JSON payload...
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}
