# Security Policy

Security is a first-class quality gate. This document explains how to report issues and the controls
the repository enforces. See the full [Security Architecture](docs/06-governance/SECURITY_ARCHITECTURE.md).

## Reporting a vulnerability

- **Do not open a public issue for security vulnerabilities.**
- Email **<security@agentx2.ai>** with details and reproduction steps.
- You will receive an acknowledgement; we will coordinate a fix and disclosure timeline.

## Scope

- This public repository contains the website, documentation, and architecture — **no secrets or
  client data** (enforced by secret scanning in [CI/CD](docs/04-quality/CI_CD.md) and the
  [Public/Private Model](docs/00-overview/PUBLIC_PRIVATE_MODEL.md)).
- Report anything that could expose secrets, enable injection, or weaken a security control.

## Controls in this repository

- Secret scanning + dependency scanning on every change.
- Security headers + Content Security Policy on the site.
- Prompt-injection, data-exfil, and tool-abuse defenses for AI features
  ([Prompt Library](docs/03-agents/PROMPT_LIBRARY.md), [Responsible AI](docs/06-governance/RESPONSIBLE_AI.md)).
- Least-privilege tool access and human approval for risky actions
  ([Human-in-the-Loop](docs/06-governance/HUMAN_IN_THE_LOOP.md)).

## Standards

Aligned with the [OWASP Top 10](https://owasp.org/Top10/) and the
[OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/) (both accessed 2026-06-12).

## Freshness

- **Last verified:** 2026-06-12 · Reviewed per the
  [Freshness Policy](docs/07-operations/FRESHNESS_POLICY.md).
