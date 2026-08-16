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
2. Bump the hardcoded image tag in the Deployment in `kube-setup.yaml`, then apply to a K3s cluster fronted by Traefik **Gateway API** (Gateway + HTTPRoute, not Ingress), with an HPA in `portfolio-prod`.
3. Public traffic arrives via **Cloudflare Tunnel** — TLS terminates at the Cloudflare edge; the Gateway listener stays plain HTTP.

## Repo quirks (don't be fooled)

- `src/index.css` mixes v4 (`@import "tailwindcss"`) with legacy v3 `@tailwind` directives plus leftover template styles (`body { display: flex }`, light-mode block). Cleanup pending (IMPROVEMENTS.md #4); the v4 Vite plugin is the source of truth.
- `lucide-react` is wrongly in `devDependencies` (used at runtime); `autoprefixer`/`postcss` are unused leftovers.
- The downloadable CV is `public/CV_Salman_Isha.pdf` — replace that file to update it.
- Status page (currently **Uptime Kuma** at `https://uptime.salmanisha.com/status/public`; owner switching to **Uptime Robot** for now, Prometheus/Grafana stack planned later) — linked from hero + footer.

## Backlog

`IMPROVEMENTS.md` (root) is the prioritized 26-item improvement plan with checkboxes. When doing improvement work, follow it and tick items off; update this AGENTS.md when a quirk listed above gets fixed.
