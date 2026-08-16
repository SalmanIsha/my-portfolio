# Portfolio Improvement Plan

> Analysis performed on 2026-08-07. This file tracks identified improvements.
> Check off items as they are completed. No code changes have been made yet.

## Current State

Single-page React 19 + Vite 7 portfolio (Tailwind CSS v4, lucide-react icons),
containerized with a multi-stage Docker build (Node -> nginx), deployed to K3s
via Traefik Gateway API with an HPA. Local dev runs inside Docker.

---

## Phase 1: Fix what's broken (bugs)

- [x] **1. `kube-setup.yaml` invalid YAML** (FIXED 2026-08-07) — line 37 is a raw, uncommented shell
  command (`kubectl create secret docker-registry ...`) between `---` separators.
  `kubectl apply -f kube-setup.yaml` will fail to parse. Comment it out or move
  it to a separate runbook.
- [x] **2. Namespace mismatch in `kube-setup.yaml`** (FIXED 2026-08-07) — the `Deployment` has no
  `namespace:` field (lands in `default`), but the `Service` and `HPA` are in
  `portfolio-prod`. Service selects no pods; HPA can't find its scale target.
  Add `namespace: portfolio-prod` to the Deployment metadata.
- [x] **3. Missing `.dockerignore`** (FIXED 2026-08-07) — `COPY . .` in the Dockerfile copies host
  `node_modules` (macOS-native binaries: esbuild, rollup) over the Linux
  container's, plus `.git`. Can break or bloat the build. Add a `.dockerignore`
  with at least: `node_modules`, `dist`, `.git`, `local_setup`, `*.md`.
- [ ] **4. `src/index.css` mixes Tailwind v3 + v4** — `@import "tailwindcss"`
  (v4) alongside deprecated `@tailwind base/components/utilities` (v3). Also
  still contains Vite template global styles (`body { display: flex; place-items:
  center }`, light-mode media query, purple `a` colors, button styles) that fight
  the dark design. Remove v3 directives and template leftovers.

## Phase 2: Housekeeping (dead code & deps)

- [x] **5. Delete `src/App.jsx.old`** (FIXED 2026-08-07) — old Vite demo counter app, committed to git.
- [x] **6. Delete `src/assets/react.svg` and `public/vite.svg`** (FIXED 2026-08-07) — template leftovers.
- [x] **7. Delete `src/App.css`** (FIXED 2026-08-07) — never imported.
- [x] **8. Remove unused lucide imports** in `App.jsx` (FIXED 2026-08-07): `Mail`,
  `Database` removed; `ChevronRight` retained — now used for timeline bullets.
  Note: ESLint rule `varsIgnorePattern: '^[A-Z_]'` hides capitalized imports.
- [x] **9. Remove unnecessary `import React`** in `App.jsx` (FIXED 2026-08-07) — automatic JSX runtime.
- [ ] **10. Fix dependencies in `package.json`**:
  - Move `lucide-react` from `devDependencies` to `dependencies` (runtime dep).
  - Remove `autoprefixer` and `postcss` (unneeded with Tailwind v4 Vite plugin).
- [x] **11. Rewrite `README.md`** (FIXED 2026-08-07) — currently the default Vite template. Should
  document the actual project: architecture, local dev (Docker), build, deploy
  process. For a DevOps portfolio the README is part of the showcase.

## Phase 3: Security & SEO quick wins

- [ ] **12. Add `rel="noopener noreferrer"`** to all `target="_blank"` links
  (LinkedIn x2, GitHub x2, Credly x2 in `App.jsx`).
- [ ] **13. Secure Headlamp** — Kubernetes dashboard is publicly exposed at
  `headlamp.salmanisha.com` with no auth middleware in the manifest. Add basic
  auth / OIDC middleware or restrict access.
- [x] **14. Add HTTPS** (RESOLVED 2026-08-07) — public traffic now served via
  **Cloudflare Tunnel**, so TLS is terminated at the Cloudflare edge (free
  certs, WAF/DDoS protection). No cert-manager/Let's Encrypt needed.
- [ ] **15. nginx hardening** — add custom nginx.conf with:
  - Security headers: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy
  - gzip + long-cache headers for hashed assets in `/assets`
  - Consider `nginxinc/nginx-unprivileged` base image (non-root).
- [ ] **16. Use `npm ci` instead of `npm install`** in the Dockerfile
  (reproducible builds from the lockfile).
- [ ] **17. Move docker-registry secret instructions out of the manifest** —
  keep token handling in a private runbook, or use sealed-secrets.
- [ ] **18. Add SEO meta tags to `index.html`** — meta description, Open Graph,
  Twitter card, canonical URL, robots, theme-color. Better title, e.g.
  `Mohd Salman Isha | DevOps Engineer & Infrastructure Architect`.
- [ ] **19. Add JSON-LD structured data** (`Person` schema) to `index.html`.
- [ ] **20. Fix accessibility basics**:
  - Mobile menu button: add `aria-label` + `aria-expanded`; close on Escape;
    lock body scroll when open.
  - Logo `href="#"` pollutes the URL — use `#top` or a button.
  - Add `<main>` / `<header>` landmarks, `aria-labelledby` on sections.
  - Check contrast: `text-slate-500/600` at `text-xs` on near-black likely
    fails WCAG.

## Phase 4: CI/CD pipeline (very on-brand for a DevOps portfolio)

- [ ] **21. Add GitHub Actions workflow** — lint -> build -> docker build/push
  -> update image tag in manifest (currently hardcoded `v1.0.1`).
- [ ] **22. Add a smoke test** — at minimum a render test for `App`
  (e.g. Vitest + React Testing Library). No tests exist at all right now.

## Phase 5: Polish

- [ ] **23. K8s hardening** — add liveness/readiness probes, `securityContext`,
  container port declaration, consider a PodDisruptionBudget.
- [ ] **24. Extract content from `App.jsx`** — move stats, projects, certs,
  services, experience into a `src/data.js`; split into components
  (Navbar, Hero, Expertise, Work, About, Footer). App.jsx is ~380 lines.
- [ ] **25. Add Prettier** + format script; fill in `package.json` metadata
  (description, author, repository).
- [ ] **26. Apex domain redirect** — handle `salmanisha.com` -> `www.salmanisha.com`.

---

## Priority summary

| Phase | Items | Status |
|-------|-------|--------|
| 1. Fix what's broken | 1-4 | #1-3 done; #4 open |
| 2. Housekeeping | 5-11 | #5-9, #11 done; #10 open |
| 3. Security & SEO | 12-20 | #14 done (Cloudflare Tunnel); #12, #13, #15-20 open |
| 4. CI/CD | 21-22 | open |
| 5. Polish | 23-26 | open |

## Senior DevOps showcase roadmap (priority order)

The repo is now **safe to show** (manifests apply cleanly, dead files gone,
repo documented). Remaining work to make it a convincing Senior DevOps artifact:

1. **CI/CD (#21)** — GitHub Actions: lint -> build -> docker build/push -> apply
   manifest. This is THE missing piece; no senior DevOps claim is credible
   without a pipeline on your own project.
2. **GitOps / self-hosted card** — wire ArgoCD or Flux to auto-deploy, then
   reveal the 4th project card (C2) so it's visible publicly.
3. **Monitoring** — already live (Uptime Kuma / Uptime Robot); upgrade to
   Prometheus/Grafana later and point the hero/footer status link at it.
4. **TLS** — handled by Cloudflare Tunnel (#14 done).
5. **Polish (#23)** — probes, securityContext, PDB on the Deployment.

---

## Content follow-ups (migrated from CONTENT-PLAN.md, 2026-08-07)

Content overhaul is DONE (hero, stats, case studies, skills matrix, timeline
bullets, MSc gap entry, phone, availability line). Remaining stragglers:

- [ ] **C1. Professional email** — set up `contact@salmanisha.com` (or similar),
  then replace the hotmail address in `src/App.jsx` (hero "Get In Touch" mailto +
  footer "Email" link).
- [ ] **C2. Reveal the self-hosted project card** — the 4th card exists in the
  `projects` array in `src/App.jsx` with `visible: false`. Delete that line once
  the remaining site improvements land.
- [ ] **C3. Right-to-work mention** — deferred pending recruiter advice. If
  approved, add to the hero availability line in `src/App.jsx`.
