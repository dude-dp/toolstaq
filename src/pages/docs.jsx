/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { Layout } from '../components/Layout.jsx'

export const DocsView = () => {
  return (
    <Layout title="Documentation | ToolStaq" description="Documentation is coming soon.">
      <div class="container" style="padding-top: var(--space-64); padding-bottom: var(--space-64);">
        <h1 style="margin-bottom: var(--space-48);">Documentation</h1>

        <div class="tools-grid">
          <div class="tool-card" style="grid-column: 1 / -1; min-height: 400px; display: flex; align-items: center; justify-content: center; text-align: center;">
            <div>
              <h2 style="margin-bottom: var(--space-16);">Documentation on the way</h2>
              <p class="body-lead">We are currently building out the complete documentation for all our edge-rendered utilities.</p>
              <a href="/" class="btn btn-primary" style="margin-top: var(--space-24);">Return to Home</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
