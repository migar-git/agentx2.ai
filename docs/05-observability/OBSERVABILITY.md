---
title: "Observability"
doc_id: "OBS-OBSERVABILITY"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "observability-swarm"
review_cadence: 45d
staleness_threshold: 60d
classification: Public
tags: ["observability", "traces", "metrics", "logs", "genai"]
sources:
  - "OpenTelemetry GenAI semconv v1.41.1 — https://opentelemetry.io/docs/specs/semconv/gen-ai/ (accessed 2026-06-12)"
  - "OpenTelemetry — https://opentelemetry.io/ (accessed 2026-06-12)"
related: ["OBS-TRACING", "OBS-METRICS-CATALOG", "OBS-LOGGING", "OBS-MISSION-CONTROL", "ARCH-AI-BUILD-SYSTEM"]
---

# Observability

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › **Observability**
> **Status:** `Active` · **Owner:** `observability-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

Everything is observable. This doc sets the three-pillar standard (traces, metrics, logs) plus the
**GenAI** layer, so every agent action, build, eval, and deploy is visible and traceable.

## 2. Pillars

| Pillar | Standard | Doc |
|--------|----------|-----|
| Traces | OTel spans incl. [GenAI](https://opentelemetry.io/docs/specs/semconv/gen-ai/) agent/model spans | [Tracing](TRACING.md) |
| Metrics | OTel metrics (GenAI + web + funnel) | [Metrics Catalog](METRICS_CATALOG.md) |
| Logs | structured JSON, correlated by `trace_id` | [Logging](LOGGING.md) |

## 3. What we observe

- **Website:** page views, traffic, sources, conversions, scroll/engagement
  ([Analytics](ANALYTICS.md)).
- **Lead funnel:** visitor → lead → consultation → proposal → close → revenue.
- **AI systems:** requests, latency, failures, cost, tool usage, memory usage, success, and
  hallucination/safety signals.
- **Agents:** executions, completion, escalations, approvals, errors, remediations, value influenced.

(Full inventory in [`sysprompt_agentx2.md`](../../sysprompt_agentx2.md) §Observability.)

## 4. Configuration

- Enable latest GenAI conventions via `OTEL_SEMCONV_STABILITY_OPT_IN=gen_ai_latest_experimental`
  (per the [semconv transition guidance](https://opentelemetry.io/docs/specs/semconv/gen-ai/)).
- Export through an OTel collector to the metrics/trace store feeding
  [Mission Control](MISSION_CONTROL.md).
- Everything timestamped (UTC); spans carry `trace_id` for end-to-end correlation.

## 5. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | GenAI signal set + opt-in | <https://opentelemetry.io/docs/specs/semconv/gen-ai/> | 2026-06-12 |
| 2 | Pillars + collector | <https://opentelemetry.io/> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 45d · **Next review:** 2026-07-27
- See [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [Tracing](TRACING.md) · [Metrics Catalog](METRICS_CATALOG.md) · [Mission Control](MISSION_CONTROL.md) · [Logging](LOGGING.md)
