/**
 * toolstaq-worker — Companion Cloudflare Worker
 *
 * This is a standalone Worker linked to the toolstaq Cloudflare Pages project.
 * It handles workloads that Pages cannot:
 *   - Cron / scheduled tasks (daily cache warming, cleanup, etc.)
 *   - Subrequests to the Pages site via the PAGES_SITE service binding
 *   - Any future API-only endpoints that need Worker-specific features
 *
 * Deploy:  npm run deploy:worker  (from the repo root)
 * Config:  worker/wrangler.toml
 */

export default {
  // ── HTTP handler ────────────────────────────────────────────────────────────
  // Forwards all normal HTTP requests to the Pages site via the service binding.
  // This lets you point a custom route to this Worker and still serve the Pages
  // frontend, while adding Worker-specific middleware (auth, rate-limiting, etc.)
  async fetch(request, env, ctx) {
    // If the PAGES_SITE binding is configured, proxy through to Pages.
    if (env.PAGES_SITE) {
      return env.PAGES_SITE.fetch(request);
    }

    // Fallback response when the binding is not yet configured locally.
    return new Response(JSON.stringify({
      service: "toolstaq-worker",
      status: "running",
      note: "PAGES_SITE service binding is not configured in this environment.",
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  },

  // ── Scheduled (Cron) handler ────────────────────────────────────────────────
  // Triggered daily at midnight UTC (see wrangler.toml [triggers] crons).
  // Extend this function with whatever background tasks you need:
  //   - Purging stale cache entries
  //   - Syncing external data sources
  //   - Sending periodic reports
  async scheduled(event, env, ctx) {
    console.log(`[toolstaq-worker] Scheduled task triggered: ${event.cron} at ${new Date().toISOString()}`);

    // ── Example: warm the Pages site cache ────────────────────────────────────
    // Uncomment once your PAGES_SITE binding is live.
    //
    // const routesToWarm = ['/', '/tools/json', '/tools/word-counter'];
    // await Promise.all(routesToWarm.map(path =>
    //   env.PAGES_SITE.fetch(new Request(`https://toolstaq.online${path}`))
    // ));
    // console.log('[toolstaq-worker] Cache warmed for', routesToWarm.length, 'routes.');

    console.log('[toolstaq-worker] Scheduled task complete.');
  },
};
