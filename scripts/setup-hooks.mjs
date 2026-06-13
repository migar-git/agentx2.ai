/**
 * setup-hooks.mjs — wire git to the repo's shared hooks directory (.githooks).
 * Runs from the `prepare` lifecycle on `npm install`. Safe no-op when there is no
 * git work tree (e.g. installed from a tarball or in some CI contexts).
 * Docs: docs/plans/master-build-plan.md
 */
import { execFileSync } from 'node:child_process';

try {
  execFileSync('git', ['rev-parse', '--is-inside-work-tree'], { stdio: 'ignore' });
  execFileSync('git', ['config', 'core.hooksPath', '.githooks'], { stdio: 'ignore' });
  console.log('git hooks wired to .githooks (pre-commit secret scan active)');
} catch {
  // Not a git work tree — nothing to wire. Expected for tarball/CI installs.
}
