/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { Layout } from '../components/Layout.jsx'

export const ContactView = () => {
  return (
    <Layout title="Contact Us | ToolStaq" description="Contact the ToolStaq team for inquiries, bug reports, and feature requests.">
      <div class="container" style="max-width: 600px; padding-top: var(--space-64); padding-bottom: var(--space-64); text-align: center;">

        <a href="/" class="nav-link" style="display: inline-flex; align-items: center; margin-bottom: var(--space-32); padding: 0;">
          ← Back to Home
        </a>

        {/* Using the elevated tool-card from the new CSS */}
        <div class="tool-card" style="padding: var(--space-48) var(--space-32); align-items: center;">
          <h1 style="font-size: 40px; margin-bottom: var(--space-16);">Contact Support</h1>

          <p style="color: var(--color-text-secondary); font-size: 16px; line-height: 1.6; margin-bottom: var(--space-32);">
            We aim to respond to all inquiries, bug reports, and feature requests within 48 to 72 hours.
          </p>

          <a href="mailto:toolstaq@gmail.com" class="btn btn-filled" style="font-size: 16px; padding: var(--space-16) var(--space-32); width: 100%;">
            Email Us
          </a>
        </div>

      </div>
    </Layout>
  )
}
