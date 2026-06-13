---
title: "Security (Canonical Entry Point)"
doc_id: "SECURITY-CANONICAL"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "governance-swarm"
review_cadence: 45d
staleness_threshold: 60d
classification: Public
tags: ["security", "entry-point"]
sources:
  - "Security Architecture (in-repo) — docs/06-governance/SECURITY_ARCHITECTURE.md (accessed 2026-06-12)"
  - "OWASP Top 10 for LLM Applications — https://genai.owasp.org/llm-top-10/ (accessed 2026-06-12)"
related: ["GOV-SECURITY-ARCHITECTURE", "GOV-AI-GOVERNANCE", "OVERVIEW-PUBLIC-PRIVATE-MODEL"]
---

# Security (Canonical Entry Point)

> **Breadcrumb:** [Home](../README.md) › [Docs Index](INDEX.md) › **Security**
> **Status:** `Active` · **Owner:** `governance-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The single front door for security. The **authoritative deep doc** is
[Security Architecture](06-governance/SECURITY_ARCHITECTURE.md); vulnerability **reporting** is in the
root [`SECURITY.md`](../SECURITY.md) (disclosure policy). This page summarizes and routes; it does not
duplicate.

## 2. Key facts

- **Zero trust + least privilege**; RBAC/ABAC; audited tool calls.
- **No secrets in the public repo** — enforced by secret scanning in [CI/CD](CI_CD.md).
- **Web:** security headers + Content Security Policy; HTTPS only; input validation everywhere.
- **AI:** prompt-injection / data-exfil / tool-abuse defenses + guardian screening
  ([OWASP LLM Top 10](https://genai.owasp.org/llm-top-10/)).
- **Supply chain:** pinned + scanned dependencies; pinned Action versions; Scorecard in CI.

## 3. Read next

- Deep: [Security Architecture](06-governance/SECURITY_ARCHITECTURE.md)
- Disclosure: [`SECURITY.md`](../SECURITY.md)
- Related: [AI Governance](06-governance/AI_GOVERNANCE.md) · [Public/Private Model](00-overview/PUBLIC_PRIVATE_MODEL.md) · [Risk Register](RISK_REGISTER.md)

## 4. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Security controls | [Security Architecture](06-governance/SECURITY_ARCHITECTURE.md) | 2026-06-12 |
| 2 | LLM risk classes | <https://genai.owasp.org/llm-top-10/> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 45d · **Next review:** 2026-07-27
- See [Freshness Policy](07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../README.md) · ⬆️ [Docs Index](INDEX.md)
- ↔️ Related: [Security Architecture](06-governance/SECURITY_ARCHITECTURE.md) · [AI Governance](06-governance/AI_GOVERNANCE.md)
