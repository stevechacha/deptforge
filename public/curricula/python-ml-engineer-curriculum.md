# Python for ML / AI Engineers

> From notebooks to production systems — serving models and LLM features

A three-level Python curriculum for Machine Learning / AI Engineers. Software engineering plus ML fundamentals, then RAG and serving, then MLOps, cost, and safety so AI features stay reliable.

## Prerequisites

- Strong Python and software engineering fundamentals
- Comfort with APIs, Git, and Linux basics
- Willingness to learn ML concepts even if you are not the primary model designer

## Tools & Technologies

- Python
- PyTorch
- FastAPI
- Docker
- MLflow
- Weights & Biases
- pgvector / Pinecone
- LangChain or equivalent
- Cloud ML services
- pytest

---

## ML Foundations in Python — Beginner

**Goal:** Understand core ML ideas and ship a small inference path, not only a notebook
**Duration:** 4–6 wks

### Python & ML Basics

#### Engineering Python

- Packages, typing, pytest, and logging
- REST APIs with FastAPI
- Docker for a reproducible runtime

#### ML concepts

- Train vs. inference, overfitting, and metrics
- Neural net intuition (enough to debug)
- Using pretrained models before training from scratch

### First AI Features

#### Prompting & APIs

- LLM API calls, tokens, and failure modes
- Prompt engineering with evals, not vibes
- Structured output (JSON) for product features

### Project Work

- FastAPI wrapper around a scikit-learn or pretrained model
- Dockerized hello-inference service
- Prompted classifier or extractor with a tiny eval set

---

## Building AI Systems — Intermediate

**Goal:** Build RAG, embeddings, and model-serving paths with quality checks
**Duration:** 6–8 wks

### Retrieval & Serving

#### RAG

- Chunking, embeddings, and vector search
- Citations and empty-retrieval behavior
- Evaluating answer quality, not only latency

#### Model serving

- Batch vs. online inference
- GPU vs. CPU trade-offs at a practical level
- Versioned model artifacts

### Product Integration

#### APIs in a real app

- Auth, rate limits, and timeouts
- Streaming responses
- Cost dashboards for token spend

### Project Work

- RAG assistant over internal docs (policy, SACCO FAQs, or API docs)
- Embedding index with pgvector or a hosted vector DB
- Eval notebook: faithfulness, latency, and cost

---

## Production ML / AI — Expert

**Goal:** Operate AI features with MLOps, guardrails, and a rollback plan
**Duration:** 8–12 wks

### MLOps

#### Lifecycle

- Experiment tracking (MLflow / W&B)
- Retraining pipelines and promotion gates
- Monitoring quality, drift, and cost

#### Fine-tune vs. prompt

- When fine-tuning is worth it
- Adapters and evaluation harnesses
- Data flywheels from production traces

### Reliability & Safety

#### Guardrails

- Prompt injection and data leakage basics
- PII redaction and allow/deny tools
- Human-in-the-loop for high-stakes actions (payments, loans)

#### Scale

- Latency budgets and caching
- Multi-model routing
- Incident runbooks for bad model versions

### Project Work

- Deployed RAG or scoring feature with monitoring
- Guardrails + evals for a fintech-adjacent assistant
- Write-up: failure modes, cost, and rollback

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._