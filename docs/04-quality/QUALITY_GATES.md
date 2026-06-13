---
title: "Quality Gates"
doc_id: "QUALITY-QUALITY-GATES"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "quality-swarm"
review_cadence: 45d
staleness_threshold: 60d
classification: Public
tags: ["quality", "gates", "ci"]
sources:
  - "sysprompt_agentx2.md quality gates (in-repo, accessed 2026-06-12)"
  - "WCAG 2.2 — https://www.w3.org/TR/WCAG22/ (accessed 2026-06-12)"
  - "Core Web Vitals — https://web.dev/articles/vitals (accessed 2026-06-12)"
related: ["QUALITY-TESTING-STRATEGY", "QUALITY-EVAL-FRAMEWORK", "QUALITY-REGRESSION-POLICY", "QUALITY-CI-CD"]
---

# Quality Gates

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › **Quality Gates**
> **Status:** `Active` · **Owner:** `quality-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The single merge/deploy bar. Nothing ships unless **every** gate passes. Gates are enforced in
[CI/CD](CI_CD.md) and protected by the [Zero-Regression Policy](REGRESSION_POLICY.md).

## 2. The gates

Per [`sysprompt_agentx2.md`](../../sysprompt_agentx2.md):

| Gate | Pass criteria | Tool |
|------|---------------|------|
| HTML validity | no errors | html validator |
| Accessibility | WCAG 2.2 AA, zero axe violations | axe-core ([a11y](../02-website/ACCESSIBILITY.md)) |
| Performance | Core Web Vitals "Good", Lighthouse ≥95 | Lighthouse ([perf](../02-website/PERFORMANCE.md)) |
| Mobile | responsive checks pass | viewport tests |
| Security | headers + CSP set; no secrets; deps clean | scanners ([security](../06-governance/SECURITY_ARCHITECTURE.md)) |
| SEO | metadata + schema + sitemap valid | SEO lint ([SEO](../02-website/SEO_STRATEGY.md)) |
| Analytics | events wired | analytics check ([analytics](../05-observability/ANALYTICS.md)) |
| Documentation | frontmatter + freshness valid | docs lint ([freshness](../07-operations/FRESHNESS_POLICY.md)) |
| Observability | traces/metrics present | OTel check ([tracing](../05-observability/TRACING.md)) |
| Governance | HITL + policy satisfied | policy check ([governance](../06-governance/AI_GOVERNANCE.md)) |
| Multi-eval | scores ≥ thresholds | eval harness ([eval](EVAL_FRAMEWORK.md)) |
| Zero regression | no tracked metric worsens | baseline diff ([regression](REGRESSION_POLICY.md)) |

## 3. Rule

A gate is **never** weakened or skipped to pass. If a gate is wrong, fix the gate via PR + ADR — not
by bypassing it.

## 4. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Gate list | [`sysprompt_agentx2.md`](../../sysprompt_agentx2.md) | 2026-06-12 |
| 2 | a11y bar | <https://www.w3.org/TR/WCAG22/> | 2026-06-12 |
| 3 | perf bar | <https://web.dev/articles/vitals> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 45d · **Next review:** 2026-07-27
- See [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [Testing Strategy](TESTING_STRATEGY.md) · [Eval Framework](EVAL_FRAMEWORK.md) · [Regression Policy](REGRESSION_POLICY.md) · [CI/CD](CI_CD.md)
