# Mohd Salman Isha — Portfolio

Personal portfolio site of a Senior DevOps Engineer & Infrastructure Architect.

- **Live:** [www.salmanisha.com](https://www.salmanisha.com)
- **Blog:** [blog.salmanisha.com](https://blog.salmanisha.com)

Single-page React app featuring certifications (CKA, Terraform Associate),
featured project impact, a skills matrix, and career timeline. The site is
self-hosted on a personal K3s cluster (see [Deployment](#deployment)).

## Tech Stack

- **React 19** + **Vite 7**
- **Tailwind CSS v4** (via `@tailwindcss/vite` — no `tailwind.config.js`)
- **lucide-react** icons
- **nginx** serving the static build in production

All site content lives in `src/App.jsx` — edit that one file to update copy,
projects, skills, or timeline entries.

## Local Development

Node.js is **not** required on the host — development runs in a Docker
container with the repo mounted as a volume.

```sh
# One-time container setup (from the repo root)
docker run -d -it --name my-node-container -p 5173:5173 \
  -v "$(pwd)":/usr/src/app -w /usr/src/app node:alpine sh

# Install dependencies (first time / after package.json changes)
docker exec my-node-container npm install

# Start the dev server (--host is required to reach it from the Mac)
docker exec -it my-node-container npm run dev -- --host
```

Then open http://localhost:5173.

```sh
# Verify changes
docker exec my-node-container npm run lint
docker exec my-node-container npm run build
```

> If you do have Node.js installed locally, the usual `npm install && npm run dev`
> works too — the Docker setup just isn't dependent on it.

## Production Build (Docker)

Multi-stage build: Node compiles the Vite app, nginx serves the static output.

```sh
docker build -t salmanisha/portfolio:vX.Y.Z .
docker run -p 8080:80 salmanisha/portfolio:vX.Y.Z   # smoke-test on :8080
docker push salmanisha/portfolio:vX.Y.Z
```

## Deployment

Manual, no CI/CD (tracked in `IMPROVEMENTS.md` #21):

1. Build and push the image with a new version tag (above).
2. Update the hardcoded `image:` tag in the Deployment in `kube-setup.yaml`.
3. Apply to the K3s cluster, which runs Traefik with the Kubernetes
   **Gateway API** (Gateway + HTTPRoute, not Ingress), plus a CPU-based
   HorizontalPodAutoscaler (1–3 replicas).

> Note: `kube-setup.yaml` currently can't be applied as-is — see open items
> #1–2 in `IMPROVEMENTS.md`.

## Repository Layout

```
├── index.html          # App entry
├── public/             # CV_Salman_Isha.pdf (served at /CV_Salman_Isha.pdf), favicon
├── src/
│   ├── App.jsx         # ALL site content + components (single-page)
│   ├── main.jsx        # React root
│   └── index.css       # Tailwind v4 entry
├── Dockerfile          # Multi-stage: node build -> nginx
├── kube-setup.yaml     # K3s: Gateway, HTTPRoutes, Deployment, Service, HPA
├── AGENTS.md           # Dev-workflow notes for AI agents
└── IMPROVEMENTS.md     # Prioritized backlog (technical + content)
```

## License

Personal project — all rights reserved.

## Note
A private reposity is created to securly build and push the docker image in docker hub