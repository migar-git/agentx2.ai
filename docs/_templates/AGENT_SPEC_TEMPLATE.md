---
title: "Agent Spec — <AGENT NAME>"
doc_id: "AGENT-<SHORTNAME>"
status: Draft
version: 0.1.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "agent-architecture-swarm"
review_cadence: 60d
staleness_threshold: 90d
classification: Public
agent_class: ""                # executive | revenue | marketing | delivery | engineering | ops | governance | website | research
autonomy_tier: 1               # 0=manual, 1=suggest, 2=act-with-approval, 3=autonomous-within-policy
model_primary: ""              # local Ollama model id (e.g. qwen3-coder:30b)
model_fallback: ""             # local fallback (e.g. qwen2.5-coder:7b)
tools: []
sources: []
related: []
---

# Agent Spec — {{AGENT_NAME}}

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › [Agent Catalog](../03-agents/AGENT_CATALOG.md) › **{{AGENT_NAME}}**

## 1. Mission (one sentence)

What outcome this agent owns. Outcome, not activity.

## 2. Contract

| Field | Value |
|-------|-------|
| **Inputs** | structured trigger + context payload (schema below) |
| **Outputs** | structured result (schema below) — never free-text-only |
| **Tools** | explicit allow-list (see [Tool Routing](../01-architecture/ORCHESTRATION.md)) |
| **Model** | primary `<model_primary>`, fallback `<model_fallback>` (local Ollama) |
| **Memory** | what it reads/writes (see [Memory Architecture](../01-architecture/MEMORY_ARCHITECTURE.md)) |
| **Autonomy tier** | `<0–3>` (see [Tiered Autonomy](../06-governance/HUMAN_IN_THE_LOOP.md)) |

### Input schema (JSON)

```json
{ "task_id": "string", "intent": "string", "context": {}, "constraints": {}, "trace_id": "string" }
```

### Output schema (JSON)

```json
{ "task_id": "string", "status": "ok|needs_human|failed", "result": {}, "evidence": [], "cost": {}, "trace_id": "string", "timestamp": "2026-06-12T00:00:00Z" }
```

## 3. Behavior (state machine)

```mermaid
stateDiagram-v2
    [*] --> Plan
    Plan --> Act
    Act --> Validate
    Validate --> Remediate: fail
    Remediate --> Act
    Validate --> Handoff: pass
    Handoff --> [*]
    Act --> HumanGate: tier>=2 & risk high
    HumanGate --> Act: approved
    HumanGate --> [*]: rejected
```

## 4. Tools & Permissions

| Tool | Scope | Least-privilege rationale |
|------|-------|---------------------------|
| … | … | … |

## 5. Metrics (what "good" means)

| Metric | Target | Source |
|--------|--------|--------|
| Success rate | … | [Metrics Catalog](../05-observability/METRICS_CATALOG.md) |
| p95 latency | … | OTel GenAI spans |
| Cost / task | … | token + tool ledger |
| Escalation rate | … | … |
| Eval score | ≥ threshold | [Eval Framework](../04-quality/EVAL_FRAMEWORK.md) |

## 6. Escalations & Human Approval

- **When it pauses:** … (risk triggers)
- **Who approves:** …
- **Timeout default:** … (what happens if no human responds)

## 7. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | … | … | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 60d · **Next review:** 2026-08-11
- See [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- ⬆️ [Agent Catalog](../03-agents/AGENT_CATALOG.md) · [Docs Index](../INDEX.md) · 🏠 [Home](../../README.md)
