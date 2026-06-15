/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { Hono } from 'hono'
import { Layout } from './components/Layout.jsx'
import { JsonFormatterView } from './tools/json.jsx'
import { WordCounterView } from './tools/word-counter.jsx'
import { Base64View } from './tools/base64.jsx'
import { PrivacyPolicyView } from './pages/privacy.jsx'
import { TermsOfServiceView } from './pages/terms.jsx'
import { ContactView } from './pages/contact.jsx'
import { UuidGeneratorView } from './tools/uuid-generator.jsx'
import { PasswordGeneratorView } from './tools/password-generator.jsx'
import { CategoriesView } from './pages/categories.jsx'
import { DocsView } from './pages/docs.jsx'

import toolsDataRaw from './alltools.json' // Import the unified dataset

const app = new Hono()

// Destructure the arrays and filter to ONLY show live tools for AdSense compliance
const { categories, tools: toolsDataRawList } = toolsDataRaw
const toolsData = toolsDataRawList.filter(tool => tool.status === 'live')

const parseSearches = (searchStr) => {
  if (!searchStr) return 0;
  const numStr = searchStr.replace(/[^0-9.]/g, '');
  const num = parseFloat(numStr);
  if (searchStr.includes('M')) return num * 1000000;
  if (searchStr.includes('K')) return num * 1000;
  return num;
};
const topTools = [...toolsDataRawList]
  .sort((a, b) => parseSearches(b.searches) - parseSearches(a.searches))
  .slice(0, 6);

app.get('/', (c) => {
  return c.html(
    <Layout title="ToolStaq | Instant Developer Tools Hub">

      {/* 1. HERO - Massive vertical padding */}
      <section class="hero-container">
        <h1 class="hero-title">
          All your developer tools for
          <div class="ticker-wrapper">
            <style dangerouslySetInnerHTML={{
              __html: `
              .ticker-list {
                animation: ticker-scroll ${categories.length * 2}s cubic-bezier(0.65, 0, 0.35, 1) infinite;
              }
              @keyframes ticker-scroll {
                ${categories.map((_, i) => {
                const step = 100 / categories.length;
                const pauseStart = i * step;
                const pauseEnd = pauseStart + (step * 0.75); // Hold on item for 75% of step
                return `
                    ${pauseStart}%, ${pauseEnd}% {
                      transform: translateX(-${i * 100}%);
                    }
                  `;
              }).join('')}
                100% {
                  transform: translateX(-${categories.length * 100}%);
                }
              }
              
              @media (max-width: 640px) {
                .ticker-list {
                  animation: ticker-scroll-mobile ${categories.length * 2}s cubic-bezier(0.65, 0, 0.35, 1) infinite;
                }
                @keyframes ticker-scroll-mobile {
                  ${categories.map((_, i) => {
                const step = 100 / categories.length;
                const pauseStart = i * step;
                const pauseEnd = pauseStart + (step * 0.75);
                return `
                      ${pauseStart}%, ${pauseEnd}% {
                        transform: translateX(-${i * 100}%);
                      }
                    `;
              }).join('')}
                  100% {
                    transform: translateX(-${categories.length * 100}%);
                  }
                }
              }
            `}} />

            {/* Hidden sizer to force the wrapper to be exactly as wide as the widest item */}
            <div class="ticker-sizer" aria-hidden="true">
              {categories.map((cat) => (
                <div>{cat.name}</div>
              ))}
            </div>

            <ul class="ticker-list">
              {categories.map((cat) => (
                <li class="ticker-item">{cat.name}</li>
              ))}
              {/* Clone first item to create seamless loop */}
              <li class="ticker-item">{categories[0].name}</li>
            </ul>
          </div>
        </h1>
        <p class="body-lead hero-lead">
          Privacy-first, edge-rendered developer utilities. Zero hydration payload tracking, zero background processing lags.
        </p>
        <div class="hero-actions">
          <a href="/categories" class="btn btn-filled">
            Tool Categories
          </a>
          <a href="/docs" class="btn btn-primary">
            Documentation
          </a>
        </div>
      </section>

      {/* Main Content Area with Sidebar Layout for AdSense Optimization */}
      <main class="container main-grid">

        {/* Left Column: Content (70%) */}
        <div class="main-content">

          {/* Popular Tools Grid */}
          <section id="popular-tools">
            <div class="flex-between section-header">
              <h2>Most Popular Tools</h2>
            </div>

            {/* Google AdSense Banner */}
            <div class="ad-banner-container">
              <div class="ad-banner">
                {/* Placeholder for Google AdSense */}
                <span style="color: var(--color-text-secondary); font-size: 14px;">Advertisement</span>
                <div style="margin-top: 8px; height: 90px; background-color: var(--color-bg-secondary); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center;">
                  <span style="color: var(--color-text-secondary); font-size: 12px;">[Banner Ad Space]</span>
                </div>
              </div>
            </div>

            <div class="boxy-tools-grid">
              {topTools.map((tool) => (
                <a href={tool.status === 'live' ? tool.path : '#'} onclick={tool.status !== 'live' ? `window.showToast('The ${tool.name} pipeline is active.', 'warning'); return false;` : undefined} class={`boxy-tool-card data-cat-${tool.cat}`}>
                  <div class="boxy-tool-preview">
                    {/* Abstract preview box with lines */}
                    <div style="display: flex; flex-direction: column; width: 100%; gap: 12px;">
                      <div class="boxy-preview-line long"></div>
                      <div class="boxy-preview-line medium"></div>
                      <div class="boxy-preview-line short"></div>
                    </div>
                  </div>
                  <div class="boxy-tool-info">
                    <h3 class="boxy-tool-title">{tool.name}</h3>
                    <span class="boxy-tool-badge">{tool.searches || 'New'}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>



          {/* SEO Rich Content Section */}
          {/* SEO Rich Content Section */}
          <article class="category-card seo-article">
            <h2>Why Use ToolStaq for Your Development Needs?</h2>

            <div class="seo-content">
              <p>
                In the fast-paced world of web development and digital marketing, having the right utilities at your fingertips can save countless hours. <strong>ToolStaq</strong> provides a comprehensive suite of completely free, client-side web tools designed to streamline your daily workflow without the need to install heavy software.
              </p>

              <h3>100% Free & Secure Client-Side Processing</h3>
              <p>
                We prioritize your privacy. The vast majority of our utilities, such as the <em>JSON Formatter</em>, <em>Regex Tester</em>, and <em>Text Encoders</em>, operate entirely within your browser. This means your sensitive data never leaves your device, ensuring maximum security and zero latency.
              </p>

              <h3>Essential Tools for Every Discipline</h3>
              <ul class="seo-list">
                <li><strong>For Developers:</strong> Validate JSON, minify CSS/JS/HTML files, generate UUIDs, and encode URLs safely.</li>
                <li><strong>For Designers:</strong> Extract color palettes, convert image formats (WEBP to PNG), and compress assets for faster page loads.</li>
                <li><strong>For SEO Experts:</strong> Analyze meta tags, count words and characters, and generate clean schemas.</li>
                <li><strong>For Network Admins:</strong> Check IP addresses, lookup DNS records, and format MAC addresses.</li>
              </ul>

              <p>
                Bookmark ToolStaq today and never waste time searching for individual "online calculators" or "formatters" again. Our unified dashboard puts everything you need in one, fast-loading interface.
              </p>
            </div>
          </article>
        </div>
      </main>
    </Layout>
  )
})


// Tool 1: JSON Formatter & Validator
app.get('/tools/json', (c) => {
  return c.html(<JsonFormatterView />)
})

app.get('/tools/word-counter', (c) => {
  return c.html(<WordCounterView />)
})

app.get('/tools/base64', (c) => {
  return c.html(<Base64View />)
})


// === LEGAL PAGES ===
app.get('/privacy', (c) => {
  return c.html(<PrivacyPolicyView />)
})

app.get('/terms', (c) => {
  return c.html(<TermsOfServiceView />)
})

app.get('/contact', (c) => {
  return c.html(<ContactView />)
})

// Backwards compatibility alias
app.get('/tools/json-formatter', (c) => {
  return c.redirect('/tools/json')
})

app.get('/tools/uuid-generator', (c) => {
  return c.html(<UuidGeneratorView />)
})

app.get('/tools/password-generator', (c) => {
  return c.html(<PasswordGeneratorView />)
})

app.get('/categories', (c) => {
  return c.html(<CategoriesView />)
})

app.get('/docs', (c) => {
  return c.html(<DocsView />)
})

// Dynamic XML Sitemap Generator
app.get('/sitemap.xml', (c) => {
  const baseUrl = 'https://toolstaq.online';

  // 1. Get all static GET routes registered in the Hono app
  const appRoutes = app.routes
    .filter(r => r.method === 'GET' && !r.path.includes(':') && !r.path.includes('*') && r.path !== '/sitemap.xml')
    .map(r => r.path);

  // 2. Get all live tools from the JSON dataset
  const liveTools = toolsDataRaw.tools
    .filter(tool => tool.status === 'live')
    .map(tool => tool.path);

  // 3. Combine and deduplicate paths
  const allPaths = [...new Set([...appRoutes, ...liveTools])];

  const urlElements = allPaths.map(path => {
    // Give homepage highest priority, top-level pages high priority, tools normal priority
    let priority = '0.8';
    let changefreq = 'weekly';
    
    if (path === '/') {
      priority = '1.0';
      changefreq = 'daily';
    } else if (['/privacy', '/terms', '/contact', '/docs', '/categories'].includes(path)) {
      priority = '0.9';
      changefreq = 'monthly';
    }

    return `
    <url>
      <loc>${baseUrl}${path}</loc>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlElements.trim()}
    </urlset>`;

  return c.text(xml.trim(), 200, {
    'Content-Type': 'application/xml',
    'Cache-Control': 'public, max-age=3600' // Cache at the edge for 1 hour
  });
});


export { app }

// HTTP handler and Cron handler export
export default {
  async fetch(request, env, ctx) {
    // 1. Try serving static assets first
    try {
      const response = await env.ASSETS.fetch(request);
      if (response.status !== 404) {
        return response;
      }
    } catch (e) {
      // Fallback if ASSETS binding is not set
    }

    // 2. Fallback to Hono router
    return app.fetch(request, env, ctx);
  },

  scheduled: async (event, env, ctx) => {
    // Runs periodically based on wrangler.jsonc crons trigger
    console.log(`Running scheduled background buffer cleanup task: ${event.cron}`);
  }
}
