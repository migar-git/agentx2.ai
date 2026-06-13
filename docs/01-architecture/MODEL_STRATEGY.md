---
title: "Model Strategy — Local Ollama First"
doc_id: "ARCH-MODEL-STRATEGY"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "architecture-swarm"
review_cadence: 30d
staleness_threshold: 45d
classification: Public
tags: ["models", "ollama", "local-first", "embeddings", "guardian"]
sources:
  - "Ollama model library — https://ollama.com/library (accessed 2026-06-12)"
  - "Ollama docs — https://docs.ollama.com/ (accessed 2026-06-12)"
  - "OpenAI-compatible API in Ollama — https://docs.ollama.com/openai (accessed 2026-06-12)"
related: ["ROOT-AGENTS", "ARCH-AI-BUILD-SYSTEM", "ARCH-MEMORY-ARCHITECTURE", "QUALITY-EVAL-FRAMEWORK", "GOV-RESPONSIBLE-AI"]
---

# Model Strategy — Local Ollama First

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › [Architecture](SYSTEM_ARCHITECTURE.md) › **Model Strategy**
> **Status:** `Active` · **Owner:** `architecture-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The model policy: which **local Ollama** models power each role, with fallbacks by hardware tier and an
optional cloud escalation path. Local-first is a hard default — the full
[self-build loop](AI_BUILD_SYSTEM.md) must run with no external model dependency.

> **Freshness note:** the local-model landscape moves weekly. This doc has the **shortest cadence
> (30d)** in the repo. Model ids below were taken from the live
> [Ollama library](https://ollama.com/library) on **2026-06-12**; re-verify ids/tags before pinning.

## 2. Principles

1. **Local-first, cloud-optional.** No build/run step requires a hosted model.
2. **Right-size per role.** Use the smallest model that passes the role's
   [eval bar](../04-quality/EVAL_FRAMEWORK.md).
3. **Tool-calling capable** for agent roles; **thinking** models for planning/eval.
4. **Pin + verify.** Pin tags; re-verify on the 30-day cadence
   ([Freshness Policy](../07-operations/FRESHNESS_POLICY.md)).
5. **Guardrail in-band.** A safety model screens inputs/outputs for risky actions.

## 3. Role → model matrix

Primary picks target a **workstation tier (≈24–48 GB VRAM)**; fallbacks serve **consumer (8–16 GB)**;
scale-up notes cover **server (80 GB+)**.

| Role | Primary (local) | Consumer fallback | Server scale-up | Capabilities needed |
|------|-----------------|-------------------|-----------------|---------------------|
| Orchestration / reasoning | `glm-4.7-flash` | `qwen3:8b` | `qwen3:235b` (MoE) | thinking, tools |
| Planning / spec | `qwen3.6` | `qwen3:8b` | `qwen3.6` (more ctx) | thinking, long ctx |
| Code generation | `qwen3-coder:30b` | `qwen2.5-coder:7b` | `qwen3-coder` (large) | tools, code |
| Code agents (multi-file) | `devstral:24b` | `qwen2.5-coder:7b` | `devstral-2` | agentic coding |
| Local long-horizon coding | `laguna-xs.2` | `qwen2.5-coder:7b` | — | agentic, MoE |
| Embeddings / memory | `qwen3-embedding:8b` | `embeddinggemma:300m` | `qwen3-embedding:8b` | retrieval quality |
| Alt embeddings | `bge-m3` | `nomic-embed-text` | `bge-m3` | multilingual |
| Eval judge | `qwen3.6` | `glm-4.7-flash` | `qwen3:235b` | rubric scoring |
| Safety / guardian | `granite4.1-guardian` | `llama-guard3:1b` | `granite4.1-guardian` | risk classification |
| Vision (design QA) | `gemma4` | `qwen2.5vl:7b` | `qwen3-vl` | image understanding |

## 4. Serving

- **Runtime:** [Ollama](https://docs.ollama.com/) exposing its native API and an
  [OpenAI-compatible endpoint](https://docs.ollama.com/openai) so standard SDKs work unchanged.
- **Routing:** a thin provider adapter selects model by role + tier and records token/cost per call
  ([Metrics Catalog](../05-observability/METRICS_CATALOG.md)).
- **Determinism:** pin temperature/seed for eval and regression runs.

## 5. Hardware tiers

| Tier | VRAM | Resident set (example) |
|------|------|------------------------|
| Consumer | 8–16 GB | `qwen2.5-coder:7b`, `qwen3:8b`, `embeddinggemma:300m`, `llama-guard3:1b` |
| Workstation (default) | 24–48 GB | `qwen3-coder:30b`, `glm-4.7-flash`, `qwen3-embedding:8b`, `granite4.1-guardian` |
| Server | 80 GB+ / multi-GPU | large MoE reasoning + vision + guardian resident |

## 6. Cloud escalation (optional, governed)

Cloud models are used **only** when a task provably exceeds local capability and the
[governance](../06-governance/AI_GOVERNANCE.md) policy permits, with cost tracked and data-handling
honored ([Public/Private Model](../00-overview/PUBLIC_PRIVATE_MODEL.md)). Never required for CI.

## 7. Selection & promotion process

1. Candidate model added to a shadow lane.
2. Scored on the role's eval set ([Eval Framework](../04-quality/EVAL_FRAMEWORK.md)).
3. Promoted only if it beats the incumbent with **no regression** and acceptable cost/latency.
4. Decision recorded as an entry in the [Learning Log](../08-knowledge/LEARNING_LOG.md) and, if
   structural, an [ADR](../08-knowledge/DECISION_LOG.md).

## 8. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Model ids, tags, capabilities (tools/thinking/vision/embedding) | <https://ollama.com/library> | 2026-06-12 |
| 2 | Ollama serving + API | <https://docs.ollama.com/> | 2026-06-12 |
| 3 | OpenAI-compatible endpoint | <https://docs.ollama.com/openai> | 2026-06-12 |

---

### Freshness

- **Created:** 2026-06-12 · **Updated:** 2026-06-12 · **Last verified:** 2026-06-12
- **Review cadence:** 30 days · **Staleness threshold:** 45 days · **Next review due:** 2026-07-12
- Shortest-cadence doc in the repo — re-verify model ids before pinning.

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [AI Build System](AI_BUILD_SYSTEM.md) · [Memory Architecture](MEMORY_ARCHITECTURE.md) · [Eval Framework](../04-quality/EVAL_FRAMEWORK.md)
