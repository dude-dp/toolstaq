/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { Hono } from 'hono'
import { Layout } from './components/Layout.jsx'
import { JsonFormatterView } from './tools/json.jsx'

const app = new Hono()

// Root Tool Registry Data Model
const toolsData = [
  { id: "json", name: "JSON Formatter", desc: "Format, compress, and check parse validation arrays.", cat: "developer", path: "/tools/json", status: "live" },
  { id: "base64", name: "Base64 Encoder", desc: "Convert files and text payload fragments securely.", cat: "developer", path: "/tools/base64", status: "live" },
  { id: "word-counter", name: "Word Counter", desc: "Analyze characters, sentences, reading duration indexes.", cat: "utilities", path: "/tools/word-counter", status: "live" },
  { id: "password-gen", name: "Password Generator", desc: "Compile highly randomized cryptographic security sequences.", cat: "security", path: "/tools/password-generator", status: "live" },
  { id: "uuid-generator", name: "UUID / ULID Generator", desc: "Generate cryptographically secure random UUID or sortable ULID keys.", cat: "security", path: "/tools/uuid-generator", status: "live" },
  { id: "jwt-decoder", name: "JWT Debugger", desc: "Decode cryptographically compiled web token fragments.", cat: "security", path: "#", status: "coming-soon" },
  { id: "regex-tester", name: "Regex Validator", desc: "Write and parse matching test expressions natively.", cat: "utilities", path: "#", status: "coming-soon" }
]

const categories = [
  { id: "developer", name: "Developer Tools", desc: "JSON configurations, parsers, and stream format engines." },
  { id: "utilities", name: "Text Utilities", desc: "Analysis frameworks, counting arrays, mutation matrices." },
  { id: "security", name: "Security & Encryption", desc: "Cryptographic payload encoders, passwords, token decoders." }
]

app.get('/', (c) => {
  return c.html(
    <Layout title="ToolStaq | Instant Developer Tools Hub">
      {/* 1. ANIMATED HERO CAROUSEL / TICKER SECTION */}
      <section class="hero-container">
        <h1 class="hero-title">
          All your developer tools for
          <div class="ticker-wrapper">
            <ul class="ticker-list">
              <li class="ticker-item">JSON Parsing</li>
              <li class="ticker-item">Data Encryption</li>
              <li class="ticker-item">Text Analytics</li>
              <li class="ticker-item">JSON Parsing</li> {/* Duplicate terminal element for seamless looping animation */}
            </ul>
          </div>
        </h1>
        <p style="font-size: 16px; color: var(--color-text-secondary); max-width: 600px; margin: 0 auto;">
          Privacy-first, edge-rendered developer utilities. Zero hydration payload tracking, zero background processing lags.
        </p>
      </section>

      {/* 2. CORE CATEGORIES ARCHITECTURE GRID */}
      <section>
        <h2 style="font-size: 28px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: var(--space-4);">
          Select Category Array
        </h2>
        <div class="categories-container">
          {categories.map((category) => (
            <div class="category-card" data-category-target={category.id} role="button" tabindex="0">
              <h3>{category.name}</h3>
              <p>{category.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DYNAMIC TOOLS COMPILATION WORKSPACE PANEL */}
      <section id="tools-display-panel" style="display: none; padding-top: var(--space-4);">
        <div class="tools-workspace-header">
          <h2 id="active-category-title" style="font-size: 36px; font-weight: 800; margin: 0;">
            Utilities Portfolio
          </h2>
          <span style="font-size: 14px; font-weight: 700; color: var(--color-action-default); background: var(--color-bg-secondary); padding: 4px 12px; border: 2px solid var(--color-border-default);">
            ACTIVE SELECTION
          </span>
        </div>

        <div class="tools-grid">
          {toolsData.map((tool) => (
            <div class={`tool-card tool-item-card data-cat-${tool.cat}`} data-status={tool.status}>
              <div class="tool-card-header">
                <span class={`tool-badge ${tool.status === 'coming-soon' ? 'coming-soon' : ''}`}>
                  {tool.status === 'live' ? 'EDGE LIVE' : 'PIPELINE'}
                </span>
              </div>
              <h3 class="tool-card-title">{tool.name}</h3>
              <p class="tool-card-desc">{tool.desc}</p>
              {tool.status === 'live' ? (
                <a href={tool.path} class="tool-card-btn">Launch Workspace</a>
              ) : (
                <button onclick="alert('Tool integration pipeline active. Scheduled for upcoming edge deployment loop.')" class="tool-card-btn" style="opacity: 0.5; cursor: not-allowed;">
                  In Development
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. CLIENT-SIDE LIGHTWEIGHT WORKSPACE ROUTER */}
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('DOMContentLoaded', () => {
          const cards = document.querySelectorAll('.category-card');
          const workspace = document.getElementById('tools-display-panel');
          const workspaceTitle = document.getElementById('active-category-title');
          const allToolItems = document.querySelectorAll('.tool-item-card');

          cards.forEach(card => {
            card.addEventListener('click', () => {
              const selectedCat = card.getAttribute('data-category-target');
              
              // Handle active states on current category grid elements
              cards.forEach(c => c.classList.remove('active'));
              card.classList.add('active');

              // Update panel layout headings dynamically
              const elementHeading = card.querySelector('h3').textContent;
              workspaceTitle.textContent = elementHeading;

              // Display the container seamlessly
              workspace.style.display = 'block';

              // Map filtering over nested utility references
              allToolItems.forEach(tool => {
                if(tool.classList.contains('data-cat-' + selectedCat)) {
                  tool.classList.add('visible');
                } else {
                  tool.classList.remove('visible');
                }
              });

              // Fluid window alignment adjustments for smaller viewport profiles
              workspace.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
          });
        });
      `}} />
    </Layout>
  )
})


// Tool 1: JSON Formatter & Validator
app.get('/tools/json', (c) => {
  return c.html(<JsonFormatterView />)
})

// Backwards compatibility alias
app.get('/tools/json-formatter', (c) => {
  return c.redirect('/tools/json')
})

// Tool 2: Word & Character Counter
app.get('/tools/word-counter', (c) => {
  return c.html(
    <Layout title="Word Counter & Character Counter | ToolStaq" description="Analyze your text length, count characters, words, sentences, paragraphs, reading speed, and keyword occurrences instantly.">
      <div class="container">
        <a href="/" class="back-btn">
          ← Back to Tools Hub
        </a>

        <div class="tool-view-layout">
          <div class="workspace-panel">
            <div class="workspace-header">
              <h1 class="workspace-title">Word & Character Counter</h1>
              <p class="workspace-desc">Analyze your writing speed and complexity metrics in real-time. Simply type or paste your content.</p>
            </div>

            <div class="stats-grid">
              <div class="stat-box">
                <div class="stat-value" id="stat-words">0</div>
                <div class="stat-label">Words</div>
              </div>
              <div class="stat-box">
                <div class="stat-value" id="stat-chars">0</div>
                <div class="stat-label">Characters</div>
              </div>
              <div class="stat-box">
                <div class="stat-value" id="stat-sentences">0</div>
                <div class="stat-label">Sentences</div>
              </div>
              <div class="stat-box">
                <div class="stat-value" id="stat-paragraphs">0</div>
                <div class="stat-label">Paragraphs</div>
              </div>
            </div>

            <div class="form-group">
              <textarea 
                class="text-area" 
                id="text-input" 
                placeholder="Start typing or paste your essay, email, or article here..."
                style="height: 240px;"
              ></textarea>
            </div>

            <div class="stats-grid" style="grid-template-columns: repeat(2, 1fr); margin-top: 1rem;">
              <div class="stat-box">
                <div class="stat-value" id="stat-read-time">0m 0s</div>
                <div class="stat-label">Estimated Reading Time</div>
              </div>
              <div class="stat-box">
                <div class="stat-value" id="stat-speak-time">0m 0s</div>
                <div class="stat-label">Estimated Speaking Time</div>
              </div>
            </div>
            
            <div class="result-panel" id="density-panel" style="display:none;">
              <div class="result-title" style="color: var(--primary);">Top Keyword Density</div>
              <div id="density-list" style="font-size:0.9rem; display:flex; flex-wrap:wrap; gap:0.5rem;"></div>
            </div>
          </div>

          <div class="info-sidebar">
            <div class="sidebar-card">
              <h3>ℹ️ Calculations</h3>
              <p>Reading time is computed at 225 words per minute. Speaking time is based on 130 words per minute.</p>
            </div>
            <div class="sidebar-card">
              <h3>🌐 Clean Content</h3>
              <p>Extra whitespaces, double tabs, and formatting marks are auto-normalized in the telemetry counters.</p>
            </div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        const textInput = document.getElementById('text-input');
        const statWords = document.getElementById('stat-words');
        const statChars = document.getElementById('stat-chars');
        const statSentences = document.getElementById('stat-sentences');
        const statParagraphs = document.getElementById('stat-paragraphs');
        const statReadTime = document.getElementById('stat-read-time');
        const statSpeakTime = document.getElementById('stat-speak-time');
        const densityPanel = document.getElementById('density-panel');
        const densityList = document.getElementById('density-list');

        function formatDuration(minutesDecimal) {
          const totalSeconds = Math.round(minutesDecimal * 60);
          const minutes = Math.floor(totalSeconds / 60);
          const seconds = totalSeconds % 60;
          return \`\${minutes}m \${seconds}s\`;
        }

        textInput.addEventListener('input', () => {
          const text = textInput.value;
          
          // Characters
          statChars.textContent = text.length;
          
          // Words
          const wordsArray = text.trim().split(/\\s+/).filter(w => w.length > 0);
          const wordsCount = wordsArray.length;
          statWords.textContent = wordsCount;
          
          // Sentences
          const sentencesCount = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
          statSentences.textContent = sentencesCount;
          
          // Paragraphs
          const paragraphsCount = text.split(/\\n+/).filter(p => p.trim().length > 0).length;
          statParagraphs.textContent = paragraphsCount;
          
          // Speed estimations
          statReadTime.textContent = formatDuration(wordsCount / 225);
          statSpeakTime.textContent = formatDuration(wordsCount / 130);
          
          // Density List
          if (wordsCount > 3) {
            const frequency = {};
            wordsArray.forEach(word => {
              const cleaned = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
              if (cleaned.length > 2) {
                frequency[cleaned] = (frequency[cleaned] || 0) + 1;
              }
            });
            
            const sorted = Object.entries(frequency)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 5);
              
            densityList.innerHTML = '';
            if (sorted.length > 0) {
              densityPanel.style.display = 'block';
              sorted.forEach(([word, count]) => {
                const percent = ((count / wordsCount) * 100).toFixed(1);
                const badge = document.createElement('span');
                badge.className = 'tool-badge';
                badge.style.padding = '0.3rem 0.7rem';
                badge.style.borderColor = 'rgba(217, 70, 239, 0.2)';
                badge.style.color = '#ff77ff';
                badge.textContent = \`\${word} (\${count}x - \${percent}%)\`;
                densityList.appendChild(badge);
              });
            } else {
              densityPanel.style.display = 'none';
            }
          } else {
            densityPanel.style.display = 'none';
          }
        });
      ` }} />
    </Layout>
  )
})

// Tool 3: Base64 Encoder / Decoder
app.get('/tools/base64', (c) => {
  return c.html(
    <Layout title="Base64 Encoder & Decoder | ToolStaq" description="Instantly convert plain text to Base64 code or decode Base64 strings back to text safely and quickly.">
      <div class="container">
        <a href="/" class="back-btn">
          ← Back to Tools Hub
        </a>

        <div class="tool-view-layout">
          <div class="workspace-panel">
            <div class="workspace-header">
              <h1 class="workspace-title">Base64 Encoder / Decoder</h1>
              <p class="workspace-desc">Securely encode regular string data into Base64 format, or convert standard Base64 back into human-readable text.</p>
            </div>

            <div class="form-group">
              <label class="form-label" for="base64-input">Input Data:</label>
              <textarea 
                class="text-area" 
                id="base64-input" 
                placeholder="Paste or type content here..."
                style="height: 180px;"
              ></textarea>
            </div>

            <div class="btn-row">
              <button class="btn btn-primary" id="btn-encode">Encode Base64</button>
              <button class="btn" id="btn-decode">Decode Base64</button>
              <button class="btn" id="btn-base64-clear" style="margin-left: auto;">Clear</button>
            </div>

            <div class="result-panel" id="base64-result-panel" style="display: none;">
              <div class="result-title">
                <span>Result</span>
                <button class="btn" id="btn-base64-copy" style="padding: 0.2rem 0.6rem; font-size: 0.75rem;">Copy Result</button>
              </div>
              <textarea class="text-area" id="base64-output" readonly style="height: 180px; background: rgba(0,0,0,0.3); font-family: monospace;"></textarea>
            </div>
          </div>

          <div class="info-sidebar">
            <div class="sidebar-card">
              <h3>🔤 Base64 Basics</h3>
              <p>Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format by translating it into a radix-64 representation.</p>
            </div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        const bInput = document.getElementById('base64-input');
        const bOutput = document.getElementById('base64-output');
        const btnEncode = document.getElementById('btn-encode');
        const btnDecode = document.getElementById('btn-decode');
        const btnClear = document.getElementById('btn-base64-clear');
        const btnCopy = document.getElementById('btn-base64-copy');
        const rPanel = document.getElementById('base64-result-panel');

        btnEncode.addEventListener('click', () => {
          const val = bInput.value;
          if (!val) return;
          try {
            // Support UTF-8 encoding safely in browsers
            const utf8Bytes = new TextEncoder().encode(val);
            const binString = Array.from(utf8Bytes, (byte) => String.fromCharCode(byte)).join("");
            const encoded = btoa(binString);
            
            rPanel.style.display = 'block';
            bOutput.value = encoded;
            bInput.classList.remove('input-error');
          } catch(e) {
            alert('Failed to encode: ' + e.message);
          }
        });

        btnDecode.addEventListener('click', () => {
          const val = bInput.value.trim();
          if (!val) return;
          try {
            const binString = atob(val);
            const bytes = Uint8Array.from(binString, (char) => char.charCodeAt(0));
            const decoded = new TextDecoder().decode(bytes);
            
            rPanel.style.display = 'block';
            bOutput.value = decoded;
            bInput.classList.remove('input-error');
          } catch(e) {
            bInput.classList.add('input-error');
            alert('Invalid Base64 string entered. Decode failed.');
          }
        });

        btnClear.addEventListener('click', () => {
          bInput.value = '';
          bOutput.value = '';
          rPanel.style.display = 'none';
          bInput.classList.remove('input-error');
        });

        btnCopy.addEventListener('click', () => {
          navigator.clipboard.writeText(bOutput.value);
          const originalText = btnCopy.textContent;
          btnCopy.textContent = 'Copied!';
          setTimeout(() => btnCopy.textContent = originalText, 1500);
        });
      ` }} />
    </Layout>
  )
})

// Tool 4: UUID & ULID Generator
app.get('/tools/uuid-generator', (c) => {
  return c.html(
    <Layout title="UUID & ULID Generator | ToolStaq" description="Generate single or multiple UUID v4 and lexicographically sortable ULID strings instantly at the edge.">
      <div class="container">
        <a href="/" class="back-btn">
          ← Back to Tools Hub
        </a>

        <div class="tool-view-layout">
          <div class="workspace-panel">
            <div class="workspace-header">
              <h1 class="workspace-title">UUID / ULID Generator</h1>
              <p class="workspace-desc">Generate cryptographically secure UUID version 4 or ULID (Universally Unique Lexicographically Sortable Identifier) keys.</p>
            </div>

            <div class="form-group">
              <label class="form-label" for="generator-type">Identifier Type:</label>
              <select id="generator-type" class="search-input" style="padding: 0.6rem 1rem; border-radius: 8px;">
                <option value="uuid">UUID v4 (Standard Unique Key)</option>
                <option value="ulid">ULID (Lexicographically Sortable)</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="generator-count">Quantity to generate (1 - 100):</label>
              <input type="number" id="generator-count" min="1" max="100" value="5" class="search-input" style="padding: 0.6rem 1rem; border-radius: 8px; width: 120px;" />
            </div>

            <div class="btn-row">
              <button class="btn btn-primary" id="btn-generate">Generate IDs</button>
              <button class="btn" id="btn-gen-copy" style="margin-left: auto;">Copy All</button>
            </div>

            <div class="result-panel" style="margin-top: 1.5rem;">
              <textarea class="text-area" id="generator-output" readonly style="height: 200px; background: rgba(0,0,0,0.3); font-family: monospace;"></textarea>
            </div>
          </div>

          <div class="info-sidebar">
            <div class="sidebar-card">
              <h3>ℹ️ ULID vs UUID</h3>
              <p>ULIDs are lexicographically sortable by their creation timestamp, making them optimal for database indexing compared to purely random UUID v4 keys.</p>
            </div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        const genType = document.getElementById('generator-type');
        const genCount = document.getElementById('generator-count');
        const btnGenerate = document.getElementById('btn-generate');
        const btnCopy = document.getElementById('btn-gen-copy');
        const genOutput = document.getElementById('generator-output');

        // Fast browser-compatible UUIDv4 generator
        function generateUUID() {
          return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
          );
        }

        // Fast browser-compatible ULID generator (crockford base32)
        function generateULID() {
          const ENCODING = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
          const TIME_LEN = 10;
          const RAND_LEN = 16;
          
          let now = Date.now();
          let timeChars = '';
          for (let i = TIME_LEN - 1; i >= 0; i--) {
            const mod = now % 32;
            timeChars = ENCODING.charAt(mod) + timeChars;
            now = Math.floor(now / 32);
          }
          
          let randChars = '';
          const randomBytes = crypto.getRandomValues(new Uint8Array(RAND_LEN));
          for (let i = 0; i < RAND_LEN; i++) {
            randChars += ENCODING.charAt(randomBytes[i] % 32);
          }
          
          return timeChars + randChars;
        }

        function runGeneration() {
          let count = parseInt(genCount.value, 10);
          if (isNaN(count) || count < 1) count = 1;
          if (count > 100) count = 100;
          genCount.value = count;
          
          const type = genType.value;
          const ids = [];
          for (let i = 0; i < count; i++) {
            ids.push(type === 'uuid' ? generateUUID() : generateULID());
          }
          
          genOutput.value = ids.join('\\n');
        }

        btnGenerate.addEventListener('click', runGeneration);
        btnCopy.addEventListener('click', () => {
          navigator.clipboard.writeText(genOutput.value);
          const originalText = btnCopy.textContent;
          btnCopy.textContent = 'Copied!';
          setTimeout(() => btnCopy.textContent = originalText, 1500);
        });

        // Generate initial batch on load
        runGeneration();
      ` }} />
    </Layout>
  )
})

// Tool 5: Password Generator
app.get('/tools/password-generator', (c) => {
  return c.html(
    <Layout title="Random Password Generator | ToolStaq" description="Create cryptographically secure random passwords with adjustable length and character types.">
      <div class="container">
        <a href="/" class="back-btn">
          ← Back to Tools Hub
        </a>

        <div class="tool-view-layout">
          <div class="workspace-panel">
            <div class="workspace-header">
              <h1 class="workspace-title">Random Password Generator</h1>
              <p class="workspace-desc">Generate secure passwords using client-side Web Cryptography APIs. Protect your online accounts with robust entropy.</p>
            </div>

            <div class="form-group" style="background: rgba(0,0,0,0.3); padding: 1.25rem; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; gap: 1rem; border: 1px solid var(--card-border);">
              <input type="text" id="pwd-display" readonly style="font-family: monospace; font-size: 1.25rem; background: transparent; border: none; outline: none; color: #ffffff; width: 100%; letter-spacing: 0.05em;" />
              <button class="btn btn-primary" id="btn-pwd-copy" style="padding: 0.5rem 1rem; font-size: 0.85rem; flex-shrink: 0;">Copy</button>
            </div>

            <div class="form-group">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="form-label" style="margin-bottom: 0;">Password Length: <strong id="length-val" style="color: var(--primary);">16</strong></span>
              </div>
              <input type="range" id="pwd-length" class="range-slider" min="6" max="64" value="16" />
            </div>

            <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" id="pwd-upper" class="checkbox-input" checked />
                Include Uppercase (A-Z)
              </label>
              <label class="checkbox-label">
                <input type="checkbox" id="pwd-lower" class="checkbox-input" checked />
                Include Lowercase (a-z)
              </label>
              <label class="checkbox-label">
                <input type="checkbox" id="pwd-nums" class="checkbox-input" checked />
                Include Numbers (0-9)
              </label>
              <label class="checkbox-label">
                <input type="checkbox" id="pwd-syms" class="checkbox-input" checked />
                Include Symbols (!@#$%^&*)
              </label>
            </div>

            <div class="form-group" style="margin-top: 1.5rem; display: flex; align-items: center; gap: 1rem;">
              <span class="form-label" style="margin-bottom: 0;">Security Strength:</span>
              <span id="pwd-strength" class="tool-badge" style="font-weight: 700; padding: 0.3rem 0.8rem;">STRONG</span>
            </div>

            <div class="btn-row" style="margin-top: 1.5rem;">
              <button class="btn" id="btn-pwd-generate" style="width: 100%; justify-content: center; background: rgba(255,255,255,0.04); border-color: var(--primary);">
                🔄 Re-generate Password
              </button>
            </div>
          </div>

          <div class="info-sidebar">
            <div class="sidebar-card">
              <h3>🔒 Local Safety</h3>
              <p>We use the browser's native `window.crypto.getRandomValues` function. This ensures the output is random and stays completely offline.</p>
            </div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        const pwdDisplay = document.getElementById('pwd-display');
        const pwdLength = document.getElementById('pwd-length');
        const lengthVal = document.getElementById('length-val');
        
        const pwdUpper = document.getElementById('pwd-upper');
        const pwdLower = document.getElementById('pwd-lower');
        const pwdNums = document.getElementById('pwd-nums');
        const pwdSyms = document.getElementById('pwd-syms');
        
        const pwdStrength = document.getElementById('pwd-strength');
        const btnPwdCopy = document.getElementById('btn-pwd-copy');
        const btnPwdGenerate = document.getElementById('btn-pwd-generate');

        const CHARS = {
          upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          lower: 'abcdefghijklmnopqrstuvwxyz',
          nums: '0123456789',
          syms: '!@#$%^&*()_+-=[]{}|;:,.<>?'
        };

        function generatePassword() {
          const len = parseInt(pwdLength.value, 10);
          lengthVal.textContent = len;
          
          let pool = '';
          if (pwdUpper.checked) pool += CHARS.upper;
          if (pwdLower.checked) pool += CHARS.lower;
          if (pwdNums.checked) pool += CHARS.nums;
          if (pwdSyms.checked) pool += CHARS.syms;
          
          if (!pool) {
            pwdDisplay.value = 'Select at least one type';
            pwdStrength.textContent = 'NONE';
            pwdStrength.style.color = '#ef4444';
            pwdStrength.style.borderColor = 'rgba(239, 68, 68, 0.2)';
            return;
          }
          
          let pwd = '';
          const randomValues = crypto.getRandomValues(new Uint32Array(len));
          for (let i = 0; i < len; i++) {
            pwd += pool.charAt(randomValues[i] % pool.length);
          }
          
          pwdDisplay.value = pwd;
          
          // Evaluate Strength
          let entropy = Math.log2(pool.length) * len;
          if (entropy < 40) {
            pwdStrength.textContent = 'WEAK';
            pwdStrength.style.color = '#ef4444';
            pwdStrength.style.borderColor = 'rgba(239, 68, 68, 0.2)';
          } else if (entropy < 60) {
            pwdStrength.textContent = 'MEDIUM';
            pwdStrength.style.color = '#f59e0b';
            pwdStrength.style.borderColor = 'rgba(245, 158, 11, 0.2)';
          } else if (entropy < 85) {
            pwdStrength.textContent = 'STRONG';
            pwdStrength.style.color = '#06b6d4';
            pwdStrength.style.borderColor = 'rgba(6, 182, 212, 0.2)';
          } else {
            pwdStrength.textContent = 'SECURE & MILITARY';
            pwdStrength.style.color = '#10b981';
            pwdStrength.style.borderColor = 'rgba(16, 185, 129, 0.2)';
          }
        }

        pwdLength.addEventListener('input', generatePassword);
        [pwdUpper, pwdLower, pwdNums, pwdSyms].forEach(cb => cb.addEventListener('change', generatePassword));
        btnPwdGenerate.addEventListener('click', generatePassword);

        btnPwdCopy.addEventListener('click', () => {
          if (pwdDisplay.value === 'Select at least one type') return;
          navigator.clipboard.writeText(pwdDisplay.value);
          const originalText = btnPwdCopy.textContent;
          btnPwdCopy.textContent = 'Copied!';
          setTimeout(() => btnPwdCopy.textContent = originalText, 1500);
        });

        // Run on load
        generatePassword();
      ` }} />
    </Layout>
  )
})

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
