/**
 * structure.test.mjs — source-level invariants for the site IA.
 * Runs without a build (reads source files). Part of `npm test`.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const EXPECTED_PAGES = [
  'index', 'services', 'agentic-ai', 'finance-ai', 'subscriptions', 'industries',
  'case-studies', 'about', 'contact', 'faq', 'partners', 'careers', 'privacy',
  'terms', 'demo', 'roi-calculator', 'mission-control', '404',
];

const AI_PAGES = [
  'index', 'services', 'agentic-ai', 'finance-ai', 'subscriptions',
  'industries', 'case-studies', 'about', 'contact', 'faq',
];

test('all expected pages exist', () => {
  for (const p of EXPECTED_PAGES) {
    assert.ok(existsSync(`src/pages/${p}.astro`), `missing page: ${p}.astro`);
  }
});

test('every page uses the BaseLayout shell', () => {
  for (const p of EXPECTED_PAGES) {
    const src = readFileSync(`src/pages/${p}.astro`, 'utf8');
    assert.match(src, /BaseLayout/, `${p}.astro does not use BaseLayout`);
    assert.match(src, /path=/, `${p}.astro does not set a canonical path`);
  }
});

test('nav + footer links resolve to real pages', () => {
  const site = readFileSync('src/data/site.ts', 'utf8');
  const hrefs = [...site.matchAll(/href:\s*'([^']+)'/g)].map((m) => m[1]);
  const internal = hrefs.filter((h) => h.startsWith('/'));
  assert.ok(internal.length >= 10, 'expected a populated internal nav/footer');
  for (const h of internal) {
    const slug = h.replace(/^\//, '').replace(/\/$/, '') || 'index';
    assert.ok(existsSync(`src/pages/${slug}.astro`), `nav/footer link has no page: ${h}`);
  }
});

test('content pages wire an on-page AI agent (AI everywhere)', () => {
  for (const p of AI_PAGES) {
    const src = readFileSync(`src/pages/${p}.astro`, 'utf8');
    assert.match(src, /agent=/, `${p}.astro is missing an on-page AI agent`);
  }
});

test('legal pages do not embed an AI agent', () => {
  for (const p of ['privacy', 'terms']) {
    const src = readFileSync(`src/pages/${p}.astro`, 'utf8');
    assert.doesNotMatch(src, /\sagent=/, `${p}.astro should not embed an AI agent`);
  }
});
