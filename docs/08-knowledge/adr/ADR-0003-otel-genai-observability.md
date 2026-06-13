---
title: "ADR-0003: OpenTelemetry GenAI for observability"
doc_id: "ADR-0003"
status: Accepted
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "observability-swarm"
classification: Public
deciders: ["observability-swarm", "architecture-swarm"]
sources:
  - "OpenTelemetry GenAI semconv — https://opentelemetry.io/docs/specs/semconv/gen-ai/ (accessed 2026-06-12)"
related: ["OBS-TRACING", "OBS-OBSERVABILITY", "ARCH-AI-BUILD-SYSTEM"]
---

# ADR-0003: OpenTelemetry GenAI for observability

> **Breadcrumb:** [Home](../../../README.md) › [Docs Index](../../INDEX.md) › [Decision Log](../DECISION_LOG.md) › **ADR-0003**
> **Status:** `Accepted` · **Date:** `2026-06-12` · **Deciders:** observability-swarm, architecture-swarm

## Context

The build loop and agents must be fully observable and auditable. We need a vendor-neutral standard
for AI traces/metrics/events that interoperates with common tooling.

## Decision

We will instrument with **OpenTelemetry**, adopting the **GenAI semantic conventions** (model spans,
agent spans, metrics, events, MCP) and opting into the latest set via
`OTEL_SEMCONV_STABILITY_OPT_IN=gen_ai_latest_experimental`.

## Options Considered

| Option | Pros | Cons | Reversibility |
|--------|------|------|---------------|
| OTel GenAI (chosen) | open standard, portable, GenAI-aware | conventions still evolving | High |
| Vendor APM SDK | turnkey | lock-in, less GenAI-specific | Medium |
| Custom logging only | simple | no standard traces/metrics | High |

## Consequences

- **Positive:** portable, end-to-end traceability; supports the provenance chain.
- **Negative:** conventions are pre-stable — requires the 30-day re-verify cadence on
  [Tracing](../../05-observability/TRACING.md).

## Compliance & Guardrails

Trace events redact sensitive content per [Security](../../06-governance/SECURITY_ARCHITECTURE.md) and
the [Public/Private Model](../../00-overview/PUBLIC_PRIVATE_MODEL.md).

## Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | GenAI semconv signals + opt-in | <https://opentelemetry.io/docs/specs/semconv/gen-ai/> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · ADRs are immutable once Accepted; supersede to change.
- See [Freshness Policy](../../07-operations/FRESHNESS_POLICY.md).

### Navigation

- ⬆️ [Decision Log](../DECISION_LOG.md) · [Docs Index](../../INDEX.md) · 🏠 [Home](../../../README.md)
