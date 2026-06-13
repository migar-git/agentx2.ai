---
title: "ADR-0005: Parallel agentic-swarm topology"
doc_id: "ADR-0005"
status: Accepted
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "architecture-swarm"
classification: Public
deciders: ["architecture-swarm", "human:founder"]
sources:
  - "OpenTelemetry GenAI agent spans — https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-agent-spans/ (accessed 2026-06-12)"
  - "Model Context Protocol — https://modelcontextprotocol.io/ (accessed 2026-06-12)"
related: ["ARCH-AGENTIC-SWARM", "ARCH-ORCHESTRATION", "ARCH-AI-BUILD-SYSTEM"]
---

# ADR-0005: Parallel agentic-swarm topology

> **Breadcrumb:** [Home](../../../README.md) › [Docs Index](../../INDEX.md) › [Decision Log](../DECISION_LOG.md) › **ADR-0005**
> **Status:** `Accepted` · **Date:** `2026-06-12` · **Deciders:** architecture-swarm, founder

## Context

The repository must build itself end to end. A single sequential agent is too slow and too fragile;
the requirement calls for **agentic parallel swarms**.

## Decision

We will use a **planner-dispatcher orchestrator** (`production-ops-brain`) coordinating **parallel
swarm lanes** (architecture, website, agents, quality, observability, governance, knowledge, content),
with dependency-gated sequencing, idempotent tasks, A2A handoffs, and circuit breakers.

## Options Considered

| Option | Pros | Cons | Reversibility |
|--------|------|------|---------------|
| Parallel swarms + orchestrator (chosen) | fast, resilient, specialized | coordination complexity | High |
| Single monolithic agent | simple | slow, fragile, no specialization | High |
| Fully peer-to-peer agents | flexible | hard to govern/observe | Medium |

## Consequences

- **Positive:** concurrency, specialization, and clear ownership; safe via gates + HITL.
- **Negative:** requires orchestration, concurrency limits, and cost ceilings
  ([Orchestration](../../01-architecture/ORCHESTRATION.md)).

## Compliance & Guardrails

Swarms operate within [autonomy tiers](../../06-governance/HUMAN_IN_THE_LOOP.md) and emit
[agent spans](https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-agent-spans/); handoffs use
the standard envelope ([Agentic Swarm](../../01-architecture/AGENTIC_SWARM.md)).

## Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Agent span model | <https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-agent-spans/> | 2026-06-12 |
| 2 | Tool/context protocol | <https://modelcontextprotocol.io/> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · ADRs are immutable once Accepted; supersede to change.
- See [Freshness Policy](../../07-operations/FRESHNESS_POLICY.md).

### Navigation

- ⬆️ [Decision Log](../DECISION_LOG.md) · [Docs Index](../../INDEX.md) · 🏠 [Home](../../../README.md)
