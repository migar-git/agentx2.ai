---
title: "Master Build Plan — Swarm-to-Reality Mapping"
doc_id: "PLAN-MASTER-BUILD"
status: Active
version: 1.0.0
created: 2026-06-13
updated: 2026-06-13
last_verified: 2026-06-13
owner: "production-ops-brain"
reviewers: []
review_cadence: 60d
staleness_threshold: 90d
classification: Public
tags: ["plan", "build", "audit", "swarm", "applicability"]
sources:
  - "Astro static output + GitHub Pages deploy — https://docs.astro.build/en/guides/deploy/github/ (accessed 2026-06-13)"
  - "GitHub Pages does not serve custom response headers — https://docs.github.com/pages (accessed 2026-06-13)"
  - "Dependabot version updates — https://docs.github.com/code-security/dependabot (accessed 2026-06-13)"
supersedes: []
related: ["REVIEW-REPOSITORY-ANALYSIS", "REVIEW-GAP-ANALYSIS", "REVIEW-SECURITY", "RELEASE-READINESS", "PLAN-ROLLBACK"]
---

# Master Build Plan — Swarm-to-Reality Mapping

> **Breadcrumb:** [Home](../../README.md) › [Docs Index](../INDEX.md) › **Master Build Plan**
> **Status:** `Active` · **Owner:** `production-ops-brain` · **Last verified:** `2026-06-13`

## 1. Purpose

This plan responds to the "Universal AI Swarm Build Orchestrator" directive by mapping its generic
full-stack swarm requirements onto **what AgentX2.ai actually is**, then executing the subset that is
materially useful and architecture-appropriate, and **documenting every deferral with a reason**. It
is the single source of truth for *what was built, what already existed, and what was deliberately not
built — and why*.

It answers one question: *given a static-first Astro site on GitHub Pages, which orchestrator
requirements apply, which are already satisfied, and which are inapplicable?*

## 2. Context & Scope — the repository's reality

The orchestrator prompt is written for a full-stack application (backend services, database, queues,
auth, RBAC, live AI providers, a 23-section operational admin dashboard, distributed tracing).
**AgentX2.ai is none of those at runtime.** Per the [Repository Analysis](../reviews/repository-analysis.md):

- **It is a static site.** `astro build` emits static HTML/CSS/JS to `dist/`; there is **no server,
  database, queue, API runtime, authentication surface, or RBAC** to instrument.
- **It deploys to GitHub Pages** ([`deploy.yml`](../../.github/workflows/deploy.yml)), which serves
  static files only and cannot run server code.
- **AI on the site is a grounded client widget** ([`AIWidget.astro`](../../src/components/AIWidget.astro)),
  not a live LLM provider call. **Telemetry is a privacy-respecting client beacon**
  ([`Analytics.astro`](../../src/components/Analytics.astro)). **Mission Control**
  ([`mission-control.astro`](../../src/pages/mission-control.astro)) is an illustrative dashboard with
  demo data.

Per the orchestrator's own rules — *"Add AI enablement where materially useful," "Never rewrite
functioning systems without evidence," "Prefer incremental, reversible changes"* — bolting a backend,
database, RBAC layer, OpenTelemetry tracing pipeline, and a live admin dashboard onto a static
marketing site would **destroy the working architecture, break GitHub Pages hosting, and add a large
unjustified attack and maintenance surface.** Those requirements are therefore **deferred with
rationale**, not implemented. The forward-looking platform that *would* host them is already specified
under [`docs/01-architecture/`](../01-architecture/SYSTEM_ARCHITECTURE.md) and
[`openapi.yaml`](../../openapi.yaml) as future (private) work.

## 3. Swarm-to-reality mapping

Each orchestrator "agent" (domain) is mapped to its applicability here.

| # | Swarm domain | Applies to a static site? | Disposition |
|---|--------------|---------------------------|-------------|
| 1 | Chief Architect | Partial | Architecture already documented ([Architecture](../ARCHITECTURE.md), [System Architecture](../01-architecture/SYSTEM_ARCHITECTURE.md)). This plan adds the applicability/deferral record. |
| 2 | Product & PRD | Yes (exists) | [PRD](../PRD.md), [Personas](../00-overview/PERSONAS.md), [Company Model](../00-overview/COMPANY_MODEL.md), [feature matrix](../reviews/gap-analysis.md#3-capability-matrix). |
| 3 | Research | Light | No new tech adopted; only ROI-positive, low-risk hardening (Dependabot, scheduled audit, hooks). Trend-chasing avoided by design. |
| 4 | Backend Engineering | **Deferred (N/A)** | No backend exists or is wanted for the public site. Future API is specified in [openapi.yaml](../../openapi.yaml) / [API Architecture](../API_ARCHITECTURE.md). |
| 5 | Frontend / UX | Yes (exists) | 18 pages, single `BaseLayout`, ≤3-click IA verified by `check-orphans.mjs`; a11y standard in [Accessibility](../02-website/ACCESSIBILITY.md). |
| 6 | AI Systems | Bounded | Grounded on-page widget ([AI Experience](../02-website/AI_EXPERIENCE.md), [Agent Catalog](../03-agents/AGENT_CATALOG.md)). Live LLM/provider registry needs a backend → deferred. |
| 7 | Observability | Bounded | Client beacon + schema ([Telemetry Schema](../TELEMETRY_SCHEMA.md), [Observability](../05-observability/OBSERVABILITY.md)). Server tracing/correlation IDs need a runtime → deferred. |
| 8 | Security | Yes (built) | Astro 6 upgrade, prod-audit CI gate, **new** scheduled security workflow + Dependabot + pre-commit secret hook. See [Security Review](../reviews/security-review.md). |
| 9 | DevOps / Platform | Yes (built) | CI + deploy exist; **added** `security.yml`, `dependabot.yml`, hooks, and `release-check`/`security` scripts. Docker/devcontainer **not** added (a static npm site does not need them). |
| 10 | QA / Validation | Yes (exists) | `node:test` suites + 4 validators (links/orphans/SEO/doc-links). See [Testing Strategy](../04-quality/TESTING_STRATEGY.md). |
| 11 | Data / Database | **Deferred (N/A)** | No database. Site content is typed TS modules (`src/data/`), already version-controlled. |
| 12 | Technical Writer | Yes (built) | 120+ governed docs; this plan + rollback + release notes added; CHANGELOG updated. |

## 4. Required-artifact map

The orchestrator's "REQUIRED FINAL ARTIFACTS" are satisfied by **existing canonical docs** (the repo
forbids duplication and orphans), by the **new audit set**, or are **deferred (N/A)**. No duplicate
files were created.

| Required artifact | Status | Canonical location |
|-------------------|--------|--------------------|
| repository-analysis / current-state | ✅ Exists | [Repository Analysis](../reviews/repository-analysis.md) |
| gap-analysis | ✅ Exists | [Gap Analysis](../reviews/gap-analysis.md) |
| risk / technical-debt | ✅ Exists | [Risk Register](../RISK_REGISTER.md) · §7 below |
| product-intent / feature-matrix | ✅ Exists | [PRD](../PRD.md) · [Gap Analysis](../reviews/gap-analysis.md) |
| master-build-plan / roadmap | ✅ This doc | [Implementation Plan](../IMPLEMENTATION_PLAN.md) · [Roadmap](../ROADMAP.md) |
| rollback-plan | ✅ New | [Rollback Plan](rollback-plan.md) |
| target-architecture | ✅ Exists | [Architecture](../ARCHITECTURE.md) · [System Architecture](../01-architecture/SYSTEM_ARCHITECTURE.md) |
| SECURITY / threat-model | ✅ Exists | [Security](../SECURITY.md) · [Security Architecture](../06-governance/SECURITY_ARCHITECTURE.md) · [Security Review](../reviews/security-review.md) |
| OBSERVABILITY / correlation-model | ✅ Exists (bounded) | [Observability](../05-observability/OBSERVABILITY.md) · [Telemetry Schema](../TELEMETRY_SCHEMA.md) |
| dashboard-IA / 3-click-admin-map | ✅ Exists | [Website Architecture](../02-website/WEBSITE_ARCHITECTURE.md) · `check-orphans.mjs` |
| AI_ARCHITECTURE | ✅ Exists (bounded) | [AI Experience](../02-website/AI_EXPERIENCE.md) · [Agent Catalog](../03-agents/AGENT_CATALOG.md) |
| TESTING / validation-report | ✅ Exists | [Testing Strategy](../04-quality/TESTING_STRATEGY.md) · §8 below |
| DEPLOYMENT / OPERATIONS / runbooks | ✅ Exists | [Deployment](../07-operations/DEPLOYMENT.md) · [Runbooks](../07-operations/RUNBOOKS.md) |
| release-readiness / release-notes | ✅ Exists / New | [Release Readiness](../releases/release-readiness-report.md) · [Release Notes](../releases/release-notes.md) |
| DATABASE | ⛔ Deferred (N/A) | No database; static content in `src/data/`. |

## 5. Standards mapping (honest static-site reasoning)

- **Dashboard (3-click admin):** the orchestrator's 23-section *operational* dashboard presumes a
  backend feeding live health/traces/logs/RBAC. The public site instead ships **Mission Control** as an
  illustrative dashboard and guarantees ≤3-click reachability of every *page* (enforced by
  `check-orphans.mjs`). A live operational console is **deferred** to the future private platform.
- **Observability standard:** the rich event envelope (trace_id, correlation_id, latency_ms, …)
  describes **server** telemetry. The static site's appropriate analogue is the client beacon
  ([`Analytics.astro`](../../src/components/Analytics.astro)) honoring Do-Not-Track with a circuit
  breaker; its schema is [Telemetry Schema](../TELEMETRY_SCHEMA.md). Distributed tracing is **deferred**
  (no runtime to trace).
- **AI enablement standard:** prompt/model registries, eval harnesses, token/cost tracking, and replay
  presume **live model calls**. The site's AI is a **grounded, no-secret client widget**; there is no
  provider key, token spend, or private reasoning to log. Live AI governance is **deferred** to the
  backend, where [AI Governance](../06-governance/AI_GOVERNANCE.md) already specifies it.
- **Security / RBAC standard:** there is **no auth surface** to apply RBAC to. Applicable controls —
  dependency scanning, secret scanning, secure headers policy, audited CI — are implemented (§6). The
  `_headers` caveat (GitHub Pages does not serve them) is tracked in
  [Security Review §4](../reviews/security-review.md).

## 6. What was built this turn (implementation)

| Task | Owner | Priority | Depends on | Risk | Files | Validation | Rollback | Status |
|------|-------|----------|-----------|------|-------|------------|----------|--------|
| Dependabot (npm + actions, grouped, weekly) | DevOps/Security | High | — | Low | [`.github/dependabot.yml`](../../.github/dependabot.yml) | YAML schema clean | delete file | ✅ Done |
| Scheduled security workflow (prod audit + full-tree secret scan) | Security | High | audit:prod | Low | [`.github/workflows/security.yml`](../../.github/workflows/security.yml) | YAML clean; mirrors CI | delete file | ✅ Done |
| Pre-commit secret-scan hook (LF, cross-platform installer) | Security/DevOps | Med | — | Low | [`.githooks/pre-commit`](../../.githooks/pre-commit), `scripts/setup-hooks.mjs`, `.gitattributes` | Blocks planted key (exit 1); passes clean (exit 0) | `git config --unset core.hooksPath`; delete files | ✅ Done |
| DX scripts: `security`, `release-check`, `lint:md:fix`, `prepare` | DevOps | Med | hook | Low | [`package.json`](../../package.json) | scripts run; `release-check` green | revert scripts block | ✅ Done |
| Build plan + rollback + release notes; index/changelog | Tech Writer | Med | — | None | this doc, [rollback](rollback-plan.md), [notes](../releases/release-notes.md) | doc-link + md-lint gates | delete files | ✅ Done |
| Backend / DB / RBAC / live admin console / distributed tracing | — | — | future platform | — | — | — | — | ⛔ Deferred (N/A for static site) |
| Docker / devcontainer | — | Low | — | — | — | — | — | ⛔ Not needed (static npm site) |
| Prettier auto-format of all source | — | Low | — | High churn | — | — | — | ⛔ Declined (noisy diff, no evidence of need) |

## 7. Risks & Open Questions

| Risk / Question | Impact | Mitigation / Next step | Owner | Due |
|-----------------|--------|------------------------|-------|-----|
| Orchestrator readers expect a live admin console | Expectation mismatch | This plan states the static-site scope explicitly | production-ops-brain | Tracked |
| Pre-commit hook needs POSIX `sh` (bundled with Git) | Low | Documented bypass (`--no-verify`) + unset path | production-ops-brain | Tracked |
| Dev-only transitive advisories persist upstream | Low (not shipped) | Production-scoped audit gate + Dependabot | production-ops-brain | Ongoing |
| Security headers inert on GitHub Pages | Low–Med | [Security Review §4](../reviews/security-review.md) — CDN or meta-CSP | human:founder | Next cycle |

## 8. Quality gates status (this changeset)

| Gate | Result |
|------|--------|
| `astro check` | 0 errors |
| `astro build` | 18 pages + sitemap |
| `node:test` | 7/7 pass |
| validators (links/orphans/SEO/doc-links) | 0 failures |
| markdown lint | 0 errors |
| `npm run audit:prod` | 0 vulnerabilities |
| pre-commit hook | blocks secret (1) / passes clean (0) |
| new workflow + dependabot YAML | schema clean |

## 9. Decisions & Rationale

| Decision | Why | Reversibility | Date | Owner |
|----------|-----|---------------|------|-------|
| Implement only architecture-appropriate subset | Preserve the working static system; avoid unjustified backend | High | 2026-06-13 | production-ops-brain |
| Map required artifacts to existing docs vs. duplicating | Repo forbids duplication/orphans | High | 2026-06-13 | production-ops-brain |
| Defer backend/DB/RBAC/tracing/live-dashboard | No runtime exists; would break Pages hosting | High | 2026-06-13 | production-ops-brain |
| Decline repo-wide auto-format | High churn, no evidence of need | High | 2026-06-13 | production-ops-brain |

## 10. Grounding & Sources

| # | Claim it supports | Source (title + URL) | Publisher | Accessed |
|---|-------------------|----------------------|-----------|----------|
| 1 | Astro emits static output deployed to Pages | <https://docs.astro.build/en/guides/deploy/github/> | Astro | 2026-06-13 |
| 2 | GitHub Pages serves static files, no custom headers | <https://docs.github.com/pages> | GitHub | 2026-06-13 |
| 3 | Dependabot grouped version updates | <https://docs.github.com/code-security/dependabot> | GitHub | 2026-06-13 |

## 11. Change Log (doc-local)

| Version | Date | Author | Summary |
|---------|------|--------|---------|
| 1.0.0 | 2026-06-13 | `production-ops-brain` | Initial swarm-to-reality mapping + build/deferral record. |

---

### Freshness

- **Created:** 2026-06-13 · **Updated:** 2026-06-13 · **Last verified:** 2026-06-13
- **Review cadence:** every 60 days · **Staleness threshold:** 90 days · **Next review due:** 2026-08-12
- Governed by the [Freshness Policy](../07-operations/FRESHNESS_POLICY.md).

### Navigation

- 🏠 [Home](../../README.md) · ⬆️ [Docs Index](../INDEX.md)
- ↔️ Related: [Repository Analysis](../reviews/repository-analysis.md) · [Gap Analysis](../reviews/gap-analysis.md) · [Security Review](../reviews/security-review.md) · [Rollback Plan](rollback-plan.md) · [Release Notes](../releases/release-notes.md)
