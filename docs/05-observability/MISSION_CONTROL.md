---
title: "Mission Control"
doc_id: "OBS-MISSION-CONTROL"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "observability-swarm"
review_cadence: 45d
staleness_threshold: 60d
classification: Public
tags: ["dashboards", "control-tower", "single-pane"]
sources:
  - "sysprompt_agentx2.md mission control (in-repo, accessed 2026-06-12)"
related: ["OBS-METRICS-CATALOG", "OBS-ANALYTICS", "OPS-CONTINUOUS-IMPROVEMENT", "AGENT-MANAGED-AI-WORKFORCE"]
---

# Mission Control

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › [Observability](OBSERVABILITY.md) › **Mission Control**
> **Status:** `Active` · **Owner:** `observability-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The single pane of glass — dashboards that turn [metrics](METRICS_CATALOG.md) into decisions. Each
view has an audience and explicit decision triggers (not just pretty charts).

## 2. Dashboards

Per [`sysprompt_agentx2.md`](../../sysprompt_agentx2.md):

| Dashboard | Audience | Shows | Decision trigger |
|-----------|----------|-------|------------------|
| Executive | founder | revenue, pipeline, utilization, projects, agent activity | reprioritize |
| Operations | ops | workflows, incidents, errors, tasks | intervene |
| AI | eng | model usage, prompt usage, agent performance, eval trend | tune/promote |
| Financial | founder | MRR, ARR, forecast, cash flow | invest/cut |
| Marketing | content | traffic, SEO, conversions, campaigns | double-down |
| Build/Quality | quality | build health, regression count, freshness, MTTR | block/fix |

## 3. Principles

- **Decision-first:** every tile names the action it informs.
- **Fresh + timestamped:** data recency shown on each view ([Freshness](../07-operations/FRESHNESS_POLICY.md)).
- **Drill-down to trace:** any number links to its [trace](TRACING.md) and source.

## 4. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Dashboard set | [`sysprompt_agentx2.md`](../../sysprompt_agentx2.md) | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 45d · **Next review:** 2026-07-27
- See [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [Metrics Catalog](METRICS_CATALOG.md) · [Analytics](ANALYTICS.md) · [Continuous Improvement](../07-operations/CONTINUOUS_IMPROVEMENT.md)
