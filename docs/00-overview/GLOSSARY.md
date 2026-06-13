---
title: "Glossary"
doc_id: "OVERVIEW-GLOSSARY"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "knowledge-swarm"
review_cadence: 90d
staleness_threshold: 120d
classification: Public
sources:
  - "OpenTelemetry GenAI semconv — https://opentelemetry.io/docs/specs/semconv/gen-ai/ (accessed 2026-06-12)"
  - "Model Context Protocol — https://modelcontextprotocol.io/ (accessed 2026-06-12)"
related: ["ROOT-AGENTS", "ARCH-AGENTIC-SWARM"]
---

# Glossary

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › **Glossary**
> **Status:** `Active` · **Owner:** `knowledge-swarm` · **Last verified:** `2026-06-12`

Shared vocabulary so every doc and agent uses terms consistently.

| Term | Definition |
|------|------------|
| **Agent** | An autonomous unit with a mission, contract, tools, and an autonomy tier. See [Agent Catalog](../03-agents/AGENT_CATALOG.md). |
| **Swarm** | A set of agents cooperating in a lane with handoffs. See [Agentic Swarm](../01-architecture/AGENTIC_SWARM.md). |
| **Self-build loop** | Topic chaos → spec → plan → build → eval → CI → deploy → observe → learn → improve. See [AI Build System](../01-architecture/AI_BUILD_SYSTEM.md). |
| **Autonomy tier** | 0 manual · 1 suggest · 2 act-with-approval · 3 autonomous-within-policy. See [HITL](../06-governance/HUMAN_IN_THE_LOOP.md). |
| **HITL** | Human-in-the-loop approval gate for risky/irreversible actions. |
| **Local-first** | Default to local Ollama models; cloud optional. See [Model Strategy](../01-architecture/MODEL_STRATEGY.md). |
| **Multi-eval** | Scoring an output across several metrics (correctness, safety, cost, latency, judge). See [Eval Framework](../04-quality/EVAL_FRAMEWORK.md). |
| **LLM-as-judge** | Using a model to score another model's output against a rubric. |
| **Zero regression** | No merge may worsen any tracked quality dimension. See [Regression Policy](../04-quality/REGRESSION_POLICY.md). |
| **OTel GenAI** | OpenTelemetry semantic conventions for generative-AI spans/metrics/events. |
| **MCP** | Model Context Protocol — open standard for tool/context servers. |
| **RAG** | Retrieval-Augmented Generation. See [Knowledge Architecture](../01-architecture/KNOWLEDGE_ARCHITECTURE.md). |
| **Vector map** | Embedding-indexed memory enabling semantic retrieval. See [Memory Architecture](../01-architecture/MEMORY_ARCHITECTURE.md). |
| **Freshness** | The timestamp + grounding + staleness discipline. See [Freshness Policy](../07-operations/FRESHNESS_POLICY.md). |
| **Grounding** | Tying a claim to an authoritative source with an access date. |
| **Provenance chain** | The timestamped link from live artifact back to its source decision. |
| **Trace / span** | A unit of observability; a span is one operation within a trace. |
| **Quality gate** | A pass/fail check that blocks merge/deploy. See [Quality Gates](../04-quality/QUALITY_GATES.md). |
| **Mission Control** | The single-pane dashboards. See [Mission Control](../05-observability/MISSION_CONTROL.md). |
| **Managed AI Workforce™** | Digital workers delivered as a subscription service. |

## Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | OTel GenAI definition | <https://opentelemetry.io/docs/specs/semconv/gen-ai/> | 2026-06-12 |
| 2 | MCP definition | <https://modelcontextprotocol.io/> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 90d · **Next review:** 2026-09-10
- See [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [AGENTS.md](../../AGENTS.md) · [Agentic Swarm](../01-architecture/AGENTIC_SWARM.md)
