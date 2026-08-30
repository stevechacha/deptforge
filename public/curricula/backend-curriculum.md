# Learn Backend with Node.js

> TypeScript APIs from first route to production services

A three-level curriculum for building backend services with Node.js and TypeScript — from HTTP and SQL through authenticated APIs to systems you can test, cache, observe, and ship.

## Prerequisites

- Programming fundamentals in any language (variables, functions, collections)
- Comfort using a terminal, Git, and a code editor
- Willingness to install Node.js and a local PostgreSQL instance

## Tools & Technologies

- Node.js
- TypeScript
- Express or Fastify
- PostgreSQL
- Prisma or Drizzle
- Redis
- Postman or Bruno
- Docker
- Jest or Vitest
- Git/GitHub

---

## HTTP, SQL & First APIs — Beginner

**Goal:** Stand up a small HTTP API that reads and writes real data
**Duration:** 4–6 wks

### Language, HTTP & SQL Foundations

#### TypeScript for services

- Types, functions, async/await, and modules
- Error handling without swallowing failures
- Project layout: src, scripts, and environment files

#### How the web talks

- HTTP methods, status codes, and headers
- JSON request and response bodies
- REST principles: resources, URLs, and idempotency

#### SQL & relational design

- Tables, primary keys, and foreign keys
- SELECT, JOIN, WHERE, and GROUP BY
- Indexes you actually need on day one

### Building a First Service

#### Framework basics

- Express or Fastify routing and middleware
- Parsing bodies, query params, and path params
- Structured logging instead of console.log-only

#### Talking to PostgreSQL

- Connecting with a driver or query builder
- Parameterized queries (never string-concat SQL)
- Migrations for schema changes

### Local Tooling

#### Git & API clients

- Branch, commit, and PR habits for backend teams
- Exploring endpoints with Postman or Bruno
- Docker Compose for a local Postgres

### Project Work

- CRUD API for members or products with Postgres
- OpenAPI or README that documents every endpoint
- Docker Compose so a teammate can run the API locally

---

## Authenticated, Tested Services — Intermediate

**Goal:** Ship APIs with auth, validation, migrations, and tests you trust
**Duration:** 6–8 wks

### Auth & Authorization

#### Authentication

- Password hashing (bcrypt/argon2) and sessions vs. JWT
- OAuth/OIDC at a working level
- Refresh tokens, expiry, and logout

#### Authorization

- Role-based access on routes
- Resource ownership checks (user can only see their records)
- Principle of least privilege for service accounts

### Data Modeling & ORMs

#### ORMs and migrations

- Prisma or Drizzle models mapped to tables
- Forward-only migrations and rollbacks
- Transactions for multi-step writes

#### Validation & errors

- Schema validation (Zod or similar) at the boundary
- Consistent error shapes and HTTP status mapping
- Idempotent creates for retries

### Testing the Backend

#### Unit and integration tests

- Jest or Vitest for handlers and domain logic
- Test database or transactions that roll back
- HTTP-level tests against the real router

#### API contracts

- OpenAPI as the source of truth
- Contract tests for breaking changes
- Seed data that matches production shapes

### Caching & Performance Basics

#### Redis and query cost

- When to cache vs. when to fix the query
- Cache keys, TTLs, and invalidation
- EXPLAIN and slow-query awareness

### Project Work

- REST API with JWT/session auth, roles, and tests
- Migration-backed schema for a real feature (not a toy table)
- Rate-limited public endpoint with documented error codes

---

## Production-Grade Backend Systems — Expert

**Goal:** Design services that stay correct under load, retries, and money-moving traffic
**Duration:** 8–10 wks

### Architecture & Messaging

#### Service boundaries

- Monolith vs. modular monolith vs. services — when each is enough
- Synchronous APIs vs. async jobs
- Outbox pattern for reliable side effects

#### Queues and workers

- Background jobs (BullMQ, SQS, or similar)
- Retries, dead-letter queues, and poison messages
- Exactly-once vs. at-least-once and idempotency keys

### Security & Money-Safe Writes

#### API security

- Injection, mass assignment, and secrets in env — not git
- Rate limiting, CORS, and webhook signature verification
- PII handling and audit logs for sensitive reads

#### Ledger-style consistency

- Immutable ledger rows vs. mutable balances
- Idempotent payment and transfer endpoints
- Reconciliation jobs when a callback is late or duplicated

### Observability

#### Logs, metrics, traces

- Structured logs with request IDs
- RED/USE metrics on the API
- Tracing a request across handlers and jobs

### Shipping

#### Containers and config

- Multi-stage Docker images and non-root users
- 12-factor config: env, secrets, and feature flags
- Health checks, graceful shutdown, and migrations in CI

### Project Work

- SACCO member and savings API with role-based access
- Idempotent M-Pesa-style callback + reconciliation worker
- Load-tested endpoint with a cache layer and a runbook
- Containerized service with CI tests and OpenAPI published

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._