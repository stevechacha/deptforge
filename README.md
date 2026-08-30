# Deptforge (web)

A stage-by-stage learning pathway for modern tech careers — seven departments, twenty-eight roles, with requirements, tools, and course outlines.

This folder is the Vite frontend under the Deptforge monorepo (`../api`, `../infra`). See `../README.md` for the full layout.

**Brand map (locked):** Deptforge (this product) · Credopen (access / attendance) · Systforge (custom systems agency)

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router

Career content and search/lookup logic live in `src/data` and `src/lib` with no DOM/React imports, so they can be reused later in a React Native app.

## Setup

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server |
| `npm run build` | Typecheck and production build |
| `npm run preview` | Preview production build |
| `npm test` | Run Vitest unit tests |
| `npm run lint` | Lint with oxlint |

## Deploy

### GitHub Pages (default)

Pushes to `main` run `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.

1. Fix any [GitHub billing](https://github.com/settings/billing) issues on the account (Actions must be enabled).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. After the workflow succeeds, the site is live at `https://stevechacha.github.io/deptforge/`.

Re-run a failed deploy from the **Actions** tab, or push an empty commit.

### Vercel

```bash
npx vercel --prod
```

`vercel.json` includes SPA rewrites for client-side routing.

### Apache / cPanel

```bash
npm run build
```

Upload everything inside `dist/` to your web root. The build copies `hosting/.htaccess` into `dist/` for SPA routing.

## Routes

- `/` — home + system map
- `/departments` — all departments
- `/departments/:deptId` — department detail
- `/roles/:roleId` — role detail + learning stages
- `/courses` — downloadable deep-dive curricula
- `/courses/:courseId` — full curriculum outline (JSON/Markdown download)
- `/search?q=` — skill/role search

## Curricula

Full course outlines live in `src/data/curricula/` (one JSON file per course; TypeScript re-exports it). Every role has a downloadable curriculum (29 courses total — Mobile has both Android and iOS). Curricula are JSON files in `src/data/curricula/`; `index.ts` loads them via `import.meta.glob`. Run `npm run export-curricula` to write static JSON and Markdown to `public/curricula/`.

Course pages also offer a **PDF download** (jsPDF) with a diagonal `deptforge.wesacco.com` watermark and footer on every page — see `src/lib/curriculum-pdf.ts` and `src/lib/site.ts`.

## Reference

The original single-file prototype is kept at `reference/tech-career-system-map.html` for visual parity checks.
# deptforge
