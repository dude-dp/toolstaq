/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { Layout } from '../components/Layout.jsx'
import toolsDataRaw from '../alltools.json'

export const CategoriesView = () => {
  const { categories, tools: toolsDataRawList } = toolsDataRaw;
  const toolsData = toolsDataRawList.filter(tool => tool.status === 'live');

  return (
    <Layout title="Tool Categories | ToolStaq" description="Browse all developer tools by category.">
      <div class="container" style="padding-top: var(--space-64); padding-bottom: var(--space-64);">
        <h1 style="margin-bottom: var(--space-48);">Tool Categories</h1>

        <div style="display: flex; flex-direction: column; gap: var(--space-64);">
          {categories.map((cat) => {
            const catTools = toolsData.filter(t => t.cat === cat.id);
            if (catTools.length === 0) return null;

            return (
              <section id={cat.id}>
                <div class="flex-between section-header">
                  <h2>{cat.name}</h2>
                  <span class="tool-badge badge-count">
                    {catTools.length} Tool{catTools.length !== 1 ? 's' : ''}
                  </span>
                </div>

                <div class="tools-grid">
                  {catTools.map((tool) => (
                    <div class={`tool-card tool-item-card data-cat-${tool.cat}`} data-status={tool.status}>
                      <div class="tool-card-header">
                        <span class="tool-badge badge-live">LIVE</span>
                        {tool.searches && (
                          <span class="tool-searches">{tool.searches}</span>
                        )}
                      </div>
                      <div class="tool-card-body">
                        <h3>{tool.name}</h3>
                        <p>{tool.desc}</p>
                      </div>
                      <div class="tool-card-footer">
                        <a href={tool.path} class="btn btn-filled">Open Tool</a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
