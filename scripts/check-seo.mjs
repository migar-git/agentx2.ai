/**
 * check-seo.mjs — assert every built page carries the required SEO + a11y signals:
 * html[lang], <title>, meta description, canonical, og:title, og:image, one <h1>.
 * Zero dependencies. Run after `astro build`.
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

const checks = [
  { name: 'html[lang]', re: /<html[^>]*\slang=/i },
  { name: '<title>', re: /<title>[^<]{3,}<\/title>/i },
  { name: 'meta description', re: /<meta[^>]+name=["']description["'][^>]+content=["'][^"']{10,}/i },
  { name: 'canonical', re: /<link[^>]+rel=["']canonical["']/i },
  { name: 'og:title', re: /<meta[^>]+property=["']og:title["']/i },
  { name: 'og:image', re: /<meta[^>]+property=["']og:image["']/i },
  { name: '<h1>', re: /<h1[\s>]/i },
];

const failures = [];
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const missing = checks.filter((c) => !c.re.test(html)).map((c) => c.name);
  // allow multiple h1 guard: ensure exactly one h1
  const h1count = (html.match(/<h1[\s>]/gi) || []).length;
  if (h1count > 1) missing.push(`multiple <h1> (${h1count})`);
  if (missing.length) failures.push(`${file.replace(DIST, '') || '/'} — missing: ${missing.join(', ')}`);
}

if (failures.length) {
  console.error(`✗ ${failures.length} page(s) failed SEO checks:`);
  failures.forEach((f) => console.error('  ' + f));
  process.exit(1);
}
console.log(`✓ SEO OK — ${htmlFiles.length} pages each have title, description, canonical, OG tags, and one <h1>.`);
