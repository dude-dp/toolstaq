// content_toolstaq.js
// This script runs in the context of toolstaq.online and localhost

// Let the web page know the extension is installed and ready
window.postMessage({ type: 'TOOLSTAQ_EXTENSION_INSTALLED' }, '*');

// Also, inject a small script to set a global variable just in case
// Removed inline script injection due to Content Security Policy (CSP) restrictions.
// The postMessage event above is sufficient to notify the frontend.

// Listen for scrape requests from the ToolStaq UI
window.addEventListener('message', (event) => {
  // We only accept messages from ourselves
  if (event.source !== window) return;

  if (event.data && event.data.type === 'TOOLSTAQ_SCRAPE_REQ') {
    const query = event.data.query;
    
    // Forward the request to the extension background script
    chrome.runtime.sendMessage({ action: 'scrape_maps', query: query }, (response) => {
      // Send the result back to the ToolStaq UI
      window.postMessage({
        type: 'TOOLSTAQ_SCRAPE_RES',
        success: response.success,
        data: response.data,
        error: response.error
      }, '*');
    });
  }
});
