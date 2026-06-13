---
title: "Quality Gates"
doc_id: "QUALITY-GATES-FRONTDOOR"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "quality-swarm"
review_cadence: 60d
staleness_threshold: 90d
classification: Public
tags: ["front-door"]
sources:
  - "AgentX2.ai canonical doc (in-repo, accessed 2026-06-12)"
related: ["QUALITY-QUALITY-GATES"]
---

# Quality Gates

> **Breadcrumb:** [Home](../README.md) › [Docs Index](INDEX.md) › **Quality Gates**
> **Status:** `Active` · **Owner:** `quality-swarm` · **Last verified:** `2026-06-12`

## 1. Canonical source

> **Canonical source:** [Quality Gates](04-quality/QUALITY_GATES.md) — the single merge/deploy bar and source of truth. This page is a thin front door; it points to the deep doc and does not duplicate it.

## 2. Summary

- The single merge/deploy bar: nothing ships unless **every** gate passes.
- Gates are enforced in [CI/CD](04-quality/CI_CD.md) and protected by the [Zero-Regression Policy](04-quality/REGRESSION_POLICY.md).
- Web gates: HTML validity, Accessibility (WCAG 2.2 AA, zero axe violations), Performance (Core Web Vitals "Good", Lighthouse ≥95), and Mobile responsiveness.
- Platform gates: Security (headers + CSP, no secrets, clean deps), SEO (metadata + schema + sitemap), Analytics (events wired), and Documentation (frontmatter + freshness).
- AI + reliability gates: Observability (traces/metrics present), Governance (HITL + policy satisfied), Multi-eval (scores ≥ thresholds), and Zero regression (no tracked metric worsens).
- Each gate has explicit pass criteria and a tool that enforces it.
- Hard rule: a gate is **never** weakened or skipped to pass — if a gate is wrong, fix it via PR + ADR, not by bypassing it.

## 3. Where to go next

| Go to | For |
|-------|-----|
| [Quality Gates](04-quality/QUALITY_GATES.md) | The full gate table (canonical) |
| [Testing Strategy](04-quality/TESTING_STRATEGY.md) | The test pyramid |
| [Eval Framework](04-quality/EVAL_FRAMEWORK.md) | Multi-eval + LLM-as-judge |
| [Regression Policy](04-quality/REGRESSION_POLICY.md) | Never go backward |
| [CI/CD](04-quality/CI_CD.md) | Where the gates run |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 60d · **Next review:** 2026-08-11
- See [Freshness Policy](07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../README.md) · ⬆️ [Docs Index](INDEX.md)
- ↔️ Related: [Quality Gates](04-quality/QUALITY_GATES.md) · [Eval Framework](04-quality/EVAL_FRAMEWORK.md) · [Regression Policy](04-quality/REGRESSION_POLICY.md)
