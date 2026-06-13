---
title: "Release Notes — Audit & Hardening (Unreleased)"
doc_id: "RELEASE-NOTES"
status: Active
version: 1.0.0
created: 2026-06-13
updated: 2026-06-13
last_verified: 2026-06-13
owner: "production-ops-brain"
reviewers: []
review_cadence: 30d
staleness_threshold: 60d
classification: Public
tags: ["release", "notes", "changelog"]
sources:
  - "Keep a Changelog 1.1.0 — https://keepachangelog.com/en/1.1.0/ (accessed 2026-06-13)"
supersedes: []
related: ["RELEASE-READINESS", "PLAN-MASTER-BUILD", "PLAN-ROLLBACK", "REVIEW-SECURITY"]
---

# Release Notes — Audit & Hardening (Unreleased)

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › **Release Notes**
> **Status:** `Active` · **Owner:** `production-ops-brain` · **Last verified:** `2026-06-13`

## 1. Purpose

Human-readable notes for the unreleased audit-and-hardening changeset. The machine-readable record is
in [`CHANGELOG.md`](../../CHANGELOG.md); the GO decision is in the
[Release Readiness Report](release-readiness-report.md).

## 2. Highlights

- **Resolved HIGH-severity build-toolchain advisories** by upgrading Astro `5.18.2 → 6.4.6` (and
  `@astrojs/sitemap → 3.7.3`). Production dependencies remain at **0 vulnerabilities**.
- **Moved off end-of-life Node 20 to Node 22** across `engines`, CI, and deploy.
- **Hardened the supply chain**: a production-scoped dependency-audit CI gate, a scheduled weekly
  security workflow, Dependabot for npm + GitHub Actions, and a local pre-commit secret-scan hook.
- **Documented the build orchestration honestly**: a swarm-to-reality mapping that implements the
  architecture-appropriate subset and records every deferral with a reason.

## 3. Security

- Upgraded Astro to 6.4.6, resolving `define:vars` `</script>` XSS (GHSA-j687-52p2-xcff) and the
  server-island replay advisory (GHSA-xr5h-phrj-8vxv). See [Security Review](../reviews/security-review.md).
- Added `npm run audit:prod` as a CI gate and a scheduled
  [`security.yml`](../../.github/workflows/security.yml) (prod audit + full-tree secret scan).
- Added a [pre-commit hook](../../.githooks/pre-commit) that blocks obvious committed secrets locally;
  auto-installed via the `prepare` script (`scripts/setup-hooks.mjs`).

## 4. Changed

- Node runtime floor raised to **≥ 22.12** ([`package.json`](../../package.json),
  [`ci.yml`](../../.github/workflows/ci.yml), [`deploy.yml`](../../.github/workflows/deploy.yml)).
- New npm scripts: `security`, `release-check`, `lint:md:fix`, `prepare`.

## 5. Added (documentation)

- Audit set: [Repository Analysis](../reviews/repository-analysis.md),
  [Gap Analysis](../reviews/gap-analysis.md), [Security Review](../reviews/security-review.md).
- Plans: [Master Build Plan](../plans/master-build-plan.md),
  [Rollback Plan](../plans/rollback-plan.md).
- Releases: [Release Readiness Report](release-readiness-report.md), these notes.

## 6. Deferred (with rationale)

A live operational admin dashboard, backend services, database, RBAC/auth, distributed tracing, and
live AI provider governance are **not applicable to a static GitHub Pages site** and were deliberately
not built. Rationale and the future-platform pointers are in the
[Master Build Plan §2–§5](../plans/master-build-plan.md).

## 7. Upgrade / operational notes

- Contributors should run `npm install` once to wire the pre-commit hook (sets
  `core.hooksPath=.githooks`). Bypass a commit with `git commit --no-verify`; disable with
  `git config --unset core.hooksPath`.
- Local development now requires **Node ≥ 22.12**.

## 8. Risks

Low. All changes are reversible (see [Rollback Plan](../plans/rollback-plan.md)); the deployed artifact
is static. Dev-only transitive advisories remain upstream but never ship to production and are bounded
by the audit gate.

## 9. Grounding & Sources

| # | Claim it supports | Source (title + URL) | Publisher | Accessed |
|---|-------------------|----------------------|-----------|----------|
| 1 | Release-note / changelog conventions | <https://keepachangelog.com/en/1.1.0/> | Keep a Changelog | 2026-06-13 |

## 10. Change Log (doc-local)

| Version | Date | Author | Summary |
|---------|------|--------|---------|
| 1.0.0 | 2026-06-13 | `production-ops-brain` | Initial release notes for the audit + hardening changeset. |

---

### Freshness

- **Created:** 2026-06-13 · **Updated:** 2026-06-13 · **Last verified:** 2026-06-13
- **Review cadence:** every 30 days · **Staleness threshold:** 60 days · **Next review due:** 2026-07-13
- Governed by the [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [Release Readiness](release-readiness-report.md) · [Master Build Plan](../plans/master-build-plan.md) · [Rollback Plan](../plans/rollback-plan.md) · [Changelog](../../CHANGELOG.md)
