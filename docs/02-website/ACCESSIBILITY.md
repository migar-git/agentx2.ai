---
title: "Accessibility — WCAG 2.2 AA"
doc_id: "WEBSITE-ACCESSIBILITY"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "website-swarm"
review_cadence: 60d
staleness_threshold: 90d
classification: Public
tags: ["accessibility", "wcag", "a11y"]
sources:
  - "WCAG 2.2 — https://www.w3.org/TR/WCAG22/ (accessed 2026-06-12)"
  - "WAI-ARIA Authoring Practices — https://www.w3.org/WAI/ARIA/apg/ (accessed 2026-06-12)"
related: ["WEBSITE-DESIGN-SYSTEM", "WEBSITE-AI-EXPERIENCE", "QUALITY-QUALITY-GATES"]
---

# Accessibility — WCAG 2.2 AA

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › [Website](WEBSITE_ARCHITECTURE.md) › **Accessibility**
> **Status:** `Active` · **Owner:** `website-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The accessibility standard and how it is enforced. Target: **WCAG 2.2 Level AA** across every page and
every AI widget. Accessibility is a [quality gate](../04-quality/QUALITY_GATES.md) — failures block
merge.

## 2. Requirements (POUR)

| Principle | What we do |
|-----------|------------|
| Perceivable | text alternatives, AA contrast, scalable text, captions for media |
| Operable | full keyboard access, visible focus, no keyboard traps, 44px targets, skip links |
| Understandable | clear language, predictable nav, labelled/validated forms |
| Robust | valid semantic HTML, correct ARIA per [APG](https://www.w3.org/WAI/ARIA/apg/) |

## 3. AI widgets

On-page agents are keyboard-operable, announce state to screen readers, manage focus, and respect
`prefers-reduced-motion` ([AI Experience](AI_EXPERIENCE.md)).

## 4. Verification

- **Automated (implemented):** a zero-dependency static a11y gate, `scripts/check-a11y.mjs`, runs in
  the `validate` step of [CI/CD](../04-quality/CI_CD.md) on every build — asserting WCAG 2.2 Level-A
  invariants from the built HTML (one `<main>` landmark, `<img>` `alt`, accessible names on links and
  buttons, labelled form controls, zoom not disabled, no positive `tabindex`, unique `id`s).
- **Automated (follow-up):** browser-based axe-core + Lighthouse a11y budgets against a served build
  remain a tracked follow-up (GAP-4 in [Gap Analysis](../reviews/gap-analysis.md)).
- **Manual:** keyboard-only + screen-reader spot checks on key flows.
- **Regression:** a11y score may never decrease ([Regression Policy](../04-quality/REGRESSION_POLICY.md)).

## 5. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Success criteria (AA) | <https://www.w3.org/TR/WCAG22/> | 2026-06-12 |
| 2 | Widget patterns | <https://www.w3.org/WAI/ARIA/apg/> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 60d · **Next review:** 2026-08-11
- See [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [Design System](DESIGN_SYSTEM.md) · [Quality Gates](../04-quality/QUALITY_GATES.md) · [Performance](PERFORMANCE.md)
