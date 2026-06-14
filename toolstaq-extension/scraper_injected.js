// scraper_injected.js
// Runs inside the Google Maps tab

function extractMapsData() {
  try {
    let rawJsonString = null;
    
    // Find the APP_INITIALIZATION_STATE script tag
    const scripts = document.querySelectorAll('script');
    for (let script of scripts) {
      if (script.textContent.includes('window.APP_INITIALIZATION_STATE=')) {
        rawJsonString = script.textContent
          .split('window.APP_INITIALIZATION_STATE=')[1]
          .split(';window.APP_FLAGS=')[0];
        break;
      }
    }

    if (!rawJsonString) {
      return { error: 'Could not find APP_INITIALIZATION_STATE in the DOM. Google might have blocked the request or changed the architecture.' };
    }

    const dataMatrix = JSON.parse(rawJsonString);

    // Heuristic Hunter
    function huntForBusinesses(node, results = new Map()) {
      if (Array.isArray(node)) {
        let isBusinessNode = false;
        let placeId = null;

        for (let item of node) {
          if (typeof item === 'string' && item.startsWith('0x') && item.includes(':0x')) {
            isBusinessNode = true;
            placeId = item;
            break;
          }
        }

        if (isBusinessNode && node.length > 5 && !results.has(placeId)) {
          let business = {
            id: placeId,
            name: "Unknown",
            rating: null,
            reviews: null,
            website: null,
            phone: null
          };

          node.forEach(item => {
            if (typeof item === 'string') {
              if (item.startsWith('http') && !item.includes('google.com')) {
                business.website = business.website || item;
              } else if (/^\+?\d{10,14}$/.test(item.replace(/[\s\-()]/g, '')) && item.length > 8) {
                business.phone = business.phone || item;
              } else if (item.length > 2 && item.length < 60 && item !== placeId && business.name === "Unknown") {
                business.name = item;
              }
            } else if (typeof item === 'number') {
              if (item >= 1.0 && item <= 5.0 && !Number.isInteger(item)) {
                business.rating = business.rating || item;
              } else if (Number.isInteger(item) && item > 0 && item < 100000 && business.reviews === null) {
                business.reviews = item;
              }
            }
          });

          if (business.name !== "Unknown") {
            results.set(placeId, business);
          }
        }

        node.forEach(child => huntForBusinesses(child, results));
      } else if (node && typeof node === 'object') {
        Object.values(node).forEach(child => huntForBusinesses(child, results));
      }
      return results;
    }

    const extractedMap = huntForBusinesses(dataMatrix);
    const finalResults = Array.from(extractedMap.values());

    return { total_found: finalResults.length, results: finalResults };
  } catch (e) {
    return { error: 'Extraction Error: ' + e.message };
  }
}

// Return the result directly (executeScript captures the return value of the last statement)
extractMapsData();
