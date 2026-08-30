# Learn Backend with Python

> FastAPI or Django APIs from first route to production services

A three-level curriculum for building backend services with Python — from HTTP and SQL through authenticated APIs to systems you can test, cache, observe, and ship. FastAPI is the primary path; Django/DRF patterns are covered where they differ.

## Prerequisites

- Programming fundamentals (variables, functions, collections)
- Comfort using a terminal, Git, and a code editor
- Willingness to install Python 3.11+, pip/uv, and a local PostgreSQL instance

## Tools & Technologies

- Python 3
- FastAPI or Django REST Framework
- Pydantic
- SQLAlchemy or Django ORM
- Alembic or Django migrations
- PostgreSQL
- Redis
- Celery or RQ
- pytest
- Docker
- Git/GitHub

---

## HTTP, SQL & First APIs — Beginner

**Goal:** Stand up a small HTTP API that reads and writes real data
**Duration:** 4–6 wks

### Language, HTTP & SQL Foundations

#### Python for services

- Typing, dataclasses, async/await, and packages
- Virtual environments (venv/uv) and dependency files
- Error handling, logging, and project layout

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

- FastAPI routes, path/query params, and dependency injection
- Pydantic models for request/response schemas
- Alternative path: Django views/serializers at a glance

#### Talking to PostgreSQL

- SQLAlchemy (or Django ORM) with parameterized queries
- Sessions, engines, and connection pooling basics
- First migrations with Alembic or Django

### Local Tooling

#### Git & API clients

- Branch, commit, and PR habits for backend teams
- Exploring endpoints with Postman, Bruno, or httpx
- Docker Compose for a local Postgres

### Project Work

- CRUD API for members or products with Postgres
- OpenAPI docs (FastAPI auto-docs or DRF schema)
- Docker Compose so a teammate can run the API locally

---

## Authenticated, Tested Services — Intermediate

**Goal:** Ship APIs with auth, validation, migrations, and tests you trust
**Duration:** 6–8 wks

### Auth & Authorization

#### Authentication

- Password hashing (passlib/argon2) and sessions vs. JWT
- OAuth/OIDC at a working level
- Refresh tokens, expiry, and logout

#### Authorization

- Role-based dependencies or permission classes
- Resource ownership checks
- Least privilege for service accounts

### Data Modeling & Migrations

#### ORM and schema change

- Models mapped to tables without leaking SQL injection
- Forward-only migrations and careful rollbacks
- Transactions for multi-step writes

#### Validation & errors

- Pydantic (or DRF serializers) at the boundary
- Consistent error shapes and HTTP status mapping
- Idempotent creates for retries

### Testing the Backend

#### pytest for APIs

- Unit tests for domain logic
- TestClient / AsyncClient against the app
- Fixtures and a disposable test database

#### API contracts

- OpenAPI as the source of truth
- Contract tests for breaking changes
- Seed data that matches production shapes

### Caching & Jobs Basics

#### Redis and workers

- When to cache vs. when to fix the query
- Celery/RQ job enqueue for slow work
- EXPLAIN and slow-query awareness

### Project Work

- REST API with JWT/session auth, roles, and pytest coverage
- Migration-backed schema for a real feature
- Background job that processes a webhook payload

---

## Production-Grade Backend Systems — Expert

**Goal:** Design services that stay correct under load, retries, and money-moving traffic
**Duration:** 8–10 wks

### Architecture & Messaging

#### Service boundaries

- Monolith vs. modular packages vs. services
- Synchronous APIs vs. async workers
- Outbox pattern for reliable side effects

#### Queues and workers

- Celery/RQ/SQS retries and dead-letter queues
- Idempotency keys for at-least-once delivery
- Poison message handling

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

- Structured logging with request IDs
- Prometheus metrics or OpenTelemetry
- Tracing across handlers and workers

#### Containers and config

- Multi-stage Docker images and non-root users
- 12-factor config and graceful shutdown (uvicorn/gunicorn)
- Health checks and migrations in CI

### Project Work

- SACCO member and savings API with role-based access
- Idempotent M-Pesa-style callback + reconciliation worker
- Containerized FastAPI/Django service with CI pytest and OpenAPI

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._