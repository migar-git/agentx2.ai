# Changelog

All notable changes to this repository are documented here.
The format follows [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/) and this project
adheres to [Semantic Versioning 2.0.0](https://semver.org/). All dates are UTC (ISO-8601).

## [Unreleased]

### Security

- **Upgraded Astro 5.18.2 → 6.4.6** and `@astrojs/sitemap` → 3.7.3, resolving HIGH-severity advisories
  in the build toolchain (Astro `define:vars` `</script>` XSS [GHSA-j687-52p2-xcff] and server-island
  replay [GHSA-xr5h-phrj-8vxv]). Production dependencies remain at **0 vulnerabilities**
  (`npm audit --omit=dev`). Validated end-to-end against the full quality gate. See
  [Security Review](docs/reviews/security-review.md).
- **Added a dependency-audit CI gate** — `npm run audit:prod`
  (`npm audit --omit=dev --audit-level=high`) now runs in CI so vulnerable runtime dependencies cannot
  regress silently; added a convenience `npm run audit` script for local visibility.
- **Added a scheduled security workflow** (`.github/workflows/security.yml`) — weekly + on-demand
  production dependency audit and a full-tree secret scan, to catch newly-disclosed CVEs in unchanged
  code.
- **Added Dependabot** (`.github/dependabot.yml`) — grouped weekly update PRs for npm and GitHub
  Actions, feeding the audit gate.
- **Added a pre-commit secret-scan hook** (`.githooks/pre-commit`, auto-wired by `scripts/setup-hooks.mjs`
  via the `prepare` script) that blocks obvious committed secrets locally before they reach CI.

### Changed

- **Bumped the supported Node runtime to ≥ 22.12** in `package.json` `engines` and in both
  `ci.yml` and `deploy.yml` (Node 20 reached end-of-life; Astro 6 requires Node ≥ 22.12).
- **Added npm scripts** `security`, `release-check`, `lint:md:fix`, and `prepare`; added a narrow
  `.gitattributes` enforcing LF on shell hooks.

### Added

- **Automated accessibility gate** — `scripts/check-a11y.mjs`, a zero-dependency static checker wired
  into `npm run validate` (and `gates` / `ci` / `release-check`). It asserts WCAG 2.2 Level-A invariants
  on the built HTML (one `<main>` landmark, `<img>` `alt`, accessible names on links/buttons, labelled
  form controls, zoom not disabled, no positive `tabindex`, unique `id`s). Partially closes GAP-4; see
  [Gap Analysis](docs/reviews/gap-analysis.md).
- **Repository audit artifacts** (2026-06-13) — [Repository Analysis](docs/reviews/repository-analysis.md),
  [Gap Analysis](docs/reviews/gap-analysis.md), [Security Review](docs/reviews/security-review.md), the
  [Master Build Plan](docs/plans/master-build-plan.md), [Rollback Plan](docs/plans/rollback-plan.md),
  the [Release Readiness Report](docs/releases/release-readiness-report.md), and
  [Release Notes](docs/releases/release-notes.md); all linked from [Docs Index](docs/INDEX.md).

### Fixed

- **Duplicate `id="sg"` on Mission Control** — the sparkline gradient was defined inside every KPI
  sparkline (rendered 24× per page), producing invalid duplicate IDs and brittle SVG references. The
  gradient is now defined once at page scope and referenced via `url(#sg)`. Caught by the new
  accessibility gate above.

## [1.0.0] — 2026-06-12

### Added

- **Public website (Astro, static)** — 18 pages: home, services, agentic-ai, finance-ai,
  subscriptions, industries, case-studies, about, contact, faq, partners, careers, privacy, terms,
  demo, roi-calculator, mission-control, and 404. SEO metadata, Open Graph, `schema.org` JSON-LD,
  canonical URLs, sitemap, and `robots.txt` on every page; ≤3-click navigation with no orphans.
- **AI everywhere** — an accessible, observable on-page AI widget (per-page agent persona, grounded
  replies, keyboard + ARIA) on every content page; interactive **ROI calculator** and **agent demo**.
- **Mission Control** dashboard — tabbed Executive/Operations/AI/Financial/Marketing/Build views with
  KPI sparklines, lead funnel, and live circuit-breaker states (illustrative demo data).
- **Design system** — CSS design tokens (dark-mode-first), global styles, reusable components.
- **Telemetry** — privacy-respecting analytics beacon (`window.ax2`) with a client-side circuit breaker.
- **API contract** — `openapi.yaml` (OpenAPI 3.1) for the future private platform; **`.env.example`**.
- **CI/CD** — `.github/workflows/ci.yml` (check, build, test, validate, lint, secret scan) and
  `deploy.yml` (GitHub Pages); `public/_headers` security headers.
- **Tests + validators** — `node:test` suites and zero-dependency link/orphan/SEO/doc-link checkers.
- **22 platform docs** — MCP architecture/registry/security, key management, API architecture, system
  context, agent registry/workflows, prompt governance, telemetry schema, alerting, visual system,
  compliance model, plus 9 flat front-door docs; all wired into [Docs Index](docs/INDEX.md).

### Changed

- Normalized `PRD_AgentX2.md` to a single H1 (chapter headings demoted to H2).
- Scoped the verbatim `sysprompt_agentx2.md` out of the docs markdown linter (input artifact).

### Fixed

- Repaired pre-existing broken relative doc links in `AI_BUILD_SYSTEM.md`, `LEARNING_LOG.md`, and the
  PR template.

## [0.2.0] — 2026-06-12

### Added

- **Canonical, flat documentation entry-point set** under `docs/` for autonomous build-out:
  [PRD](docs/PRD.md), [Architecture](docs/ARCHITECTURE.md),
  [Autonomous Build Plan](docs/AUTONOMOUS_BUILD_PLAN.md),
  [Implementation Plan](docs/IMPLEMENTATION_PLAN.md),
  [Agent Orchestration](docs/AGENT_ORCHESTRATION.md), [API Contracts](docs/API_CONTRACTS.md),
  [Data Model](docs/DATA_MODEL.md), [Acceptance Criteria](docs/ACCEPTANCE_CRITERIA.md),
  and entry points for [Security](docs/SECURITY.md), [Observability](docs/OBSERVABILITY.md),
  [Testing Strategy](docs/TESTING_STRATEGY.md), [CI/CD](docs/CI_CD.md),
  [Deployment](docs/DEPLOYMENT.md), [Runbook](docs/RUNBOOK.md),
  [Risk Register](docs/RISK_REGISTER.md), [Roadmap](docs/ROADMAP.md).
- [Documentation Audit](docs/DOCUMENTATION_AUDIT.md) — full inventory, completeness scores, the
  35-dimension architectural-completeness matrix, and the gap-remediation log.
- "Build & delivery" section in [Docs Index](docs/INDEX.md) linking the entry-point set.

### Changed

- README reworked: added the Documentation & Architecture front-door links; fixed a corrupted
  section header.

### Fixed

- Removed two chat-export citation artifacts (`:contentReference`) from `README.md`.

### Notes

- Documentation only; no application code. Required documentation set is **18/18 present**
  (see [Documentation Audit](docs/DOCUMENTATION_AUDIT.md)).

## [0.1.0] — 2026-06-12

### Added

- **Documentation & architecture foundation** for the AgentX2.ai AI-native, self-building platform.
- Agent operating contract [`AGENTS.md`](AGENTS.md) and [`.github/copilot-instructions.md`](.github/copilot-instructions.md).
- Documentation hub [`docs/INDEX.md`](docs/INDEX.md) guaranteeing ≤3-click navigation.
- Conventions: [`.markdownlint.jsonc`](.markdownlint.jsonc) and four doc templates under `docs/_templates/`.
- Discovery + gap analysis [`CURRENT_STATE.md`](CURRENT_STATE.md).
- 50 domain docs across overview, architecture, website, agents, quality, observability, governance,
  operations, knowledge, and roadmap — each timestamped, fact-grounded, and freshness-governed.
- Keystone docs: [AI Build System](docs/01-architecture/AI_BUILD_SYSTEM.md),
  [Agentic Swarm](docs/01-architecture/AGENTIC_SWARM.md),
  [Model Strategy](docs/01-architecture/MODEL_STRATEGY.md),
  [Eval Framework](docs/04-quality/EVAL_FRAMEWORK.md),
  [Zero-Regression Policy](docs/04-quality/REGRESSION_POLICY.md),
  [Tracing](docs/05-observability/TRACING.md),
  [Freshness Policy](docs/07-operations/FRESHNESS_POLICY.md).
- Five seed ADRs under `docs/08-knowledge/adr/`.
- Repository meta: this changelog, [Contributing](CONTRIBUTING.md), [Security](SECURITY.md),
  [Code of Conduct](CODE_OF_CONDUCT.md), [License](LICENSE.md), PR + issue templates.
- README reworked into a navigation hub with a build-provenance footer.

### Notes

- This release is **documentation only**; application code (Astro site, GitHub Actions, local Ollama
  orchestration) is specified here and implemented in a subsequent pass per the
  [Roadmap](docs/09-roadmap/ROADMAP.md).

[Unreleased]: https://github.com/migar-git/agentx2.ai/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/migar-git/agentx2.ai/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/migar-git/agentx2.ai/releases/tag/v0.1.0
