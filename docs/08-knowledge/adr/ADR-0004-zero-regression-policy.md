---
title: "ADR-0004: Zero-regression quality bar"
doc_id: "ADR-0004"
status: Accepted
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "quality-swarm"
classification: Public
deciders: ["quality-swarm", "architecture-swarm"]
sources:
  - "sysprompt_agentx2.md quality gates (in-repo, accessed 2026-06-12)"
  - "Core Web Vitals — https://web.dev/articles/vitals (accessed 2026-06-12)"
related: ["QUALITY-REGRESSION-POLICY", "QUALITY-QUALITY-GATES", "QUALITY-CI-CD"]
---

# ADR-0004: Zero-regression quality bar

> **Breadcrumb:** [Home](../../../README.md) › [Docs Index](../../INDEX.md) › [Decision Log](../DECISION_LOG.md) › **ADR-0004**
> **Status:** `Accepted` · **Date:** `2026-06-12` · **Deciders:** quality-swarm, architecture-swarm

## Context

Autonomous swarms commit frequently. Without a hard rule, quality can silently erode. The requirement
is **0 regression to production**.

## Decision

We will enforce a **zero-regression policy**: no change may worsen any tracked dimension (tests,
evals, accessibility, performance, security, links, SEO, docs freshness) versus a locked,
timestamped baseline. Regressions block merge. Threshold changes require an ADR; temporary waivers
require time-boxed [HITL](../../06-governance/HUMAN_IN_THE_LOOP.md) approval.

## Options Considered

| Option | Pros | Cons | Reversibility |
|--------|------|------|---------------|
| Zero-regression baseline (chosen) | quality only moves forward | needs reliable baselines | High |
| Coverage-threshold only | simple | misses a11y/perf/eval/security | High |
| Manual review only | flexible | doesn't scale to swarm cadence | High |

## Consequences

- **Positive:** swarms can move fast safely; quality compounds upward.
- **Negative:** requires maintaining baselines + reliable gates in
  [CI/CD](../../04-quality/CI_CD.md).

## Compliance & Guardrails

Baselines are never lowered to pass; the rule is defined in
[Regression Policy](../../04-quality/REGRESSION_POLICY.md) and the gates in
[Quality Gates](../../04-quality/QUALITY_GATES.md).

## Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Gate set | [`sysprompt_agentx2.md`](../../../sysprompt_agentx2.md) | 2026-06-12 |
| 2 | Performance thresholds | <https://web.dev/articles/vitals> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · ADRs are immutable once Accepted; supersede to change.
- See [Freshness Policy](../../07-operations/FRESHNESS_POLICY.md).

### Navigation

- ⬆️ [Decision Log](../DECISION_LOG.md) · [Docs Index](../../INDEX.md) · 🏠 [Home](../../../README.md)
