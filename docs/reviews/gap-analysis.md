---
title: "Gap Analysis — AgentX2.ai"
doc_id: "REVIEW-GAP-ANALYSIS"
status: Active
version: 1.1.0
created: 2026-06-13
updated: 2026-06-13
last_verified: 2026-06-13
owner: "production-ops-brain"
reviewers: []
review_cadence: 90d
staleness_threshold: 120d
classification: Public
tags: ["audit", "gap-analysis", "remediation"]
sources:
  - "Node.js release schedule (LTS / EOL) — https://nodejs.org/en/about/previous-releases (accessed 2026-06-13)"
  - "GitHub Advisory Database — https://github.com/advisories (accessed 2026-06-13)"
supersedes: []
related: ["REVIEW-REPOSITORY-ANALYSIS", "REVIEW-SECURITY", "RELEASE-READINESS"]
---

# Gap Analysis — AgentX2.ai

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › **Gap Analysis**
> **Status:** `Active` · **Owner:** `production-ops-brain` · **Last verified:** `2026-06-13`

## 1. Purpose

This document lists every gap found during the 2026-06-13 audit, its priority and impact, and its
remediation status. It builds on the factual baseline in [Repository Analysis](repository-analysis.md).
The headline finding: **the repository was already healthy** (all gates green); the gaps were a small
number of real, mostly toolchain-and-supply-chain issues, now remediated.

## 2. Status legend

`Implemented` · `Partial` · `Missing` · `Broken` · `Deprecated` · `Duplicate`

## 3. Capability matrix

| Capability | State (pre-audit) | Evidence |
|------------|-------------------|----------|
| Static site build (18 routes) | Implemented | `npm run build` → 18 pages |
| Type safety (strict TS) | Implemented | `astro check` 0 errors |
| Unit tests (IA invariants + build output) | Implemented | 7/7 pass |
| Link / orphan / SEO / doc-link validation | Implemented | 4 validators, 0 failures |
| On-page AI assistant (a11y + observable) | Implemented | `AIWidget.astro` |
| Privacy-respecting analytics | Implemented | `Analytics.astro` (DNT, breaker) |
| CI pipeline | Implemented | `.github/workflows/ci.yml` |
| GitHub Pages deploy | Implemented | `.github/workflows/deploy.yml` |
| Markdown lint + doc governance | Implemented | 122 files, 0 errors |
| Dependency security (build toolchain) | **Broken** → Implemented | See [Security Review](security-review.md) |
| Supported Node runtime in CI/CD | **Broken** → Implemented | Node 20 was EOL; now 22 |
| Dependency-audit CI gate | **Missing** → Implemented | New `audit:prod` step |
| Automated a11y — static (no-browser) | **Partial** → Implemented | `scripts/check-a11y.mjs` in the `validate` gate (found+fixed a real duplicate-id defect) |
| Automated a11y / perf budgets — browser (Lighthouse/axe) | Partial | `links-external` job is a disabled placeholder |
| Enforced HTTP security headers in prod | Partial | `_headers` not honored by GitHub Pages |

## 4. Gap detail

### GAP-1 — Vulnerable build toolchain (HIGH) — REMEDIATED

- **Description:** `npm audit` flagged HIGH-severity advisories in Astro (`define:vars` XSS, server
  island replay) and the esbuild/vite dev chain.
- **Priority:** High. **Business impact:** supply-chain/reputational. **Technical impact:** the XSS
  class matches the codebase's `define:vars` + `is:inline` pattern.
- **Dependencies:** Astro 6 requires Node ≥ 22.12. **Effort:** Low–Medium. **Risk:** major-version
  bump, mitigated by the full validation gate.
- **Recommended solution (applied):** upgrade Astro `5.18.2 → 6.4.6` and `@astrojs/sitemap → 3.7.3`;
  validate the full gate; gate CI on production-dep cleanliness. Detail in
  [Security Review](security-review.md).

### GAP-2 — End-of-life Node in CI/CD (MEDIUM) — REMEDIATED

- **Description:** `ci.yml` and `deploy.yml` pinned Node 20, which reached end-of-life in 2026.
- **Priority:** Medium. **Impact:** unsupported runtime receives no security patches; also blocks
  Astro 6.
- **Recommended solution (applied):** bump both workflows and `package.json` `engines.node` to
  `>=22.12.0`.

### GAP-3 — No dependency-audit gate in CI (MEDIUM) — REMEDIATED

- **Description:** CI did not fail on vulnerable dependencies, so supply-chain regressions could land
  silently.
- **Recommended solution (applied):** add `npm run audit:prod`
  (`npm audit --omit=dev --audit-level=high`) as a CI step. Production scope is deliberate — it keeps
  the gate meaningful (shipped code must be clean) without failing on un-fixable dev-only transitive
  advisories. See [Security Review](security-review.md) §3.

### GAP-4 — Automated a11y / performance budgets (LOW) — PARTIALLY REMEDIATED

- **Description:** automated accessibility enforcement was missing; the `links-external` CI job is a
  documented `if: false` placeholder reserved for Lighthouse CI a11y + performance budgets, and the
  a11y docs claimed an `axe-core` scan that was never wired.
- **Remediated (this pass):** added `scripts/check-a11y.mjs` — a zero-dependency static gate (matching
  the repo's existing `check-*.mjs` validator pattern) wired into `npm run validate` (and therefore
  `gates` / `ci` / `release-check`). It asserts WCAG 2.2 Level-A invariants from the built HTML: one
  `<main>` landmark, `<img>` `alt`, accessible names on links/buttons, labelled form controls, zoom not
  disabled (1.4.4), no positive `tabindex`, and unique `id`s. On first run it caught a **real defect** —
  `id="sg"` duplicated 24× on Mission Control (the sparkline gradient was defined per-KPI) — now fixed
  by defining the gradient once at page scope. The a11y docs were corrected to match reality.
- **Still deferred (browser budgets):** real Lighthouse/axe budgets need a served build + budget config
  and Chrome in CI — a net-new capability best added with human review. **Next step:** wire `@lhci/cli`
  against the preview server with conservative budgets.

### GAP-5 — Security headers not enforced in production (LOW) — DOCUMENTED

- **Description:** `public/_headers` defines a strong header set (CSP, HSTS, frame-ancestors, etc.)
  but GitHub Pages does not honor `_headers`.
- **Why not auto-changed:** moving the host (Cloudflare/Netlify reverse proxy) is an infrastructure
  decision requiring a human owner; it is not a code defect.
- **Recommended next step:** front the site with Cloudflare Pages / a CDN that applies `_headers`, or
  add a documented per-page `<meta http-equiv="Content-Security-Policy">` fallback. Tracked in
  [Security Review](security-review.md) §4.

## 5. Decisions & Rationale

| Decision | Why | Reversibility | Date | Owner |
|----------|-----|---------------|------|-------|
| Remediate GAP-1/2/3 autonomously | Real, validatable, reversible (clean tree + full gate) | High | 2026-06-13 | production-ops-brain |
| Implement static a11y gate (GAP-4, partial) | Real, validatable, reversible; matches existing validator pattern; caught a real defect | High | 2026-06-13 | production-ops-brain |
| Defer GAP-5 + browser a11y/perf budgets to human review | Infra decision / net-new heavy deps, not a code defect | High | 2026-06-13 | production-ops-brain |

## 6. Risks & Open Questions

| Risk / Question | Impact | Mitigation / Next step | Owner | Due |
|-----------------|--------|------------------------|-------|-----|
| Dev-only transitive advisories persist | Low (not shipped) | Production audit gate; track upstream fixes | production-ops-brain | Ongoing |
| Astro majors move fast | Maintenance | Renovate/Dependabot + the new audit gate | production-ops-brain | Ongoing |

## 7. Grounding & Sources

| # | Claim it supports | Source (title + URL) | Publisher | Accessed |
|---|-------------------|----------------------|-----------|----------|
| 1 | Node 20 EOL timing | <https://nodejs.org/en/about/previous-releases> | OpenJS | 2026-06-13 |
| 2 | Advisory severities | <https://github.com/advisories> | GitHub | 2026-06-13 |

## 8. Change Log (doc-local)

| Version | Date | Author | Summary |
|---------|------|--------|---------|
| 1.0.0 | 2026-06-13 | `production-ops-brain` | Initial gap analysis + remediation status. |
| 1.1.0 | 2026-06-13 | `production-ops-brain` | GAP-4 partially remediated: added static a11y gate (`check-a11y.mjs`); fixed duplicate `id="sg"` on Mission Control; corrected a11y docs. |

---

### Freshness

- **Created:** 2026-06-13 · **Updated:** 2026-06-13 · **Last verified:** 2026-06-13
- **Review cadence:** every 90 days · **Staleness threshold:** 120 days · **Next review due:** 2026-09-11
- Governed by the [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [Repository Analysis](repository-analysis.md) · [Security Review](security-review.md) · [Release Readiness](../releases/release-readiness-report.md)
