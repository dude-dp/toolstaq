/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { Layout } from '../components/Layout.jsx'

export const PasswordGeneratorView = () => {
  return (
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
              <p>We use the browser's native \`window.crypto.getRandomValues\` function. This ensures the output is random and stays completely offline.</p>
            </div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
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
}
