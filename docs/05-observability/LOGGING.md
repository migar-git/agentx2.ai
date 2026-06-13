---
title: "Logging"
doc_id: "OBS-LOGGING"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "observability-swarm"
review_cadence: 60d
staleness_threshold: 90d
classification: Public
tags: ["logging", "structured", "correlation"]
sources:
  - "OpenTelemetry logs — https://opentelemetry.io/docs/concepts/signals/logs/ (accessed 2026-06-12)"
related: ["OBS-OBSERVABILITY", "OBS-TRACING", "GOV-SECURITY-ARCHITECTURE"]
---

# Logging

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › [Observability](OBSERVABILITY.md) › **Logging**
> **Status:** `Active` · **Owner:** `observability-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The structured-logging standard so logs are queryable and correlated with traces.

## 2. Standard

- **Structured JSON** logs; one event per line.
- **Correlated:** every log carries `trace_id` + timestamp (UTC) to join with
  [traces](TRACING.md) ([OTel logs](https://opentelemetry.io/docs/concepts/signals/logs/)).
- **Leveled:** `debug` / `info` / `warn` / `error`; production defaults to `info`.
- **Safe:** never log secrets or sensitive content; redact per
  [Security Architecture](../06-governance/SECURITY_ARCHITECTURE.md).

## 3. What to log

Agent decisions, tool calls, gate results, deploys, errors, and HITL approvals — enough to
reconstruct any run, never more than needed.

## 4. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Log signal + correlation | <https://opentelemetry.io/docs/concepts/signals/logs/> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 60d · **Next review:** 2026-08-11
- See [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [Observability](OBSERVABILITY.md) · [Tracing](TRACING.md) · [Security Architecture](../06-governance/SECURITY_ARCHITECTURE.md)
