---
title: "Design System"
doc_id: "WEBSITE-DESIGN-SYSTEM"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "website-swarm"
review_cadence: 60d
staleness_threshold: 90d
classification: Public
tags: ["design", "tokens", "theme", "components"]
sources:
  - "Design tokens (W3C Community Group) — https://www.designtokens.org/ (accessed 2026-06-12)"
  - "WCAG 2.2 contrast — https://www.w3.org/TR/WCAG22/ (accessed 2026-06-12)"
  - "Tailwind CSS — https://tailwindcss.com/ (accessed 2026-06-12)"
related: ["WEBSITE-ARCHITECTURE", "WEBSITE-ACCESSIBILITY", "WEBSITE-AI-EXPERIENCE"]
---

# Design System

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › [Website](WEBSITE_ARCHITECTURE.md) › **Design System**
> **Status:** `Active` · **Owner:** `website-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The visual language: tokens, components, and theme. The aesthetic target is **executive, AI-native,
finance-grade, enterprise, premium, future-facing** with a dark-mode-first, modern-minimal feel.

## 2. Design tokens

Tokens are the single source of truth (colors, type, spacing, radius, motion), authored per the
[design tokens](https://www.designtokens.org/) approach and consumed via Tailwind theme config.

| Token group | Examples |
|-------------|----------|
| Color | `--bg`, `--surface`, `--fg`, `--muted`, `--accent`, `--accent-2`, semantic states |
| Type | display, heading, body, mono; modular scale |
| Spacing | 4px base scale |
| Radius / elevation | sm/md/lg; subtle shadows |
| Motion | durations + easing; respects `prefers-reduced-motion` |

## 3. Theme

- **Dark mode first**, light theme supported; both meet WCAG 2.2 AA contrast
  ([Accessibility](ACCESSIBILITY.md)).
- Premium, restrained palette; one accent + one secondary accent; generous whitespace.

## 4. Component library

| Component | Notes |
|-----------|-------|
| Buttons / links | clear focus ring, 44px min target |
| Cards | service/plan/case patterns |
| Nav + footer | global, exposes all destinations |
| AI widget shell | consistent home for on-page agents ([AI Experience](AI_EXPERIENCE.md)) |
| Forms | labelled, validated, accessible |
| Tables / pricing | responsive, semantic |

## 5. Principles

Accessible by default · responsive (mobile-first) · fast (no heavy frameworks on critical path,
[Performance](PERFORMANCE.md)) · consistent (tokens only, no ad-hoc values).

## 6. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Token methodology | <https://www.designtokens.org/> | 2026-06-12 |
| 2 | Contrast requirements | <https://www.w3.org/TR/WCAG22/> | 2026-06-12 |
| 3 | Utility theming | <https://tailwindcss.com/> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 60d · **Next review:** 2026-08-11
- See [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [Website Architecture](WEBSITE_ARCHITECTURE.md) · [Accessibility](ACCESSIBILITY.md) · [AI Experience](AI_EXPERIENCE.md)
