/**
 * build-output.test.mjs — assert the built site contains every route + key artifacts.
 * Skips gracefully if dist/ has not been built yet (so `npm test` works standalone).
 * The `npm run gates` script builds before testing.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';

const DIST = 'dist';

const ROUTES = [
  'index.html',
  'services/index.html',
  'agentic-ai/index.html',
  'finance-ai/index.html',
  'subscriptions/index.html',
  'industries/index.html',
  'case-studies/index.html',
  'about/index.html',
  'contact/index.html',
  'faq/index.html',
  'partners/index.html',
  'careers/index.html',
  'privacy/index.html',
  'terms/index.html',
  'demo/index.html',
  'roi-calculator/index.html',
  'mission-control/index.html',
  '404.html',
];

const ASSETS = ['sitemap-index.xml', 'robots.txt', 'favicon.svg', 'site.webmanifest', 'CNAME', 'og-default.jpg'];

test('built site contains all page routes', (t) => {
  if (!existsSync(DIST)) {
    t.skip('dist/ not built — run `npm run build` first');
    return;
  }
  for (const r of ROUTES) {
    assert.ok(existsSync(`${DIST}/${r}`), `missing built route: ${r}`);
  }
});

test('built site contains SEO + brand artifacts', (t) => {
  if (!existsSync(DIST)) {
    t.skip('dist/ not built — run `npm run build` first');
    return;
  }
  for (const a of ASSETS) {
    assert.ok(existsSync(`${DIST}/${a}`), `missing artifact: ${a}`);
  }
});
