---
title: "Mission Control"
doc_id: "OBS-MISSION-CONTROL-FRONTDOOR"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "observability-swarm"
review_cadence: 60d
staleness_threshold: 90d
classification: Public
tags: ["front-door"]
sources:
  - "AgentX2.ai canonical doc (in-repo, accessed 2026-06-12)"
related: ["OBS-MISSION-CONTROL"]
---

# Mission Control

> **Breadcrumb:** [Home](../README.md) › [Docs Index](INDEX.md) › **Mission Control**
> **Status:** `Active` · **Owner:** `observability-swarm` · **Last verified:** `2026-06-12`

## 1. Canonical source

> **Canonical source:** [Mission Control](05-observability/MISSION_CONTROL.md) — the control-tower dashboards and single source of truth. This page is a thin front door; it points to the deep doc and does not duplicate it.

A live demo dashboard ships at `/mission-control/` on the website.

## 2. Summary

- The single pane of glass — dashboards that turn [metrics](05-observability/METRICS_CATALOG.md) into decisions, where each view has an audience and explicit decision triggers (not just pretty charts).
- Executive dashboard: revenue, pipeline, utilization, projects, and agent activity → reprioritize.
- Operations dashboard: workflows, incidents, errors, and tasks → intervene.
- AI dashboard: model usage, prompt usage, agent performance, and eval trend → tune/promote.
- Financial and Marketing dashboards: MRR/ARR/forecast/cash flow → invest/cut, and traffic/SEO/conversions/campaigns → double-down.
- Build/Quality dashboard: build health, regression count, freshness, and MTTR → block/fix.
- Principles: decision-first (every tile names its action), fresh + timestamped (recency shown per view), and drill-down to trace (any number links to its trace and source).

## 3. Where to go next

| Go to | For |
|-------|-----|
| [Mission Control](05-observability/MISSION_CONTROL.md) | Dashboards + triggers (canonical) |
| [Metrics Catalog](05-observability/METRICS_CATALOG.md) | Every metric defined |
| [Analytics](05-observability/ANALYTICS.md) | Business + product KPIs |
| [Continuous Improvement](07-operations/CONTINUOUS_IMPROVEMENT.md) | Acting on the signals |
| [Tracing](05-observability/TRACING.md) | Drill-down to source |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 60d · **Next review:** 2026-08-11
- See [Freshness Policy](07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../README.md) · ⬆️ [Docs Index](INDEX.md)
- ↔️ Related: [Mission Control](05-observability/MISSION_CONTROL.md) · [Metrics Catalog](05-observability/METRICS_CATALOG.md) · [Analytics](05-observability/ANALYTICS.md)
