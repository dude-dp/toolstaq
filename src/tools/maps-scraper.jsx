/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { Layout } from '../components/Layout.jsx'

export const MapsScraperView = () => {
  return (
    <Layout
      title="Google Maps Scraper | ToolStaq"
      description="Scrape Google Maps business listings instantly without an API key using heuristic data fingerprints."
    >
      <div class="container">
        <a href="/" class="back-btn" id="maps-back-btn">← Back to Tools Hub</a>

        <div class="tool-view-layout">
          {/* ── Main Workspace ── */}
          <div class="workspace-panel">
            <div class="workspace-header">
              <h1 class="workspace-title">Google Maps Scraper</h1>
              <p class="workspace-desc">Enter a search query to instantly extract business listings (names, ratings, websites, phone numbers) directly from Google Maps using our heuristic hunter.</p>
            </div>

            {/* Input Section */}
            <div class="form-group" style="margin-bottom: var(--space-24);">
              <label class="form-label" for="maps-query-input">Search Query (e.g. "coffee shops in New York")</label>
              <div style="display: flex; gap: var(--space-8);">
                <input
                  type="text"
                  class="search-input"
                  id="maps-query-input"
                  placeholder="Type a location or business type..."
                  style="flex: 1;"
                />
                <button type="button" class="btn btn-primary" id="maps-scrape-btn" style="flex-shrink: 0;">
                  <i data-lucide="search" style="width: 18px; height: 18px; margin-right: 8px;"></i>
                  Scrape Maps
                </button>
              </div>
            </div>

            {/* Status & Error */}
            <div id="maps-status" style="display:none; color: var(--color-text-secondary); margin-bottom: var(--space-16);">Scanning JSON fingerprint... Please wait.</div>
            <div id="maps-error" style="display:none; margin-bottom: var(--space-16); padding: var(--space-12); background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #ef4444; border-radius: 8px;" role="alert"></div>

            {/* Results Area */}
            <div id="maps-results-container" style="display: none;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-16);">
                <h3 style="font-size: 18px; margin: 0;">Results Found: <span id="maps-count-val" style="color: var(--primary);">0</span></h3>
                <button type="button" class="btn" id="maps-copy-btn">Copy JSON</button>
              </div>
              <div class="form-group" style="margin-bottom: 0;">
                <textarea
                  class="text-area result-box"
                  id="maps-output"
                  readonly
                  style="height: 400px; font-family: monospace; font-size: 14px; background: rgba(0,0,0,0.3);"
                  aria-label="Maps Scraper output"
                ></textarea>
              </div>
            </div>
          </div>

          {/* ── Info Sidebar ── */}
          <div class="info-sidebar">
            <div class="ad-container ad-sidebar-square">
              Sidebar Ad (300x250)
            </div>

            <div class="sidebar-card">
              <h3>How it works</h3>
              <p>Unlike standard scrapers that break when Google changes their layout or DOM elements, this tool uses a <strong>Heuristic Recursive Hunter</strong>.</p>
              <p style="margin-top: 8px;">It parses the massive `window.APP_INITIALIZATION_STATE` JSON blob from the Google Maps source code and searches for unique Google Maps Place ID fingerprints. Once a business node is found, it extracts data based on data types rather than array indices, ensuring high resilience against updates.</p>
            </div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        const queryInput = document.getElementById('maps-query-input');
        const scrapeBtn = document.getElementById('maps-scrape-btn');
        const statusEl = document.getElementById('maps-status');
        const errorEl = document.getElementById('maps-error');
        const resultsContainer = document.getElementById('maps-results-container');
        const outputEl = document.getElementById('maps-output');
        const countVal = document.getElementById('maps-count-val');
        const copyBtn = document.getElementById('maps-copy-btn');

        let extensionInstalled = false;

        window.addEventListener('message', (e) => {
          if (e.data && e.data.type === 'TOOLSTAQ_EXTENSION_INSTALLED') {
            extensionInstalled = true;
          }
        });

        scrapeBtn.addEventListener('click', async () => {
          const query = queryInput.value.trim();
          if (!query) return;

          // Reset UI
          errorEl.style.display = 'none';
          resultsContainer.style.display = 'none';
          statusEl.style.display = 'block';
          scrapeBtn.disabled = true;
          scrapeBtn.style.opacity = '0.7';
          outputEl.value = '';

          if (!extensionInstalled && !window.TOOLSTAQ_EXTENSION_ACTIVE) {
            errorEl.style.display = 'block';
            errorEl.innerHTML = '<strong>Extension Required:</strong> To bypass Google\\'s anti-scraping blocks, you must install the ToolStaq Chrome Extension to run this tool directly from your browser context.';
            statusEl.style.display = 'none';
            scrapeBtn.disabled = false;
            scrapeBtn.style.opacity = '1';
            return;
          }

          // Define a one-time message listener for the response
          const handleResponse = (e) => {
            if (e.source !== window || !e.data || e.data.type !== 'TOOLSTAQ_SCRAPE_RES') return;
            
            window.removeEventListener('message', handleResponse);
            
            statusEl.style.display = 'none';
            scrapeBtn.disabled = false;
            scrapeBtn.style.opacity = '1';

            if (!e.data.success) {
              errorEl.style.display = 'block';
              errorEl.textContent = 'Error: ' + (e.data.error || 'Failed to scrape maps.');
            } else {
              countVal.textContent = e.data.data.total_found;
              outputEl.value = JSON.stringify(e.data.data.results, null, 2);
              resultsContainer.style.display = 'block';
            }
          };

          window.addEventListener('message', handleResponse);

          // Send the request to the extension
          window.postMessage({ type: 'TOOLSTAQ_SCRAPE_REQ', query: query }, '*');
        });

        // Trigger on Enter
        queryInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') scrapeBtn.click();
        });

        copyBtn.addEventListener('click', () => {
          if (!outputEl.value) return;
          navigator.clipboard.writeText(outputEl.value);
          const orig = copyBtn.textContent;
          copyBtn.textContent = 'Copied!';
          setTimeout(() => copyBtn.textContent = orig, 1500);
        });
      ` }} />
    </Layout>
  )
}
