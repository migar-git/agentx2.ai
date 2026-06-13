---
title: "Agent Catalog"
doc_id: "AGENT-CATALOG"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "agent-architecture-swarm"
review_cadence: 45d
staleness_threshold: 60d
classification: Public
tags: ["agents", "catalog", "registry"]
sources:
  - "PRD_AgentX2.md agent operating system (in-repo, accessed 2026-06-12)"
  - "sysprompt_agentx2.md website agents (in-repo, accessed 2026-06-12)"
related: ["AGENT-CONTRACTS", "ARCH-AGENTIC-SWARM", "WEBSITE-AI-EXPERIENCE", "AGENT-MANAGED-AI-WORKFORCE"]
---

# Agent Catalog

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › **Agent Catalog**
> **Status:** `Active` · **Owner:** `agent-architecture-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The indexed registry of every agent — website-facing, build-system, and managed-workforce. Each agent
is specified against the shared [Agent Contract](AGENT_CONTRACTS.md) using the
[Agent Spec Template](../_templates/AGENT_SPEC_TEMPLATE.md).

## 2. Website agents (public)

Per [`sysprompt_agentx2.md`](../../sysprompt_agentx2.md); behavior rules in
[AI Experience](../02-website/AI_EXPERIENCE.md).

| Agent | Page | Mission | Autonomy tier |
|-------|------|---------|---------------|
| Website Concierge | all | navigate + answer | 1 |
| AI Consultation Agent | home | qualify + book | 2 |
| AI Solution Advisor | services | recommend offering | 1 |
| AI CFO Agent | finance-ai | finance use-case fit | 1 |
| Agent Builder | agentic-ai | scope an agent | 1 |
| AI ROI Calculator | subscriptions | quantify value | 1 |
| AI Discovery Agent | contact | structured discovery | 2 |
| Knowledge Agent | faq | grounded answers | 1 |
| Industry Advisor | industries | vertical recommendation | 1 |

## 3. Build-system swarms (internal)

Per [`PRD_AgentX2.md`](../../PRD_AgentX2.md) and [Agentic Swarm](../01-architecture/AGENTIC_SWARM.md):
spec, planner, code/content build agents, eval/judge, guardian, observability, learning, and
improvement agents — orchestrated by `production-ops-brain`.

## 4. Managed AI Workforce agents (offering)

Executive, finance, sales, marketing, support, engineering, operations, compliance, and research
agents — productized in [Managed AI Workforce](MANAGED_AI_WORKFORCE.md).

## 5. Catalog rules

- Every agent has a spec (mission, contract, tools, metrics, escalations, model, autonomy tier).
- Every agent is observable ([Tracing](../05-observability/TRACING.md)) and evaluated
  ([Eval Framework](../04-quality/EVAL_FRAMEWORK.md)).
- New agents register here before going live; deprecated agents are marked and sunset.

## 6. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Agent operating system | [`PRD_AgentX2.md`](../../PRD_AgentX2.md) | 2026-06-12 |
| 2 | Website agents | [`sysprompt_agentx2.md`](../../sysprompt_agentx2.md) | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 45d · **Next review:** 2026-07-27
- See [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [Agent Contracts](AGENT_CONTRACTS.md) · [Managed AI Workforce](MANAGED_AI_WORKFORCE.md) · [AI Experience](../02-website/AI_EXPERIENCE.md)
