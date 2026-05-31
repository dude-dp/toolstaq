/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { Layout } from '../components/Layout.jsx'

export const PrivacyPolicyView = () => {
  return (
    <Layout title="Privacy Policy | ToolStaq" description="ToolStaq Privacy Policy - Data Processing and Google AdSense Cookies.">
      <div class="container" style="padding-top: var(--space-32); padding-bottom: var(--space-48);">
        <div class="workspace-panel">
          <h1 style="margin-bottom: var(--space-24);">Privacy Policy</h1>
          <div style="line-height: 1.8;">
             <p><strong>Effective Date: {new Date().toLocaleDateString()}</strong></p>
             <h2 style="margin-top: var(--space-24);">1. Data Processing</h2>
             <p>ToolStaq is designed as a privacy-first utility platform. All data processing (such as JSON formatting, Word counting, and Base64 encoding) occurs entirely locally within your browser using client-side JavaScript. We do not transmit, save, or store your input data on our servers.</p>
             
             <h2 style="margin-top: var(--space-24);">2. Third-Party Vendors and Cookies</h2>
             <p>We use third-party advertising companies, including Google, to serve ads when you visit our website. These companies may use cookies to serve ads based on your prior visits to this website or other websites.</p>
             <ul style="margin-left: var(--space-24); margin-bottom: var(--space-16);">
               <li>Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to ToolStaq and/or other sites on the Internet.</li>
               <li>Users may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" target="_blank" rel="noopener" style="color: var(--color-accent-focus); text-decoration: underline;">Google Ads Settings</a>.</li>
             </ul>
             <p>For more information on how Google uses data when you use our partners' sites or apps, please visit <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener" style="color: var(--color-accent-focus); text-decoration: underline;">Google's Privacy &amp; Terms</a>.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
