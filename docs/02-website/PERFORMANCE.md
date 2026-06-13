---
title: "Performance — Core Web Vitals Budgets"
doc_id: "WEBSITE-PERFORMANCE"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "website-swarm"
review_cadence: 60d
staleness_threshold: 90d
classification: Public
tags: ["performance", "core-web-vitals", "budgets"]
sources:
  - "Core Web Vitals — https://web.dev/articles/vitals (accessed 2026-06-12)"
  - "INP — https://web.dev/articles/inp (accessed 2026-06-12)"
  - "Lighthouse — https://developer.chrome.com/docs/lighthouse/overview (accessed 2026-06-12)"
related: ["WEBSITE-ARCHITECTURE", "WEBSITE-SEO-STRATEGY", "QUALITY-QUALITY-GATES", "QUALITY-CI-CD"]
---

# Performance — Core Web Vitals Budgets

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › [Website](WEBSITE_ARCHITECTURE.md) › **Performance**
> **Status:** `Active` · **Owner:** `website-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

Performance budgets and how they are enforced. Fast pages are a [quality gate](../04-quality/QUALITY_GATES.md)
and an [SEO](SEO_STRATEGY.md) input.

## 2. Budgets (targets at p75, mobile)

| Metric | Target ("Good") | Source |
|--------|-----------------|--------|
| Largest Contentful Paint (LCP) | ≤ 2.5 s | <https://web.dev/articles/vitals> |
| Interaction to Next Paint (INP) | ≤ 200 ms | <https://web.dev/articles/inp> |
| Cumulative Layout Shift (CLS) | ≤ 0.1 | <https://web.dev/articles/vitals> |
| Lighthouse Performance | ≥ 95 | <https://developer.chrome.com/docs/lighthouse/overview> |
| Total JS (critical path) | minimal; defer non-critical | budget enforced in CI |

## 3. How we hit them

- **Static output** (Astro islands) — ship HTML/CSS, hydrate only what needs interactivity
  ([Tech Stack](../01-architecture/TECH_STACK.md)).
- Optimized images (responsive, lazy, modern formats), preloaded fonts, no render-blocking JS.
- On-page AI loads **after** first paint and never blocks interaction
  ([AI Experience](AI_EXPERIENCE.md)).

## 4. Enforcement

Lighthouse + Web Vitals checks run in [CI/CD](../04-quality/CI_CD.md); scores may never regress
([Regression Policy](../04-quality/REGRESSION_POLICY.md)).

## 5. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | LCP/CLS thresholds | <https://web.dev/articles/vitals> | 2026-06-12 |
| 2 | INP threshold | <https://web.dev/articles/inp> | 2026-06-12 |
| 3 | Lighthouse auditing | <https://developer.chrome.com/docs/lighthouse/overview> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 60d · **Next review:** 2026-08-11
- See [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [Website Architecture](WEBSITE_ARCHITECTURE.md) · [SEO Strategy](SEO_STRATEGY.md) · [Quality Gates](../04-quality/QUALITY_GATES.md)
