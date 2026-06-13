# Changelog

All notable changes to this repository are documented here.
The format follows [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/) and this project
adheres to [Semantic Versioning 2.0.0](https://semver.org/). All dates are UTC (ISO-8601).

## [Unreleased]

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
