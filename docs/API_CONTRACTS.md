---
title: "API & Interface Contracts"
doc_id: "API-CONTRACTS"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "architecture-swarm"
review_cadence: 30d
staleness_threshold: 45d
classification: Public
tags: ["api", "contracts", "interfaces", "schemas", "cli"]
sources:
  - "Ollama OpenAI-compatible API — https://docs.ollama.com/openai (accessed 2026-06-12)"
  - "Model Context Protocol — https://modelcontextprotocol.io/ (accessed 2026-06-12)"
  - "OpenAPI 3.1 — https://spec.openapis.org/oas/v3.1.0 (accessed 2026-06-12)"
  - "OpenTelemetry GenAI semconv — https://opentelemetry.io/docs/specs/semconv/gen-ai/ (accessed 2026-06-12)"
related: ["ARCH-INTEGRATION-ARCHITECTURE", "ARCH-MODEL-STRATEGY", "AGENT-CONTRACTS", "DATA-MODEL", "AGENT-ORCHESTRATION"]
---

# API & Interface Contracts

> **Breadcrumb:** [Home](../README.md) › [Docs Index](INDEX.md) › **API Contracts**
> **Status:** `Active` · **Owner:** `architecture-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The **concrete interface contracts** an implementer needs: how the website AI widgets talk to the
local model, the build/eval/trace tool CLIs, the MCP tool boundary, the standard result envelope, and
required environment variables. Because the public site is static, there is **no public application
API**; "API" here means the internal interfaces of the build plane and the on-page AI runtime.

## 2. Surface map

| Interface | Direction | Transport | Auth |
|-----------|-----------|-----------|------|
| AI widget → model | client → local | OpenAI-compatible HTTP | local/none in dev |
| Build/eval/trace scripts | CLI | argv + files | n/a |
| Agent ↔ tools | agent → tool | [MCP](https://modelcontextprotocol.io/) / adapter | scoped allow-list |
| Telemetry export | runtime → collector | OTLP | local |

## 3. Model interface (OpenAI-compatible)

The model client targets Ollama's
[OpenAI-compatible endpoint](https://docs.ollama.com/openai) so standard SDKs work unchanged. Model
ids come from [Model Strategy](01-architecture/MODEL_STRATEGY.md).

```http
POST /v1/chat/completions
Content-Type: application/json

{
  "model": "glm-4.7-flash",
  "messages": [{ "role": "system", "content": "..." }, { "role": "user", "content": "..." }],
  "temperature": 0.2,
  "stream": true
}
```

**Contract rules:** pin `model` + `temperature` (and seed for eval); stream to the widget; redact
sensitive content from traces; guardian-screen input and output
([Responsible AI](06-governance/RESPONSIBLE_AI.md)).

## 4. Standard result envelope (agents & tasks)

Every agent/task output uses this shape (also in [AGENTS.md](../AGENTS.md) §2):

```json
{
  "task_id": "string",
  "status": "ok | needs_human | failed",
  "result": {},
  "evidence": ["trace_id", "eval_run_id", "commit_sha"],
  "cost": { "tokens": 0, "tool_calls": 0, "wall_ms": 0 },
  "timestamp": "2026-06-12T00:00:00Z",
  "trace_id": "string"
}
```

## 5. Tool boundary (MCP / adapters)

Every tool declares an entry in the integration registry
([Integration Architecture](01-architecture/INTEGRATION_ARCHITECTURE.md)): `name`, `type`, `auth`,
`scope`, `data_class`, `owner`, `throttle`, `lifecycle`. Calls validate inputs, enforce scope, and
emit an [MCP span](https://opentelemetry.io/docs/specs/semconv/gen-ai/) — unknown/denied tools are
rejected and logged.

## 6. Build-plane CLI contracts (illustrative)

Names are fixed by the [Implementation Plan](IMPLEMENTATION_PLAN.md); flags are the stable contract.

| Command | Inputs | Outputs | Exit |
|---------|--------|---------|------|
| `build` | `src/` | static `dist/` | non-zero on failure |
| `eval --suite <name>` | `eval/golden_*.jsonl` | scores JSON + run id | non-zero if below threshold |
| `regress --baseline baseline.json` | current gate results | diff report | non-zero on any regression |
| `trace --run <id>` | run id | trace export | n/a |

## 7. Environment variables

No secrets in this public repo ([Security](SECURITY.md)). Required config (documented, not committed):

| Var | Purpose | Default |
|-----|---------|---------|
| `OLLAMA_HOST` | local model endpoint | `http://localhost:11434` |
| `OTEL_EXPORTER_OTLP_ENDPOINT` | telemetry collector | local collector |
| `OTEL_SEMCONV_STABILITY_OPT_IN` | enable latest GenAI conventions | `gen_ai_latest_experimental` |
| `SITE_BASE_URL` | canonical URL for SEO/sitemap | `https://agentx2.ai` |
| `PUBLIC_ANALYTICS_ID` | privacy-respecting analytics | unset in dev |

## 8. Versioning

Interfaces follow [SemVer](https://semver.org/); breaking changes require an
[ADR](08-knowledge/DECISION_LOG.md) and a migration note
([Release Engineering](04-quality/RELEASE_ENGINEERING.md)). Schemas validate in
[CI/CD](CI_CD.md).

## 9. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | OpenAI-compatible local endpoint | <https://docs.ollama.com/openai> | 2026-06-12 |
| 2 | Tool/context protocol | <https://modelcontextprotocol.io/> | 2026-06-12 |
| 3 | API contract format | <https://spec.openapis.org/oas/v3.1.0> | 2026-06-12 |
| 4 | Telemetry conventions | <https://opentelemetry.io/docs/specs/semconv/gen-ai/> | 2026-06-12 |

---

### Freshness

- **Created:** 2026-06-12 · **Updated:** 2026-06-12 · **Last verified:** 2026-06-12
- **Review cadence:** 30 days · **Staleness threshold:** 45 days · **Next review due:** 2026-07-12

### Navigation

- 🏠 [Home](../README.md) · ⬆️ [Docs Index](INDEX.md)
- ↔️ Related: [Integration Architecture](01-architecture/INTEGRATION_ARCHITECTURE.md) · [Data Model](DATA_MODEL.md) · [Agent Orchestration](AGENT_ORCHESTRATION.md) · [Model Strategy](01-architecture/MODEL_STRATEGY.md)
