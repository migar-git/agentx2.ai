/**
 * check-orphans.mjs — assert every built page is linked from at least one other page.
 * Guarantees "no orphan pages". Zero dependencies. Run after `astro build`.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
if (!existsSync(DIST)) {
  console.error('✗ dist/ not found — run `npm run build` first.');
  process.exit(2);
}

const all = readdirSync(DIST, { recursive: true }).filter((f) => typeof f === 'string');
const htmlFiles = all.filter((f) => f.endsWith('.html')).map((f) => join(DIST, f));

const routes = new Set();
for (const f of all) {
  if (f.endsWith('index.html')) {
    routes.add('/' + f.replace(/index\.html$/, '').replace(/\\/g, '/'));
  }
}

const linked = new Set();
const attrRe = /href\s*=\s*"([^"]+)"/gi;
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  let m;
  while ((m = attrRe.exec(html))) {
    let link = m[1].split('#')[0].split('?')[0];
    if (!link || !link.startsWith('/')) continue;
    if (/\.[a-z0-9]+$/i.test(link)) continue; // asset, not a page
    if (!link.endsWith('/')) link += '/';
    linked.add(link);
  }
}

const orphans = [...routes].filter((r) => r !== '/' && !linked.has(r));
if (orphans.length) {
  console.error(`✗ ${orphans.length} orphan page(s) (not linked anywhere):`);
  orphans.forEach((o) => console.error('  ' + o));
  process.exit(1);
}
console.log(`✓ No orphans — all ${routes.size} routes are reachable via internal links.`);
