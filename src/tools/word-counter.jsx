/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { Layout } from '../components/Layout.jsx'

export const WordCounterView = () => {
  return (
    <Layout title="Word Counter | ToolStaq">
      <div class="container" style="padding-top: var(--space-48); padding-bottom: var(--space-64);">
        
        {/* Cinematic Back Button */}
        <a href="/" class="nav-link" style="display: inline-flex; align-items: center; margin-bottom: var(--space-24); padding: 0;">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to Hub
        </a>

        <header style="margin-bottom: var(--space-32);">
          <h1 style="font-size: 36px; margin-bottom: var(--space-8);">Word Counter</h1>
          <p>Real-time text analytics, character counting, and reading time estimation.</p>
        </header>

        {/* ── ELEVATED STATS GRID ── */}
        <div class="stats-grid">
          <div class="stat-box">
            <span class="stat-value" id="word-count">0</span>
            <span class="stat-label">Words</span>
          </div>
          <div class="stat-box">
            <span class="stat-value" id="char-count">0</span>
            <span class="stat-label">Characters</span>
          </div>
          <div class="stat-box">
            <span class="stat-value" id="sentence-count">0</span>
            <span class="stat-label">Sentences</span>
          </div>
          <div class="stat-box">
            <span class="stat-value" id="reading-time">0m</span>
            <span class="stat-label">Reading Time</span>
          </div>
        </div>

        {/* ── ACTION BAR ── */}
        <div class="action-bar">
          <span style="font-size: 12px; font-weight: 600; color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: 0.05em;">Text Input</span>
          <div style="display: flex; gap: var(--space-12);">
            <button type="button" class="btn btn-icon" id="clear-btn">Clear</button>
            <button type="button" class="btn btn-primary" id="copy-btn">Copy Text</button>
          </div>
        </div>

        {/* ── IDE WORKSPACE ── */}
        <div class="editor-pane">
          <textarea
            id="text-input"
            class="ide-editor"
            placeholder="Type or paste your text here to begin analysis..."
            spellcheck="false"
            style="min-height: 400px;"
          ></textarea>
        </div>

        {/* ── VANILLA JS CLIENT LOGIC ── */}
        <script dangerouslySetInnerHTML={{ __html: `
          document.addEventListener('DOMContentLoaded', () => {
            const input = document.getElementById('text-input');
            const wCount = document.getElementById('word-count');
            const cCount = document.getElementById('char-count');
            const sCount = document.getElementById('sentence-count');
            const rTime = document.getElementById('reading-time');

            const clearBtn = document.getElementById('clear-btn');
            const copyBtn = document.getElementById('copy-btn');

            const updateStats = () => {
              const text = input.value;
              const words = text.match(/\\b[-?(\\w+)?]+\\b/gi) || [];
              const sentences = text.match(/[.!?]+/g) || [];
              
              wCount.textContent = text.trim() === '' ? 0 : words.length;
              cCount.textContent = text.length;
              sCount.textContent = sentences.length;
              rTime.textContent = Math.ceil((words.length || 0) / 200) + 'm';
            };

            input.addEventListener('input', updateStats);

            clearBtn.addEventListener('click', () => {
              input.value = '';
              updateStats();
              window.showToast('Text cleared successfully', 'success');
            });

            copyBtn.addEventListener('click', () => {
              if(!input.value.trim()) {
                window.showToast('Nothing to copy', 'warning');
                return;
              }
              navigator.clipboard.writeText(input.value);
              window.showToast('Copied to clipboard', 'success');
            });
          });
        `}} />
      </div>
    </Layout>
  )
}
