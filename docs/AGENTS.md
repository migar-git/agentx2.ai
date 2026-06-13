---
title: "Agents"
doc_id: "AGENT-CATALOG-FRONTDOOR"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "agent-architecture-swarm"
review_cadence: 60d
staleness_threshold: 90d
classification: Public
tags: ["front-door"]
sources:
  - "AgentX2.ai canonical doc (in-repo, accessed 2026-06-12)"
related: ["AGENT-CATALOG", "ROOT-AGENTS", "AGENT-REGISTRY"]
---

# Agents

> **Breadcrumb:** [Home](../README.md) › [Docs Index](INDEX.md) › **Agents**
> **Status:** `Active` · **Owner:** `agent-architecture-swarm` · **Last verified:** `2026-06-12`

## 1. Canonical source

> **Canonical source:** [Agent Catalog](03-agents/AGENT_CATALOG.md) — the indexed registry of every agent and the single source of truth. This page is a thin front door; it points to the deep doc and does not duplicate it.

Two anchors sit beside the catalog — keep their roles distinct:

- [AGENTS.md](../AGENTS.md) (repo root) — the agent **operating contract** (non-negotiables, run protocol, swarms).
- [Agent Registry](AGENT_REGISTRY.md) — the machine-readable registry of agent specs.

## 2. Summary

- This page is an **index of agent docs**; the root [AGENTS.md](../AGENTS.md) is the operating **contract** — the two are deliberately separate.
- The [Agent Catalog](03-agents/AGENT_CATALOG.md) registers every agent across three surfaces: website-facing, build-system swarms, and the Managed AI Workforce.
- Website (public) agents include the Concierge, Consultation, Solution Advisor, CFO, Agent Builder, ROI Calculator, Discovery, Knowledge, and Industry Advisor — each bound to a page and an autonomy tier.
- Build-system swarms (internal) cover spec, planning, code/content build, eval/judge, guardian, observability, learning, and improvement — orchestrated by `production-ops-brain`.
- Managed AI Workforce agents (the offering) span executive, finance, sales, marketing, support, engineering, operations, compliance, and research roles.
- Every agent carries a spec — mission, contract, tools, metrics, escalations, model, and autonomy tier — against the shared [Agent Contract](03-agents/AGENT_CONTRACTS.md).
- Every agent is observable ([Tracing](05-observability/TRACING.md)) and evaluated ([Eval Framework](04-quality/EVAL_FRAMEWORK.md)); new agents register before going live and deprecated agents are sunset.

## 3. Where to go next

| Go to | For |
|-------|-----|
| [Agent Catalog](03-agents/AGENT_CATALOG.md) | Every agent, indexed (canonical) |
| [AGENTS.md](../AGENTS.md) | The agent operating contract |
| [Agent Registry](AGENT_REGISTRY.md) | Machine-readable agent specs |
| [Agent Contracts](03-agents/AGENT_CONTRACTS.md) | Shared contract + schemas |
| [Managed AI Workforce](03-agents/MANAGED_AI_WORKFORCE.md) | The digital workforce offering |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 60d · **Next review:** 2026-08-11
- See [Freshness Policy](07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../README.md) · ⬆️ [Docs Index](INDEX.md)
- ↔️ Related: [Agent Catalog](03-agents/AGENT_CATALOG.md) · [AGENTS.md](../AGENTS.md) · [Agent Registry](AGENT_REGISTRY.md)
