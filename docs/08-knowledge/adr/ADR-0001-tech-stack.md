---
title: "ADR-0001: Static-first stack — Astro + Tailwind on GitHub Pages"
doc_id: "ADR-0001"
status: Accepted
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "architecture-swarm"
classification: Public
deciders: ["human:founder", "architecture-swarm"]
sources:
  - "Astro — https://astro.build/ (accessed 2026-06-12)"
  - "Tailwind CSS — https://tailwindcss.com/ (accessed 2026-06-12)"
  - "GitHub Pages — https://docs.github.com/en/pages (accessed 2026-06-12)"
related: ["ARCH-TECH-STACK", "WEBSITE-ARCHITECTURE", "WEBSITE-PERFORMANCE"]
---

# ADR-0001: Static-first stack — Astro + Tailwind on GitHub Pages

> **Breadcrumb:** [Home](../../../README.md) › [Docs Index](../../INDEX.md) › [Decision Log](../DECISION_LOG.md) › **ADR-0001**
> **Status:** `Accepted` · **Date:** `2026-06-12` · **Deciders:** founder, architecture-swarm

## Context

The public site must be fast (Core Web Vitals), cheap to host, content-driven (programmatic SEO),
and buildable by local-model swarms — on 2026-06-12 with no existing code.

## Decision

We will build the site with **Astro + Tailwind CSS**, output **static** assets, and host on
**GitHub Pages**. Cloudflare Pages and Azure Static Web Apps are documented alternates.

## Options Considered

| Option | Pros | Cons | Reversibility |
|--------|------|------|---------------|
| Astro + Tailwind (chosen) | content-first, islands, fast CWV, static | island model learning curve | High |
| Next.js + Tailwind | co-located SSR AI endpoints | heavier; server needed | Medium |
| Plain static HTML | simplest | weak for programmatic SEO at scale | High |

## Consequences

- **Positive:** excellent performance, zero hosting cost, simple/safe deploys + instant rollback.
- **Negative:** server-side AI endpoints (if needed) live elsewhere.
- **Follow-on:** scaffold the Astro project in a later build pass ([Roadmap](../../09-roadmap/ROADMAP.md)).

## Compliance & Guardrails

Static output supports [Performance](../../02-website/PERFORMANCE.md) budgets and keeps the public repo
free of server secrets ([Security](../../06-governance/SECURITY_ARCHITECTURE.md)).

## Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Astro static/islands | <https://astro.build/> | 2026-06-12 |
| 2 | Tailwind theming | <https://tailwindcss.com/> | 2026-06-12 |
| 3 | Pages hosting | <https://docs.github.com/en/pages> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · ADRs are immutable once Accepted; supersede to change.
- See [Freshness Policy](../../07-operations/FRESHNESS_POLICY.md).

### Navigation

- ⬆️ [Decision Log](../DECISION_LOG.md) · [Docs Index](../../INDEX.md) · 🏠 [Home](../../../README.md)
