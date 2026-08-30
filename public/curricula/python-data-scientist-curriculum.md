# Python for Data Scientists

> From EDA to models that predict — and explanations stakeholders can use

A three-level Python curriculum for Data Scientists. pandas and statistics first, then scikit-learn modeling, then evaluation, fairness, and monitoring so models survive contact with the real world.

## Prerequisites

- Python basics (or complete the analyst Python foundations in parallel)
- High-school algebra; willingness to relearn probability in context
- A public dataset you care about (finance, health, or operations)

## Tools & Technologies

- Python
- Jupyter
- pandas
- NumPy
- scikit-learn
- matplotlib
- seaborn
- SQL
- MLflow
- SHAP

---

## Quantitative Python Foundations — Beginner

**Goal:** Clean data, explore it honestly, and state a question a model could answer
**Duration:** 4–6 wks

### Python for Analysis

#### pandas & NumPy

- DataFrames, joins, and tidy tables
- Vectorized operations vs. Python loops
- Reproducible notebooks and seeds

#### Statistics refresher

- Distributions, sampling, and variance
- Hypothesis testing at a working level
- Confidence intervals and practical significance

### EDA & Features

#### Exploratory analysis

- Univariate and bivariate views
- Leakage, target definition, and train/test splits
- Missingness as a signal

#### Feature engineering

- Encodings, scaling, and datetime features
- Aggregations from event logs
- Writing features so they can be rebuilt in production later

### Project Work

- EDA notebook on a public dataset with a written question
- Baseline descriptive model of churn, default, or demand
- Data dictionary and assumption list

---

## Machine Learning Core — Intermediate

**Goal:** Train, evaluate, and explain supervised models without fooling yourself
**Duration:** 6–8 wks

### Supervised Learning

#### Regression & classification

- Linear/logistic baselines before complex models
- Trees, ensembles, and when they help
- Cross-validation that respects time or groups

#### Evaluation

- Precision, recall, ROC-AUC, and calibration
- Imbalanced data and cost-sensitive choices
- Business metrics vs. leaderboard metrics

### Explainability

#### Why the model said that

- Feature importance and SHAP
- Error analysis by segment
- Communicating limits to non-technical partners

### Project Work

- End-to-end classifier or regressor with a held-out test
- SHAP or error-slice write-up
- Credit/churn/collections model framed for a SACCO or fintech stakeholder

---

## Models in the Real World — Expert

**Goal:** Ship models with monitoring, fairness checks, and a clear recommendation
**Duration:** 8–10 wks

### Applied Modeling

#### Production-minded DS

- MLflow or equivalent experiment tracking
- Feature/store awareness and training-serving skew
- Handoff packages for ML engineers

#### Fairness & drift

- Bias checks on protected and proxy attributes
- Data and concept drift
- Retraining cadence and rollback criteria

### Unsupervised & time

#### Beyond tabular class labels

- Clustering for segmentation
- Time series forecasting basics
- When not to use ML

### Project Work

- End-to-end model on a real or public dataset with documented limitations
- Monitoring sketch: what to watch in production
- Recommendation memo: ship, iterate, or stop

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._