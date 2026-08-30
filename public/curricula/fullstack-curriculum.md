# Learn Full-Stack

> From a static page to a feature you can ship end-to-end

A three-level curriculum for engineers who move across the stack — React on the client, a real API and database behind it, and the auth, tests, and deploy path that makes a feature done. Built for small teams where one person owns the whole slice.

## Prerequisites

- HTML, CSS, and JavaScript fundamentals (or complete a frontend foundations track first)
- Programming comfort beyond tutorials — you can debug with a stack trace
- Git basics and a willingness to run both a frontend and an API locally

## Tools & Technologies

- React
- TypeScript
- Node.js
- PostgreSQL
- Prisma or Drizzle
- React Router or Next.js
- TanStack Query
- Docker
- Git/GitHub
- Vercel or Render

---

## Cross-Stack Foundations — Beginner

**Goal:** Build a simple UI that talks to an API you wrote, backed by a database
**Duration:** 4–6 wks

### Frontend You Can Ship

#### React essentials

- Components, props, and local state
- Lists, forms, and loading/empty/error UI
- Vite (or Next.js) project layout and TypeScript basics

#### Talking to HTTP

- fetch, JSON, and async/await
- CORS from the browser's point of view
- Environment variables for API base URLs

### Backend You Can Trust

#### API + database

- REST routes that create, read, update, and delete
- PostgreSQL tables and a simple migration
- Validation at the API boundary

#### Connecting the layers

- One feature: UI form → API → row in Postgres
- Shared types or a documented JSON contract
- Running frontend and API together locally

### Git & Small-Team Habits

#### Workflows that survive solo and pairs

- Branches, PRs, and a README that boots the whole app
- Docker Compose for Postgres so setup is not tribal knowledge
- Debugging: Network tab, API logs, and SQL in one sitting

### Project Work

- CRUD app: React list/detail + Node API + Postgres
- Shared README with one-command local setup
- Simple filter/search that hits the API, not only client state

---

## Building Full Features — Intermediate

**Goal:** Ship authenticated features with real schemas, errors, and a public URL
**Duration:** 6–8 wks

### Auth End-to-End

#### Sessions or JWT across the stack

- Register/login on the API; cookies or tokens on the client
- Protected routes in React and guarded API handlers
- Logout, expiry, and what the UI does when the session dies

#### Roles in the product

- Role stored server-side, never only in localStorage
- Hiding UI vs. enforcing authorization on the API
- A member vs. admin path in one feature

### Data & Forms Across Layers

#### Schema design for a feature

- Tables that match the screens (not a dump of fields)
- Foreign keys and what the UI must not invent
- Migrations as part of the feature, not a later chore

#### Forms, validation, and server state

- React Hook Form + Zod (or equivalent) aligned with the API
- TanStack Query for server cache, mutations, and invalidation
- Error messages that match API error shapes

### Deploying Both Sides

#### Hosting a full-stack app

- Frontend on Vercel/Netlify; API on Render/Fly/a VPS
- Database hosted separately; connection strings and SSL
- Environment promotion: local → staging → prod

#### CI basics

- GitHub Actions: lint, typecheck, and tests on PR
- Do not deploy if migrations or tests fail
- Preview URLs vs. a stable staging environment

### Edge Cases You Will Hit

#### Failure across layers

- Timeouts, 4xx vs. 5xx, and user-visible fallbacks
- Optimistic UI only when you can roll it back
- Idempotent submits (double-click, retry)

### Project Work

- Auth'd app with roles, Postgres, and a deployed URL
- Feature PR that includes migration, API, and UI in one slice
- M-Pesa STK-push demo: UI trigger → API → mock callback

---

## Shipping Like a Small Team — Expert

**Goal:** Architect, test, and operate a product-shaped system — not a tutorial stack
**Duration:** 8–10 wks

### Architecture Trade-offs

#### Rendering and boundaries

- SPA vs. Next.js App Router: what runs on the server and why
- BFF/API routes vs. a standalone API
- When a modular monolith beats extra services

#### Performance across the stack

- N+1 queries vs. over-fetching on the client
- Caching: HTTP, React Query, and Redis — pick the layer
- Bundle size and API payload size as product issues

### Quality Bar

#### Test pyramid for full-stack

- API integration tests for money and auth paths
- Component tests for critical UI states
- One Playwright (or similar) path through login → core action

#### Security that is your job

- XSS, CSRF, and storing tokens safely
- Authorization re-checked on every mutating request
- Secrets, PII, and what never lands in logs or analytics

### Operate What You Ship

#### Logs and incidents

- Request IDs from browser → API
- Health checks and a simple uptime signal
- A rollback plan you have actually practiced

### Product-Shaped Systems

#### RBAC and audit

- Permission matrix for staff vs. member vs. auditor
- Audit trail for sensitive actions
- Feature flags for incomplete backend work

### Project Work

- SACCO management portal: members, shares, and role-based screens
- ERP-style module with UI, API, database, auth, and tests
- Fintech dashboard with M-Pesa-style payments and a reconciliation view
- Deployed app with CI, staging, and a written architecture decision

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._