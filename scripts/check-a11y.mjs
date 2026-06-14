/**
 * check-a11y.mjs — zero-dependency, static accessibility gate over the built site.
 *
 * Runs after `astro build` and asserts a set of high-precision, WCAG 2.2 Level-A
 * checks that can be verified from static HTML alone (no headless browser):
 *
 *   - exactly one <main> landmark per page            (1.3.1 Info & Relationships)
 *   - every <img> has an alt attribute                (1.1.1 Non-text Content)
 *   - every <a> / <button> has an accessible name     (2.4.4 / 4.1.2 Name, Role, Value)
 *   - every form control has a programmatic label      (1.3.1 / 3.3.2 Labels)
 *   - the viewport meta does not disable zoom          (1.4.4 Resize Text)
 *   - no positive tabindex (focus-order anti-pattern)  (2.4.3 Focus Order)
 *   - no duplicate id values within a page             (4.1.1 / robust name assoc.)
 *
 * This is the static subset of the automated a11y budget tracked as GAP-4 in
 * docs/reviews/gap-analysis.md. Browser-based budgets (Lighthouse/axe over a served
 * build) remain a separate, human-reviewed follow-up.
 *
 * Exit codes: 0 = pass · 1 = a11y failures · 2 = dist/ missing.
 * Docs: docs/02-website/ACCESSIBILITY.md · docs/04-quality/QUALITY_GATES.md
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
if (!existsSync(DIST)) {
  console.error('✗ dist/ not found — run `npm run build` first.');
  process.exit(2);
}

const htmlFiles = readdirSync(DIST, { recursive: true })
  .filter((f) => typeof f === 'string' && f.endsWith('.html'))
  .map((f) => join(DIST, f));

/** Collapse a chunk of inner HTML to its visible text content. */
function textOf(html) {
  return html
    .replace(/<[^>]*>/g, ' ') // strip tags
    .replace(/&[a-z]+;|&#\d+;/gi, ' ') // strip entities
    .replace(/\s+/g, ' ')
    .trim();
}

/** Read an attribute value from an element's opening tag. */
function attr(openTag, name) {
  const m = openTag.match(new RegExp(`\\b${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
  if (!m) return null;
  return (m[2] ?? m[3] ?? m[4] ?? '').trim();
}

/** True when an element (open tag + inner) exposes an accessible name. */
function hasAccessibleName(openTag, inner) {
  if ((attr(openTag, 'aria-label') || '').length > 0) return true;
  if (attr(openTag, 'aria-labelledby')) return true;
  if ((attr(openTag, 'title') || '').length > 0) return true;
  if (textOf(inner).length > 0) return true;
  // An icon link/button can be named by a nested <img alt="…"> or [aria-label].
  const img = inner.match(/<img\b[^>]*>/i);
  if (img && (attr(img[0], 'alt') || '').length > 0) return true;
  if (/\baria-label\s*=\s*["'][^"']+["']/i.test(inner)) return true;
  return false;
}

const FORM_CONTROL = /<(input|select|textarea)\b([^>]*)>/gi;
const SKIP_INPUT_TYPES = new Set(['hidden', 'submit', 'button', 'image', 'reset']);

const failures = [];

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const route = file.replace(DIST, '').replace(/\\/g, '/') || '/';
  const page = [];

  // 1. exactly one <main>
  const mainCount = (html.match(/<main\b/gi) || []).length;
  if (mainCount !== 1) page.push(`expected exactly one <main> landmark, found ${mainCount}`);

  // 2. <img> requires alt
  for (const m of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt\s*=/i.test(m[0])) page.push(`<img> without alt attribute: ${m[0].slice(0, 80)}`);
  }

  // 3. <a> / <button> require an accessible name (skip aria-hidden / disabled)
  for (const tag of ['a', 'button']) {
    const re = new RegExp(`<${tag}\\b([^>]*)>([\\s\\S]*?)</${tag}>`, 'gi');
    for (const m of html.matchAll(re)) {
      const [, attrs, inner] = m;
      if (/\baria-hidden\s*=\s*["']true["']/i.test(attrs)) continue;
      if (tag === 'a' && !/\bhref\s*=/i.test(attrs)) continue; // non-link anchors
      if (!hasAccessibleName(attrs, inner)) {
        page.push(`<${tag}> without accessible name: <${tag}${attrs.slice(0, 60)}>`);
      }
    }
  }

  // 4. form controls require a programmatic label
  const labelForIds = new Set([...html.matchAll(/<label\b[^>]*\bfor\s*=\s*["']([^"']+)["']/gi)].map((m) => m[1]));
  const labelRegions = [...html.matchAll(/<label\b[^>]*>[\s\S]*?<\/label>/gi)].map((m) => [m.index, m.index + m[0].length]);
  for (const m of html.matchAll(FORM_CONTROL)) {
    const [whole, tagName, attrs] = m;
    const type = (attr(attrs, 'type') || '').toLowerCase();
    if (tagName.toLowerCase() === 'input' && SKIP_INPUT_TYPES.has(type)) continue;
    if ((attr(attrs, 'aria-label') || '').length > 0) continue;
    if (attr(attrs, 'aria-labelledby')) continue;
    if ((attr(attrs, 'title') || '').length > 0) continue;
    const id = attr(attrs, 'id');
    if (id && labelForIds.has(id)) continue;
    const idx = m.index;
    if (labelRegions.some(([s, e]) => idx >= s && idx < e)) continue; // wrapped in <label>
    page.push(`<${tagName}> control without an associated label: ${whole.slice(0, 80)}`);
  }

  // 5. viewport must not disable zoom
  const viewport = html.match(/<meta\b[^>]*name\s*=\s*["']viewport["'][^>]*>/i);
  if (viewport) {
    const content = (attr(viewport[0], 'content') || '').toLowerCase();
    if (/user-scalable\s*=\s*(no|0)/.test(content) || /maximum-scale\s*=\s*1(\.0)?\b/.test(content)) {
      page.push(`viewport disables zoom (WCAG 1.4.4): ${content}`);
    }
  }

  // 6. no positive tabindex
  for (const m of html.matchAll(/\btabindex\s*=\s*["']?(-?\d+)/gi)) {
    if (Number(m[1]) > 0) page.push(`positive tabindex="${m[1]}" (focus-order anti-pattern)`);
  }

  // 7. no duplicate ids
  const seen = new Map();
  for (const m of html.matchAll(/\bid\s*=\s*("([^"]+)"|'([^']+)')/gi)) {
    const id = m[2] ?? m[3];
    seen.set(id, (seen.get(id) || 0) + 1);
  }
  for (const [id, count] of seen) {
    if (count > 1) page.push(`duplicate id="${id}" (${count} occurrences)`);
  }

  if (page.length) failures.push({ route, issues: page });
}

if (failures.length) {
  const total = failures.reduce((n, f) => n + f.issues.length, 0);
  console.error(`✗ ${total} accessibility issue(s) across ${failures.length} page(s):`);
  for (const f of failures) {
    console.error(`  ${f.route}`);
    for (const issue of f.issues) console.error(`    - ${issue}`);
  }
  process.exit(1);
}

console.log(`✓ A11y OK — ${htmlFiles.length} pages pass static WCAG 2.2 Level-A checks (landmarks, names, labels, zoom, focus order, unique ids).`);
