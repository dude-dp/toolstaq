/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { Layout } from '../components/Layout.jsx'

export const WordCounterView = () => {
  return (
    <Layout
      title="Word Counter & Text Analyzer | ToolStaq"
      description="Free online word counter. Instantly count words, characters, sentences, and paragraphs. Perfect for blog posts, essays, social media, and SEO content."
    >
      <div class="container">
        <a href="/" class="back-btn" id="wc-back-btn">← Back to Tools Hub</a>

        <div class="tool-view-layout">
          {/* ── Main Workspace ── */}
          <div class="workspace-panel">
            <div class="workspace-header">
              <h1 class="workspace-title">Word Counter &amp; Text Analyzer</h1>
              <p class="workspace-desc">Paste or type your text below for an instant, real-time breakdown of words, characters, sentences, paragraphs, and estimated reading time.</p>
            </div>

            <div class="form-group">
              <label class="form-label" for="wc-input">Your Text</label>
              <textarea
                class="text-area"
                id="wc-input"
                placeholder="Start typing or paste your text here..."
                style="height: 300px;"
                aria-label="Text input for word counting"
              ></textarea>
            </div>

            {/* Stats Grid */}
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: var(--space-16); margin-top: var(--space-24);">
              <div class="sidebar-card" style="text-align: center; padding: var(--space-16);">
                <div id="stat-words" style="font-size: 2.5rem; font-weight: 900; color: var(--color-accent-warning); line-height: 1;">0</div>
                <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-secondary); margin-top: 4px;">Words</div>
              </div>
              <div class="sidebar-card" style="text-align: center; padding: var(--space-16);">
                <div id="stat-chars" style="font-size: 2.5rem; font-weight: 900; color: var(--color-accent-warning); line-height: 1;">0</div>
                <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-secondary); margin-top: 4px;">Characters</div>
              </div>
              <div class="sidebar-card" style="text-align: center; padding: var(--space-16);">
                <div id="stat-sentences" style="font-size: 2.5rem; font-weight: 900; color: var(--color-accent-warning); line-height: 1;">0</div>
                <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-secondary); margin-top: 4px;">Sentences</div>
              </div>
              <div class="sidebar-card" style="text-align: center; padding: var(--space-16);">
                <div id="stat-paras" style="font-size: 2.5rem; font-weight: 900; color: var(--color-accent-warning); line-height: 1;">0</div>
                <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-secondary); margin-top: 4px;">Paragraphs</div>
              </div>
              <div class="sidebar-card" style="text-align: center; padding: var(--space-16);">
                <div id="stat-read" style="font-size: 2.5rem; font-weight: 900; color: var(--color-accent-warning); line-height: 1;">0s</div>
                <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-secondary); margin-top: 4px;">Read Time</div>
              </div>
            </div>

            <div class="btn-row" style="margin-top: var(--space-24);">
              <button type="button" class="btn" id="wc-clear-btn">Clear Text</button>
            </div>
          </div>

          {/* ── Info Sidebar ── */}
          <div class="info-sidebar">

            {/* Premium Sticky Ad Slot */}
            <div class="ad-container ad-sidebar-square">
              Sidebar Ad (300x250)
            </div>

            <div class="sidebar-card">
              <h3>What is a Word Counter?</h3>
              <p>A word counter is a tool that calculates the total number of words in a given piece of text. Beyond raw word count, modern text analyzers also measure character count, sentence count, paragraph count, and estimated reading time — all key metrics for writers, editors, and content marketers.</p>
              <p style="margin-top: 8px;">ToolStaq's word counter updates every statistic in real time as you type, with no need to click a "Count" button.</p>
            </div>

            <div class="sidebar-card">
              <h3>Why Word Count Matters</h3>
              <p>Different publishing platforms impose different limits:</p>
              <ul style="margin-left: 16px; margin-top: 6px; line-height: 1.9;">
                <li><strong>Twitter/X:</strong> 280 characters per post</li>
                <li><strong>LinkedIn posts:</strong> 3,000 characters before truncation</li>
                <li><strong>Google Meta Description:</strong> ~155–160 characters</li>
                <li><strong>Blog posts (SEO):</strong> 1,500–2,500 words for strong rankings</li>
                <li><strong>Academic essays:</strong> Strict per-assignment limits</li>
                <li><strong>Amazon product descriptions:</strong> ~2,000 characters</li>
              </ul>
              <p style="margin-top: 8px;">Hitting the right word count improves readability scores and SEO ranking potential.</p>
            </div>

            <div class="sidebar-card">
              <h3>How Reading Time is Calculated</h3>
              <p>The average adult reads approximately 200–250 words per minute (WPM) for casual online content and around 150 WPM for dense technical material. ToolStaq uses a baseline of 200 WPM, dividing your total word count by 200 to estimate reading time in minutes and seconds.</p>
              <p style="margin-top: 8px;">Adding an estimated reading time to your blog posts is proven to increase user engagement and reduce bounce rate, as it sets clear reader expectations.</p>
            </div>

            <div class="sidebar-card">
              <h3>🔒 100% Private</h3>
              <p>Your text — which may contain drafts, confidential reports, or personal writing — is processed entirely within your browser. Nothing is sent to any external server. You can safely analyze sensitive documents without any privacy risk.</p>
            </div>

          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        const input = document.getElementById('wc-input');
        const statWords = document.getElementById('stat-words');
        const statChars = document.getElementById('stat-chars');
        const statSentences = document.getElementById('stat-sentences');
        const statParas = document.getElementById('stat-paras');
        const statRead = document.getElementById('stat-read');

        function analyze() {
          const text = input.value;
          const words = text.trim() === '' ? 0 : text.trim().split(/\\s+/).length;
          const chars = text.length;
          const sentences = text.trim() === '' ? 0 : (text.match(/[.!?]+/g) || []).length;
          const paras = text.trim() === '' ? 0 : text.trim().split(/\\n\\s*\\n/).filter(p => p.trim() !== '').length || (text.trim() !== '' ? 1 : 0);
          const readSecs = Math.round((words / 200) * 60);
          const readStr = readSecs < 60 ? readSecs + 's' : Math.floor(readSecs / 60) + 'm ' + (readSecs % 60) + 's';

          statWords.textContent = words.toLocaleString();
          statChars.textContent = chars.toLocaleString();
          statSentences.textContent = sentences.toLocaleString();
          statParas.textContent = paras.toLocaleString();
          statRead.textContent = words === 0 ? '0s' : readStr;
        }

        input.addEventListener('input', analyze);
        document.getElementById('wc-clear-btn').addEventListener('click', () => {
          input.value = '';
          analyze();
        });
      ` }} />
    </Layout>
  )
}
