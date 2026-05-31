/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { Layout } from '../components/Layout.jsx'

export const ContactView = () => {
  return (
    <Layout title="Contact Us | ToolStaq" description="Contact the ToolStaq team for inquiries, bug reports, and feature requests.">
      <div class="container" style="padding-top: var(--space-32); padding-bottom: var(--space-48);">
        <div class="workspace-panel">
          <h1 style="margin-bottom: var(--space-24);">Contact Us</h1>
          <div style="line-height: 1.8;">
            <p>We'd love to hear from you. Whether you have a feature request, found a bug, or just want to say hello, feel free to reach out.</p>
            <div class="tool-card" style="margin-top: var(--space-24); padding: var(--space-24);">
              <p style="margin: 0; font-size: 1.1em;">
                <strong>Email:</strong> <a href="mailto:toolstaq@gmail.com" style="color: var(--color-accent-focus); text-decoration: underline;">contact@toolstaq.online</a>
              </p>
            </div>
            <p style="margin-top: var(--space-24); color: var(--color-text-secondary); font-size: 0.9em;">
              We aim to respond to all inquiries within 48-72 hours.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
