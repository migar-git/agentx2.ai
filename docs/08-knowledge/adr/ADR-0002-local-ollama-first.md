---
title: "ADR-0002: Local Ollama-first models (cloud optional)"
doc_id: "ADR-0002"
status: Accepted
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "architecture-swarm"
classification: Public
deciders: ["human:founder", "architecture-swarm"]
sources:
  - "Ollama — https://ollama.com/ (accessed 2026-06-12)"
  - "Ollama library — https://ollama.com/library (accessed 2026-06-12)"
related: ["ARCH-MODEL-STRATEGY", "ARCH-AI-BUILD-SYSTEM", "GOV-AI-GOVERNANCE"]
---

# ADR-0002: Local Ollama-first models (cloud optional)

> **Breadcrumb:** [Home](../../../README.md) › [Docs Index](../../INDEX.md) › [Decision Log](../DECISION_LOG.md) › **ADR-0002**
> **Status:** `Accepted` · **Date:** `2026-06-12` · **Deciders:** founder, architecture-swarm

## Context

The user requirement is that the repository **builds itself with a local Ollama LLM**. We need
privacy, zero per-token cost for the build loop, and no hard dependency on any hosted model.

## Decision

We will default **all** build/reason/code/embed/judge/guardian roles to **local Ollama models**.
Cloud models are an **optional, governed escalation** only — never required to build or run the repo.

## Options Considered

| Option | Pros | Cons | Reversibility |
|--------|------|------|---------------|
| Local Ollama-first (chosen) | private, free loop, offline-capable | bounded by local hardware | High |
| Cloud-first | strongest frontier models | cost, data egress, dependency | High |
| Hybrid default | flexibility | complexity, accidental cloud reliance | High |

## Consequences

- **Positive:** meets the self-build requirement; cost-predictable; private by default.
- **Negative:** capability bounded by hardware tier; requires the
  [Model Strategy](../../01-architecture/MODEL_STRATEGY.md) 30-day re-verification cadence.
- **Follow-on:** maintain the role→model matrix and shadow-eval new models before promotion.

## Compliance & Guardrails

Cloud escalation is gated by [AI Governance](../../06-governance/AI_GOVERNANCE.md) and honors the
[Public/Private Model](../../00-overview/PUBLIC_PRIVATE_MODEL.md).

## Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Local serving | <https://ollama.com/> | 2026-06-12 |
| 2 | Model availability | <https://ollama.com/library> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · ADRs are immutable once Accepted; supersede to change.
- See [Freshness Policy](../../07-operations/FRESHNESS_POLICY.md).

### Navigation

- ⬆️ [Decision Log](../DECISION_LOG.md) · [Docs Index](../../INDEX.md) · 🏠 [Home](../../../README.md)
