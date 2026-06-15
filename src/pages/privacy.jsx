/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { Layout } from '../components/Layout.jsx'

export const PrivacyPolicyView = () => {
  return (
    <Layout title="Privacy Policy | ToolStaq" description="ToolStaq Privacy Policy - Data Processing and Google AdSense Cookies.">
      <div class="container" style="max-width: 760px; padding-top: var(--space-64); padding-bottom: var(--space-64);">
        
        <a href="/" class="nav-link" style="display: inline-flex; align-items: center; margin-bottom: var(--space-32); padding: 0;">
          ← Back to Home
        </a>
        
        <article>
          <header style="border-bottom: 1px solid var(--color-border); padding-bottom: var(--space-24); margin-bottom: var(--space-32);">
            <h1 style="font-size: 48px; margin-bottom: var(--space-8);">Privacy Policy</h1>
            <p style="color: var(--color-text-secondary); font-size: 14px;">
              Effective Date: <time>{new Date().toLocaleDateString()}</time>
            </p>
          </header>

          <div style="display: flex; flex-direction: column; gap: var(--space-32); color: var(--color-text-secondary); font-size: 16px; line-height: 1.8;">
            <section>
              <h2 style="font-size: 24px; color: var(--color-text); margin-bottom: var(--space-12);">1. Data Processing</h2>
              <p>ToolStaq is designed as a privacy-first utility platform. All data processing (such as JSON formatting, Word counting, and Base64 encoding) occurs entirely locally within your browser using client-side JavaScript. We do not transmit, save, or store your input data on our servers.</p>
            </section>
            
            <section>
              <h2 style="font-size: 24px; color: var(--color-text); margin-bottom: var(--space-12);">2. Third-Party Vendors and Cookies</h2>
              <p>We use third-party advertising companies, including Google, to serve ads when you visit our website. These companies may use cookies to serve ads based on your prior visits to this website or other websites.</p>
              <ul style="margin-left: var(--space-24); margin-top: var(--space-16); display: flex; flex-direction: column; gap: var(--space-8);">
                <li>Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to ToolStaq and/or other sites on the Internet.</li>
                <li>Users may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" target="_blank" rel="noopener" style="color: var(--color-text); text-decoration: underline; text-underline-offset: 4px;">Google Ads Settings</a>.</li>
              </ul>
            </section>

            <section>
              <h2 style="font-size: 24px; color: var(--color-text); margin-bottom: var(--space-12);">3. External Links</h2>
              <p>For more information on how Google uses data when you use our partners' sites or apps, please visit <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener" style="color: var(--color-text); text-decoration: underline; text-underline-offset: 4px;">Google's Privacy &amp; Terms</a>.</p>
            </section>
          </div>
        </article>
        
      </div>
    </Layout>
  )
}
