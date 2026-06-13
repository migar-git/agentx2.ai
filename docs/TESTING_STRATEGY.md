---
title: "Testing Strategy (Canonical Entry Point)"
doc_id: "TESTING-STRATEGY-CANONICAL"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "quality-swarm"
review_cadence: 45d
staleness_threshold: 60d
classification: Public
tags: ["testing", "entry-point"]
sources:
  - "Testing Strategy (in-repo) — docs/04-quality/TESTING_STRATEGY.md (accessed 2026-06-12)"
related: ["QUALITY-TESTING-STRATEGY", "QUALITY-EVAL-FRAMEWORK", "QUALITY-QUALITY-GATES", "ACCEPTANCE-CRITERIA"]
---

# Testing Strategy (Canonical Entry Point)

> **Breadcrumb:** [Home](../README.md) › [Docs Index](INDEX.md) › **Testing Strategy**
> **Status:** `Active` · **Owner:** `quality-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The single front door for testing. The **authoritative deep doc** is
[Testing Strategy](04-quality/TESTING_STRATEGY.md). This page summarizes and routes.

## 2. Key facts

- **Test pyramid** ≈ 70% unit / 20% integration / 10% E2E; deterministic + fast by default.
- **AI behavior is validated by evals**, not brittle string assertions
  ([Eval Framework](04-quality/EVAL_FRAMEWORK.md)).
- Non-functional checks (a11y, perf, security, links) are [Quality Gates](04-quality/QUALITY_GATES.md).
- Tests run in [CI/CD](CI_CD.md) on every change; coverage floor enforced and ratcheted.
- Acceptance criteria: [Acceptance Criteria](ACCEPTANCE_CRITERIA.md).

## 3. Read next

- Deep: [Testing Strategy](04-quality/TESTING_STRATEGY.md)
- [Eval Framework](04-quality/EVAL_FRAMEWORK.md) · [Quality Gates](04-quality/QUALITY_GATES.md) ·
  [Regression Policy](04-quality/REGRESSION_POLICY.md)

## 4. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Pyramid + AI-eval approach | [Testing Strategy](04-quality/TESTING_STRATEGY.md) | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 45d · **Next review:** 2026-07-27
- See [Freshness Policy](07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../README.md) · ⬆️ [Docs Index](INDEX.md)
- ↔️ Related: [Testing Strategy](04-quality/TESTING_STRATEGY.md) · [Eval Framework](04-quality/EVAL_FRAMEWORK.md)
