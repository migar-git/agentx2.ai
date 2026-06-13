---
title: "Continuous Improvement"
doc_id: "OPS-CONTINUOUS-IMPROVEMENT-FRONTDOOR"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "production-ops-brain"
review_cadence: 60d
staleness_threshold: 90d
classification: Public
tags: ["front-door"]
sources:
  - "AgentX2.ai canonical doc (in-repo, accessed 2026-06-12)"
related: ["OPS-CONTINUOUS-IMPROVEMENT"]
---

# Continuous Improvement

> **Breadcrumb:** [Home](../README.md) › [Docs Index](INDEX.md) › **Continuous Improvement**
> **Status:** `Active` · **Owner:** `production-ops-brain` · **Last verified:** `2026-06-12`

## 1. Canonical source

> **Canonical source:** [Continuous Improvement](07-operations/CONTINUOUS_IMPROVEMENT.md) — the improvement loops and single source of truth. This page is a thin front door; it points to the deep doc and does not duplicate it.

## 2. Summary

- How the system gets better every cycle — the loops that turn observation into the next improvement, forming the back half of the [self-build loop](01-architecture/AI_BUILD_SYSTEM.md).
- Quality loop: eval trend and regression count drive prompt/model tuning.
- Performance and conversion loops: Core Web Vitals drive asset optimization, and funnel metrics drive AI-experience improvements.
- Cost and reliability loops: $/task drives model right-sizing, and MTTR/incidents drive stronger runbooks.
- Knowledge loop: retrieval quality drives memory refinement.
- Mechanism: observe → learn (Learning Log) → hypothesis + threshold → experiment (A/B) → eval + zero-regression → adopt + record (or loop back).
- Cadence is both continuous (per-run learnings) and periodic (retros); each adopted change is recorded in the [Learning Log](08-knowledge/LEARNING_LOG.md) and, if structural, an [ADR](08-knowledge/DECISION_LOG.md).

## 3. Where to go next

| Go to | For |
|-------|-----|
| [Continuous Improvement](07-operations/CONTINUOUS_IMPROVEMENT.md) | The loops + mechanism (canonical) |
| [AI Build System](01-architecture/AI_BUILD_SYSTEM.md) | The full self-build loop |
| [Learning Log](08-knowledge/LEARNING_LOG.md) | Recorded lessons |
| [Eval Framework](04-quality/EVAL_FRAMEWORK.md) | The quality signal |
| [Mission Control](05-observability/MISSION_CONTROL.md) | Where signals surface |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 60d · **Next review:** 2026-08-11
- See [Freshness Policy](07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../README.md) · ⬆️ [Docs Index](INDEX.md)
- ↔️ Related: [Continuous Improvement](07-operations/CONTINUOUS_IMPROVEMENT.md) · [AI Build System](01-architecture/AI_BUILD_SYSTEM.md) · [Learning Log](08-knowledge/LEARNING_LOG.md)
