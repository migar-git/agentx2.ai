# Agentx2.ai Feature Requests

<!-- REGROUND:reground-20260815-python-fleet:BEGIN -->

## Re-Grounding 2026-08-15 — Autonomous Fleet Pass

> **Run:** `reground-20260815-python-fleet` · **Method:** static forensic recon of all 59 git repos under `C:\Users\mcgac\Python`
> (tree + manifests + compose + git metadata + targeted greps via Windows-MCP; **no code executed this pass**).
> **Execution contract:** [`FRSP.md`](FRSP.md) — the resident self-agent system prompt generated alongside this block.

### Verified identity (2026-08-15)

AgentX2.ai — Astro 6 static site (18 routes) for AI-native consulting: AI chat widget (ARIA dialog), client-side telemetry with real circuit breaker, TypeScript 5.7.

### Evidence snapshot

| Field | Value |
|---|---|
| Class | Static/managed website |
| Branch @ recon | `main` |
| Last commit observed | 2026-07-27 |
| Stack | Astro 6 + TS; node_modules present; 2 unit tests (structure, build-output) |
| Ports/services declared | none declared |
| Test posture | 2 unit test files |
| LLM posture | Widget is client-side; optional local-inference demo lane |
| MCP posture | n/a |
| Dashboard posture | arescore registration |

### Prior-content status

The body below this block is the prior audit register (last authored ~2026-07-03/04, 799 lines). It is preserved verbatim per the fleet data-retention law. Every claim in it is now classified **STALE-UNVERIFIED** until re-proven by the FRSP execution loop — the repo has moved (last commit 2026-07-27).

### Universal mandate assessment (fleet standard M-01..M-10)

| ID | Mandate | Status | Evidence / note |
|---|---|---|---|
| M-01 | Repo self-agent | PARTIAL | AGENT.md/CLAUDE.md governance present fleet-wide; FRSP.md (this pass) is now the executable self-agent contract |
| M-02 | Local-LLM capability (via canonical provider) | N-A/CI-LEVEL | LLM used in CI/build lanes only — correct for this repo class; runtime consumption not required |
| M-03 | Local-LLM management reachable | N-A | Managed centrally by olaman; this repo consumes nothing at runtime |
| M-04 | MCP surface | N-A | n/a |
| M-05 | 3-click dashboard access | PARTIAL | arescore registration; 3-click rule unproven — audit required |
| M-06 | Dedup/consolidate/reuse | OPEN | 1 directive(s) — see FRSP.md §5 |
| M-07 | 100% coverage, all green/clean | UNPROVEN | 2 unit test files — no verified 100% run on record |
| M-08 | Live operational validation | UNVERIFIED | This pass was static (no code executed); runtime proof owed by FRSP execution |
| M-09 | Traceability & auditability | MINIMAL | Observability signals vary; correlation-ID + decision-record standard mandated |
| M-10 | Total data retention | POLICY-SET | Retention law encoded in FRSP.md §12; archive-never-destroy from this date |

### Deduplication / consolidation directives (repo-specific)

- **DD-01:** Site-kit extraction where applicable (it has a build step unlike siblings)

### Re-grounded gap register (adds to, never replaces, the register below)

- **RG-01:** Build+deploy pipeline proof; widget backend decision (currently static)

### Fleet context this repo must honor

- Canonical local-LLM provider: **olaman (Ollama gateway/control plane, port 8030) fronting host Ollama at 127.0.0.1:11434**
- Canonical fleet dashboard/command center: **arescore (ClawMedia command center, app/server.js :8889; Arescore hub seed http://127.0.0.1:8890/)**
- Canonical skills SSOT: **agency (SSOT skill registry, 708-skill capability manifest)**
- Known fleet port collisions (resolve via the arescore port registry): 8030: olaman vs dev-analytics api; 8741: freeai backend vs myskills; 8000: mia, lab, peni, myprd backends (+fira internal); 8028: fira frontend vs midas (full list in FRSP.md §1)

<!-- REGROUND:reground-20260815-python-fleet:END -->


## Review Metadata

- Review date: 2026-07-03
- Repo root: C:\Users\mcgac\Python\agentx2.ai
- Languages/frameworks: Astro 6 (static site generator), TypeScript 5.7, vanilla JS/CSS in `.astro` components, Node.js >=22.12.0, `node:test` for unit tests. No backend runtime, no database driver, no UI framework (React/Vue/Svelte) beyond Astro's own component model.
- App type: **Static marketing/documentation website** for an aspirational "AI-native consulting firm" (AgentX2.ai), built with Astro and deployed to GitHub Pages. Despite extensive documentation describing an "autonomous AI build system," "agentic swarms," and a "Managed AI Workforce platform," the actual shipped artifact is a client-only static site with a hardcoded keyword-matching chat widget — there is no live LLM integration, no backend API, and no database in this repo.
- Review mode: Blitz — single-session, sampled evidence
- Commands run: File-tool discovery only (Read/Glob/Grep against `C:\Users\mcgac\Python\agentx2.ai\...`); `mcp__workspace__bash` was contended/unavailable ("process already running") for the initial `git log`/`find` commands, so git history was read via direct `Read` of `.git\HEAD`, `.git\config`, and `.git\logs\HEAD` (fallback method used, per instructions). No code was executed, no dependencies were installed, no files other than this one were modified.
- Tests/CI discovered: 2 unit-test files (`tests/structure.test.mjs`, `tests/build-output.test.mjs`, run via `node --test`, no external test framework) covering page existence, layout usage, nav-link resolution, and built-output route presence; 5 custom Node validation scripts (`scripts/check-links.mjs`, `check-orphans.mjs`, `check-seo.mjs`, `check-a11y.mjs`, `check-doc-links.mjs`) plus `scripts/setup-hooks.mjs`; 3 GitHub Actions workflows (`ci.yml`, `deploy.yml`, `security.yml`) — no `freshness.yml` or `eval-trend.yml` despite being named in `docs/04-quality/CI_CD.md`. No E2E/Playwright config found despite `docs/04-quality/TESTING_STRATEGY.md` naming Playwright for E2E.
- Confidence: **Medium-High**. High confidence on what code/config actually exists (verified via direct Read/Glob/Grep of the real filesystem, cross-checked against doc claims). Medium confidence on completeness of the ~230-file `docs/` tree (a sub-agent deep-read ~20 of the most load-bearing docs; the remainder were sampled by path/grep only, not fully read). Any claim below sourced only from docs (not code/config) is explicitly labeled as such and excluded from "verified missing" counts where ambiguous.

## Existing Capabilities Found

- **Astro 6 static site, 18 routes** at `src/pages/*.astro` (`index`, `services`, `agentic-ai`, `finance-ai`, `subscriptions`, `industries`, `case-studies`, `about`, `contact`, `faq`, `partners`, `careers`, `privacy`, `terms`, `demo`, `roi-calculator`, `mission-control`, `404`), each wrapped in a shared `BaseLayout.astro`.
- **On-page "AI" chat widget** (`src/components/AIWidget.astro`) — accessible ARIA dialog, keyboard/focus handling, `aria-live` log — but implemented as a **client-side, hardcoded keyword-to-string lookup table** (`KB` array of ~10 intent buckets), not a call to any LLM API or local Ollama endpoint.
- **Client-side telemetry with a real circuit breaker** (`src/components/Analytics.astro`) — `window.ax2.track()`, auto page-view + declarative CTA tracking via `data-ax2-event` attributes, trips after 3 consecutive transport failures, respects `navigator.doNotTrack`, no external calls unless `PUBLIC_ANALYTICS_ENDPOINT` is set.
- **Node-native test suite** (`tests/structure.test.mjs`, `tests/build-output.test.mjs`) using `node:test` — zero external test-framework dependency; asserts all expected pages exist, use `BaseLayout`, wire an AI agent (except legal pages), and that built `dist/` output contains all routes + SEO/brand artifacts.
- **5 custom validation scripts** (`scripts/check-links.mjs`, `check-orphans.mjs`, `check-seo.mjs`, `check-a11y.mjs`, `check-doc-links.mjs`) wired into `npm run validate` and `npm run ci`.
- **3 GitHub Actions workflows**: `ci.yml` (type-check, build, unit tests, validate, markdown lint, `npm audit --omit=dev`, regex-based secret scan), `security.yml` (scheduled Monday 06:00 UTC dependency audit + full-tree secret scan), `deploy.yml` (GitHub Pages deploy via `actions/deploy-pages@v4`).
- **`.env.example`** documents required/optional env vars (analytics endpoint, Ollama host, OTel endpoint, optional cloud LLM keys, future platform keys) with **no real secret values** — correct practice.
- **`.gitignore`** correctly excludes `.env`, `.env.*` (allowlisting only `.env.example`), `node_modules/`, `dist/`, caches.
- **`openapi.yaml`** — a well-formed OpenAPI 3.1 spec for a **future, unimplemented private platform API** (leads, consultations, assessments, ROI, agents, telemetry), explicitly labeled in its own header comment as "illustrative" and not shipped by the current static site.
- **Security response headers** defined in `public/_headers` (CSP, X-Frame-Options, HSTS, Permissions-Policy, COOP) — but the file's own comment states GitHub Pages (the actual deploy target per `deploy.yml`) does not honor `_headers`, so these are currently **inert** unless fronted by Cloudflare/Netlify.
- **`package-lock.json`** present — dependency versions are pinned/reproducible.
- **Repository hygiene files present**: `LICENSE.md` (proprietary), `SECURITY.md` (vulnerability disclosure to `security@agentx2.ai`), `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `.github/ISSUE_TEMPLATE/{bug,feature,agent-task}.md`, `.markdownlint.jsonc`.
- **Very large governance/architecture documentation corpus** (~90+ markdown files under `docs/`) covering AI governance, human-in-the-loop tiers, risk register, responsible-AI principles, compliance mapping (NIST AI RMF, OWASP LLM Top 10), model strategy (named Ollama model IDs per role), agentic swarm topology, OpenTelemetry GenAI tracing conventions, and 5 ADRs — all well-structured with front-matter, freshness cadence, and sourced citations, but describing a **largely unimplemented target architecture** rather than the shipped code (see Gap Analysis).
- **Self-aware risk/compliance tracking inside the docs themselves**: `docs/06-governance/RISK_REGISTER.md` marks 5 of 7 risks "Open"; `docs/06-governance/COMPLIANCE.md` explicitly flags EU AI Act applicability and SOC2-class certification as `[UNVERIFIED]`; `docs/DOCUMENTATION_AUDIT.md` and `docs/IMPLEMENTATION_PLAN.md` (all 21 WBS tasks marked "todo") self-report incomplete build status — this is good-faith self-grounding, not evidence of shipped capability.

## Evidence Ledger

| Evidence ID | Area | Evidence Type | File/Path/Command | Finding | Confidence |
|---|---|---|---|---|---|
| E-001 | Repo identity | Config | `.git\config` (Read) | Remote `origin` = `https://github.com/migar-git/agentx2.ai.git`, branch `main` | High |
| E-002 | Git history | Log | `.git\logs\HEAD` (Read, fallback method — bash contended) | 9 commits from 2026-06-11 to 2026-07-03; commit messages are literal AI-agent narration text (e.g., "I'll begin implementation now...") | High |
| E-003 | App type | Manifest | `package.json` | `scripts.dev/build/preview` = `astro dev/build/preview`; devDependencies only `@astrojs/check`, `@astrojs/sitemap`, `astro`, `markdownlint-cli2`, `typescript` — zero AI/LLM SDK, zero backend framework, zero DB driver | High |
| E-004 | Build config | Config | `astro.config.mjs` | Static-first, `site: 'https://agentx2.ai'`, `build.format: 'directory'`, sitemap integration, devToolbar disabled | High |
| E-005 | Pages | Code | `src/pages/*.astro` (Glob, 18 files) | 18 real `.astro` route files confirmed present | High |
| E-006 | Components | Code | `src/components/*.astro` (Glob, 7 files: AIWidget, Analytics, BaseHead, CtaBand, Footer, Header, PageHero) | Real component layer exists | High |
| E-007 | AI widget impl | Code | `src/components/AIWidget.astro` (full read) | Chat UI is a hardcoded `KB` array (~10 keyword buckets) matched via `indexOf`; no `fetch`/API call to any model provider | High |
| E-008 | Telemetry | Code | `src/components/Analytics.astro` (full read) | Real circuit breaker (`trip()` after 3 failures), DNT respect, `sendBeacon`/`fetch` fallback, no-op if endpoint unset | High |
| E-009 | Tests | Code | `tests/structure.test.mjs`, `tests/build-output.test.mjs` (full read) | 2 files, ~10 `node:test` cases; structure test runs without build; build-output test self-skips if `dist/` absent | High |
| E-010 | Scripts | Code | `scripts/*.mjs` (Glob, 6 files) | check-doc-links, check-links, check-orphans, check-seo, setup-hooks, check-a11y present | High |
| E-011 | CI | Config | `.github/workflows/ci.yml` (full read) | Runs type-check, build, unit test, validate, md-lint, `npm audit --omit=dev`, and an inline regex secret scan (AKIA/PEM/`sk-` patterns); a Lighthouse/a11y job exists but is disabled via `if: false` | High |
| E-012 | CI | Config | `.github/workflows/security.yml` (full read) | Scheduled Monday 06:00 UTC + push-triggered dependency audit and full-tree regex secret scan; references `.github/dependabot.yml` in path triggers, but that file does not exist | High |
| E-013 | CI | Config | `.github/workflows/deploy.yml` (full read) | Bare build + `actions/deploy-pages@v4`; no smoke test, no canary, no rollback step | High |
| E-014 | CI gap | Config | Glob `.github/workflows/*` (3 results) vs `docs/04-quality/CI_CD.md` §3 (names `ci`, `deploy`, `security`, `freshness`, `eval-trend`) | 2 of 5 documented workflows (`freshness`, `eval-trend`) do not exist as files | High |
| E-015 | Secrets hygiene | Config | `.env.example` (full read), `.gitignore` (full read) | Only template values; `.env`/`.env.*` git-ignored except `.env.example`; no committed `.pem`/`.key`/`credentials*` files found via Glob | High |
| E-016 | Security headers | Config | `public/_headers` (full read) | CSP/HSTS/X-Frame-Options/Permissions-Policy defined but file's own comment admits GitHub Pages (actual host) ignores `_headers` | High |
| E-017 | OpenAPI | Config | `openapi.yaml` (partial read, lines 1-60) | 3.1 spec for leads/consultations/assessments/ROI/agents/telemetry; header comment self-labels as future/illustrative, bearer-auth security scheme declared but no implementing server code exists | High |
| E-018 | Dashboard | Code | `src/pages/mission-control.astro` (partial read) | KPI tabs (Executive/Operations/AI/Financial) render entirely static placeholder values (`$—`, "connect billing", "connect CRM", "live"/"tracked" labels) — no data source wiring | High |
| E-019 | Docs vs code (build claim) | Cross-check | `BUILD_REPORT.md` vs `docs/IMPLEMENTATION_PLAN.md` | BUILD_REPORT.md (same date, 2026-06-12) claims full app build complete; IMPLEMENTATION_PLAN.md's 21-task WBS is 100% status "todo" — internally contradictory artifacts from the same doc-generation pass, not reconciled | High |
| E-020 | AI governance docs | Docs | Sub-agent deep-read of 20 files incl. `AI_BUILD_SYSTEM.md`, `AGENTIC_SWARM.md`, `MODEL_STRATEGY.md`, `EVAL_FRAMEWORK.md`, `AI_GOVERNANCE.md`, `HUMAN_IN_THE_LOOP.md`, `PROMPT_LIBRARY.md`, `AGENT_CONTRACTS.md` | All `status: Active` front-matter but describe a **conceptual/target** architecture (named Ollama models, swarm lanes, eval judge models, autonomy tiers) with zero corresponding implementation code found anywhere in repo | Medium (doc-only claims, not code) |
| E-021 | Risk self-reporting | Docs | `docs/06-governance/RISK_REGISTER.md` | 5 of 7 risks (R-001,002,005,006,007) marked "Open"; R-007 (logo licensing) explicitly unresolved | High (as a doc artifact) |
| E-022 | Compliance self-reporting | Docs | `docs/06-governance/COMPLIANCE.md` | EU AI Act applicability and SOC2-class certification explicitly marked `[UNVERIFIED]` | High (as a doc artifact) |
| E-023 | Model routing/fallback | Grep | `Grep "openai\|anthropic\|langchain\|llm-\|@ai-sdk"` against `package.json` | Zero matches — no LLM SDK dependency of any kind | High |
| E-024 | AI/agent keyword prevalence | Grep | `Grep "prompt\|eval\|langchain\|openai\|anthropic\|llm\|agent"` scoped to `*.{ts,js,mjs,cjs,astro,json,yaml,yml}` | 22 files matched, entirely: page/component files referencing the word "agent" in UI copy, `package.json`/`package-lock.json` (transitive dev-tool deps, not AI SDKs), and `openapi.yaml` (spec only) — no runtime model-calling code | High |
| E-025 | RBAC/JWT/rate-limit | Grep | `Grep "rbac\|jwt\|api.?key\|rate.?limit\|ratelimit"` (case-insensitive) across `docs/` | Matches only in docs (`API_ARCHITECTURE.md`, `KEY_MANAGEMENT.md`, `MCP_ARCHITECTURE.md`, etc.) describing a **future private platform**; zero matches in any `src/` code | High |
| E-026 | SBOM/provenance/SLSA | Grep | `Grep "sbom\|provenance\|trivy\|attest\|cosign\|slsa\|gitleaks\|detect-secrets"` (case-insensitive) across `docs/` | Matches only in doc prose (ADR-0003, TRACING.md, AI_GOVERNANCE.md, DATA_MODEL.md, CI_CD.md, RELEASE_ENGINEERING.md) — no SBOM generation, no Cosign/Trivy/SLSA provenance step in any actual workflow file; no `gitleaks`/`detect-secrets` config file exists (only inline regex in CI) | High |
| E-027 | Migration/backup/cron/queue | Grep | `Grep "migration\|alembic\|backup\|restore\|feature.?flag\|cron\|scheduler\|queue\|worker"` (case-insensitive) across `docs/` | 14 doc files reference these concepts (mostly for the unbuilt future platform); zero actual migration files, backup scripts, or queue/worker code in repo; only real "cron" usage is the GitHub Actions `schedule: cron:` in `security.yml` | High |
| E-028 | Feature flags | Grep | `Grep "feature.?flag\|LaunchDarkly\|unleash\|flagsmith"` scoped to `src/` | Zero matches | High |
| E-029 | Secret-like filenames | Glob | `*.pem`, `*.key`, `**/credentials*` at repo root | Zero results — no committed secret-shaped files by name | High |
| E-030 | LICENSE/SECURITY/CODEOWNERS | Glob | `LICENSE.md`, `SECURITY.md`, `CODE_OF_CONDUCT.md` present; `CODEOWNERS` / `.github/CODEOWNERS` — zero results | LICENSE/SECURITY/CoC present; CODEOWNERS absent | High |
| E-031 | Dependabot/PR template | Glob | `.github/dependabot.yml`, `.github/PULL_REQUEST_TEMPLATE.md` | Both absent despite being referenced/implied elsewhere (security.yml path trigger names dependabot.yml; DOCUMENTATION_AUDIT.md claims a PR template exists — not found) | High |
| E-032 | Root doc-code contradiction | Cross-check | `CURRENT_STATE.md` §3 vs actual Glob of `src/`, `.github/workflows/` | CURRENT_STATE.md correctly narrates a two-phase history (docs-only, then a real app build) that **matches** the evidence found — this doc is more accurate than IMPLEMENTATION_PLAN.md | High |
| E-033 | Test coverage breadth | Code | `tests/*.test.mjs` (2 files) vs `docs/04-quality/TESTING_STRATEGY.md` (claims ~70/20/10 unit/integration/E2E pyramid + Playwright E2E) | Actual suite is structural/existence assertions only; no integration tests, no E2E, no Playwright config/dependency found | High |
| E-034 | VS Code workspace claim | Cross-check | `.git\logs\HEAD` commit "add VS Code tasks and recommended extensions" vs Glob `.vscode/**` | Zero `.vscode/` files found — commit message claims a deliverable that isn't present in the current tree | Medium (could have been reverted/squashed; not certain it never existed) |
| E-035 | robots/sitemap/manifest | Glob | `public/robots.txt`, `public/site.webmanifest`, `public/CNAME`, `public/favicon.svg`, `public/logo.svg`, `public/og-default.jpg` | Standard static-site SEO/PWA artifacts present | High |

## Threat Model Summary

- **Spoofing**: No authentication surface exists in the shipped site (fully static, no login). The documented future platform (`openapi.yaml`, `KEY_MANAGEMENT.md`) specifies `bearerAuth`, but zero implementing code exists today, so spoofing risk is currently low (nothing to spoof) but will re-emerge unmitigated the moment any backend ships (see FR-001, FR-002).
- **Tampering**: Client-side telemetry (`window.ax2`) and the AI widget's keyword-matcher run entirely in the browser with no server-side validation; a malicious browser extension or MITM could tamper with tracked events, but since no server trusts this data for anything security-relevant today, impact is low. CSP is defined (`public/_headers`) but confirmed inert on the actual GitHub Pages host (E-016) — a real tampering-surface gap (no XSS/injection mitigation is actually enforced in production).
- **Repudiation**: No audit-log implementation found anywhere in code; `docs/05-observability/TRACING.md` describes an OTel GenAI span hierarchy that is entirely aspirational (E-020). The only real activity log is the client-side `ax2.track()` queue, which is not persisted server-side and is trivially bypassable/spoofable by the browser itself.
- **Information Disclosure**: No secrets found committed (E-015, E-029); `.env.example` correctly ships no real values. Regex-based secret scanning (E-011, E-012) is a reasonable best-effort but is pattern-limited (only catches AWS keys, PEM blocks, and `sk-`-prefixed strings) — it would miss most other credential formats, a concrete gap vs. a real tool like gitleaks/trufflehog.
- **Denial of Service**: No rate limiting exists anywhere (E-025) — moot for the current static site (GitHub Pages absorbs this), but the moment `openapi.yaml`'s described `/leads`, `/consultations` endpoints are implemented without rate limiting, this becomes a live gap the docs already claim ("rate-limited... idempotent") without any corresponding implementation.
- **Elevation of Privilege**: No authorization model (RBAC/ABAC) is implemented in code; `docs/06-governance/SECURITY_ARCHITECTURE.md` describes RBAC/ABAC for "app auth (Phase 2, private)" — explicitly out of scope for this repo today, consistent with the static-site-only reality.

## AI Governance Summary

Given the name "agentx2.ai" and its extensive AI-consulting narrative, this repo was reviewed carefully for AI governance evidence. The finding is stark: **the documentation describes a mature AI governance program in detail, but almost none of it is backed by running code** in this repository.

- **Prompt registry/versioning**: Missing (delta). `docs/03-agents/PROMPT_LIBRARY.md` defines a versioning/eval/A-B-testing lifecycle policy, but explicitly states actual prompt content "lives in the private repo" — meaning even the policy's own subject matter is out of scope here, and no prompt file, template, or version-control mechanism exists in this repo's code.
- **Evals**: Missing (delta). `docs/04-quality/EVAL_FRAMEWORK.md` names 7 eval dimensions and references a golden-dataset path (`eval/golden_*.jsonl`) that does not exist anywhere in the repo. No eval runner code, no CI job invoking an eval, no scored results file.
- **Model routing/fallback**: Missing. `docs/01-architecture/MODEL_STRATEGY.md` names specific Ollama model IDs per role with primary/fallback pairs, but zero model-adapter code (`src/lib/model.ts`, named explicitly as task T-008 in `IMPLEMENTATION_PLAN.md` — status "todo") exists. The one AI-branded feature that ships (`AIWidget.astro`) calls no model at all — it is a static keyword-lookup table (E-007), so there is literally no model to route or fall back between.
- **Cost controls**: Missing. Mission Control's "AI" tab (E-018) shows a "Token cost — tracked" KPI, but it is static placeholder data with no underlying metering, budget, or alerting code.
- **Audit logs**: Missing (delta). Client-side `ax2.track()` (E-008) records UI events (page views, CTA clicks, `ai_widget_open`) but this is marketing analytics, not a governance-grade audit trail — no request-level, model-call-level, or agent-action-level audit log exists, and nothing is server-side or tamper-evident.
- **Human-in-the-loop gates**: Missing (delta). `docs/06-governance/HUMAN_IN_THE_LOOP.md` defines 4 concrete autonomy tiers (Manual/Suggest/Act-with-approval/Autonomous) — a well-designed policy — but no code anywhere implements an approval gate, an autonomy-tier check, or any mechanism that would pause an action for human sign-off, because there is no autonomous agent execution in this repo to gate in the first place.
- **Output validation**: Partial. The keyword-matching bot (E-007) is deterministic and template-based, which incidentally sidesteps hallucination risk — but this is an artifact of *not having an LLM* rather than a designed output-validation/guardrail layer. No guardian-model integration (`granite4.1-guardian`, `llama-guard3` named in `MODEL_STRATEGY.md`) exists in code.

**Net assessment**: This repo currently ships a conventional static marketing site with a scripted FAQ widget. It is not, today, an "AI agent" or "agentic swarm" system in the runtime sense — it is a **documentation and policy corpus for one**, paired with a website that describes the vision. This is a legitimate and common "docs-first" stage of a build, but the FR list below treats the described governance program as concretely, verifiably absent from running code (not merely "not yet polished").

## Competitive Benchmark Matrix

| Capability | This Repo | Industry Reference | Gap |
|---|---|---|---|
| Live LLM-backed assistant | Static keyword-lookup bot only (E-007) | Cursor / GitHub Copilot Chat / Intercom Fin — real model calls with context grounding | No model integration at all; cannot answer beyond ~10 hardcoded intents |
| Prompt versioning & registry | Policy doc only, no code (E-020) | LangSmith / Langfuse prompt registry with version diffing | No storage, no versioning, no diffing mechanism exists |
| Eval harness execution | Framework described, no runner or golden data (E-020) | LangSmith/Langfuse evals, OpenAI Evals | No eval ever runs in CI; no scored baseline file |
| Distributed tracing (GenAI) | OTel GenAI semconv v1.41.1 cited in docs only (E-020) | Datadog LLM Observability, Langfuse tracing, OTel Collector | Zero instrumentation code; no collector config; no spans emitted |
| CI/CD quality gates | Real: build+test+lint+audit+regex-secret-scan (E-011) | GitHub Copilot coding agent CI gates, Temporal CI | Functional but missing SAST, SBOM, license-scan, Lighthouse (disabled), E2E |
| Secret scanning | Inline regex (3 patterns) in workflow (E-011, E-012) | GitHub Advanced Security secret scanning, gitleaks, trufflehog | Pattern-limited; would miss most non-AWS/non-PEM/non-`sk-` secret formats |
| Supply-chain provenance (SLSA) | Not implemented; referenced only in ADR-0003 prose (E-026) | SLSA v1.2 provenance via GitHub Actions attestations, Sigstore/Cosign | No attestation, no SBOM, no signing anywhere in workflows |
| Feature flagging | Not implemented (E-028) | LaunchDarkly / Unleash / Statsig | No mechanism to gate rollout of any feature |
| Observability dashboard | Static mock KPIs (E-018) | Datadog / Grafana / Backstage scorecards | "Mission Control" renders placeholder values, not live telemetry |
| Human-in-the-loop approval gates | Policy tiers documented, zero enforcement code (E-020) | LangGraph human-in-the-loop interrupts, Temporal signal-based approvals | No code path pauses for approval; nothing autonomous exists to gate |
| Rate limiting / API auth | Specified in `openapi.yaml` only, no server (E-017, E-025) | Kong/Envoy rate limiting, Auth0/Clerk auth | No backend exists to enforce any of this yet |

## Gap Analysis Summary

This repository is best understood as a documentation-and-policy foundation with a thin, real static website layered on top — not the "self-building AI-native enterprise platform" its own docs narrate in active voice. The gap between aspiration and implementation is large and, unusually, the repo's own artifacts partially self-report it (IMPLEMENTATION_PLAN.md's all-"todo" WBS, RISK_REGISTER.md's mostly-"Open" risks, COMPLIANCE.md's `[UNVERIFIED]` flags) even while other artifacts from the same generation pass (BUILD_REPORT.md, most `docs/06-governance/*` files) narrate the same target state in the present/active tense as if already operating. The 30 FRs below are grounded exclusively in verified absent-from-code capabilities: no LLM integration behind the "AI" branding, no eval/tracing/audit runtime, no CI supply-chain hardening beyond basic `npm audit`, several dead-reference paths in docs and CI triggers, an inert CSP header, a contradictory planning artifact, and a purely decorative "Mission Control" dashboard. All 30 are distinct, non-duplicate, and each maps to at least one Evidence Ledger row confirming the gap was actually searched for and found absent (or found only as an inert/placeholder implementation), not assumed.

## Feature Requests

### FR-001: Real LLM backend for the on-page AI widget
- **Description**: Replace the hardcoded `KB` keyword-lookup array in `src/components/AIWidget.astro` with an actual call to a governed model endpoint (local Ollama per `docs/01-architecture/MODEL_STRATEGY.md`, or a cloud fallback per `.env.example`'s `OPENAI_API_KEY`/`ANTHROPIC_API_KEY`), including a server-side proxy so API keys never reach the browser.
- **Why It Matters**: The entire brand promise ("AI-native," "AI Consultation Agent," "AI everywhere") rests on this widget; today it cannot answer anything outside ~10 hardcoded intents, which is a material trust/credibility risk the moment a prospect asks a real question.
- **Verification Evidence**: Full read of `AIWidget.astro` shows only string matching (`indexOf`) against a static array; zero `fetch`/API call to any model provider; `package.json` has zero AI SDK dependency.
- **Evidence IDs**: E-003, E-007, E-023, E-024
- **Priority**: P0
- **Category**: AI/Agent Core
- **ROI Score**: 9/10 — direct product/brand credibility (revenue/adoption 25%), high differentiation for an "AI-native" positioning (10%), strong trust/UX uplift (15%)
- **Risk Score**: 6/10 — moderate complexity introducing a backend/proxy (20%), new vendor dependency (10%), blast radius limited to one component (15%)
- **Dependencies**: Requires a minimal backend/edge function (does not exist today) to hold API keys server-side; depends on FR-002 (model routing) and FR-005 (rate limiting) to ship safely
- **Competitive Reference**: Intercom Fin, GitHub Copilot Chat — real, context-grounded model responses
- **Security/Privacy Impact**: Introduces a new data-flow (user messages to a third-party or local model) requiring privacy-policy disclosure and prompt-injection defenses (OWASP LLM Top 10, already cited in `SECURITY.md`)
- **Rollout Readiness**: Low
- **Validation Gates**:
  - Manual QA confirms responses are grounded and do not hallucinate pricing/claims
  - Security review confirms no API key exposure in client bundle (`npm run build` output inspection)
  - Load test confirms graceful degradation to the existing static KB if the model endpoint is unreachable
- **Acceptance Criteria**:
  - Widget successfully answers at least 20 out-of-KB test questions with contextually relevant responses
  - No API key string appears in any file under `dist/` after `npm run build`
  - Existing `tests/structure.test.mjs` "content pages wire an on-page AI agent" test continues to pass unmodified

### FR-002: Model routing and fallback implementation (`src/lib/model.ts`)
- **Description**: Implement the model provider adapter named as task T-008 in `docs/IMPLEMENTATION_PLAN.md` — a single module that selects between the primary/fallback Ollama models named in `docs/01-architecture/MODEL_STRATEGY.md` and optional cloud providers, with automatic failover on timeout/error.
- **Why It Matters**: Every AI-facing doc (`MODEL_STRATEGY.md`, `AI_BUILD_SYSTEM.md`, `AGENTIC_SWARM.md`) assumes this adapter exists and is the seam all agent/eval/tracing work plugs into; without it, FR-001, FR-003, and FR-004 cannot be built on a shared foundation.
- **Verification Evidence**: `IMPLEMENTATION_PLAN.md` T-008 status is "todo"; Grep for `src/lib/` returned no results in any earlier discovery pass; `package.json` has no HTTP client beyond what Astro pulls transitively.
- **Evidence IDs**: E-003, E-020, E-023
- **Priority**: P0
- **Category**: AI/Agent Core
- **ROI Score**: 8/10 — high leverage (5%) since it unblocks 3+ other FRs, meaningful velocity gain (15%) for future AI feature work
- **Risk Score**: 5/10 — moderate complexity (20%), single new module with contained blast radius (15%)
- **Dependencies**: Blocks FR-001, FR-003, FR-004; depends on a running Ollama instance or cloud credentials being available in the deploy environment
- **Competitive Reference**: LangGraph model routing, LiteLLM proxy pattern
- **Security/Privacy Impact**: Centralizes credential handling — must load keys from environment only, never hardcode, consistent with `docs/KEY_MANAGEMENT.md` policy
- **Rollout Readiness**: Low
- **Validation Gates**:
  - Unit tests confirm fallback triggers correctly on simulated primary-model timeout
  - Config review confirms no credential is read from anywhere but `process.env`
  - Integration smoke test against both a local Ollama endpoint and a mocked cloud provider
- **Acceptance Criteria**:
  - Module exports a single typed function callable from both `AIWidget` and any future eval runner
  - Fallback model is invoked automatically within a defined timeout (e.g., 5s) without user-visible error
  - Unit test suite added under `tests/` covering routing logic, runnable via existing `npm test`

### FR-003: Executable eval harness with golden datasets
- **Description**: Build the `eval/` directory and judge-runner described in `docs/04-quality/EVAL_FRAMEWORK.md` (referencing `eval/golden_*.jsonl`), producing an actual scored output file consumed by CI.
- **Why It Matters**: The doc defines 7 eval dimensions (correctness, faithfulness, safety, helpfulness, latency, cost, format) as a governance requirement, but with no runner, "zero regression" (a stated non-negotiable in `AGENTS.md`) cannot be enforced for any AI feature.
- **Verification Evidence**: `EVAL_FRAMEWORK.md` references a path that does not exist anywhere in the repo; no `eval-trend.yml` workflow exists despite being named in `docs/04-quality/CI_CD.md`.
- **Evidence IDs**: E-014, E-020
- **Priority**: P1
- **Category**: AI Quality/Governance
- **ROI Score**: 6/10 — mostly risk-mitigation value (20% weight) and trust/UX (15%), lower direct revenue impact until FR-001 ships
- **Risk Score**: 4/10 — moderate complexity (20%), no production blast radius since it's a CI-only addition
- **Dependencies**: Depends on FR-002 (model adapter) to have something to evaluate; depends on FR-001 shipping to have a real feature worth evaluating
- **Competitive Reference**: LangSmith evals, OpenAI Evals framework
- **Security/Privacy Impact**: Golden datasets must not contain real customer data; should be synthetic/representative only
- **Rollout Readiness**: Medium
- **Validation Gates**:
  - Golden dataset review confirms no PII/real customer content
  - CI dry-run confirms eval scores are deterministic across repeated runs (or documents acceptable variance)
  - Threshold values are set from an actual baseline run, not invented (per `AGENTS.md` grounding rule)
- **Acceptance Criteria**:
  - `eval-trend.yml` workflow file created and runs on a schedule
  - At least one golden dataset file exists with ≥20 labeled examples per dimension
  - CI fails the build when a scored dimension drops below its documented threshold

### FR-004: OpenTelemetry GenAI instrumentation (`src/lib/otel.ts`)
- **Description**: Implement the OTel GenAI semantic-convention tracing (v1.41.1, per `docs/05-observability/TRACING.md`) as real SDK initialization code, wired to the `OTEL_EXPORTER_OTLP_ENDPOINT` already defined in `.env.example`.
- **Why It Matters**: `AGENTS.md` non-negotiable #5 states "every agent action emits OpenTelemetry GenAI spans" — currently zero spans are emitted anywhere, making this a stated-but-unenforced policy.
- **Verification Evidence**: `.env.example` defines `OTEL_EXPORTER_OTLP_ENDPOINT` and `OTEL_SEMCONV_STABILITY_OPT_IN` but no OTel SDK package appears in `package.json`; Grep for tracing code returned only doc matches.
- **Evidence IDs**: E-003, E-020
- **Priority**: P1
- **Category**: Observability
- **ROI Score**: 5/10 — primarily opex/risk value (10%/20% weights), limited direct revenue impact
- **Risk Score**: 4/10 — well-understood integration pattern (lower complexity), no production blast radius until traffic exists to trace
- **Dependencies**: Most valuable after FR-001/FR-002 ship (nothing meaningful to trace until then)
- **Competitive Reference**: Datadog LLM Observability, Langfuse tracing
- **Security/Privacy Impact**: Traces must not capture full user prompt/response content if it contains PII — needs a redaction policy before enabling in production
- **Rollout Readiness**: Medium
- **Validation Gates**:
  - Local collector smoke test confirms spans arrive with correct GenAI semantic attributes
  - Privacy review confirms no unredacted PII in span attributes
  - Load test confirms tracing overhead stays within an agreed latency budget
- **Acceptance Criteria**:
  - A local OTel collector receives at least one span per AI widget interaction in a dev environment
  - Span names/attributes match the hierarchy (Run→Agent→Model/Tool/Handoff→Eval) documented in `TRACING.md`
  - Feature is toggleable via the existing `OTEL_EXPORTER_OTLP_ENDPOINT` env var (no-op if unset)

### FR-005: Backend rate limiting for any future API surface
- **Description**: Before implementing any endpoint from `openapi.yaml` (`/leads`, `/consultations`, `/assessments`, `/roi`, `/agents`, `/telemetry`), add a rate-limiting middleware/gateway layer.
- **Why It Matters**: `openapi.yaml`'s own description claims "every request is... rate-limited" but zero rate-limiting code or config exists anywhere in the repo; shipping the API without this first would leave it open to abuse/DoS on day one.
- **Verification Evidence**: Grep for `rate.?limit|ratelimit` across the whole repo (not just docs) returned matches only in doc prose; no middleware file, no gateway config found.
- **Evidence IDs**: E-017, E-025
- **Priority**: P1
- **Category**: Security/Platform
- **ROI Score**: 5/10 — mostly risk-avoidance value (20% weight), no direct revenue until the API itself ships
- **Risk Score**: 7/10 — security-relevant (25% weight), non-trivial to retrofit correctly once traffic exists
- **Dependencies**: Blocked by / must ship alongside the first real backend endpoint (none exist yet)
- **Competitive Reference**: Kong/Envoy rate limiting, Cloudflare rate limiting rules
- **Security/Privacy Impact**: Directly mitigates DoS and credential-stuffing/brute-force risk on any future auth endpoint
- **Rollout Readiness**: Low (no backend exists yet to attach this to)
- **Validation Gates**:
  - Load test confirms limiter correctly rejects traffic above threshold with proper 429 responses
  - Security review confirms limits are per-key/per-IP as appropriate, not globally shared in a way that enables one client to starve others
  - Documentation review confirms limits match what `openapi.yaml` and `API_CONTRACTS.md` promise
- **Acceptance Criteria**:
  - Every mutating endpoint in `openapi.yaml` has a documented and enforced rate limit
  - Automated test confirms a 429 is returned after the configured threshold is exceeded
  - Rate-limit state survives a single-instance restart (not purely in-memory with no persistence) if the deployment is multi-instance

### FR-006: Fix stale/contradictory `IMPLEMENTATION_PLAN.md` status table
- **Description**: Reconcile `docs/IMPLEMENTATION_PLAN.md` (all 21 tasks marked "todo") against the actual repo state — mark T-002 (Astro scaffold), T-003–T-007 (design tokens/components/pages), T-012 (SEO/sitemap), T-017 (CI workflows, partially), and T-019 (deploy) as done/partially-done based on verified evidence, and correct dependency-graph implications.
- **Why It Matters**: A planning document that is 100% wrong about completion status actively misleads any future contributor (human or agent) about what remains to be built, directly undermining the repo's own "ground everything" and "zero regression" principles in `AGENTS.md`.
- **Verification Evidence**: Direct comparison of `IMPLEMENTATION_PLAN.md`'s WBS table against confirmed-present files (`src/pages/*.astro` ×18, `.github/workflows/*.yml` ×3, `tests/*.test.mjs` ×2) shows the "todo" statuses are factually incorrect for at least 8 of 21 tasks.
- **Evidence IDs**: E-019, E-005, E-011, E-012, E-013
- **Priority**: P2
- **Category**: Documentation/Process
- **ROI Score**: 4/10 — low direct revenue impact, but meaningful velocity gain (15%) from accurate planning state
- **Risk Score**: 2/10 — pure documentation change, no code/production blast radius
- **Dependencies**: None
- **Competitive Reference**: Backstage TechDocs freshness scoring, standard project-tracker hygiene
- **Security/Privacy Impact**: None
- **Rollout Readiness**: High
- **Validation Gates**:
  - Cross-check every task's new status against an actual file/config existence check before marking "done"
  - Peer review confirms no task is marked "done" without a corresponding Evidence-Ledger-style citation
  - Freshness-policy `last_verified` date is updated to the correction date
- **Acceptance Criteria**:
  - Zero tasks in the table are marked "todo" if their "Produces" column's files verifiably exist in the repo
  - Document links to the specific files/commits that closed each completed task
  - `docs/07-operations/FRESHNESS_POLICY.md` cadence is respected going forward (re-verify within its stated cadence)

### FR-007: Add `.github/dependabot.yml`
- **Description**: Create the Dependabot configuration file that `.github/workflows/security.yml` already references as a path trigger, enabling automated dependency-update PRs.
- **Why It Matters**: The security workflow's `push.paths` list includes `.github/dependabot.yml`, implying its authors intended for it to exist; without it, the repo has no automated mechanism to surface new dependency versions/CVE fixes between manual `npm audit` runs.
- **Verification Evidence**: Glob for `.github/dependabot.yml` returned zero results; `security.yml` full read confirms the path is referenced in its trigger list.
- **Evidence IDs**: E-012, E-031
- **Priority**: P2
- **Category**: Supply Chain/CI
- **ROI Score**: 4/10 — opex savings (10% weight) from automated update PRs, low direct revenue impact
- **Risk Score**: 2/10 — low complexity, standard GitHub-native feature, minimal blast radius
- **Dependencies**: None
- **Competitive Reference**: GitHub's own Dependabot, Renovate bot
- **Security/Privacy Impact**: Improves patch latency for disclosed CVEs in the (currently) 5-package devDependency tree
- **Rollout Readiness**: High
- **Validation Gates**:
  - Config syntax validated against GitHub's dependabot.yml schema
  - First scheduled run confirmed to open at least one PR (or confirm zero updates are pending) within a week
  - Reviewed for appropriate update cadence (e.g., weekly, not so frequent it creates noise)
- **Acceptance Criteria**:
  - File exists at `.github/dependabot.yml` with `package-ecosystem: npm` and `github-actions` entries
  - First Dependabot run completes without configuration errors visible in the Insights tab
  - Update PRs are auto-labeled for easy triage

### FR-008: Add CODEOWNERS file
- **Description**: Create a `CODEOWNERS` file (root or `.github/`) mapping key paths (`docs/06-governance/`, `.github/workflows/`, `src/components/AIWidget.astro`, `openapi.yaml`) to responsible reviewers.
- **Why It Matters**: `AGENTS.md` describes 8 named "swarm lanes" each "owning" specific doc domains, but there is no enforced review-routing mechanism — anyone can currently merge changes to security-sensitive paths without a designated owner's sign-off.
- **Verification Evidence**: Glob for `CODEOWNERS` and `.github/CODEOWNERS` both returned zero results.
- **Evidence IDs**: E-030
- **Priority**: P2
- **Category**: Governance/Process
- **ROI Score**: 3/10 — mostly risk-mitigation value (20% weight), single-maintainer repo currently limits urgency
- **Risk Score**: 2/10 — trivial to add, no code blast radius
- **Dependencies**: None
- **Competitive Reference**: Standard GitHub CODEOWNERS pattern used across most mature OSS/enterprise repos
- **Security/Privacy Impact**: Improves change-control rigor for security-relevant paths (workflows, key management docs)
- **Rollout Readiness**: High
- **Validation Gates**:
  - File syntax validated (GitHub renders a "Code owners" indicator on PRs touching matched paths)
  - Confirm at least workflow files and governance docs have an assigned owner
  - Review cadence matches the repo's existing 30-90 day freshness cadences
- **Acceptance Criteria**:
  - `CODEOWNERS` file exists and is recognized by GitHub (verified via a test PR showing the reviewer requirement)
  - At minimum, `.github/workflows/*`, `openapi.yaml`, and `docs/06-governance/*` have explicit owners
  - No path is left without a fallback default owner

### FR-009: Add GitHub PR template
- **Description**: Create `.github/PULL_REQUEST_TEMPLATE.md` enforcing the checklist `AGENTS.md` §6 already mandates ("every PR links its spec, plan, eval run, and trace").
- **Why It Matters**: `docs/DOCUMENTATION_AUDIT.md` lists a PR template as already scoring 100/complete, but it does not exist in the actual `.github/` tree — a direct doc-vs-reality gap that also means the AGENTS.md-mandated PR checklist is currently unenforced.
- **Verification Evidence**: Glob for `.github/PULL_REQUEST_TEMPLATE.md` returned zero results; `.github/ISSUE_TEMPLATE/` does exist (3 files confirmed), so this is a specific, isolated omission, not a general `.github/` absence.
- **Evidence IDs**: E-031
- **Priority**: P2
- **Category**: Process/Documentation
- **ROI Score**: 3/10 — velocity/consistency value (15% weight) for future contributors
- **Risk Score**: 1/10 — purely additive, zero blast radius
- **Dependencies**: None
- **Competitive Reference**: Standard OSS PR template conventions
- **Security/Privacy Impact**: None directly, but improves the odds security-relevant PRs self-document their eval/trace evidence
- **Rollout Readiness**: High
- **Validation Gates**:
  - Template reviewed against `AGENTS.md` §6's exact requirements (spec/plan/eval/trace links)
  - First PR using the template confirms fields render correctly in GitHub's compose UI
  - No conflict with existing `ISSUE_TEMPLATE/agent-task.md` conventions
- **Acceptance Criteria**:
  - File exists at `.github/PULL_REQUEST_TEMPLATE.md`
  - Template includes checklist items for spec/plan/eval-run/trace links per `AGENTS.md` §6
  - Next 3 PRs opened against the repo show the template auto-populated

### FR-010: Re-enable or remove the disabled Lighthouse/a11y CI job
- **Description**: The `links-external` job in `.github/workflows/ci.yml` is present but gated `if: false` with a comment "Reserved for Lighthouse CI performance + accessibility budgets" — either implement it for real or remove the dead placeholder.
- **Why It Matters**: `AGENTS.md` §5 lists "performance (Core Web Vitals budgets)" and "accessibility (WCAG 2.2 AA)" as must-pass merge gates, and `docs/PRD.md`'s NFRs cite "Lighthouse ≥95, 0 axe violations" — but no CI job actually measures either metric today; the existing `scripts/check-a11y.mjs` is a custom static check, not a Lighthouse/axe run.
- **Verification Evidence**: Full read of `ci.yml` shows the job is present but structurally disabled (`if: false`); `scripts/check-a11y.mjs` exists as a separate, more limited static check already wired into `npm run validate`.
- **Evidence IDs**: E-011
- **Priority**: P1
- **Category**: Quality/CI
- **ROI Score**: 6/10 — trust/UX weight (15%) high since accessibility and performance are stated non-negotiables; some revenue-adjacent value from better Core Web Vitals/SEO
- **Risk Score**: 3/10 — low complexity to wire up a standard Lighthouse CI action, no production blast radius
- **Dependencies**: None (Lighthouse CI is a well-documented GitHub Action)
- **Competitive Reference**: Google's Lighthouse CI GitHub Action, standard in most modern web-perf pipelines
- **Security/Privacy Impact**: None
- **Rollout Readiness**: High
- **Validation Gates**:
  - Baseline Lighthouse run establishes actual current scores before gating on them (avoid inventing the ≥95 target without a real baseline, per `AGENTS.md` grounding rule)
  - Confirm axe-core integration catches known issue classes not covered by `check-a11y.mjs`
  - Confirm CI runtime increase stays within acceptable pipeline duration
- **Acceptance Criteria**:
  - Job runs on every PR (not `if: false`) and reports actual Lighthouse scores as a CI check
  - Threshold is set from a real first-run baseline, documented with its source run ID
  - Job either blocks merge on regression below baseline, or is explicitly marked informational-only with a stated reason

### FR-011: Enforce CSP/security headers at the actual deploy target
- **Description**: Since GitHub Pages (the confirmed real deploy target per `deploy.yml`) does not honor `public/_headers`, either (a) front the site with Cloudflare/Netlify as the header comment suggests, or (b) inject security headers via a `<meta http-equiv>` fallback plus a documented compensating control, or (c) migrate deploy target.
- **Why It Matters**: `SECURITY.md` and `docs/06-governance/SECURITY_ARCHITECTURE.md` both cite CSP/security headers as an implemented control, but the control is currently inert in production — a real, verifiable gap between claimed and actual security posture.
- **Verification Evidence**: `public/_headers`'s own comment states "GitHub Pages does not apply custom headers"; `deploy.yml` full read confirms `actions/deploy-pages@v4` targets GitHub Pages directly, with no CDN/proxy layer in the workflow.
- **Evidence IDs**: E-013, E-016
- **Priority**: P1
- **Category**: Security
- **ROI Score**: 5/10 — trust/UX (15%) and risk (20%) weighted value; no direct revenue impact
- **Risk Score**: 6/10 — security-relevant (25% weight); migrating deploy targets carries moderate migration risk (15%) if that path is chosen
- **Dependencies**: Decision required on which of the 3 remediation paths to take before implementation begins
- **Competitive Reference**: Standard practice for any production site claiming CSP/HSTS enforcement (verified via browser dev tools response headers)
- **Security/Privacy Impact**: Directly closes an XSS/clickjacking mitigation gap; currently the site has zero enforced CSP despite documenting one
- **Rollout Readiness**: Medium
- **Validation Gates**:
  - Browser network-tab inspection of the live production site confirms headers are actually present in HTTP responses (not just in a repo file)
  - Security review confirms the chosen CSP policy doesn't break the AI widget's inline `<script is:inline>` usage (current CSP allows `'unsafe-inline'` for scripts — should be tightened if feasible)
  - Regression test confirms no page functionality breaks under the enforced policy
- **Acceptance Criteria**:
  - A `curl -I https://agentx2.ai` (or equivalent) against the live production site shows the documented headers actually present
  - CSP `script-src` moves away from `'unsafe-inline'` where feasible, or the risk is explicitly accepted and documented with a reason
  - `docs/06-governance/SECURITY_ARCHITECTURE.md` is updated to state the true enforcement mechanism (CDN/proxy name), not just the header values

### FR-012: Replace regex-based secret scanning with a real secret-scanning tool
- **Description**: Replace the 3-pattern inline regex (`AKIA...`, PEM headers, `sk-...`) in `ci.yml`/`security.yml` with gitleaks, trufflehog, or GitHub Advanced Security secret scanning.
- **Why It Matters**: `SECURITY.md` and `AGENTS.md` both claim "secret scanning" as an enforced control, but the actual implementation only catches 3 narrow credential shapes — any other API key format (Azure, GCP, Stripe, JWT, database connection strings) would pass through undetected.
- **Verification Evidence**: Full read of both `ci.yml` and `security.yml` shows identical, hand-rolled `git grep -nE` regex with exactly 3 alternatives; Grep for `gitleaks|detect-secrets` across the whole repo returned zero implementation matches (doc-mentions only).
- **Evidence IDs**: E-011, E-012, E-026
- **Priority**: P1
- **Category**: Security/CI
- **ROI Score**: 5/10 — risk-weighted value (20%) is the primary driver
- **Risk Score**: 3/10 — low complexity (well-documented tools with GitHub Actions), no production blast radius
- **Dependencies**: None
- **Competitive Reference**: GitHub secret scanning (referenced in `KEY_MANAGEMENT.md`'s own sources list but not actually enabled/configured), gitleaks Action
- **Security/Privacy Impact**: Directly improves credential-leak detection coverage from ~3 patterns to hundreds of known secret formats
- **Rollout Readiness**: High
- **Validation Gates**:
  - Tool run against full git history (not just current tree) to catch any historical accidental commits
  - False-positive rate reviewed before making the check blocking
  - Confirm the tool's ruleset covers at minimum: cloud provider keys, JWT tokens, database connection strings, generic high-entropy strings
- **Acceptance Criteria**:
  - `ci.yml` and `security.yml` invoke the chosen tool instead of the inline regex
  - A test commit with a deliberately fake-but-shaped secret (e.g., a dummy Stripe test key) is caught and blocks CI in a dry run
  - Existing 3 regex patterns' detection coverage is a strict subset of the new tool's coverage (no regression)

### FR-013: Implement SBOM generation in CI
- **Description**: Add a Software Bill of Materials generation step (e.g., `npm sbom` / Syft) to `ci.yml` or `security.yml`, published as a build artifact.
- **Why It Matters**: `docs/08-knowledge/adr/ADR-0003-otel-genai-observability.md` and other governance docs invoke supply-chain-security language (SLSA, provenance) as part of the stated security posture, but zero SBOM is currently generated anywhere.
- **Verification Evidence**: Grep for `sbom|provenance|trivy|attest|cosign|slsa` across `docs/` found only prose references; no matching step exists in any of the 3 real workflow files (confirmed via full read of all 3).
- **Evidence IDs**: E-011, E-012, E-013, E-026
- **Priority**: P2
- **Category**: Supply Chain
- **ROI Score**: 3/10 — primarily compliance/risk value (20%/5% weights), low direct revenue impact for a marketing site
- **Risk Score**: 2/10 — low complexity, standard tooling, no blast radius
- **Dependencies**: None
- **Competitive Reference**: SLSA v1.2 provenance requirements, GitHub's native dependency-graph/SBOM export
- **Security/Privacy Impact**: Improves auditability of the dependency tree; supports future compliance requests (SOC2-class, already flagged `[UNVERIFIED]` in `COMPLIANCE.md`)
- **Rollout Readiness**: High
- **Validation Gates**:
  - SBOM format validated (SPDX or CycloneDX) against a standard schema validator
  - Confirm SBOM accurately reflects `package-lock.json`'s dependency tree
  - Confirm generation step doesn't meaningfully slow CI runtime
- **Acceptance Criteria**:
  - Every CI run produces a downloadable SBOM artifact
  - SBOM format is SPDX or CycloneDX compliant
  - `docs/06-governance/COMPLIANCE.md` is updated to reference the new SBOM artifact as evidence toward its currently-`[UNVERIFIED]` compliance claims

### FR-014: Build a live-data Mission Control dashboard (or clearly label it as a demo)
- **Description**: Either wire `src/pages/mission-control.astro`'s KPI tabs to real data sources (billing, CRM, agent-run logs) as its own labels imply ("connect billing", "connect CRM"), or relabel the page as an explicit product demo/mockup so visitors aren't misled.
- **Why It Matters**: The page currently renders entirely static placeholder values (`$—`, "live", "tracked", "passing") styled as if they were real metrics — this is a transparency/trust risk if any visitor (especially a prospective enterprise client evaluating "governed AI") believes it reflects actual operations.
- **Verification Evidence**: Full read of `mission-control.astro` lines 1-70 shows all 4 tabs' KPI arrays are hardcoded literals with no data-fetching code, API call, or environment-driven value.
- **Evidence IDs**: E-018
- **Priority**: P1
- **Category**: Trust/UX
- **ROI Score**: 6/10 — trust/UX weight (15%) is high given this is explicitly marketed as proof of the company's own "governed AI" claims; some revenue risk if perceived as misleading
- **Risk Score**: 3/10 — low complexity for the relabeling path; higher (6-7/10) if pursuing real data-source integration
- **Dependencies**: Real-data path depends on FR-002/FR-004 and actual billing/CRM integrations existing (none do today)
- **Competitive Reference**: Backstage scorecards / Datadog dashboards (real data) vs. clearly-labeled product-tour mockups (e.g., typical SaaS marketing demo pages)
- **Security/Privacy Impact**: None for the relabeling path; real-data path would introduce new data-sensitivity considerations (billing/CRM data exposure)
- **Rollout Readiness**: High (relabeling path) / Low (live-data path)
- **Validation Gates**:
  - Legal/marketing review confirms the chosen framing (demo vs. live) doesn't overstate capability
  - If pursuing live data, confirm access-control exists before any real billing/CRM data is rendered publicly
  - User testing confirms the demo/mockup framing is unambiguous to visitors
- **Acceptance Criteria**:
  - Page either displays a clear "Illustrative demo — not live data" label, or displays genuinely live values sourced from a real integration
  - `tests/build-output.test.mjs` continues to pass (route still builds)
  - No KPI value that looks like a real number (e.g., a specific dollar figure) is shown without a data-source disclosure

### FR-015: Implement actual RBAC/ABAC for the future private platform
- **Description**: Before any endpoint from `openapi.yaml` ships, implement the role-based/attribute-based access control described in `docs/06-governance/SECURITY_ARCHITECTURE.md`.
- **Why It Matters**: `openapi.yaml` declares a `bearerAuth` security scheme but there is no authorization layer specified beyond authentication — without RBAC/ABAC, any authenticated caller could access any resource.
- **Verification Evidence**: Grep for `rbac` across `docs/` found only prose in `SECURITY_ARCHITECTURE.md`; zero implementation of any authorization middleware exists (no backend exists at all yet).
- **Evidence IDs**: E-017, E-025
- **Priority**: P2 (scoped to "when the private platform is built," not urgent for the current static site)
- **Category**: Security/Platform
- **ROI Score**: 4/10 — risk-weighted value only relevant once a backend ships; no current revenue impact
- **Risk Score**: 6/10 — security-critical (25% weight) once relevant, moderate complexity to design correctly
- **Dependencies**: Blocked entirely on a backend/API existing first (none does)
- **Competitive Reference**: Auth0/Clerk RBAC, standard enterprise SaaS authorization patterns
- **Security/Privacy Impact**: Prevents privilege escalation and unauthorized data access once any private-platform data exists
- **Rollout Readiness**: Low (no backend exists to attach this to yet)
- **Validation Gates**:
  - Threat model review confirms role/attribute boundaries match the actual data sensitivity of each `openapi.yaml` resource
  - Penetration test confirms no horizontal privilege escalation between tenants/roles
  - Confirm audit logging (FR-016) captures all authorization decisions
- **Acceptance Criteria**:
  - Every `openapi.yaml` endpoint has a documented required role/scope
  - Automated test suite confirms unauthorized roles receive 403, not 200, for restricted resources
  - Authorization logic is centralized in one reviewable module, not duplicated per-endpoint

### FR-016: Server-side, tamper-evident audit logging
- **Description**: Implement a real audit-log mechanism (append-only, server-side) capturing agent actions, model calls, and any future authenticated API request — distinct from the existing client-side marketing analytics (`ax2.track()`).
- **Why It Matters**: `docs/06-governance/AI_GOVERNANCE.md` lists "audit" as a governance domain and `docs/07-operations/FRESHNESS_POLICY.md` references provenance tracking, but the only logging mechanism that exists today is client-side, browser-controlled, and trivially bypassable — not a governance-grade audit trail.
- **Verification Evidence**: Full read of `Analytics.astro` confirms it is a client-side `window.ax2` object with no server persistence; no server-side logging code exists anywhere (no backend exists at all).
- **Evidence IDs**: E-008, E-020
- **Priority**: P2
- **Category**: Observability/Governance
- **ROI Score**: 4/10 — risk/compliance-weighted value (20%/5%), relevant primarily once agentic/backend features exist
- **Risk Score**: 4/10 — moderate complexity, no blast radius until real actions exist to log
- **Dependencies**: Depends on FR-001/FR-002 (something worth auditing) and a backend existing
- **Competitive Reference**: Temporal's event history / audit trail, Datadog audit logs
- **Security/Privacy Impact**: Directly supports repudiation defense (STRIDE) and any future compliance audit (SOC2-class currently `[UNVERIFIED]`)
- **Rollout Readiness**: Low
- **Validation Gates**:
  - Confirm log entries are append-only / tamper-evident (e.g., hash-chained or written to a WORM-style store)
  - Confirm PII redaction policy is applied before persisting any user-submitted content
  - Confirm retention policy is defined and matches any applicable compliance requirement
- **Acceptance Criteria**:
  - Every authenticated API call (once FR-015's backend exists) produces exactly one audit record
  - Audit records are queryable by actor, action, and timestamp
  - Audit log is verified immutable via a test that attempts (and fails) to modify a past entry

### FR-017: Human-in-the-loop approval gate implementation
- **Description**: Build the actual code-level enforcement of the 4 autonomy tiers (Manual/Suggest/Act-with-approval/Autonomous) defined in `docs/06-governance/HUMAN_IN_THE_LOOP.md` — e.g., a middleware/decorator that pauses execution and requests approval for any action tagged Tier 2+.
- **Why It Matters**: This is a stated non-negotiable in `AGENTS.md` §0.7 ("respect human gates for irreversible/high-risk actions"), but with no autonomous agent execution running anywhere in this repo, there is currently nothing to gate — the policy exists with zero enforcement mechanism.
- **Verification Evidence**: `HUMAN_IN_THE_LOOP.md` full read (via sub-agent) confirms 4 named tiers with examples but no corresponding code; no autonomous execution loop exists anywhere in `src/` or elsewhere.
- **Evidence IDs**: E-020
- **Priority**: P2
- **Category**: AI Governance
- **ROI Score**: 4/10 — risk-weighted (20%), relevant once any autonomous action exists
- **Risk Score**: 5/10 — moderate complexity to design a correct approval-gate abstraction
- **Dependencies**: Depends on any actual autonomous agent action existing first (none does today)
- **Competitive Reference**: LangGraph's `interrupt()` human-in-the-loop primitive, Temporal signal-based approvals
- **Security/Privacy Impact**: Prevents irreversible actions (e.g., sending an email, making a payment) from executing without sign-off
- **Rollout Readiness**: Low
- **Validation Gates**:
  - Confirm every Tier 2+ action type is enumerated and mapped to a real approval workflow (Slack/email/dashboard)
  - Confirm the gate fails closed (blocks by default) if the approval mechanism itself is unreachable
  - Chaos test confirms an approval timeout does not silently auto-approve
- **Acceptance Criteria**:
  - At least one real action type is demonstrably gated end-to-end (request → pause → human approves/denies → resumes or aborts)
  - Automated test confirms a denied approval prevents the action from executing
  - Tier classification for each action type is documented and reviewable

### FR-018: Real E2E test coverage (Playwright)
- **Description**: Add the Playwright E2E test suite named in `docs/04-quality/TESTING_STRATEGY.md` (~10% of the target test pyramid) — covering at minimum navigation, form submission (contact page), and the AI widget's open/close/send interaction.
- **Why It Matters**: The existing test suite (`tests/structure.test.mjs`, `tests/build-output.test.mjs`) only checks file/route existence and static content patterns — it cannot catch a broken interactive element (e.g., if the AI widget's JS throws an error, no test would fail).
- **Verification Evidence**: Full read of both existing test files confirms neither uses a browser automation tool; Grep for `playwright` across the whole repo (package.json, package-lock.json included in the broader keyword grep) returned no dependency.
- **Evidence IDs**: E-009, E-033
- **Priority**: P2
- **Category**: Quality/Testing
- **ROI Score**: 4/10 — velocity (15%) and trust/UX (15%) value from catching interactive regressions before users do
- **Risk Score**: 3/10 — low complexity, standard tooling, no production blast radius
- **Dependencies**: None
- **Competitive Reference**: Standard Playwright/Cypress E2E adoption in most production web apps
- **Security/Privacy Impact**: None
- **Rollout Readiness**: High
- **Validation Gates**:
  - Confirm E2E suite runs headlessly in CI within an acceptable time budget
  - Confirm tests cover the specific interactive elements identified as untested (AI widget, contact form, ROI calculator inputs)
  - Confirm flaky-test quarantine policy is defined (per `docs/04-quality/TESTING_STRATEGY.md`'s own stated principle)
- **Acceptance Criteria**:
  - At least 5 E2E test scenarios exist covering navigation, the AI widget interaction flow, and the ROI calculator
  - `npm run ci` is updated to include the new E2E step
  - Test suite is added to the existing `tests/` directory or a new `e2e/` directory with matching npm script

### FR-019: Contact/lead-capture form backend
- **Description**: Implement an actual form-submission handler for `src/pages/contact.astro` (currently, being a static Astro page with no confirmed backend, form submission has no verified server-side handler in this repo).
- **Why It Matters**: `openapi.yaml` defines a `/leads` endpoint intended for exactly this purpose ("Capture a lead (e.g., from the website contact form)"), but no implementation connects the two — the contact form's actual submission behavior is unverified/unimplemented in this repo.
- **Verification Evidence**: `openapi.yaml` `/leads` POST operation confirmed via read (lines 49-60); no server code or serverless function exists anywhere in the repo to implement it; static Astro sites without an adapter cannot execute server-side form handlers by default.
- **Evidence IDs**: E-005, E-017
- **Priority**: P1
- **Category**: Core Product/Conversion
- **ROI Score**: 8/10 — direct revenue/adoption impact (25% weight) since lead capture is the primary conversion mechanism for a consulting firm's marketing site
- **Risk Score**: 5/10 — moderate complexity (needs a serverless function or third-party form service), moderate migration consideration if Astro's static-only config needs an adapter added
- **Dependencies**: May require adding an Astro server adapter (currently `astro.config.mjs` has no `output: 'server'` or adapter configured) or a third-party form service (Formspree, Netlify Forms)
- **Competitive Reference**: Standard SaaS marketing-site lead capture (HubSpot forms, Netlify Forms)
- **Security/Privacy Impact**: Introduces PII collection (name/email/company) requiring the privacy-policy disclosures already drafted at `/privacy/`; needs spam/bot protection (CAPTCHA or honeypot)
- **Rollout Readiness**: Medium
- **Validation Gates**:
  - Confirm submitted leads are actually persisted/delivered somewhere reviewable (CRM, email, or database)
  - Confirm spam/bot protection is in place before public launch
  - Confirm form validation matches `openapi.yaml`'s `createLead` schema exactly
- **Acceptance Criteria**:
  - Submitting the contact form results in a verifiable lead record (email notification, CRM entry, or database row)
  - Form rejects invalid input matching the documented schema (e.g., missing required fields)
  - A test submission is traceable end-to-end within 5 minutes of submission

### FR-020: Fix dead-reference doc paths (`docs/plans/`, `docs/releases/`, `docs/reviews/`)
- **Description**: Multiple existing documents reference paths that do not exist in the repo — `docs/plans/master-build-plan.md`, `docs/plans/rollback-plan.md`, `docs/releases/release-notes.md`, `docs/releases/release-readiness-report.md`, and `docs/reviews/security-review.md` (the last referenced directly in a comment inside `.github/workflows/security.yml`). Either create these files or remove the dead references.
- **Why It Matters**: `AGENTS.md` §Documentation rules states "no orphans" and requires every doc reachable within 3 clicks — dead links directly violate this stated non-negotiable and would mislead anyone (human or agent) following a citation into a 404.
- **Verification Evidence**: Grep matches for these exact paths appeared inside `security.yml`'s comment header and inside doc-content Grep hits for migration/backup/scheduler keywords, but a direct Glob for `docs/plans/**` and `docs/releases/**` returned zero files.
- **Evidence IDs**: E-012, E-027
- **Priority**: P2
- **Category**: Documentation
- **ROI Score**: 3/10 — velocity/trust value (15%), low direct revenue impact
- **Risk Score**: 2/10 — trivial to fix, no code blast radius
- **Dependencies**: None
- **Competitive Reference**: Standard docs-linting practice (link-checker as already partially implemented via `scripts/check-doc-links.mjs`)
- **Security/Privacy Impact**: None
- **Rollout Readiness**: High
- **Validation Gates**:
  - Run `scripts/check-doc-links.mjs` (already exists) and confirm it actually catches these specific dead references — if it doesn't, that script itself has a gap worth noting
  - Confirm every remaining cross-reference in the repo resolves to a real file after remediation
  - Peer review confirms no new orphaned doc is created in the process of filling gaps
- **Acceptance Criteria**:
  - `docs/plans/master-build-plan.md`, `docs/plans/rollback-plan.md`, `docs/releases/release-notes.md`, `docs/releases/release-readiness-report.md`, and `docs/reviews/security-review.md` either exist as real files or all referencing comments/docs are updated to remove the dead path
  - `npm run validate:docs` passes with zero broken internal doc links
  - No new document is added without being linked from `docs/INDEX.md` (per the ≤3-click rule)

### FR-021: Reconcile CI_CD.md's documented workflows with actual workflow files
- **Description**: `docs/04-quality/CI_CD.md` names 5 workflows (`ci`, `deploy`, `security`, `freshness`, `eval-trend`) but only 3 exist (`ci.yml`, `deploy.yml`, `security.yml`). Either implement `freshness.yml` and `eval-trend.yml`, or update the doc to reflect only what's shipped.
- **Why It Matters**: `docs/07-operations/FRESHNESS_POLICY.md` (referenced extensively throughout the repo, with every doc carrying a `review_cadence`/`staleness_threshold` front-matter pair) implies an automated staleness scan runs daily — but no such automation exists, meaning every doc's freshness claim is currently manually maintained, not automatically enforced as documented.
- **Verification Evidence**: Full read of `CI_CD.md` §3 lists all 5 workflow names with trigger/purpose; Glob of `.github/workflows/*` confirms only 3 files exist.
- **Evidence IDs**: E-014
- **Priority**: P1
- **Category**: Documentation/CI
- **ROI Score**: 5/10 — velocity (15%) and trust (15%) value from having documentation staleness actually caught automatically, given nearly 100 docs carry freshness metadata that nothing currently checks
- **Risk Score**: 3/10 — low complexity (scheduled workflow + a script comparing `last_verified` dates to `staleness_threshold`), no blast radius
- **Dependencies**: None
- **Competitive Reference**: Backstage TechDocs staleness indicators, standard docs-freshness bots
- **Security/Privacy Impact**: None
- **Rollout Readiness**: High
- **Validation Gates**:
  - Confirm the freshness scanner correctly parses every doc's front-matter `last_verified`/`staleness_threshold` fields (nearly 100 files to validate against)
  - Dry run confirms it flags at least the docs already past their stated review cadence (several are already past their `next review` date as of 2026-07-03, e.g., AGENTS.md's 2026-07-12 is not yet due, but others may be)
  - Confirm false-positive rate is low before making it a blocking check
- **Acceptance Criteria**:
  - `freshness.yml` workflow exists and runs on the daily schedule already documented in `CI_CD.md`
  - Workflow output lists every doc past its staleness threshold
  - `CI_CD.md` is corrected to match whichever workflows are actually implemented (no phantom workflow names remain)

### FR-022: Cost-tracking instrumentation for any future model usage
- **Description**: Implement actual token/cost metering (not the static "Token cost — tracked" placeholder in Mission Control) once FR-001/FR-002 introduce real model calls.
- **Why It Matters**: `docs/01-architecture/MODEL_STRATEGY.md` and the Mission Control "AI" tab both reference cost tracking as a governance concern, but literally no metering code exists because no model is actually called yet — this is a foreseeable gap that should be designed in from FR-001's inception rather than retrofitted.
- **Verification Evidence**: `mission-control.astro` "AI" tab KPI `{ label: 'Token cost', value: 'tracked', sub: 'per outcome' }` is a static literal, not a computed/fetched value (confirmed via full read of the TABS array).
- **Evidence IDs**: E-018, E-023
- **Priority**: P2
- **Category**: AI Governance/Cost Controls
- **ROI Score**: 5/10 — opex value (10% weight) directly, plus risk-avoidance (20%) from preventing runaway model spend
- **Risk Score**: 3/10 — low-moderate complexity, contained blast radius
- **Dependencies**: Depends entirely on FR-001/FR-002 shipping first
- **Competitive Reference**: LangSmith/Langfuse cost dashboards, OpenAI usage API integration
- **Security/Privacy Impact**: None directly; supports budget-based circuit-breaking to prevent cost-based DoS from malicious repeated widget use
- **Rollout Readiness**: Low (blocked on FR-001)
- **Validation Gates**:
  - Confirm cost calculation matches the actual provider's published pricing per token/request
  - Confirm a budget-alert threshold is defined and testable
  - Confirm the metric updates in near-real-time, not on a stale batch delay inconsistent with "live" framing
- **Acceptance Criteria**:
  - Mission Control's "Token cost" KPI reflects an actual computed value from real usage, or the label is changed to avoid implying it's live before it is
  - A budget-threshold alert fires in a test scenario simulating high usage
  - Cost data is queryable per page/agent, not just an aggregate

### FR-023: Prompt-injection and output-validation guardrails for the AI widget
- **Description**: Once FR-001 introduces a real model call, add the guardian-model screening (`granite4.1-guardian`/`llama-guard3`, named in `MODEL_STRATEGY.md`) or an equivalent input/output validation layer before the model's response reaches the user.
- **Why It Matters**: `docs/06-governance/RESPONSIBLE_AI.md` claims "guardian models screen inputs/outputs at runtime" in the present tense, but zero guardian integration exists because zero model integration exists — this must be designed alongside FR-001, not bolted on afterward, to avoid shipping an unguarded LLM surface on a public-facing consulting site.
- **Verification Evidence**: Sub-agent full read of `RESPONSIBLE_AI.md` confirms the active-tense claim; no corresponding code exists anywhere (consistent with E-007's finding that no model is called at all today).
- **Evidence IDs**: E-007, E-020, E-023
- **Priority**: P1
- **Category**: AI Governance/Security
- **ROI Score**: 5/10 — trust/risk weighted (15%/20%), directly protects brand reputation on a public-facing AI feature
- **Risk Score**: 6/10 — security-relevant (25% weight) since an unguarded public LLM endpoint is a known prompt-injection/abuse target
- **Dependencies**: Must ship alongside or immediately after FR-001
- **Competitive Reference**: OWASP LLM Top 10 mitigations, Llama Guard / NeMo Guardrails patterns
- **Security/Privacy Impact**: Directly mitigates prompt injection, data exfiltration attempts, and off-brand/harmful output on a public page
- **Rollout Readiness**: Low (blocked on FR-001)
- **Validation Gates**:
  - Red-team test with known prompt-injection payloads confirms the guardrail catches/blocks them
  - Confirm legitimate queries are not over-blocked (false-positive rate check)
  - Confirm guardrail latency doesn't materially degrade the widget's responsiveness
- **Acceptance Criteria**:
  - At least 10 known prompt-injection test cases are blocked or safely deflected
  - Guardrail decision (pass/block) is logged (feeding into FR-016's audit log)
  - Widget gracefully informs the user when a request is blocked, without leaking internal guardrail logic

### FR-024: Data retention and deletion policy implementation
- **Description**: Implement an actual mechanism to honor data-subject deletion requests for any data collected via the future `/leads` endpoint or the client-side analytics queue, per whatever policy `docs/06-governance/COMPLIANCE.md` ultimately specifies once its `[UNVERIFIED]` items are resolved.
- **Why It Matters**: `COMPLIANCE.md` explicitly flags EU AI Act applicability as unverified — if any EU visitor's data is captured via a future lead-capture flow (FR-019), a real deletion/retention mechanism will be a compliance requirement, and none exists today because no persistent user data store exists yet.
- **Verification Evidence**: Sub-agent read of `COMPLIANCE.md` confirms explicit `[UNVERIFIED]` flags for EU AI Act and SOC2-class certification; no database or persistent store exists anywhere in this repo today (static site only).
- **Evidence IDs**: E-022
- **Priority**: P2
- **Category**: Compliance/Privacy
- **ROI Score**: 3/10 — compliance-weighted (5%) plus risk (20%), no direct revenue impact
- **Risk Score**: 5/10 — compliance-relevant, moderate complexity once real data storage exists
- **Dependencies**: Depends entirely on FR-019 (lead capture) creating a data store to govern in the first place
- **Competitive Reference**: Standard GDPR/CCPA-compliant SaaS data-subject-request tooling
- **Security/Privacy Impact**: Directly required if EU/CA visitors' PII is ever stored
- **Rollout Readiness**: Low (blocked on FR-019)
- **Validation Gates**:
  - Legal review confirms which specific regulations apply once the founder/counsel resolves the `[UNVERIFIED]` flags (per `COMPLIANCE.md`'s own stated process)
  - Confirm a deletion request is fully honored across every data store within a defined SLA
  - Confirm retention periods are documented and enforced automatically (not manual)
- **Acceptance Criteria**:
  - A test deletion request removes the subject's data from 100% of stores within the documented SLA
  - Retention policy is enforced by an automated job, not a manual process
  - `docs/06-governance/COMPLIANCE.md`'s `[UNVERIFIED]` flags are resolved to a definitive stance with counsel sign-off cited

### FR-025: Rollback automation for the deploy pipeline
- **Description**: Implement an automated rollback step in `.github/workflows/deploy.yml` (or a companion workflow) rather than relying on the manual "rollback runbook" described in docs.
- **Why It Matters**: `docs/DOCUMENTATION_AUDIT.md` and `IMPLEMENTATION_PLAN.md` (T-019) both reference a rollback plan/runbook as a deliverable, and `docs/07-operations/DEPLOYMENT.md` §4 is cited as covering "rollback plan" — but the actual `deploy.yml` workflow (full read) has no rollback step, no versioned-release tagging, and no automated revert-on-failure mechanism.
- **Verification Evidence**: Full read of `deploy.yml` shows a linear build→deploy pipeline with no rollback job, no smoke test gating the deploy step, and no artifact retention beyond the single `actions/upload-pages-artifact@v3` step.
- **Evidence IDs**: E-013
- **Priority**: P2
- **Category**: Operations/CI
- **ROI Score**: 4/10 — opex (10%) and risk (20%) weighted value, preventing prolonged outages from a bad deploy
- **Risk Score**: 3/10 — moderate complexity, well-understood pattern (GitHub Pages supports re-deploying a prior artifact)
- **Dependencies**: None
- **Competitive Reference**: Standard blue/green or previous-artifact rollback patterns used in most CD pipelines
- **Security/Privacy Impact**: None directly; reduces downtime/exposure window if a bad deploy introduces a security regression
- **Rollout Readiness**: High
- **Validation Gates**:
  - Test a simulated bad deploy and confirm rollback restores the prior working version within a defined time budget
  - Confirm rollback doesn't require manual intervention for the common case
  - Confirm a smoke test runs post-deploy to auto-trigger rollback on failure
- **Acceptance Criteria**:
  - A `workflow_dispatch`-triggerable rollback job exists and successfully restores the immediately prior deployed artifact
  - Post-deploy smoke test (e.g., checking `/` and `/health` if FR-019's backend exists) gates promotion
  - Rollback event is logged/notified to the team

### FR-026: Resolve the unverified brand-asset licensing (R-007)
- **Description**: Verify and document the actual licensing status of `logo.jpg`/`logo.svg`, currently tracked as an open item since the earliest snapshot of the repo.
- **Why It Matters**: This is the single most persistent open item across the repo's own self-reported artifacts (`RISK_REGISTER.md` R-007, `LICENSE.md`, `CURRENT_STATE.md`, `DOCUMENTATION_AUDIT.md` all reference it as unresolved) — shipping a public site with unverified brand-asset rights is a concrete legal risk the repo's own governance process has flagged repeatedly without resolving.
- **Verification Evidence**: `LICENSE.md` full read explicitly states "Brand asset licensing is tracked as risk R-007... pending verification"; this same open item appears in `RISK_REGISTER.md`, `CURRENT_STATE.md` §5, and `DOCUMENTATION_AUDIT.md` — a genuinely persistent, multiply-corroborated open item, not a one-off doc claim.
- **Evidence IDs**: E-021
- **Priority**: P1
- **Category**: Legal/Compliance
- **ROI Score**: 3/10 — primarily risk-avoidance value (20% weight), no direct feature/revenue impact
- **Risk Score**: 4/10 — compliance-relevant but low technical complexity (this is a legal-verification task, not an engineering task)
- **Dependencies**: Requires input from whoever originally created/sourced the logo asset
- **Competitive Reference**: Standard brand-asset chain-of-title verification practiced by any company publishing a public trademark
- **Security/Privacy Impact**: None (pure legal/IP risk, not a security concern)
- **Rollout Readiness**: High (this is a verification task, not a build task)
- **Validation Gates**:
  - Legal counsel confirms chain of title or original creation for the logo asset
  - Confirm the resolution updates `RISK_REGISTER.md` R-007's status field to something other than "Open"
  - Cross-reference all 4 documents that reference this open item to ensure consistent resolution
- **Acceptance Criteria**:
  - `RISK_REGISTER.md` R-007 status changes from "Open" to a definitive resolved state with evidence cited
  - `LICENSE.md` no longer flags the asset as "pending verification"
  - No other doc in the repo still references this as an open/unverified item after the fix

### FR-027: Astro server adapter decision and configuration
- **Description**: `astro.config.mjs` currently has no `output: 'server'` or `output: 'hybrid'` mode and no adapter configured — a required prerequisite decision before FR-019 (lead capture) or any other server-rendered/API functionality can be implemented.
- **Why It Matters**: This is a concrete, blocking architectural gap: `openapi.yaml` describes a governed API, but Astro's current config (`build: { format: 'directory' }`, no adapter) only supports pure static output — the repo cannot serve any of `openapi.yaml`'s endpoints without first making this configuration change.
- **Verification Evidence**: Full read of `astro.config.mjs` confirms only `sitemap()` integration and static build settings; no `@astrojs/node`, `@astrojs/cloudflare`, `@astrojs/vercel`, or similar adapter package appears in `package.json`.
- **Evidence IDs**: E-004, E-003
- **Priority**: P1
- **Category**: Platform/Architecture
- **ROI Score**: 6/10 — high leverage (5% weight, but unblocks FR-019/FR-005/FR-015), directly enables the primary conversion mechanism
- **Risk Score**: 5/10 — migration-relevant (15% weight) since it changes the deploy model from pure-static GitHub Pages to something requiring server compute
- **Dependencies**: Blocks FR-019, FR-005, FR-015; may require a hosting migration away from GitHub Pages (which only serves static content) to a platform supporting SSR (Cloudflare Pages, Vercel, Netlify)
- **Competitive Reference**: Standard Astro hybrid-rendering adoption pattern for sites needing both static marketing pages and dynamic API routes
- **Security/Privacy Impact**: Expands the attack surface from "static files only" to "server compute" — needs the security controls in FR-005/FR-011/FR-012 in place before going live
- **Rollout Readiness**: Low
- **Validation Gates**:
  - Architecture review confirms the chosen adapter/hosting target supports all required `openapi.yaml` operations
  - Confirm existing 18 static pages continue to build and serve correctly after adding server capability (no regression)
  - Load test confirms the new server-rendered paths meet the same performance budgets as the static pages
- **Acceptance Criteria**:
  - `astro.config.mjs` specifies a concrete `output` mode and adapter
  - All 18 existing static pages verified unchanged in build output after the config change (via `tests/build-output.test.mjs`)
  - At least one new server-rendered API route (e.g., `/api/health` matching `openapi.yaml`'s `/health`) is live and passing a smoke test

### FR-028: Formalize the "todo"-vs-"done" contradiction resolution process
- **Description**: Add a lightweight, automated check (e.g., a script in `scripts/`) that cross-references claims in `BUILD_REPORT.md`/`CURRENT_STATE.md` against actual file existence, failing CI if a doc claims a file/capability exists that cannot be found on disk.
- **Why It Matters**: This exact class of error (a "done" claim contradicting a "todo" status for the same work, per E-019) is exactly the kind of doc-vs-reality drift `AGENTS.md`'s "ground everything" principle exists to prevent, but there is currently no automated mechanism catching it — it was only caught in this review via manual cross-referencing.
- **Verification Evidence**: E-019's direct comparison of `BUILD_REPORT.md` and `IMPLEMENTATION_PLAN.md` (both dated 2026-06-12) shows a real, unresolved contradiction that existing `scripts/check-doc-links.mjs`/`check-orphans.mjs` (which only check link integrity, not claim-vs-file consistency) would not catch.
- **Evidence IDs**: E-019
- **Priority**: P2
- **Category**: Documentation/Process Tooling
- **ROI Score**: 4/10 — velocity/trust value (15%/15%) from preventing future doc-drift incidents like this one
- **Risk Score**: 2/10 — low complexity (a build-manifest-diffing script), no production blast radius
- **Dependencies**: None
- **Competitive Reference**: No direct competitive analog found; closest pattern is Backstage's entity-validation checks or a general "docs-as-code" CI linter
- **Security/Privacy Impact**: None
- **Rollout Readiness**: High
- **Validation Gates**:
  - Script correctly identifies the known E-019 contradiction as a regression test case
  - Confirm the script's file-existence check list is maintained alongside `BUILD_REPORT.md`'s own "what this run created" table
  - Confirm false-positive rate is low (doesn't flag legitimately-planned-but-not-yet-built items incorrectly)
- **Acceptance Criteria**:
  - New script added to `scripts/` and wired into `npm run validate`
  - Script fails CI when a `BUILD_REPORT.md`-style "created this run" claim has no corresponding file
  - The specific FR-006/E-019 contradiction, once fixed, passes this new check

### FR-029: Programmatic freshness-threshold enforcement
- **Description**: Build the actual staleness-detection logic implied by every doc's `review_cadence`/`staleness_threshold` front-matter fields (nearly 100 files carry these), rather than relying on manual review.
- **Why It Matters**: `docs/07-operations/FRESHNESS_POLICY.md` is referenced by virtually every document in the repo as the governing mechanism for keeping content current, but with no `freshness.yml` workflow (confirmed absent, FR-021) and no dedicated script parsing these fields, the policy is currently aspirational for the entire documentation corpus.
- **Verification Evidence**: Every sampled doc (20+ read directly) carries `review_cadence`/`staleness_threshold`/`next review` fields in front-matter; Glob of `.github/workflows/*` confirms no workflow exists to act on them; no script under `scripts/` parses front-matter for staleness.
- **Evidence IDs**: E-014, E-020
- **Priority**: P2
- **Category**: Documentation/Process Tooling
- **ROI Score**: 4/10 — velocity/trust value, directly closes a gap affecting the entire ~90-file docs corpus
- **Risk Score**: 2/10 — low complexity, no blast radius
- **Dependencies**: Overlaps significantly with FR-021 (could be implemented as part of the same `freshness.yml` workflow)
- **Competitive Reference**: Backstage TechDocs staleness badges, standard docs-as-code freshness bots
- **Security/Privacy Impact**: None
- **Rollout Readiness**: High
- **Validation Gates**:
  - Confirm the parser correctly reads all ~90+ docs' front-matter without error
  - Confirm it correctly flags any doc already past its `next review`/staleness date as of the check-run date
  - Confirm output is actionable (lists file + days overdue), not just a pass/fail
- **Acceptance Criteria**:
  - A script or workflow step programmatically lists every doc past its staleness threshold
  - Output is surfaced somewhere visible (CI annotation, issue, or dashboard)
  - At least one intentionally-backdated test doc is correctly flagged in a dry run

### FR-030: Reconcile PRD_AgentX2.md (historical) vs docs/PRD.md (canonical) duplication
- **Description**: `docs/DOCUMENTATION_AUDIT.md` itself notes `PRD_AgentX2.md` is "historical source" while `docs/PRD.md` is "canonical" — formalize this by either archiving/clearly marking `PRD_AgentX2.md` as deprecated/historical in its own front matter, or removing duplicated content to point solely to the canonical doc.
- **Why It Matters**: Maintaining two PRDs (one at root, one canonical under `docs/`) with an implicit but not enforced precedence creates a real risk that a future contributor (human or agent) edits or cites the wrong one, especially since `docs/09-roadmap/ROADMAP.md` cites `PRD_AgentX2.md` as its source rather than the canonical `docs/PRD.md`.
- **Verification Evidence**: `docs/DOCUMENTATION_AUDIT.md` full read explicitly labels `PRD_AgentX2.md` "Historical source; canonical PRD is docs/PRD.md" (score 90) while `docs/09-roadmap/ROADMAP.md` full read shows its own "Sources" table citing `PRD_AgentX2.md` directly, not `docs/PRD.md` — an internal inconsistency in which document downstream docs should actually cite.
- **Evidence IDs**: (documentation-audit finding, cross-referenced against direct reads of `ROADMAP.md` and `DOCUMENTATION_AUDIT.md`)
- **Priority**: P2
- **Category**: Documentation
- **ROI Score**: 2/10 — low direct value, mostly hygiene
- **Risk Score**: 2/10 — trivial fix, no blast radius
- **Dependencies**: None
- **Competitive Reference**: Standard "single source of truth" documentation practice
- **Security/Privacy Impact**: None
- **Rollout Readiness**: High
- **Validation Gates**:
  - Confirm no content in `docs/PRD.md` is missing something load-bearing that only exists in `PRD_AgentX2.md`
  - Confirm every doc citing `PRD_AgentX2.md` is updated to cite `docs/PRD.md` instead, or the historical doc is explicitly kept as an intentional archive with a clear "superseded by" banner
  - Confirm `scripts/check-doc-links.mjs` still passes after the change
- **Acceptance Criteria**:
  - `PRD_AgentX2.md` carries an explicit "Historical / superseded by docs/PRD.md" banner in its own content, not just in a separate audit doc
  - `docs/09-roadmap/ROADMAP.md`'s Sources table is updated to cite `docs/PRD.md`
  - No remaining doc in the repo cites `PRD_AgentX2.md` as an authoritative/canonical source without the historical caveat

## Prioritized Implementation Roadmap

- **Phase 1 (P0 — foundational AI capability, 0-4 weeks)**: FR-002 (model adapter) first, since it unblocks everything else AI-related; then FR-001 (real LLM widget) built directly on top of it, shipping together with FR-023 (guardrails) as a single reviewed unit so the public AI surface is never unguarded even briefly.
- **Phase 2 (P1 — trust, conversion, and security hardening, 4-10 weeks)**: FR-027 (Astro server adapter decision) unblocks FR-019 (lead capture) and FR-005/FR-015 (rate limiting/RBAC groundwork); in parallel, FR-011 (enforce CSP at the real host), FR-012 (real secret scanning), FR-010 (re-enable Lighthouse/a11y CI), FR-014 (Mission Control relabel-or-wire), and FR-026 (resolve the logo licensing item that's been open since the repo's first snapshot).
- **Phase 3 (P1/P2 — observability and governance follow-through, 10-16 weeks)**: FR-004 (OTel tracing) and FR-003 (eval harness) now that FR-001/FR-002 give them something real to instrument; FR-016 (audit logging) and FR-022 (cost tracking) layer on top; FR-021 (reconcile CI_CD.md workflows) and FR-029 (freshness enforcement) close the docs-automation gap.
- **Phase 4 (P2 — process/hygiene cleanup, ongoing/parallel-track)**: FR-006, FR-007, FR-008, FR-009, FR-013, FR-020, FR-025, FR-028, FR-030 are all low-risk, low-dependency items that can be picked up opportunistically by any contributor without blocking the AI/product-critical path; FR-017 (HITL gates) and FR-024 (data retention) remain correctly deferred until an actual autonomous action or persistent data store exists to govern.

## Top 5 Highest-ROI Features

| Rank | FR | ROI Score | Priority | One-line rationale |
|---|---|---|---|---|
| 1 | FR-001 | 9/10 | P0 | Closes the single biggest brand-credibility gap — the "AI" widget currently has no AI in it |
| 2 | FR-002 | 8/10 | P0 | Unblocks FR-001, FR-003, FR-004 simultaneously — highest leverage single investment |
| 3 | FR-019 | 8/10 | P1 | Lead capture is the actual revenue mechanism for a consulting firm's site and currently has no verified backend |
| 4 | FR-027 | 6/10 | P1 | Blocking architectural prerequisite for FR-019/FR-005/FR-015 — must be decided before those can start |
| 5 | FR-010 | 6/10 | P1 | Re-enables an already-built-but-disabled CI job, closing a stated non-negotiable (a11y/perf gates) cheaply |

## Validation Plan

Each FR's Validation Gates and Acceptance Criteria above are designed to be independently testable without requiring a full platform migration first. In aggregate: (1) every P0/P1 FR touching the AI widget (FR-001, FR-002, FR-023) must pass a red-team prompt-injection test batch and a fallback/degradation test before merge; (2) every FR touching CI/CD (FR-010, FR-012, FR-013, FR-021, FR-029) must demonstrate its new check actually fires against a deliberately-broken test fixture (a known-bad a11y violation, a fake secret, a stale-doc fixture) before being marked complete, proving the gate is real and not a false-green rubber stamp; (3) every FR introducing a backend (FR-005, FR-015, FR-016, FR-019, FR-027) must ship with its own smoke test wired into the existing `npm run gates`/`npm run ci` scripts so zero-regression enforcement (already a stated repo principle) actually covers the new surface; (4) documentation-only FRs (FR-006, FR-008, FR-009, FR-020, FR-026, FR-030) are validated by a follow-up run of this same review methodology confirming the specific contradiction/gap no longer reproduces.

## Executive Summary

Agentx2.ai is, in its currently shipped form, a well-built Astro static marketing site (18 pages, working CI, real telemetry with a genuine circuit breaker, no committed secrets) sitting underneath an unusually large and well-structured documentation corpus describing an ambitious AI-native consulting platform. The core finding of this review is a significant gap between that documented vision and verified running code: the flagship "AI" chat widget is a hardcoded keyword-matching bot with no model behind it, the "Mission Control" dashboard renders static placeholder KPIs, and governance capabilities described in the present tense — model routing/fallback, eval harness execution, OpenTelemetry GenAI tracing, human-in-the-loop approval gates, audit logging — have no corresponding implementation anywhere in the repository. Encouragingly, the repo's own artifacts partially self-report this: an internally-inconsistent pair of documents (`BUILD_REPORT.md` claiming completion vs. `IMPLEMENTATION_PLAN.md`'s all-"todo" work-breakdown, both dated the same day) and a risk register with 5 of 7 items still "Open" show the gap is a known, if not fully reconciled, condition rather than a hidden one. This review produced the full complement of 30 concrete, evidence-grounded feature requests spanning AI capability (FR-001 through FR-004, FR-022, FR-023), platform/security prerequisites (FR-005, FR-011, FR-012, FR-015, FR-019, FR-027), and documentation/process hygiene (FR-006 through FR-009, FR-020, FR-021, FR-026, FR-028 through FR-030), each traceable to a specific Evidence Ledger row confirming the gap was verified absent from code, not merely assumed. The highest-leverage next step is building the model adapter (FR-002) and wiring it into the AI widget (FR-001) together with output guardrails (FR-023), since nearly every other AI-governance FR in this list depends on a real model call existing to instrument, evaluate, or gate in the first place.
