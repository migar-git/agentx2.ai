---
title: "Telemetry Schema"
doc_id: "OBS-TELEMETRY-SCHEMA"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "observability-swarm"
review_cadence: 60d
staleness_threshold: 90d
classification: Public
tags: ["telemetry", "schema", "otel", "genai", "analytics", "privacy"]
sources:
  - "OpenTelemetry GenAI semantic conventions — https://opentelemetry.io/docs/specs/semconv/gen-ai/ (accessed 2026-06-12)"
  - "Model Context Protocol — https://modelcontextprotocol.io/ (accessed 2026-06-12)"
  - "sysprompt_agentx2.md observability inventory (in-repo, accessed 2026-06-12)"
related: ["OBS-TRACING", "OBS-METRICS-CATALOG", "OBS-ANALYTICS", "OBS-ALERTING", "GOV-SECURITY-ARCHITECTURE"]
---

# Telemetry Schema

> **Breadcrumb:** [Home](../README.md) › [Docs Index](INDEX.md) › **Telemetry Schema**
> **Status:** `Active` · **Owner:** `observability-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The concrete **field-level schema** for what AgentX2.ai emits: GenAI spans, website analytics events,
and agent metrics — plus the privacy rules that bound them. This makes the three pillars in
[Observability](05-observability/OBSERVABILITY.md) machine-checkable and keeps dashboards, the
[Metrics Catalog](05-observability/METRICS_CATALOG.md), and [Alerting](ALERTING.md) in agreement.

## 2. Context & Scope

- **Spans/events/metrics** follow the OpenTelemetry
  [GenAI semantic conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/); attribute names
  below are taken from that spec, not invented.
- This doc defines **fields and types, never values** — example payloads use typed placeholders
  (e.g. `"<model-id>"`, `<int>`) so nothing reads as a fabricated metric.
- All signals carry `trace_id` and UTC timestamps for end-to-end correlation
  ([Tracing](05-observability/TRACING.md)).

## 3. GenAI spans (model + agent + tool)

GenAI model-call spans use the following attributes (subset of the OTel GenAI spec). Token usage and
duration are emitted by the instrumentation; **values are runtime data, not defined here.**

| Attribute | Type | Description | Required |
|-----------|------|-------------|----------|
| `gen_ai.system` | string | Provider/system, e.g. `ollama` | yes |
| `gen_ai.operation.name` | string | Operation, e.g. `chat`, `embeddings` | yes |
| `gen_ai.request.model` | string | Requested model id | yes |
| `gen_ai.response.model` | string | Responding model id | no |
| `gen_ai.usage.input_tokens` | int | Input/prompt tokens for the call | no |
| `gen_ai.usage.output_tokens` | int | Output/completion tokens for the call | no |
| `gen_ai.request.temperature` | double | Sampling temperature, if set | no |
| `error.type` | string | Error class if the call failed | no |
| `server.address` | string | Endpoint host (local-first) | no |

> **Latency** is the span duration (end − start), correlated to the
> `gen_ai.client.operation.duration` metric; **token usage** correlates to `gen_ai.client.token.usage`
> ([Metrics Catalog](05-observability/METRICS_CATALOG.md)). Agent spans add plan/act/validate phases;
> tool spans to MCP servers follow the [MCP](https://modelcontextprotocol.io/) conventions.

```json
{
  "name": "chat <model-id>",
  "kind": "CLIENT",
  "trace_id": "<hex-trace-id>",
  "span_id": "<hex-span-id>",
  "start_time": "2026-06-12T00:00:00Z",
  "end_time": "2026-06-12T00:00:00Z",
  "attributes": {
    "gen_ai.system": "<system>",
    "gen_ai.operation.name": "chat",
    "gen_ai.request.model": "<model-id>",
    "gen_ai.response.model": "<model-id>",
    "gen_ai.usage.input_tokens": "<int>",
    "gen_ai.usage.output_tokens": "<int>"
  }
}
```

## 4. Website analytics events

Client-side product events use a shared envelope plus per-event properties. **No PII** is collected;
identifiers are pseudonymous (see §6).

```json
{
  "event": "<event_name>",
  "timestamp": "2026-06-12T00:00:00Z",
  "anon_id": "<pseudonymous-id>",
  "session_id": "<session-id>",
  "page": "<route>",
  "trace_id": "<hex-trace-id>",
  "properties": {}
}
```

| Event | Key properties | Meaning |
|-------|----------------|---------|
| `page_view` | `page`, `referrer_class`, `device_class` | a page was viewed |
| `cta_click` | `cta_id`, `page`, `placement` | a call-to-action was clicked |
| `form_submit` | `form_id`, `page`, `valid` | a form was submitted |
| `ai_widget_open` | `agent_id`, `page` | an on-page agent widget was opened |
| `ai_message` | `agent_id`, `turn_index`, `grounded` | a message turn occurred |
| `lead_captured` | `source`, `agent_id`, `qualified` | a lead was captured |
| `consultation_booked` | `source`, `agent_id` | a consultation was booked |

> Property values are runtime data. `referrer_class`/`device_class` are **bucketed** (not raw) to avoid
> fingerprinting; free-text is never stored in analytics properties.

## 5. Agent metrics

Agent counters/gauges align to the [Metrics Catalog](05-observability/METRICS_CATALOG.md) and the
observed set in [Observability](05-observability/OBSERVABILITY.md) §3.

| Metric | Type | Unit | Description |
|--------|------|------|-------------|
| `agent.executions` | counter | runs | agent runs started |
| `agent.success_rate` | gauge | ratio | runs meeting their spec |
| `agent.escalations` | counter | events | escalations to human/orchestrator |
| `agent.approvals` | counter | events | human approvals granted |
| `agent.remediations` | counter | events | self-remediations after a failed gate |
| `eval.score` | gauge | 0–1 | per-dimension eval score |
| `safety.flags` | counter | events | guardian safety flags |

```yaml
# Agent metric descriptor — one per metric id
metric:
  id: string                 # e.g. "agent.escalations"
  instrument: counter | gauge | histogram
  unit: string               # runs | ratio | events | ms
  dimensions: [string]       # agent_id, plane, autonomy_tier, outcome
  owner_swarm: string
  surfaces_on: ["OBS-MISSION-CONTROL"]
```

## 6. Privacy and redaction

- **No PII or secrets in telemetry.** Prompt/response content is captured only as redacted GenAI events
  per [Tracing](05-observability/TRACING.md) §5 and the [Public/Private Model](00-overview/PUBLIC_PRIVATE_MODEL.md).
- **Pseudonymous ids only** (`anon_id`, `session_id`); no raw IP, email, or name in analytics.
- **Bucketed, not raw** for potentially identifying fields (device, referrer, geo); free-text excluded.
- Redaction and classification follow [Security Architecture](06-governance/SECURITY_ARCHITECTURE.md);
  public traces never contain client data.

## 7. Decisions & Rationale

| # | Decision | Rationale |
|---|----------|-----------|
| 1 | Adopt OTel GenAI attribute names verbatim | Interoperable tooling and no bespoke naming drift |
| 2 | Define fields/types, never values | Keeps the schema honest and free of fabricated metrics |
| 3 | One shared analytics envelope + per-event properties | Consistent correlation by `trace_id`/`session_id` |
| 4 | Pseudonymous, bucketed, redacted by default | Privacy-by-design; analytics never becomes a PII store |

## 8. Risks & Open Questions

- **Convention churn.** GenAI semconv is evolving; attribute names must be re-verified on cadence
  ([Tracing](05-observability/TRACING.md) re-verify note). `[UNVERIFIED]` stability of experimental
  attributes between versions.
- **Cardinality.** High-cardinality dimensions (e.g. per-`agent_id` × per-route) can explode metric
  series; dimension sets are kept bounded.
- **Redaction completeness.** Redaction must catch sensitive content in tool/RAG payloads, not just
  prompts; tracked as a security control.

## 9. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | GenAI span/metric attribute names and semantics | <https://opentelemetry.io/docs/specs/semconv/gen-ai/> | 2026-06-12 |
| 2 | Tool-call spans to MCP servers | <https://modelcontextprotocol.io/> | 2026-06-12 |
| 3 | Observed website + agent signal inventory | [`sysprompt_agentx2.md`](../sysprompt_agentx2.md) | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 60d · **Next review:** 2026-08-11
- See [Freshness Policy](07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../README.md) · ⬆️ [Docs Index](INDEX.md)
- ↔️ Related: [Tracing](05-observability/TRACING.md) · [Metrics Catalog](05-observability/METRICS_CATALOG.md) · [Analytics](05-observability/ANALYTICS.md) · [Alerting](ALERTING.md)
