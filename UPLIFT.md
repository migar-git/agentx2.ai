<!-- uplift:begin 2026-07 -->
# UPLIFT — agentx2.ai · Tier T1 · 2026-07-03

## 1. What this is (honest)
The public website + docs-governed "self-building company" foundation for an AI-native consulting brand: a static **Astro 6** site (Node ≥22.12, TypeScript, no runtime server) with an unusually disciplined gate suite (astro check, node:test, link/orphan/SEO/**a11y**/doc-link validators, markdownlint, npm-audit) and a large timestamped docs corpus (governance, observability, quality, swarm architecture). The consulting business it describes is aspirational; the site/docs system is real.

## 2. Current state (evidence)
- **Last commit:** ~2026-06-13 per 7/2 agency facts, plus a recent a11y-gate commit (strength — see §3); 1 uncommitted change at 7/2 sync. **Remote:** ✅ (origin present in `.git\refs\remotes\origin`).
- **Gates in `package.json`:** `ci` = check + build + test + validate + lint:md; `validate` = links, orphans, SEO, **a11y (`scripts\check-a11y.mjs`)**, doc-links; `release-check` = ci + `npm audit --omit=dev --audit-level=high`; pre-commit hooks via `scripts\setup-hooks.mjs`.
- **CI:** `.github\workflows\` — ci.yml, deploy.yml (GitHub Pages), security.yml.
- **AGENTS.md:** ✅ exemplary (v1.0.0, frontmatter, HITL/zero-regression/OTel-GenAI conventions) — **review due 2026-07-12** (30d cadence from 6/12).
- **Docs:** BUILD_REPORT, CURRENT_STATE, Freshness Policy, INDEX ≤3-clicks; foundation generated 2026-06-12.

## 3. Gap matrix vs Tier T1
| Requirement | Status | Evidence |
|---|---|---|
| README truthful | 🟡 | Dev/docs sections accurate; business copy (clients, outcomes, plans) is aspiration presented as offering — add a stage note |
| CLAUDE.md + agency block | ✅ | Root CLAUDE.md present (verified 2026-07-03) |
| AGENTS.md | ✅ | Present + high quality; **next review due 2026-07-12** |
| UPLIFT.md | ✅ | This file |
| Typed gate | ✅ | `astro check` (@astrojs/check + typescript) in ci script |
| Lint+format gate | 🟡 | markdownlint + validators; no eslint/prettier for `scripts\*.mjs` (thin gap for a content site) |
| Tests ≥70% + ratchet | 🟡 | node:test structure/build-output suites; coverage metric n/a-ish for static site — record as accepted deviation with test-count ratchet instead |
| CI green on main | ✅ | ci.yml + security.yml + deploy.yml (Pages) |
| Pinned deps + dependabot | 🟡 | `^` ranges; lockfile/dependabot not verified |
| SBOM + npm-audit in CI | ✅ | `npm audit --audit-level=high` in scripts + security.yml |
| Secrets clean | ✅ | Static site; no runtime secrets |
| OTel + /health + /metrics | ✅ | n/a — static site (OTel GenAI applies to build agents per AGENTS.md, not the site) |
| OpenAPI 3.1 + envelope | ✅ | n/a — no API |
| Policy/audit hooks | 🟡 | HITL/governance are docs; enforcement exists only as gates — fine at current stage, note it |
| OWASP LLM Top-10 | 🟡 | AI-touching via build swarm docs; checklist not present |
| Eval harness link | 🔴 | `docs\04-quality\EVAL_FRAMEWORK.md` is spec-only; no wired harness |
| Runbook | 🟡 | Deploy documented (Pages workflow); no explicit start/stop/recover runbook file |
| Git remote | ✅ | origin set |
| DR restore path | ✅ | Static rebuild from repo (`npm run build`) + Pages redeploy |

**Reds: 1** (eval-harness link). **Strength: accessibility gate** (`validate:a11y` + `scripts\check-a11y.mjs`, recent commit) — WCAG 2.2 AA per AGENTS.md §5; few estate repos gate a11y at all.

## 4. Duplication & consolidation
- **EVAL_FRAMEWORK.md vs eval-harness:** do not implement a private eval runner here — consume the estate `eval-harness` importable pack (its §5 Slice 2/3). The doc becomes the consumer spec.
- **Swarm/orchestration docs** overlap arescore/aresmaxbot (dormant-by-decree) and myskills orchestration — keep as brand/method docs; build nothing swarm-runtime here (§5 first law).
- **agentx2.ai vs agency repo:** distinct (public brand site vs internal agency tooling) — no action.

## 5. Next 3 vertical slices
1. **Freshness compliance sweep.** AGENTS.md and 6/12-generated docs hit their 30d review 2026-07-12: run the documented freshness pass, bump `last_verified`, fix dead internal links. Gate: `npm run validate` green + zero docs past staleness threshold (doc-link check + frontmatter dates).
2. **Estate eval link.** Wire `eval-harness` as the eval engine behind EVAL_FRAMEWORK.md: add a `npm run eval` script that shells `evalharness single --pack groundedness` against site copy claims/prompt docs (marker-noted in EVAL_FRAMEWORK.md). Gate: `npm run eval` exits 0 locally; documented in QUALITY_GATES.md via marker block.
3. **Script lint + lockfile discipline.** Add eslint (flat config) for `scripts\*.mjs` + verify/commit `package-lock.json`; wire both into `ci`. Gate: `npm run ci` green including new lint step; `npm ci` reproducible install.

## 6. Autonomous execution plan (runnable prompt)
> You are the resident agent of `C:\Users\mcgac\Python\agentx2.ai`. Scope: UPLIFT.md §5 slices 1→3 in order. Honor the repo's own AGENTS.md (zero-regression, freshness, HITL) — it is binding here. Setup: `npm install`. Quality gates after every change: `npm run ci` (astro check → build → node:test → validate incl. a11y → markdownlint); before declaring a slice done also run `npm run release-check` (adds prod npm-audit). Markdown edits to existing docs go inside `<!-- uplift:begin 2026-07 -->…<!-- uplift:end -->` markers with frontmatter `updated` bumped. Stop conditions: any gate red after 2 fix attempts; a11y check regresses (never merge past it); an edit would change business claims (pricing/plans) → stop, that's Michael's call. Forbidden: git push / commits from sandboxed tools; deploying (deploy.yml is CI's job); adding runtime JS to the static site; building a private eval runner or swarm runtime; deleting or rewriting timestamped docs outside markers.

## 7. AI & integration enablement
- **AGENTS.md:** ✅ present, best-in-estate; keep the 30d review honest (Slice 1).
- **MCP:** none exposed (correct — static site); content-factory automation should consume myskills MCP + Ollama, per its own MODEL_STRATEGY pins.
- **nodex twin:** agency block current 2026-07-02.
- **Ollama:** MODEL_STRATEGY.md pins local models for the build swarm (glm-4.7-flash / qwen3-coder etc.) — aligned with estate local-first.
- **Evals:** EVAL_FRAMEWORK.md spec → estate eval-harness consumption (Slice 2).

## 8. Do-NOT list
- Do NOT build swarm-runtime/orchestration code here — this repo's agents operate ON it, the platform lives in T0.
- Do NOT add a server/runtime to the site; static is the deployment story.
- Do NOT let 6/12-timestamped docs silently pass their staleness threshold — freshness is this repo's brand.
- Do NOT weaken or bypass the a11y gate; it is the repo's flagship differentiator.
<!-- uplift:end -->
