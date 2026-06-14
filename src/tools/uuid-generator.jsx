/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { Layout } from '../components/Layout.jsx'
import { Button } from '../components/ui/Button.jsx'
import { Input } from '../components/ui/Input.jsx'
import { Textarea } from '../components/ui/Textarea.jsx'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card.jsx'

export const UuidGeneratorView = () => {
  return (
    <Layout title="UUID & ULID Generator | ToolStaq" description="Generate single or multiple UUID v4 and lexicographically sortable ULID strings instantly at the edge.">
      <div class="container">
        <a href="/" class="back-btn mb-6 inline-flex text-muted-foreground hover:text-foreground">
          ← Back to Tools Hub
        </a>

        <div class="tool-view-layout">
          <div class="workspace-panel">
            <div class="workspace-header mb-8">
              <h1 class="workspace-title text-3xl font-bold tracking-tight mb-2">UUID / ULID Generator</h1>
              <p class="workspace-desc text-muted-foreground">Generate cryptographically secure UUID version 4 or ULID (Universally Unique Lexicographically Sortable Identifier) keys.</p>
            </div>

            <div class="flex flex-col gap-6">
              <div class="form-group w-full flex flex-col gap-1.5">
                <label class="form-label text-sm font-medium leading-none" for="generator-type">Identifier Type:</label>
                <select id="generator-type" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <option value="uuid">UUID v4 (Standard Unique Key)</option>
                  <option value="ulid">ULID (Lexicographically Sortable)</option>
                </select>
              </div>

              <Input 
                id="generator-count" 
                type="number" 
                min="1" 
                max="100" 
                value="5" 
                label="Quantity to generate (1 - 100):" 
                class="max-w-[150px]"
              />

              <div class="flex gap-4 items-center">
                <Button variant="primary" id="btn-generate">Generate IDs</Button>
                <Button variant="outline" id="btn-gen-copy" class="ml-auto">Copy All</Button>
              </div>

              <div class="result-panel mt-2">
                <Textarea 
                  id="generator-output" 
                  readonly 
                  class="font-mono bg-black/30 h-[200px]"
                  aria-label="Generated IDs Output"
                />
              </div>
            </div>
          </div>

          <div class="info-sidebar space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>ℹ️ ULID vs UUID</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-muted-foreground">ULIDs are lexicographically sortable by their creation timestamp, making them optimal for database indexing compared to purely random UUID v4 keys.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
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
}
