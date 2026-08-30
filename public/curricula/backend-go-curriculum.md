# Learn Backend with Go

> Idiomatic Go APIs from first handler to production services

A three-level curriculum for building backend services with Go — from HTTP and SQL through authenticated APIs to systems you can test, cache, observe, and ship. Focus on the standard library plus a small, production-oriented toolkit.

## Prerequisites

- Programming fundamentals in any language
- Comfort using a terminal, Git, and a code editor
- Willingness to install Go and a local PostgreSQL instance

## Tools & Technologies

- Go
- net/http or chi / Echo / Fiber
- database/sql or sqlc / pgx
- PostgreSQL
- Redis
- golang-migrate
- testify
- Docker
- Git/GitHub

---

## HTTP, SQL & First APIs — Beginner

**Goal:** Stand up a small HTTP API that reads and writes real data
**Duration:** 4–6 wks

### Language, HTTP & SQL Foundations

#### Go for services

- Packages, structs, interfaces, and error returns
- goroutines awareness without premature concurrency
- go.mod, go fmt, and project layout

#### How the web talks

- HTTP methods, status codes, and headers
- JSON encoding/decoding
- REST principles: resources, URLs, and idempotency

#### SQL & relational design

- Tables, primary keys, and foreign keys
- SELECT, JOIN, WHERE, and GROUP BY
- Indexes you actually need on day one

### Building a First Service

#### Handlers and routing

- net/http ServeMux or a light router (chi/Echo)
- Context, timeouts, and middleware
- Structured logging (slog or zerolog)

#### Talking to PostgreSQL

- database/sql or pgx with parameterized queries
- sqlc for type-safe queries (optional but recommended)
- Migrations with golang-migrate or goose

### Local Tooling

#### Git & API clients

- Branch, commit, and PR habits for backend teams
- Exploring endpoints with curl, Postman, or Bruno
- Docker Compose for a local Postgres

### Project Work

- CRUD API for members or products with Postgres
- README or OpenAPI that documents every endpoint
- Docker Compose so a teammate can run the API locally

---

## Authenticated, Tested Services — Intermediate

**Goal:** Ship APIs with auth, validation, migrations, and tests you trust
**Duration:** 6–8 wks

### Auth & Authorization

#### Authentication

- Password hashing and sessions vs. JWT
- OAuth/OIDC at a working level
- Refresh tokens, expiry, and logout

#### Authorization

- Role checks in middleware
- Resource ownership in handlers
- Least privilege for service credentials

### Data Access & Validation

#### Repositories and migrations

- Repository pattern over raw SQL/sqlc
- Forward-only migrations and rollbacks
- Transactions for multi-step writes

#### Validation & errors

- Request validation (go-playground/validator or manual)
- Consistent error types and HTTP mapping
- Idempotent creates for retries

### Testing the Backend

#### Go tests

- table-driven unit tests
- httptest and integration tests with a test DB
- testify assertions and mocks where they help

#### API contracts

- OpenAPI as documentation and contract
- Detecting breaking response changes
- Seed data that matches production shapes

### Caching & Performance Basics

#### Redis and query cost

- When to cache vs. when to fix the query
- Cache keys, TTLs, and invalidation
- EXPLAIN and slow-query awareness

### Project Work

- REST API with JWT/session auth, roles, and tests
- Migration-backed schema for a real feature
- Rate-limited public endpoint with documented error codes

---

## Production-Grade Backend Systems — Expert

**Goal:** Design services that stay correct under load, retries, and money-moving traffic
**Duration:** 8–10 wks

### Architecture & Concurrency

#### Service boundaries

- Monolith vs. services — when each is enough
- Context cancellation across handlers and workers
- Outbox pattern for reliable side effects

#### Workers and messaging

- Background workers with queues (NATS, SQS, or Redis)
- Retries, dead-letter queues, and poison messages
- Idempotency keys for at-least-once delivery

### Security & Money-Safe Writes

#### API security

- Injection, mass assignment, and secrets in env
- Rate limiting, CORS, and webhook signature verification
- PII handling and audit logs

#### Ledger-style consistency

- Immutable ledger rows vs. mutable balances
- Idempotent payment and transfer endpoints
- Reconciliation when callbacks are late or duplicated

### Observability & Shipping

#### Logs, metrics, traces

- slog with request IDs
- Prometheus metrics or OpenTelemetry
- pprof for CPU/memory when needed

#### Containers and config

- Multi-stage Docker builds and scratch/distroless images
- 12-factor config and graceful shutdown
- Health checks and migrations in CI

### Project Work

- SACCO member and savings API with role-based access
- Idempotent M-Pesa-style callback + reconciliation worker
- Containerized Go service with CI tests and OpenAPI

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._