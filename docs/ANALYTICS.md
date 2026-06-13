---
title: "Analytics"
doc_id: "OBS-ANALYTICS-FRONTDOOR"
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
related: ["OBS-ANALYTICS"]
---

# Analytics

> **Breadcrumb:** [Home](../README.md) › [Docs Index](INDEX.md) › **Analytics**
> **Status:** `Active` · **Owner:** `observability-swarm` · **Last verified:** `2026-06-12`

## 1. Canonical source

> **Canonical source:** [Analytics](05-observability/ANALYTICS.md) — the KPI layer and single source of truth. This page is a thin front door; it points to the deep doc and does not duplicate it.

## 2. Summary

- The KPI layer spanning business, marketing, operational, AI, financial, and customer metrics.
- Privacy-respecting by design and tied to decisions on [Mission Control](05-observability/MISSION_CONTROL.md).
- Business KPIs: revenue, MRR, ARR, and pipeline; financial KPIs: forecast, cash flow, and margin.
- Marketing KPIs: traffic, SEO rankings, CTR, and conversions; customer KPIs: retention, satisfaction, and ROI delivered.
- AI KPIs: request volume, latency, cost, success rate, and eval trend; operational KPIs: workflow throughput, incidents, and MTTR.
- A conversion funnel (visitors → leads → consultations → proposals → closed deals → revenue) is instrumented on every page so AI's contribution is attributable.
- Privacy: no PII in the public repo, minimal collection, and consent-aware — aligned with [Compliance](06-governance/COMPLIANCE.md) and the [Data Architecture](01-architecture/DATA_ARCHITECTURE.md).

## 3. Where to go next

| Go to | For |
|-------|-----|
| [Analytics](05-observability/ANALYTICS.md) | KPI families + funnel (canonical) |
| [Metrics Catalog](05-observability/METRICS_CATALOG.md) | Every metric defined |
| [Mission Control](05-observability/MISSION_CONTROL.md) | Dashboards that use these KPIs |
| [SEO Strategy](02-website/SEO_STRATEGY.md) | Organic measurement |
| [Compliance](06-governance/COMPLIANCE.md) | Privacy + data rules |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 60d · **Next review:** 2026-08-11
- See [Freshness Policy](07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../README.md) · ⬆️ [Docs Index](INDEX.md)
- ↔️ Related: [Analytics](05-observability/ANALYTICS.md) · [Metrics Catalog](05-observability/METRICS_CATALOG.md) · [Mission Control](05-observability/MISSION_CONTROL.md)
