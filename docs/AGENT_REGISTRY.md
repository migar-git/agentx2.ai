---
title: "Agent Registry"
doc_id: "AGENT-REGISTRY"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "agent-architecture-swarm"
review_cadence: 60d
staleness_threshold: 90d
classification: Public
tags: ["agents", "registry", "autonomy", "mcp", "catalog"]
sources:
  - "OpenTelemetry GenAI semantic conventions — https://opentelemetry.io/docs/specs/semconv/gen-ai/ (accessed 2026-06-12)"
  - "Model Context Protocol — https://modelcontextprotocol.io/ (accessed 2026-06-12)"
  - "AGENTS.md agent operating contract (in-repo, accessed 2026-06-12)"
  - "PRD_AgentX2.md agent operating system (in-repo, accessed 2026-06-12)"
  - "sysprompt_agentx2.md website + workforce agents (in-repo, accessed 2026-06-12)"
related: ["AGENT-CATALOG", "AGENT-CONTRACTS", "AGENT-WORKFLOWS", "ARCH-AGENTIC-SWARM", "GOV-HUMAN-IN-THE-LOOP"]
---

# Agent Registry

> **Breadcrumb:** [Home](../README.md) › [Docs Index](INDEX.md) › **Agent Registry**
> **Status:** `Active` · **Owner:** `agent-architecture-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The single, concrete table of **every agent** in AgentX2.ai across all three planes — website-facing,
build-system swarms, and the managed AI workforce — with the operational facts an operator needs at a
glance: mission, typed I/O, allow-listed tools, model role, autonomy tier, metrics, escalation path,
and approval gate. The [Agent Catalog](03-agents/AGENT_CATALOG.md) is the narrative index; this
registry is the machine-shaped source of truth that dashboards, governance, and orchestration read.

## 2. Context & Scope

- Every agent obeys the shared [Agent Contract](03-agents/AGENT_CONTRACTS.md) and emits OpenTelemetry
  GenAI agent spans ([Tracing](05-observability/TRACING.md)).
- **Website-agent autonomy tiers mirror** the [Agent Catalog](03-agents/AGENT_CATALOG.md); **build and
  workforce tiers are the governed defaults established by this registry** and are bound by the
  [Human-in-the-Loop](06-governance/HUMAN_IN_THE_LOOP.md) policy.
- **Model `role` only** is listed here; concrete local model ids (primary + fallback) are defined once
  in [`AGENTS.md`](../AGENTS.md) §4 and [Model Strategy](01-architecture/MODEL_STRATEGY.md) to avoid
  duplication or drift.
- Tool access is an **allow-list**; `MCP` denotes a [Model Context Protocol](https://modelcontextprotocol.io/)
  server, `RAG` denotes grounded retrieval over approved content, `FS` denotes scoped repository
  file-system access.
- No row contains secrets, client data, or PII; the registry is `Public`.

## 3. Legends

### 3.1 Planes

| Plane | Meaning |
|-------|---------|
| web | Public, on-page agents that serve site visitors |
| build | Internal swarms that build, test, and operate the platform |
| workforce | Productized agents delivered as the Managed AI Workforce offering |

### 3.2 Autonomy tiers

| Tier | Name | Behavior |
|------|------|----------|
| 1 | Assistive | Informational/recommending only; no irreversible or external action; runs unattended |
| 2 | Semi-autonomous | Acts within scope; **irreversible or external actions are gated** by a human or guardian |
| 3 | Orchestrating | Coordinates other agents within policy; high-risk dispatch escalates to a human |

### 3.3 Model roles

| Role | Used for |
|------|----------|
| reasoning | Orchestration, planning, conversation, synthesis |
| codegen | Code and structured-content generation |
| judge | Eval scoring (LLM-as-judge) |
| guardian | Safety / injection / tool-abuse screening |
| embeddings | Memory and retrieval |
| vision | Visual/design QA |

## 4. Agent registry

> Model `role` maps to the local-first model matrix in [`AGENTS.md`](../AGENTS.md) §4. Metrics use the
> canonical ids in the [Metrics Catalog](05-observability/METRICS_CATALOG.md).

| Agent | Plane | Mission | Inputs | Outputs | Tools / MCP | Model role | Tier | Metrics | Escalation | Approval gate |
|-------|-------|---------|--------|---------|-------------|-----------|------|---------|------------|---------------|
| Website Concierge | web | Navigate and answer site-wide | visitor query, page context | grounded answer, nav links | site RAG, nav tool | reasoning | 1 | ai_widget_open, ai_message | orchestrator | none (informational) |
| AI Consultation Agent | web | Qualify need and book a consultation | visitor intent, stated profile | qualification, booking intent | calendar (MCP), CRM (MCP) | reasoning | 2 | leads, consultation_booked | human (sales) | booking confirm, external comms |
| AI Solution Advisor | web | Recommend the right offering | requirements | offering recommendation | catalog RAG | reasoning | 1 | ai_message, cta_click | orchestrator | none |
| AI CFO Agent | web | Assess finance use-case fit | finance scenario | fit and value framing | finance RAG | reasoning | 1 | ai_message | human (finance) | none |
| Agent Builder | web | Scope a prospective agent | use-case description | agent scope draft | template RAG | reasoning | 1 | ai_message | orchestrator | none |
| AI ROI Calculator | web | Quantify value of a scenario | non-PII scenario inputs | ROI estimate model | calculator tool | reasoning | 1 | cta_click, ai_message | orchestrator | none |
| AI Discovery Agent | web | Run structured discovery | discovery answers | discovery brief | form (MCP), CRM (MCP) | reasoning | 2 | lead_captured, form_submit | human (sales) | lead write, external comms |
| Knowledge Agent | web | Grounded FAQ answers | question | cited answer | docs RAG | reasoning | 1 | ai_message | orchestrator | none |
| Industry Advisor | web | Vertical recommendation | industry, need | vertical guidance | industry RAG | reasoning | 1 | ai_message | orchestrator | none |
| Spec Agent | build | Turn an intake cluster into a spec | intake cluster | specification doc | FS, docs RAG | reasoning | 2 | build.success_rate, eval.score | orchestrator | spec ratification (PR) |
| Planner Agent | build | Turn a spec into a plan | specification | plan and tasks | FS | reasoning | 2 | build.duration | orchestrator | plan approval (PR) |
| Code Agent | build | Implement a planned task | task | code diff | FS, test runner | codegen | 2 | build.success_rate | orchestrator | merge gate (CI + review) |
| Content Agent | build | Produce content and SEO assets | task | content diff | FS, content RAG | codegen | 2 | seo metrics | orchestrator | merge gate (CI + review) |
| Eval / Judge Agent | build | Score candidate outputs | candidate output | per-dimension scores | judge model | judge | 2 | eval.score | orchestrator | none (advisory gate) |
| Guardian Agent | build | Screen for safety and abuse | any agent output | allow or block plus reasons | guardian model | guardian | 2 | safety.flags | human (governance) | block on unsafe |
| Observability Agent | build | Emit and curate telemetry | spans, metrics | dashboards, alerts | OTel collector (MCP) | reasoning | 1 | all OBS metrics | orchestrator | none |
| Learning Agent | build | Record grounded learnings | run evidence | learning-log entry | FS | reasoning | 1 | docs.stale_count | orchestrator | none |
| Improvement Agent | build | Propose improvements | metrics, learnings | backlog items | FS | reasoning | 2 | regression.count | orchestrator | change approval (PR) |
| production-ops-brain | build | Dispatch, monitor, and retry swarms | tasks, signals | dispatch, retries, escalations | orchestration tools | reasoning | 3 | agent.executions, MTTR | human (critical) | high-risk dispatch, deploy |
| Executive Agent | workforce | Synthesize strategy and options | scoped client context | briefs, decision options | client KB (MCP, scoped) | reasoning | 2 | agent.success_rate | human (client) | external decisions |
| Finance Agent | workforce | Finance operations and analysis | scoped financial data | analysis, reports | finance systems (MCP) | reasoning | 2 | agent.success_rate | human (client) | postings, transactions |
| Sales Agent | workforce | Pipeline support and outreach drafts | CRM context | drafts, summaries | CRM (MCP) | reasoning | 2 | leads, agent.escalations | human (client) | external comms, send |
| Marketing Agent | workforce | Campaign content production | brief | content drafts | CMS (MCP) | codegen | 2 | content metrics | human (client) | publish |
| Support Agent | workforce | Triage and resolve tickets | ticket | response, triage | helpdesk (MCP) | reasoning | 2 | agent.success_rate, agent.escalations | human (client) | external send, refunds |
| Engineering Agent | workforce | Build and maintain client code | task | code diff | repo (MCP), CI | codegen | 2 | build.success_rate | human (client) | deploy, production change |
| Operations Agent | workforce | Automate operational processes | workflow | actions, runbooks | ops tools (MCP) | reasoning | 2 | MTTR | human (client) | irreversible operations |
| Compliance Agent | workforce | Map evidence and run checks | controls, artifacts | evidence map, findings | GRC (MCP), docs RAG | reasoning | 2 | safety.flags | human (governance) | attestations |
| Research Agent | workforce | Grounded research briefs | question | cited brief | web/RAG (MCP) | reasoning | 1 | eval.score | orchestrator | none |

## 5. Registry entry schema

Each row above serializes to one record of the following shape. New agents register here before going
live; deprecated agents are marked and sunset per the [Agent Catalog](03-agents/AGENT_CATALOG.md) rules.

```yaml
# Agent registry entry — one record per agent
agent:
  id: string                       # stable slug, e.g. "ai-consultation"
  name: string                     # human-readable label
  plane: web | build | workforce
  status: active | draft | deprecated
  mission: string                  # one-sentence outcome
  owner_swarm: string              # accountable swarm
  inputs:                          # typed intake contract
    - name: string
      type: string
      required: boolean
  outputs:
    schema_ref: "AGENT-CONTRACTS#output"   # standard result envelope
  tools:                           # allow-listed only
    - name: string
      kind: builtin | mcp | rag | fs
      scope: read | write
  model:
    role: reasoning | codegen | judge | guardian | embeddings | vision
    matrix_ref: "AGENTS.md#4"       # primary + fallback resolved centrally
  memory:
    read_scope: string
    write_scope: string
  autonomy_tier: 1 | 2 | 3
  metrics: [string]                # ids from OBS-METRICS-CATALOG
  escalation:
    to: orchestrator | human | specialist-agent
    triggers: [string]
  approval_gate:
    required_for: [string]          # irreversible/external actions
    approver: string                # role that approves
  eval_ref: "QUALITY-EVAL-FRAMEWORK"
  trace: required                   # OTel GenAI agent spans
```

## 6. Decisions & Rationale

| # | Decision | Rationale |
|---|----------|-----------|
| 1 | One unified registry table across all planes | A single source of truth prevents catalog/registry drift and lets governance read every agent the same way |
| 2 | Model `role` here, model ids in `AGENTS.md` §4 | Keeps the pinned model matrix in exactly one place; the registry never goes stale on model swaps |
| 3 | Tools are allow-lists with explicit `MCP`/`RAG`/`FS` kinds | Least-privilege tool access is a governance and security requirement, not an afterthought |
| 4 | Website tiers mirror the catalog; build/workforce tiers set here | Avoids contradicting an existing source while still giving every agent a governed default tier |
| 5 | Every agent carries metrics + escalation + approval gate columns | Observability and human oversight are mandatory contract fields, so they are first-class registry columns |

## 7. Risks & Open Questions

- **Tier calibration.** Build/workforce default tiers are conservative; per-deployment tightening or
  loosening must be ratified through [AI Governance](06-governance/AI_GOVERNANCE.md). `[UNVERIFIED]`
  optimal tier per workforce agent until field evals accumulate.
- **Tool sprawl.** As MCP servers are added, allow-lists must be re-audited; see
  [Agent Workflows](AGENT_WORKFLOWS.md) and the MCP tool-call spans in
  [Telemetry Schema](TELEMETRY_SCHEMA.md).
- **Workforce data scoping.** Client-scoped memory and tools must enforce strict isolation; cross-client
  leakage is a governance risk tracked in the [Risk Register](06-governance/RISK_REGISTER.md).

## 8. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Agents emit standardized GenAI agent spans | <https://opentelemetry.io/docs/specs/semconv/gen-ai/> | 2026-06-12 |
| 2 | Tool access via Model Context Protocol servers | <https://modelcontextprotocol.io/> | 2026-06-12 |
| 3 | Agent operating contract, run protocol, model roles | [`AGENTS.md`](../AGENTS.md) | 2026-06-12 |
| 4 | Agent operating system and swarms | [`PRD_AgentX2.md`](../PRD_AgentX2.md) | 2026-06-12 |
| 5 | Website and workforce agent set | [`sysprompt_agentx2.md`](../sysprompt_agentx2.md) | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 60d · **Next review:** 2026-08-11
- See [Freshness Policy](07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../README.md) · ⬆️ [Docs Index](INDEX.md)
- ↔️ Related: [Agent Catalog](03-agents/AGENT_CATALOG.md) · [Agent Contracts](03-agents/AGENT_CONTRACTS.md) · [Agent Workflows](AGENT_WORKFLOWS.md) · [HITL](06-governance/HUMAN_IN_THE_LOOP.md)
