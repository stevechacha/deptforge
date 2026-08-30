# Python for Data Analysts

> From spreadsheets to pandas — answers you can trust and present

A three-level Python curriculum for Data Analysts. SQL and visualization stay first-class; Python becomes the tool for cleaning data, automating reports, and going deeper than a spreadsheet allows.

## Prerequisites

- Comfort with spreadsheets (Excel or Google Sheets)
- Basic SQL (SELECT, WHERE, GROUP BY) or willingness to learn it alongside Python
- Curiosity about turning business questions into numbers

## Tools & Technologies

- Python
- Jupyter
- pandas
- NumPy
- matplotlib
- seaborn
- SQL
- Power BI / Tableau
- Excel / Sheets
- Git

---

## Python Analytics Foundations — Beginner

**Goal:** Comfortable using Python to load, clean, and summarize tabular data
**Duration:** 4–6 wks

### Python Prerequisites

#### Python essentials

- Variables, types, functions, and control flow
- Lists, dicts, and comprehensions
- Reading files and working with paths

#### Working environment

- Installing Python and Jupyter (or VS Code notebooks)
- Virtual environments and pip
- Git basics for saving analysis work

### pandas & SQL Core

#### pandas DataFrames

- Loading CSV/Excel into DataFrames
- Selecting, filtering, and sorting
- groupby, aggregations, and merges

#### SQL for analysts

- Joins, aggregations, and window functions
- Querying from Python (sqlite3 / SQLAlchemy)
- When to stay in SQL vs. finish in pandas

#### Cleaning messy data

- Missing values, duplicates, and type coercion
- Parsing dates and categoricals
- Documenting cleaning steps so results are repeatable

### First Charts & Stories

#### Descriptive statistics

- Means, medians, distributions, and outliers
- Correlation vs. causation traps
- Simple comparisons over time

#### Plotting basics

- matplotlib and seaborn for exploratory charts
- Choosing a chart that matches the question
- Exporting figures for a slide or report

### Project Work

- Clean a messy sales CSV and produce a summary table
- Answer 5 business questions with SQL + pandas
- One-page chart pack: trend, mix, and an outlier callout

---

## Reporting & Product Analytics — Intermediate

**Goal:** Build repeatable analyses, dashboards, and stakeholder-ready insights
**Duration:** 6–8 wks

### Visualization at Work

#### Dashboards

- Power BI or Tableau from a clean dataset
- Filters, KPIs, and drill-downs
- Designing for a weekly ops or product review

#### Python reporting

- Parameterized notebooks and helper scripts
- Exporting Excel/CSV for stakeholders
- Scheduling a simple recurring report

### Applied Product Analytics

#### Funnels & retention

- Event data grain (user, session, event)
- Funnel conversion and drop-off
- Cohort and retention tables in pandas

#### Experiments & segments

- Reading A/B test results without overclaiming
- Segmenting users in a way the business can act on
- Sample size and significance at a practical level

### Working with Others

#### From question to query

- Clarifying vague stakeholder asks
- Defining metrics so they do not drift
- Presenting 3 insights, not 30 charts

### Project Work

- Product usage dashboard from sample event data
- Funnel + retention notebook with written insights
- Present 3 actionable findings to a mock stakeholder (SACCO deposits, M-Pesa usage, or app adoption)

---

## Trusted Analytics at Scale — Expert

**Goal:** Own metric definitions, data quality, and analyses that survive scrutiny
**Duration:** 6–8 wks

### Metric Systems

#### Governed metrics

- Single source of truth vs. one-off spreadsheets
- Metric catalogs and documented SQL
- Partnering with data engineering on grain and freshness

### Quality & Automation

#### Analyst engineering

- Reusable Python packages for internal metrics
- Tests on transformations (row counts, uniqueness, ranges)
- Lightweight orchestration of analyst jobs

#### Advanced SQL & pandas

- Window functions and slowly changing dimensions at a working level
- Performance: filters, indexes, and not pulling the whole warehouse
- Joining Python analysis to a warehouse (BigQuery/Snowflake/Redshift)

### Influence

#### Decision-grade communication

- Uncertainty, caveats, and decision options
- Executive vs. operator audiences
- Ethics: PII, consent, and what not to slice

### Project Work

- Metric spec + Python/SQL pipeline for a core KPI (e.g. active members, collection rate)
- Automated weekly pack with quality checks
- Stakeholder readout with recommendation and limitations

---

_Generated from Deptforge curriculum data. Visit the site for the latest version._