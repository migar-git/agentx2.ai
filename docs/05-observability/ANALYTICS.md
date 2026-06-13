---
title: "Analytics"
doc_id: "OBS-ANALYTICS"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "observability-swarm"
review_cadence: 45d
staleness_threshold: 60d
classification: Public
tags: ["analytics", "kpis", "conversion"]
sources:
  - "sysprompt_agentx2.md analytics KPIs (in-repo, accessed 2026-06-12)"
  - "Core Web Vitals — https://web.dev/articles/vitals (accessed 2026-06-12)"
related: ["OBS-METRICS-CATALOG", "OBS-MISSION-CONTROL", "WEBSITE-SEO-STRATEGY", "GOV-COMPLIANCE"]
---

# Analytics

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › [Observability](OBSERVABILITY.md) › **Analytics**
> **Status:** `Active` · **Owner:** `observability-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The KPI layer: business, marketing, operational, AI, financial, and customer metrics — privacy-
respecting and tied to decisions on [Mission Control](MISSION_CONTROL.md).

## 2. KPI families

Per [`sysprompt_agentx2.md`](../../sysprompt_agentx2.md):

| Family | Examples |
|--------|----------|
| Business | revenue, MRR, ARR, pipeline |
| Marketing | traffic, SEO rankings, CTR, conversions |
| Operational | workflow throughput, incidents, MTTR |
| AI | request volume, latency, cost, success, eval trend |
| Financial | forecast, cash flow, margin |
| Customer | retention, satisfaction, ROI delivered |

## 3. Conversion funnel

Visitors → leads → consultations → proposals → closed deals → revenue, instrumented on every page
([AI Experience](../02-website/AI_EXPERIENCE.md)) so AI's contribution is attributable.

## 4. Privacy

Analytics are privacy-respecting: no PII in the public repo, minimal collection, consent-aware, and
aligned with [Compliance](../06-governance/COMPLIANCE.md) and the
[Data Architecture](../01-architecture/DATA_ARCHITECTURE.md).

## 5. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | KPI families | [`sysprompt_agentx2.md`](../../sysprompt_agentx2.md) | 2026-06-12 |
| 2 | Web performance KPIs | <https://web.dev/articles/vitals> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 45d · **Next review:** 2026-07-27
- See [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [Metrics Catalog](METRICS_CATALOG.md) · [Mission Control](MISSION_CONTROL.md) · [SEO Strategy](../02-website/SEO_STRATEGY.md)
