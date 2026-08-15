# AGENTS.md

## Stack

React 19 + Vite 7 + Tailwind CSS **v4** (via `@tailwindcss/vite` in `vite.config.js`; no `tailwind.config.js`). Single-page app: all content is hardcoded in `src/App.jsx` — one ~380-line component, no router, no data files.

## No local Node.js — dev runs in Docker

`node`/`npm` are **not installed on the host**; running them fails with "command not found". The workflow (documented in gitignored `local_setup`) uses a long-lived container:

```sh
# one-time setup
docker run -d -it --name my-node-container -p 5173:5173 -v "$(pwd)":/usr/src/app -w /usr/src/app node:alpine sh
# then run npm commands via docker exec, e.g.
docker exec -it my-node-container npm run dev -- --host   # --host is required, else Vite is unreachable from the Mac
docker exec my-node-container npm run lint
docker exec my-node-container npm run build
```

## Verification

- Only `npm run lint` and `npm run build` exist. **There are no tests and no typecheck** — never claim "tests pass".
- ESLint quirk: `varsIgnorePattern: '^[A-Z_]'` in `eslint.config.js` means unused Capitalized imports (e.g. lucide icons) pass lint silently — check imports manually.

## Deploy flow (fully manual, no CI)

1. `docker build -t salmanisha/portfolio:vX.Y.Z .` + `docker push` (multi-stage build: Node → nginx).
2. Bump the hardcoded image tag in the Deployment in `kube-setup.yaml`, then apply to a K3s cluster fronted by Traefik **Gateway API** (Gateway + HTTPRoute, not Ingress).

Gotcha: `kube-setup.yaml` **cannot be applied as-is**: it contains an uncommented shell command (~line 37) and a namespace mismatch (Deployment has no `namespace:`, Service/HPA are in `portfolio-prod`). See IMPROVEMENTS.md #1–2.

## Repo quirks (don't be fooled)

- Dead Vite-template files still tracked — don't edit them as if live: `src/App.jsx.old`, `src/assets/react.svg`, `public/vite.svg`, and `src/App.css` (never imported).
- `src/index.css` mixes v4 (`@import "tailwindcss"`) with legacy v3 `@tailwind` directives plus leftover template styles (`body { display: flex }`, light-mode block). Cleanup pending (IMPROVEMENTS.md #4); the v4 Vite plugin is the source of truth.
- `lucide-react` is wrongly in `devDependencies` (used at runtime); `autoprefixer`/`postcss` are unused leftovers.
- The downloadable CV is `public/CV_Salman_Isha.pdf` — replace that file to update it.

## Backlog

`IMPROVEMENTS.md` (root) is the prioritized 26-item improvement plan with checkboxes. When doing improvement work, follow it and tick items off; update this AGENTS.md when a quirk listed above gets fixed.
