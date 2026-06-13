// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// AgentX2.ai — static-first site for GitHub Pages.
// Docs: docs/01-architecture/TECH_STACK.md
// https://astro.build/config
export default defineConfig({
  site: 'https://agentx2.ai',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});
