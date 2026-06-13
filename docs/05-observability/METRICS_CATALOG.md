---
title: "Metrics Catalog"
doc_id: "OBS-METRICS-CATALOG"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "observability-swarm"
review_cadence: 45d
staleness_threshold: 60d
classification: Public
tags: ["metrics", "kpis", "genai-metrics"]
sources:
  - "OTel GenAI metrics — https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-metrics/ (accessed 2026-06-12)"
  - "Core Web Vitals — https://web.dev/articles/vitals (accessed 2026-06-12)"
related: ["OBS-TRACING", "OBS-MISSION-CONTROL", "OBS-ANALYTICS", "QUALITY-EVAL-FRAMEWORK"]
---

# Metrics Catalog

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › [Observability](OBSERVABILITY.md) › **Metrics Catalog**
> **Status:** `Active` · **Owner:** `observability-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

Every metric defined once — name, meaning, unit, source — so dashboards, gates, and reports agree.

## 2. AI / agent metrics

Aligned with [OTel GenAI metrics](https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-metrics/).

| Metric | Meaning | Unit |
|--------|---------|------|
| `gen_ai.client.token.usage` | tokens per call | tokens |
| `gen_ai.client.operation.duration` | model call latency | ms |
| agent.executions | agent runs | count |
| agent.success_rate | runs meeting spec | % |
| agent.escalations | HITL escalations | count |
| agent.cost_per_task | tokens + tool cost | $/task |
| eval.score | per-dimension eval score | 0–1 |
| safety.flags | guardian flags | count |

## 3. Website / funnel metrics

| Metric | Meaning |
|--------|---------|
| page.views / traffic / sources | reach |
| LCP / INP / CLS | [Core Web Vitals](https://web.dev/articles/vitals) |
| funnel: visitors → leads → consultations → proposals → closed | conversion |
| revenue / MRR / ARR | business ([Analytics](ANALYTICS.md)) |

## 4. Build / ops metrics

| Metric | Meaning |
|--------|---------|
| build.duration / build.success_rate | pipeline health |
| regression.count | blocked regressions |
| MTTR | mean time to resolve incidents |
| docs.stale_count | freshness health |

## 5. Rules

- Each metric has an owner and appears on at least one [Mission Control](MISSION_CONTROL.md) view.
- Metrics that gate merges are listed in the [Regression Policy](../04-quality/REGRESSION_POLICY.md).

## 6. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | GenAI metric names/units | <https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-metrics/> | 2026-06-12 |
| 2 | Web Vitals metrics | <https://web.dev/articles/vitals> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 45d · **Next review:** 2026-07-27
- See [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [Tracing](TRACING.md) · [Mission Control](MISSION_CONTROL.md) · [Analytics](ANALYTICS.md)
