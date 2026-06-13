---
title: "Observability (Canonical Entry Point)"
doc_id: "OBSERVABILITY-CANONICAL"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "observability-swarm"
review_cadence: 45d
staleness_threshold: 60d
classification: Public
tags: ["observability", "entry-point"]
sources:
  - "Observability (in-repo) — docs/05-observability/OBSERVABILITY.md (accessed 2026-06-12)"
  - "OpenTelemetry GenAI semconv — https://opentelemetry.io/docs/specs/semconv/gen-ai/ (accessed 2026-06-12)"
related: ["OBS-OBSERVABILITY", "OBS-TRACING", "OBS-METRICS-CATALOG", "OBS-LOGGING", "OBS-MISSION-CONTROL"]
---

# Observability (Canonical Entry Point)

> **Breadcrumb:** [Home](../README.md) › [Docs Index](INDEX.md) › **Observability**
> **Status:** `Active` · **Owner:** `observability-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The single front door for observability. The **authoritative deep doc** is
[Observability](05-observability/OBSERVABILITY.md). This page summarizes and routes.

## 2. Key facts

- **Three pillars + GenAI:** traces, metrics, logs — plus OpenTelemetry
  [GenAI conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/) for model/agent/tool spans.
- Enable latest conventions: `OTEL_SEMCONV_STABILITY_OPT_IN=gen_ai_latest_experimental`.
- Everything timestamped (UTC); spans carry `trace_id` for end-to-end correlation.
- Surfaced on [Mission Control](05-observability/MISSION_CONTROL.md); metrics defined in the
  [Metrics Catalog](05-observability/METRICS_CATALOG.md).

## 3. Read next

- Deep: [Observability](05-observability/OBSERVABILITY.md)
- [Tracing](05-observability/TRACING.md) · [Metrics Catalog](05-observability/METRICS_CATALOG.md) ·
  [Logging](05-observability/LOGGING.md) · [Mission Control](05-observability/MISSION_CONTROL.md) ·
  [Analytics](05-observability/ANALYTICS.md)

## 4. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Pillars + GenAI signals | [Observability](05-observability/OBSERVABILITY.md) | 2026-06-12 |
| 2 | GenAI semconv | <https://opentelemetry.io/docs/specs/semconv/gen-ai/> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 45d · **Next review:** 2026-07-27
- See [Freshness Policy](07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../README.md) · ⬆️ [Docs Index](INDEX.md)
- ↔️ Related: [Observability](05-observability/OBSERVABILITY.md) · [Tracing](05-observability/TRACING.md)
