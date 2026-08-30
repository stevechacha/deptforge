# Learn Backend with C#

> ASP.NET Core APIs from first controller to production services

A three-level curriculum for building backend services with C# and ASP.NET Core — from HTTP and SQL through authenticated APIs to systems you can test, cache, observe, and ship.

## Prerequisites

- Programming fundamentals in any language
- Comfort using a terminal or Visual Studio / VS Code, plus Git
- Willingness to install the .NET SDK and a local PostgreSQL (or SQL Server) instance

## Tools & Technologies

- .NET SDK
- C#
- ASP.NET Core
- Entity Framework Core
- PostgreSQL or SQL Server
- Redis
- xUnit
- Swagger / OpenAPI
- Docker
- Git/GitHub

---

## HTTP, SQL & First APIs — Beginner

**Goal:** Stand up a small HTTP API that reads and writes real data
**Duration:** 4–6 wks

### Language, HTTP & SQL Foundations

#### C# for services

- Types, records, async/await, and nullability
- Namespaces, projects, and solution structure
- Error handling and structured logging (ILogger)

#### How the web talks

- HTTP methods, status codes, and headers
- JSON request and response bodies
- REST principles: resources, URLs, and idempotency

#### SQL & relational design

- Tables, primary keys, and foreign keys
- SELECT, JOIN, WHERE, and GROUP BY
- Indexes you actually need on day one

### Building a First Service

#### ASP.NET Core basics

- Minimal APIs or controllers and routing
- Dependency injection and configuration (appsettings)
- Middleware pipeline and request logging

#### Talking to the database

- EF Core DbContext and entities
- Parameterized queries (never string-concat SQL)
- First migrations and update-database

### Local Tooling

#### Git & API clients

- Branch, commit, and PR habits for backend teams
- Swagger UI, Postman, or Bruno
- Docker Compose for a local database

### Project Work

- CRUD API for members or products with EF Core
- Swagger docs covering every endpoint
- Docker Compose so a teammate can run the API locally

---

## Authenticated, Tested Services — Intermediate

**Goal:** Ship APIs with auth, validation, migrations, and tests you trust
**Duration:** 6–8 wks

### Auth & Authorization

#### Authentication

- ASP.NET Identity or JWT bearer auth
- OAuth/OIDC at a working level
- Refresh tokens, expiry, and logout

#### Authorization

- Policies, roles, and [Authorize]
- Resource-based authorization
- Least privilege for service accounts

### Data Modeling & Validation

#### EF Core and migrations

- Fluent configuration and relationships
- Forward-only migrations and careful rollbacks
- Transactions for multi-step writes

#### Validation & errors

- Data annotations / FluentValidation
- ProblemDetails and consistent error shapes
- Idempotent creates for retries

### Testing the Backend

#### xUnit and WebApplicationFactory

- Unit tests for domain logic
- Integration tests against the real pipeline
- Test database or Testcontainers

#### API contracts

- OpenAPI / Swagger as the source of truth
- Contract tests for breaking changes
- Seed data that matches production shapes

### Caching & Background Work

#### Redis and hosted services

- IDistributedCache / Redis when it helps
- IHostedService / BackgroundService for jobs
- EXPLAIN and slow-query awareness

### Project Work

- REST API with JWT auth, roles, and xUnit coverage
- Migration-backed schema for a real feature
- Rate-limited public endpoint with ProblemDetails errors

---

## Production-Grade Backend Systems — Expert

**Goal:** Design services that stay correct under load, retries, and money-moving traffic
**Duration:** 8–10 wks

### Architecture & Messaging

#### Service boundaries

- Clean/modular monolith vs. microservices
- MediatR or similar for in-process commands
- Outbox pattern for reliable side effects

#### Queues and workers

- MassTransit, Azure Service Bus, or SQS
- Retries, dead-letter queues, and poison messages
- Idempotency keys for at-least-once delivery

### Security & Money-Safe Writes

#### API security

- Injection, mass assignment, and secrets in config
- Rate limiting, CORS, and webhook signature verification
- PII handling and audit logs

#### Ledger-style consistency

- Immutable ledger rows vs. mutable balances
- Idempotent payment and transfer endpoints
- Reconciliation when callbacks are late or duplicated

### Observability & Shipping

#### Logs, metrics, traces

- OpenTelemetry in ASP.NET Core
- Health checks and readiness probes
- Correlation IDs across requests and jobs

#### Containers and config

- Multi-stage Docker images for .NET
- Environment-based configuration and user secrets
- CI with tests, migrations, and published OpenAPI

### Project Work

- SACCO member and savings API with role-based access
- Idempotent M-Pesa-style callback + reconciliation worker
- Containerized ASP.NET Core service with CI and Swagger

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._