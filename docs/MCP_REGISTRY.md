---
title: "MCP Registry"
doc_id: "ARCH-MCP-REGISTRY"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "architecture-swarm"
review_cadence: 60d
staleness_threshold: 90d
classification: Public
tags: ["mcp", "registry", "tools", "catalog", "governance"]
sources:
  - "Model Context Protocol — https://modelcontextprotocol.io/ (accessed 2026-06-12)"
  - "OpenTelemetry GenAI semantic conventions — https://opentelemetry.io/docs/specs/semconv/gen-ai/ (accessed 2026-06-12)"
  - "OWASP Top 10 for LLM Applications — https://owasp.org/www-project-top-10-for-large-language-model-applications/ (accessed 2026-06-12)"
related: ["ARCH-MCP-ARCHITECTURE", "ARCH-MCP-SECURITY", "ARCH-INTEGRATION-ARCHITECTURE", "GOV-KEY-MANAGEMENT", "GOV-SECURITY-ARCHITECTURE"]
---

# MCP Registry

> **Breadcrumb:** [Home](../README.md) › [Docs Index](INDEX.md) › **MCP Registry**
> **Status:** `Active` · **Owner:** `architecture-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The authoritative **catalog of every Model Context Protocol server** the platform may connect to. It is
the data the tool router consults to decide whether a call is allowed, how it is scoped, how it is
audited, and whether it requires human approval. The architecture that consumes this registry is
[MCP Architecture](MCP_ARCHITECTURE.md); the trust boundary is [MCP Security](MCP_SECURITY.md).

## 2. Context & scope

This registry is **declarative and default-deny**: a server that is not listed (or whose lifecycle stage
is not `active`) cannot be called. Every entry is reviewed under the integration fit process in
[Integration Architecture](01-architecture/INTEGRATION_ARCHITECTURE.md) before promotion. All servers
are in the **private operations / build plane**; the public website connects to none of them.

All rate limits below are **internal policy defaults, not vendor-published limits**; they are
configurable per environment and must be reconciled with each provider's actual limits before go-live.
Real upstream limits are intentionally not asserted here.

## 3. Registry entry schema

Each server is described by a structured entry. The canonical shape:

```yaml
# mcp-registry entry
id: crm                       # stable slug, unique
name: "CRM server"
purpose: "Customer record and deal access for the managed workforce."
transport: streamable-http    # stdio | streamable-http
plane: private                # private | build | both
tools:                        # tools this server exposes
  - get_contact
  - upsert_deal
auth_model: brokered-token    # none | brokered-token | oauth2 | api-key
scope: "read contacts; write deals"
data_class: confidential-pii  # public | internal | confidential | confidential-pii | secret
rate_limit_per_min: 60        # internal policy default (configurable)
audit: full                   # none | metadata | full
failure_mode: needs_human     # retry-backoff | needs_human | quarantine
circuit_breaker:
  threshold: 5                # consecutive failures before opening
  cooldown_s: 60
human_approval: required      # none | on-write | required
lifecycle: planned            # planned | active | deprecated | retired
owner: governance-swarm
```

## 4. Server registry

The full catalog. Columns map one-to-one to the schema in §3.

| Server | Purpose | Tools exposed | Auth model | Scope / data class | Rate limit (policy) | Audit | Failure mode | Circuit breaker | Human approval | Lifecycle |
|--------|---------|---------------|------------|--------------------|---------------------|-------|--------------|-----------------|----------------|-----------|
| Filesystem | Read/write workspace files for the build plane | `read_file`, `write_file`, `list_dir` | stdio (process trust) | Workspace I/O · Internal | 600/min | full | needs_human | 5 fails / 60s | on-write | Planned |
| GitHub | Repo read, PRs, issues, CI signals | `get_pr`, `open_pr`, `create_issue`, `get_checks` | brokered token | Repo automation · Internal/Public | 60/min | full | retry-backoff | 5 fails / 60s | on-write | Planned |
| Browser automation | Fetch and extract public web context | `navigate`, `extract`, `screenshot` | none (egress-only) | Read-only fetch · Public/External | 30/min | metadata | retry-backoff | 4 fails / 60s | none | Planned |
| CRM | Customer records and deals | `get_contact`, `upsert_deal` | brokered token | R contacts / W deals · Confidential-PII | 60/min | full | needs_human | 5 fails / 60s | required | Planned |
| Email | Draft and send client email | `draft_email`, `send_email` | brokered token | Outbound mail · Confidential-PII | 30/min | full | needs_human | 3 fails / 60s | required (send) | Planned |
| Calendar | Availability and scheduling | `get_availability`, `create_event` | brokered token | R/W calendar · Confidential | 60/min | full | needs_human | 5 fails / 60s | on-write | Planned |
| Vector DB | Embedding store for retrieval | `upsert`, `query` | brokered token | R/W vectors · Internal | 300/min | metadata | retry-backoff | 6 fails / 60s | none | Planned |
| Knowledge graph | Entity/relation memory | `query`, `assert_relation` | brokered token | R/W graph · Internal | 120/min | full | retry-backoff | 5 fails / 60s | on-write | Planned |
| Analytics | Privacy-respecting product metrics | `query_metric` | brokered token | Read aggregated · Aggregated | 120/min | metadata | retry-backoff | 6 fails / 60s | none | Planned |
| Finance data | Reference rates and finance records | `get_rates`, `read_record` | brokered token | Read finance · Confidential | 60/min | full | needs_human | 5 fails / 60s | on-write | Planned |
| Proposal generation | Render and export client proposals | `render_proposal`, `export_pdf` | brokered token | Generate/export · Confidential | 30/min | full | needs_human | 4 fails / 60s | required (send) | Planned |
| Client onboarding | Provision client workspace + workforce | `provision_workspace`, `assign_workforce` | brokered token | Provisioning · Confidential | 15/min | full | needs_human | 3 fails / 60s | required | Planned |
| Agent registry | Catalog of agents and capabilities | `list_agents`, `register_agent` | brokered token | R/W registry · Internal | 120/min | full | retry-backoff | 5 fails / 60s | on-write | Planned |
| Prompt registry | Versioned prompt templates | `get_prompt`, `version_prompt` | brokered token | R/W prompts · Internal | 120/min | full | retry-backoff | 5 fails / 60s | on-write | Planned |
| Policy engine | Evaluate governance/policy decisions | `evaluate_policy` | stdio (process trust) | Decision eval · Internal | 600/min | metadata | retry-backoff | 8 fails / 60s | none | Planned |
| Secrets broker | Issue scoped, short-lived tokens | `issue_scoped_token` | internal mTLS | Token issuance · Secret | 120/min | full | needs_human | 3 fails / 60s | system + required | Planned |
| Observability collector | Receive spans, metrics, events | `emit_span`, `emit_metric`, `emit_event` | none (local) | Telemetry sink · Internal | 6000/min | metadata | retry-backoff | n/a | none | Planned |

## 5. Lifecycle & promotion

A server moves through `planned → active → deprecated → retired`. Promotion to `active` requires a green
integration fit review (auth, data classification, throttle, cost, owner) and a registry entry that
matches the schema. Deprecation keeps the entry for audit history but blocks new calls. The tool router
reads only `active` entries at dispatch time.

```mermaid
flowchart LR
    P[planned] --> A[active]
    A --> D[deprecated]
    D --> R[retired]
    A -->|fit review fails| D
```

## 6. Decisions

- **D-1 Single source of truth.** This registry is the only place a server becomes callable; code does
  not hard-code endpoints.
- **D-2 Default-deny + lifecycle.** Only `active` entries dispatch; everything else is rejected and
  logged.
- **D-3 Policy rate limits.** Numbers here are internal defaults; vendor limits are reconciled per
  environment and never invented.

## 7. Risks & open questions

- **Registry drift** — an entry that diverges from the server's real tool set causes silent denials;
  mitigated by schema validation in [CI/CD](04-quality/CI_CD.md).
- **[UNVERIFIED]** Per-vendor upstream quotas and pricing are not asserted; confirm with each provider
  before enabling `active`.
- **Scope creep** — adding tools to an existing entry must re-trigger the fit review, not bypass it.

## 8. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | A server advertises a typed tool set to hosts | <https://modelcontextprotocol.io/> | 2026-06-12 |
| 2 | Calls are audited via telemetry spans | <https://opentelemetry.io/docs/specs/semconv/gen-ai/> | 2026-06-12 |
| 3 | Least privilege counters excessive-agency risk | <https://owasp.org/www-project-top-10-for-large-language-model-applications/> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 60d · **Next review:** 2026-08-11
- See [Freshness Policy](07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../README.md) · ⬆️ [Docs Index](INDEX.md)
- ↔️ Related: [MCP Architecture](MCP_ARCHITECTURE.md) · [MCP Security](MCP_SECURITY.md) · [Key Management](KEY_MANAGEMENT.md)
