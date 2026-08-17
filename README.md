# Deptforge

A stage-by-stage learning pathway for modern tech careers — seven departments, twenty-eight roles, with requirements, tools, and course outlines.

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

## Routes

- `/` — home + system map
- `/departments` — all departments
- `/departments/:deptId` — department detail
- `/roles/:roleId` — role detail + learning stages
- `/search?q=` — skill/role search

## Reference

The original single-file prototype is kept at `reference/tech-career-system-map.html` for visual parity checks.
# deptforge
