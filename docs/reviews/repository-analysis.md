---
title: "Repository Analysis — AgentX2.ai"
doc_id: "REVIEW-REPOSITORY-ANALYSIS"
status: Active
version: 1.0.0
created: 2026-06-13
updated: 2026-06-13
last_verified: 2026-06-13
owner: "production-ops-brain"
reviewers: []
review_cadence: 90d
staleness_threshold: 120d
classification: Public
tags: ["audit", "discovery", "current-state"]
sources:
  - "Astro docs — https://docs.astro.build/ (accessed 2026-06-13)"
  - "GitHub Pages deployment with Actions — https://docs.github.com/pages (accessed 2026-06-13)"
supersedes: []
related: ["DOCS-INDEX", "ROOT-AGENTS", "REVIEW-GAP-ANALYSIS", "REVIEW-SECURITY"]
---

# Repository Analysis — AgentX2.ai

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › **Repository Analysis**
> **Status:** `Active` · **Owner:** `production-ops-brain` · **Last verified:** `2026-06-13`

## 1. Purpose

This document records the evidence-based discovery of what AgentX2.ai **is today**, captured during
the repository audit of 2026-06-13. It answers one question: *what does this repository actually
contain, and does it work?* It is the factual baseline that [Gap Analysis](gap-analysis.md) and the
[Release Readiness Report](../releases/release-readiness-report.md) build on.

## 2. Context & Scope

- **In scope:** the buildable product (the website), its toolchain, tests, CI/CD, security posture,
  and the documentation set as it exists in the working tree.
- **Out of scope:** the aspirational autonomous-AI-swarm operating model described in the
  `docs/01-architecture/` vision docs; that is a forward design, not shipped runtime behavior.
- **Assumptions:** the repository is authoritative (verified 2026-06-13, owner `production-ops-brain`).

## 3. What the repository is

AgentX2.ai is a **static-first marketing and platform website** for an AI-native consulting firm,
built with **Astro** and deployed to **GitHub Pages** via GitHub Actions. Around the website sits an
extensive, well-governed documentation foundation describing the company model and a long-term
autonomous-build vision.

### 3.1 Technology stack (as built)

| Layer | Choice | Evidence |
|-------|--------|----------|
| Framework | Astro 6.x (static output) | [`astro.config.mjs`](../../astro.config.mjs), [`package.json`](../../package.json) |
| Language | TypeScript (strict) | [`tsconfig.json`](../../tsconfig.json) extends `astro/tsconfigs/strict` |
| Styling | Hand-authored CSS + design tokens | `src/styles/tokens.css`, `src/styles/global.css` |
| SEO | `@astrojs/sitemap` + per-page meta | `src/components/BaseHead.astro` |
| Hosting | GitHub Pages | [`.github/workflows/deploy.yml`](../../.github/workflows/deploy.yml) |
| Runtime deps shipped | None (static HTML/CSS/JS) | `npm audit --omit=dev` → 0 |

### 3.2 Site surface

18 routes build from `src/pages/*.astro`, all sharing a single `BaseLayout` shell:

```text
index · services · agentic-ai · finance-ai · subscriptions · industries
case-studies · about · contact · faq · partners · careers
privacy · terms · demo · roi-calculator · mission-control · 404
```

Cross-cutting components: `Header`, `Footer`, `PageHero`, `CtaBand`, `BaseHead`, plus two notable
client behaviors:

- **`AIWidget.astro`** — an accessible (ARIA dialog, keyboard, focus, `aria-live`), observable
  on-page assistant grounded in a site-derived knowledge base, with a transport circuit-breaker
  fallback. Wired into all content pages; intentionally absent from legal pages.
- **`Analytics.astro`** — a dependency-free, privacy-respecting telemetry beacon that honors
  Do-Not-Track, sends nothing unless `PUBLIC_ANALYTICS_ENDPOINT` is configured, and trips a
  circuit breaker after repeated failures.

## 4. Does it work? (verification snapshot, 2026-06-13)

All quality gates were executed locally and pass:

| Gate | Command | Result |
|------|---------|--------|
| Type check | `npm run check` | 36 files, **0 errors / 0 warnings / 0 hints** |
| Build | `npm run build` | **18 pages** + `sitemap-index.xml` |
| Unit tests | `npm test` | **7 / 7 pass** |
| Link integrity | `check-links.mjs` | 928 internal links, **0 broken** |
| Orphan check | `check-orphans.mjs` | 17 routes, **0 orphans** |
| SEO | `check-seo.mjs` | 18 pages, all have title/description/canonical/OG/H1 |
| Doc links | `check-doc-links.mjs` | 2155 relative links across 119 docs, **0 broken** |
| Markdown lint | `npm run lint:md` | 122 files, **0 errors** |
| Production deps | `npm audit --omit=dev` | **0 vulnerabilities** |

## 5. CI/CD and governance present

- **`ci.yml`** — type check → build → test → validate → markdown lint → dependency audit → secret
  scan, on every push/PR to `main`.
- **`deploy.yml`** — build + deploy to GitHub Pages on push to `main`.
- Issue/PR templates, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `SECURITY.md`, `LICENSE.md`, and a
  119-document `docs/` tree with enforced front-matter, freshness, and link conventions.

## 6. Decisions & Rationale

| Decision | Why | Reversibility | Date | Owner |
|----------|-----|---------------|------|-------|
| Treat the website as the authoritative product | It is the only buildable, testable artifact | High | 2026-06-13 | production-ops-brain |
| Scope the audit to shipped behavior | Vision docs are forward design, not runtime | High | 2026-06-13 | production-ops-brain |

## 7. Risks & Open Questions

| Risk / Question | Impact | Mitigation / Next step | Owner | Due |
|-----------------|--------|------------------------|-------|-----|
| Vision docs may be read as current capability | Confuses contributors | Keep vision under `01-architecture/`; this audit clarifies shipped scope | production-ops-brain | Tracked |
| Security headers not honored on GitHub Pages | Defense-in-depth gap | See [Security Review](security-review.md) §4 | production-ops-brain | Tracked |

## 8. Grounding & Sources

| # | Claim it supports | Source (title + URL) | Publisher | Accessed |
|---|-------------------|----------------------|-----------|----------|
| 1 | Astro static build + config semantics | <https://docs.astro.build/> | Astro | 2026-06-13 |
| 2 | GitHub Pages deploy via Actions | <https://docs.github.com/pages> | GitHub | 2026-06-13 |

## 9. Change Log (doc-local)

| Version | Date | Author | Summary |
|---------|------|--------|---------|
| 1.0.0 | 2026-06-13 | `production-ops-brain` | Initial repository analysis from the 2026-06-13 audit. |

---

### Freshness

- **Created:** 2026-06-13 · **Updated:** 2026-06-13 · **Last verified:** 2026-06-13
- **Review cadence:** every 90 days · **Staleness threshold:** 120 days · **Next review due:** 2026-09-11
- Governed by the [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [Gap Analysis](gap-analysis.md) · [Security Review](security-review.md) · [Release Readiness](../releases/release-readiness-report.md)
