// background.js

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'scrape_maps') {
    const query = request.query;
    const url = `https://www.google.com/maps/search/${encodeURIComponent(query)}?hl=en`;

    // 1. Create a new hidden/inactive tab
    chrome.tabs.create({ url: url, active: false }, (tab) => {
      const tabId = tab.id;

      // 2. Wait for the tab to load fully
      const listener = (updatedTabId, changeInfo) => {
        if (updatedTabId === tabId && changeInfo.status === 'complete') {
          // Remove listener once loaded
          chrome.tabs.onUpdated.removeListener(listener);

          // Give the page a short delay to execute its own initialization scripts
          setTimeout(() => {
            // 3. Inject the scraper script
            chrome.scripting.executeScript({
              target: { tabId: tabId },
              files: ['scraper_injected.js']
            }, (results) => {
              // Close the temporary tab
              chrome.tabs.remove(tabId);

              if (chrome.runtime.lastError) {
                sendResponse({ success: false, error: chrome.runtime.lastError.message });
                return;
              }

              if (results && results[0] && results[0].result) {
                const res = results[0].result;
                if (res.error) {
                  sendResponse({ success: false, error: res.error });
                } else {
                  sendResponse({ success: true, data: res });
                }
              } else {
                sendResponse({ success: false, error: 'No data returned from injected script.' });
              }
            });
          }, 3000); // 3 seconds to let Google Maps fully render the payload
        }
      };

      chrome.tabs.onUpdated.addListener(listener);
    });

    return true; // Keep the message channel open for sendResponse (asynchronous)
  }
});
