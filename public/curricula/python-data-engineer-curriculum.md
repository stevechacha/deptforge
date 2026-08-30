# Python for Data Engineers

> From scripts to trusted pipelines — warehouse data the company can use

A three-level Python curriculum for Data Engineers. Focus on SQL, modeling, ETL/ELT, orchestration, and reliability — so analysts and scientists inherit clean, documented data.

## Prerequisites

- Programming fundamentals (Python preferred; Java/Scala is a plus)
- Basic SQL
- Comfort using a terminal, Git, and cloud consoles at a beginner level

## Tools & Technologies

- Python
- SQL
- pandas
- Airflow
- dbt
- PostgreSQL
- Cloud warehouse (BigQuery / Snowflake / Redshift)
- Docker
- Git
- pytest

---

## Python & Warehouse Foundations — Beginner

**Goal:** Write Python that moves and shapes data, with solid SQL and modeling basics
**Duration:** 4–6 wks

### Python for Pipelines

#### Python essentials

- Functions, modules, typing, and virtualenvs
- Files, JSON, CSV, and pathlib
- Error handling and logging (not print-only scripts)

#### SQL & modeling

- Advanced SQL: joins, CTEs, window functions
- OLTP vs. OLAP
- Star/snowflake schemas at a conceptual level

### First Pipelines

#### Extract & load

- Pulling from APIs and databases with Python
- Idempotent loads and simple upserts
- Config via environment variables

#### Warehouse intro

- Landing vs. curated layers
- Incremental vs. full refresh
- Why grain and keys matter

### Project Work

- Script that pulls an API into Postgres or a local warehouse
- SQL model of transactions → dim/fact tables
- Logged, retry-aware load job with a README

---

## Pipeline Engineering — Intermediate

**Goal:** Build scheduled ETL/ELT with tests, transformations, and observable failures
**Duration:** 6–8 wks

### Orchestration & Transform

#### Airflow

- DAGs, operators, and sensors
- Retries, SLAs, and dependencies
- Local Airflow vs. managed (MWAA/Cloud Composer) at a high level

#### dbt

- Models, refs, and sources
- Tests (unique, not_null, relationships)
- Documentation and lineage

### Quality & Change

#### Data quality

- Great Expectations or dbt tests in practice
- Schema evolution without silent breakage
- Alerting when row counts or freshness slip

#### Cloud warehouses

- Partitions, clustering, and cost basics
- Change data capture at a working level
- IAM and least-privilege for pipeline identities

### Project Work

- Airflow DAG: raw events → warehouse tables
- dbt project with tests and docs site
- Quality checks on a payments or M-Pesa-style transaction feed

---

## Reliable Data Platforms — Expert

**Goal:** Operate pipelines at scale with CDC, streaming awareness, and clear lineage
**Duration:** 8–10 wks

### Scale & Streaming

#### Incremental architecture

- CDC patterns and late-arriving data
- Kafka/Pub/Sub at a working level
- Batch vs. micro-batch vs. stream — when each is enough

#### Platform practices

- Dockerizing jobs and CI for dbt/pytest
- Environment promotion (dev/staging/prod)
- Cost, SLAs, and on-call for pipeline failures

### Governance

#### Lineage & contracts

- Data contracts with producers
- PII handling and access controls
- Serving analysts and ML without copy-paste tables

### Project Work

- End-to-end pipeline: raw events → warehouse → documented marts
- Lineage diagram and runbook for a failed DAG
- SACCO/fintech-style ledger tables with quality gates

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._