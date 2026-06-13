---
title: "Security Architecture"
doc_id: "GOV-SECURITY-ARCHITECTURE"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "governance-swarm"
review_cadence: 45d
staleness_threshold: 60d
classification: Public
tags: ["security", "zero-trust", "appsec", "supply-chain"]
sources:
  - "OWASP Top 10 (2021) — https://owasp.org/Top10/ (accessed 2026-06-12)"
  - "OWASP Top 10 for LLM Applications — https://genai.owasp.org/llm-top-10/ (accessed 2026-06-12)"
  - "MDN Content Security Policy — https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP (accessed 2026-06-12)"
  - "OpenSSF Scorecard — https://securityscorecards.dev/ (accessed 2026-06-12)"
related: ["GOV-AI-GOVERNANCE", "GOV-COMPLIANCE", "OVERVIEW-PUBLIC-PRIVATE-MODEL", "QUALITY-CI-CD"]
---

# Security Architecture

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › [Governance](AI_GOVERNANCE.md) › **Security Architecture**
> **Status:** `Active` · **Owner:** `governance-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The security model: zero-trust, least-privilege, and AppSec controls that protect the platform, the
website, and the agent system — free of the [OWASP Top 10](https://owasp.org/Top10/) and
[OWASP LLM Top 10](https://genai.owasp.org/llm-top-10/) risk classes.

## 2. Principles

Zero trust · least privilege · RBAC/ABAC · secrets management · audit logging · supply-chain security
· defense in depth (per [`sysprompt_agentx2.md`](../../sysprompt_agentx2.md)).

## 3. Web security

- Security headers + [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).
- No secrets in the public repo (enforced by secret scanning in [CI/CD](../04-quality/CI_CD.md)).
- Input validation + output encoding on every boundary; HTTPS only.

## 4. AI / agent security

- Prompt-injection + data-exfil + tool-abuse defenses ([Prompt Library](../03-agents/PROMPT_LIBRARY.md)).
- Guardian model screening; tool allow-lists; sandboxed, audited tool calls
  ([Orchestration](../01-architecture/ORCHESTRATION.md)).
- Autonomy tiers gate risky actions ([HITL](HUMAN_IN_THE_LOOP.md)).

## 5. Supply chain

- Pinned, scanned dependencies; pinned GitHub Action versions; signed releases.
- [OpenSSF Scorecard](https://securityscorecards.dev/) tracked in CI; dependency + secret scans block
  on findings ([Zero-Regression Policy](../04-quality/REGRESSION_POLICY.md)).

## 6. Data protection

Public/private separation ([Public/Private Model](../00-overview/PUBLIC_PRIVATE_MODEL.md)); encryption
in transit; minimal retention ([Data Architecture](../01-architecture/DATA_ARCHITECTURE.md)).

## 7. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Web risk classes | <https://owasp.org/Top10/> | 2026-06-12 |
| 2 | LLM risk classes | <https://genai.owasp.org/llm-top-10/> | 2026-06-12 |
| 3 | CSP | <https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP> | 2026-06-12 |
| 4 | Supply-chain scoring | <https://securityscorecards.dev/> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 45d · **Next review:** 2026-07-27
- See [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [AI Governance](AI_GOVERNANCE.md) · [Compliance](COMPLIANCE.md) · [Public/Private Model](../00-overview/PUBLIC_PRIVATE_MODEL.md)
