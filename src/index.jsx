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
      <section class="hero-container" style="padding-top: var(--space-32); padding-bottom: var(--space-48);">
        <h1 class="hero-title">
          All your developer tools for
          <div class="ticker-wrapper">
            <ul class="ticker-list">
              <li class="ticker-item">JSON Parsing</li>
              <li class="ticker-item">Data Encryption</li>
              <li class="ticker-item">Text Analytics</li>
              <li class="ticker-item">JSON Parsing</li>
            </ul>
          </div>
        </h1>
        <p style="font-size: 18px; line-height: 1.6; color: var(--color-text-secondary); max-width: 600px; margin: 0 auto; margin-bottom: var(--space-32);">
          Privacy-first, edge-rendered developer utilities. Zero hydration payload tracking, zero background processing lags.
        </p>
        <div style="display: flex; justify-content: center; gap: var(--space-16);">
          <a href="#popular-tools" class="btn btn-primary" style="font-size: 18px; display: flex; align-items: center; gap: 8px;">
            <i data-lucide="compass" style="width: 20px; height: 20px;"></i>
            Explore All Tools
          </a>
        </div>
      </section>

      {/* Main Content Area with Sidebar Layout for AdSense Optimization */}
      <main class="container" style="display: flex; gap: var(--space-32); padding-bottom: var(--space-64); flex-wrap: wrap;">

        {/* Left Column: Content (70%) */}
        <div style="flex: 1 1 65%; display: flex; flex-direction: column; gap: var(--space-48);">

          {/* Popular Tools Grid */}
          <section id="popular-tools">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-24);">
              <h2 style="font-size: 24px; font-weight: 700; color: var(--color-text-primary);">Most Popular Tools</h2>
            </div>

            <div class="tools-grid">
              {toolsData.map((tool) => (
                <div class={`tool-card tool-item-card data-cat-${tool.cat}`} data-status={tool.status}>
                  
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-16);">
                    {/* Replaced hardcoded inline colors with semantic monochrome classes */}
                    <span class={`tool-badge ${tool.status === 'live' ? 'badge-live' : 'badge-soon'}`}>
                      {tool.status === 'live' ? 'LIVE' : 'PIPELINE'}
                    </span>
                    
                    {tool.searches && (
                      <span style="font-size: 12px; font-weight: 500; color: var(--color-text-secondary); display: flex; align-items: center; gap: 4px;">
                        {tool.searches}
                      </span>
                    )}
                  </div>
                  
                  <div style="flex-grow: 1;">
                    <h3 style="margin-bottom: var(--space-8);">{tool.name}</h3>
                    <p style="font-size: 14px;">{tool.desc}</p>
                  </div>
                  
                  <div style="margin-top: var(--space-24);">
                    {tool.status === 'live' ? (
                      <a href={tool.path} class="btn btn-primary" style="width: 100%;">Open Tool</a>
                    ) : (
                      <button onclick={`alert('The ${tool.name} integration pipeline is active.')`} class="btn" style="width: 100%;" disabled>
                        In Development
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* AdSense In-Feed / In-Article Placement */}
          <div class="ad-placeholder" style="width: 100%; height: 250px;">
            In-Feed / Rectangle Ad (Responsive)<br /><span style="font-size: 12px; font-weight: normal;">Optimal for CTR within content</span>
          </div>

          {/* SEO Rich Content Section */}
          <article class="category-card" style="cursor: default; transition: none; transform: none; background-color: var(--color-bg-primary);">
            <h2 style="font-size: 28px; font-weight: 800; margin-bottom: var(--space-16); color: var(--color-text-primary);">Why Use ToolStaq for Your Development Needs?</h2>

            <div style="color: var(--color-text-secondary); line-height: 1.6; display: flex; flex-direction: column; gap: var(--space-16);">
              <p>
                In the fast-paced world of web development and digital marketing, having the right utilities at your fingertips can save countless hours. <strong>ToolStaq</strong> provides a comprehensive suite of completely free, client-side web tools designed to streamline your daily workflow without the need to install heavy software.
              </p>

              <h3 style="font-size: 20px; font-weight: 700; color: var(--color-text-primary); margin-top: var(--space-16);">100% Free & Secure Client-Side Processing</h3>
              <p>
                We prioritize your privacy. The vast majority of our utilities, such as the <em>JSON Formatter</em>, <em>Regex Tester</em>, and <em>Text Encoders</em>, operate entirely within your browser. This means your sensitive data never leaves your device, ensuring maximum security and zero latency.
              </p>

              <h3 style="font-size: 20px; font-weight: 700; color: var(--color-text-primary); margin-top: var(--space-16);">Essential Tools for Every Discipline</h3>
              <ul style="padding-left: var(--space-24); list-style-type: disc; display: flex; flex-direction: column; gap: var(--space-8);">
                <li><strong>For Developers:</strong> Validate JSON, minify CSS/JS/HTML files, generate UUIDs, and encode URLs safely.</li>
                <li><strong>For Designers:</strong> Extract color palettes, convert image formats (WEBP to PNG), and compress assets for faster page loads.</li>
                <li><strong>For SEO Experts:</strong> Analyze meta tags, count words and characters, and generate clean schemas.</li>
                <li><strong>For Network Admins:</strong> Check IP addresses, lookup DNS records, and format MAC addresses.</li>
              </ul>

              <p style="margin-top: var(--space-16);">
                Bookmark ToolStaq today and never waste time searching for individual "online calculators" or "formatters" again. Our unified dashboard puts everything you need in one, fast-loading interface.
              </p>
            </div>
          </article>
        </div>

        {/* Right Column: Sidebar (30%) */}
        <aside style="flex: 1 1 300px; display: flex; flex-direction: column; gap: var(--space-32);">

          {/* Categories Widget */}
          <div class="category-card" style="cursor: default; transition: none; transform: none; padding: var(--space-24);">
            <h3 style="font-size: 18px; font-weight: 800; border-bottom: 2px solid var(--color-border-default); padding-bottom: var(--space-12); margin-bottom: var(--space-16); color: var(--color-text-primary);">Tool Categories</h3>
            <ul style="display: flex; flex-direction: column; gap: var(--space-12); list-style: none; padding: 0;">
              {categories.map((category) => {
                const toolCount = toolsData.filter(t => t.cat === category.id).length;
                return (
                  <li>
                    <a href={`#popular-tools`} class="sidebar-category-link" style="display: flex; justify-content: space-between; align-items: center; color: var(--color-text-primary); text-decoration: none; font-weight: 600;">
                      <span class="hover-underline">{category.name}</span>
                      <span style="background: var(--color-bg-primary); border: 2px solid var(--color-border-default); border-radius: 12px; padding: 2px 8px; font-size: 12px; font-weight: 700;">{toolCount}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* AdSense Sidebar Unit (Sticky for high viewability) */}
          <div style="position: sticky; top: 100px;">
            <div class="ad-placeholder" style="width: 100%; height: 600px;">
              Half Page / Skyscraper<br />(300 x 600)<br /><span style="font-size: 12px; font-weight: normal; margin-top: 8px; display: block;">Sticky Sidebar Ad<br />High Viewability</span>
            </div>
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
