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

import toolsDataRaw from './alltools.json' // Import the unified dataset

const app = new Hono()

// Destructure the arrays and filter to ONLY show live tools for AdSense compliance
const { categories, tools: toolsDataRawList } = toolsDataRaw
const toolsData = toolsDataRawList.filter(tool => tool.status === 'live')

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
                      transform: translateY(-${i * 60}px);
                    }
                  `;
              }).join('')}
                100% {
                  transform: translateY(-${categories.length * 60}px);
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
                        transform: translateY(-${i * 44}px);
                      }
                    `;
              }).join('')}
                  100% {
                    transform: translateY(-${categories.length * 44}px);
                  }
                }
              }
            `}} />
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
          <a href="#popular-tools" class="btn btn-filled">
            <i data-lucide="compass" class="btn-icon"></i>
            Explore All Tools
          </a>
          <a href="/docs" class="btn btn-primary">
            <i data-lucide="book" class="btn-icon"></i>
            Explore the docs
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

            <div class="tools-grid">
              {toolsData.map((tool) => (
                <div class={`tool-card tool-item-card data-cat-${tool.cat}`} data-status={tool.status}>

                  <div class="tool-card-header">
                    {/* Replaced hardcoded inline colors with semantic monochrome classes */}
                    <span class={`tool-badge ${tool.status === 'live' ? 'badge-live' : 'badge-soon'}`}>
                      {tool.status === 'live' ? 'LIVE' : 'PIPELINE'}
                    </span>

                    {tool.searches && (
                      <span class="tool-searches">
                        {tool.searches}
                      </span>
                    )}
                  </div>

                  <div class="tool-card-body">
                    <h3>{tool.name}</h3>
                    <p>{tool.desc}</p>
                  </div>

                  <div class="tool-card-footer">
                    {tool.status === 'live' ? (
                      <a href={tool.path} class="btn btn-filled">Open Tool</a>
                    ) : (
                      <button onclick={`alert('The ${tool.name} integration pipeline is active.')`} class="btn btn-filled" disabled>
                        In Development
                      </button>
                    )}
                  </div>
                </div>
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

        {/* Right Column: Sidebar (30%) */}
        <aside class="main-sidebar">

          {/* Categories Widget */}
          <div class="category-card sidebar-widget">
            <h3 class="sidebar-widget-title">Tool Categories</h3>
            <ul class="sidebar-widget-list">
              {categories.map((category) => {
                const toolCount = toolsData.filter(t => t.cat === category.id).length;
                return (
                  <li>
                    <a href={`#popular-tools`} class="sidebar-category-link">
                      <span class="hover-underline">{category.name}</span>
                      <span class="sidebar-category-count">{toolCount}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>



        </aside>

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

// Dynamic XML Sitemap Generator
app.get('/sitemap.xml', (c) => {
  const baseUrl = 'https://toolstaq.online';

  // Filter only the live tools to prevent Google from crawling "coming soon" dead ends
  const liveTools = toolsDataRaw.tools.filter(tool => tool.status === 'live');

  const toolUrls = liveTools.map(tool => `
    <url>
      <loc>${baseUrl}${tool.path}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      ${toolUrls}
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
