---
title: "Tech Stack"
doc_id: "ARCH-TECH-STACK"
status: Active
version: 1.0.0
created: 2026-06-12
updated: 2026-06-12
last_verified: 2026-06-12
owner: "architecture-swarm"
review_cadence: 60d
staleness_threshold: 90d
classification: Public
sources:
  - "Astro — https://astro.build/ (accessed 2026-06-12)"
  - "Tailwind CSS — https://tailwindcss.com/ (accessed 2026-06-12)"
  - "Ollama — https://ollama.com/ (accessed 2026-06-12)"
  - "OpenTelemetry — https://opentelemetry.io/ (accessed 2026-06-12)"
  - "GitHub Pages — https://docs.github.com/en/pages (accessed 2026-06-12)"
  - "GitHub Actions — https://docs.github.com/en/actions (accessed 2026-06-12)"
related: ["ARCH-AI-BUILD-SYSTEM", "WEBSITE-ARCHITECTURE", "QUALITY-CI-CD", "KNOWLEDGE-DECISION-LOG"]
---

# Tech Stack

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › [Architecture](SYSTEM_ARCHITECTURE.md) › **Tech Stack**
> **Status:** `Active` · **Owner:** `architecture-swarm` · **Last verified:** `2026-06-12`

## 1. Purpose

The chosen technologies and why. Decisions are ratified in
[ADR-0001](../08-knowledge/adr/ADR-0001-tech-stack.md) and
[ADR-0002](../08-knowledge/adr/ADR-0002-local-ollama-first.md).

## 2. Stack

| Layer | Choice | Why | Source |
|-------|--------|-----|--------|
| Site framework | **Astro** | content-first, islands, static output, fast CWV | <https://astro.build/> |
| Styling | **Tailwind CSS** | tokenized, consistent, fast to build | <https://tailwindcss.com/> |
| Hosting | **GitHub Pages** (static) | zero-cost, fits public repo; alts: Cloudflare Pages, Azure Static Web Apps | <https://docs.github.com/en/pages> |
| CI/CD | **GitHub Actions** | native gates, scheduled swarms | <https://docs.github.com/en/actions> |
| Local models | **Ollama** | local-first reasoning/code/embeddings/guardian | <https://ollama.com/> |
| Observability | **OpenTelemetry** (GenAI semconv) | standard traces/metrics/events | <https://opentelemetry.io/> |
| Content | **Markdown / MDX** | authorable, diffable, agent-friendly | Astro content collections |

## 3. Constraints

- **Static output** so the public site has no server dependency and best-in-class Core Web Vitals
  ([Performance](../02-website/PERFORMANCE.md)).
- **Local-first models**; cloud optional ([Model Strategy](MODEL_STRATEGY.md)).
- **No secrets in the public repo** ([Security Architecture](../06-governance/SECURITY_ARCHITECTURE.md)).

## 4. Alternatives considered

Next.js (heavier; better when SSR AI endpoints are co-located) and plain static HTML (simplest; less
scalable for programmatic SEO). See [ADR-0001](../08-knowledge/adr/ADR-0001-tech-stack.md).

## 5. Grounding & Sources

| # | Claim | Source | Accessed |
|---|-------|--------|----------|
| 1 | Astro static/islands | <https://astro.build/> | 2026-06-12 |
| 2 | Tailwind utility tokens | <https://tailwindcss.com/> | 2026-06-12 |
| 3 | Pages hosting | <https://docs.github.com/en/pages> | 2026-06-12 |
| 4 | Actions CI | <https://docs.github.com/en/actions> | 2026-06-12 |

---

### Freshness

- **Created/Updated/Verified:** 2026-06-12 · **Review cadence:** 60d · **Next review:** 2026-08-11
- See [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [AI Build System](AI_BUILD_SYSTEM.md) · [Website Architecture](../02-website/WEBSITE_ARCHITECTURE.md) · [ADR-0001](../08-knowledge/adr/ADR-0001-tech-stack.md)
