import type { Department } from './types';

export const DEPARTMENTS: Department[] = [
  {
    "id": "software-engineering",
    "index": "01",
    "icon": "SE",
    "name": "Software Engineering",
    "short": "Builds the products people actually use — web, mobile, and everything in between.",
    "purpose": "Turn ideas and requirements into working software — the interfaces, services, and apps a company ships to its users.",
    "functions": [
      "UI development",
      "API & service development",
      "Mobile app development",
      "System design & architecture",
      "Code review & testing",
      "Technical documentation"
    ],
    "color": "#C98A2E",
    "roles": [
      {
        "id": "frontend-engineer",
        "name": "Frontend Engineer",
        "tag": "Web & UI",
        "blurb": "Builds the interfaces people click, tap, and scroll through — turning designs into fast, accessible, working screens.",
        "requirements": [
          "Comfort with HTML, CSS, and JavaScript fundamentals",
          "Understanding of how browsers render and how the DOM works",
          "A portfolio of built projects, even small ones, matters more than a degree",
          "Willingness to learn a modern framework (React, Vue, or similar)"
        ],
        "skills": [
          "HTML/CSS & responsive layout",
          "JavaScript (ES6+) & the DOM",
          "A component framework (React/Vue/Angular)",
          "State management",
          "Accessibility (WCAG) basics",
          "Browser dev tools & debugging"
        ],
        "tools": [
          "VS Code",
          "React",
          "Chrome DevTools",
          "Figma (read)",
          "Git/GitHub"
        ],
        "outline": [
          {
            "title": "Foundations",
            "level": "Beginner",
            "dur": "3 wks",
            "topics": [
              "HTML5 semantics & CSS layout (flexbox/grid)",
              "JavaScript fundamentals — variables, functions, arrays, objects",
              "Git & version control basics",
              "How the web works: HTTP, DOM, browser rendering"
            ]
          },
          {
            "title": "Framework Fluency",
            "level": "Beginner → Intermediate",
            "dur": "4 wks",
            "topics": [
              "Component-based architecture with React",
              "State & props, hooks (useState, useEffect)",
              "Fetching and rendering API data",
              "Styling systems (CSS-in-JS, Tailwind, or SCSS)"
            ]
          },
          {
            "title": "Production Practice",
            "level": "Intermediate",
            "dur": "3 wks",
            "topics": [
              "Accessibility & responsive design at scale",
              "Performance basics (lazy loading, bundle size)",
              "Testing components (Jest, React Testing Library)",
              "Working from design files (Figma) to pixel-accurate UI"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2 wks",
            "topics": [
              "Build and deploy a multi-page app consuming a real API",
              "Add accessibility and performance passes",
              "Ship it, then walk someone through the code"
            ]
          }
        ],
        "connects": [
          "backend-engineer",
          "uiux-designer",
          "qa-engineer",
          "fullstack-engineer"
        ]
      },
      {
        "id": "backend-engineer",
        "name": "Backend Engineer",
        "tag": "Server & APIs",
        "blurb": "Builds the services, APIs, and business logic that power everything the frontend and mobile apps display.",
        "requirements": [
          "Solid grasp of at least one backend language (Node.js, Python, Java, or Go)",
          "Understanding of databases — how to model and query data",
          "Basic knowledge of HTTP, REST, and how APIs are structured",
          "Comfort debugging and reading stack traces without panicking"
        ],
        "skills": [
          "A backend language & framework (Node/Express, Django, Spring)",
          "REST/GraphQL API design",
          "Relational & NoSQL databases",
          "Authentication & authorization",
          "Caching & performance basics",
          "Writing tests (unit & integration)"
        ],
        "tools": [
          "Node.js/Python",
          "PostgreSQL",
          "Postman",
          "Docker",
          "Git/GitHub"
        ],
        "outline": [
          {
            "title": "Foundations",
            "level": "Beginner",
            "dur": "3 wks",
            "topics": [
              "Language fundamentals & a backend framework",
              "SQL & relational database design",
              "HTTP fundamentals & REST principles",
              "Git workflows for backend teams"
            ]
          },
          {
            "title": "Building Services",
            "level": "Intermediate",
            "dur": "4 wks",
            "topics": [
              "Designing and building REST APIs",
              "Authentication (sessions, JWT, OAuth)",
              "Working with an ORM & migrations",
              "Error handling & input validation"
            ]
          },
          {
            "title": "Production-Ready Systems",
            "level": "Intermediate → Advanced",
            "dur": "4 wks",
            "topics": [
              "Caching strategies (Redis)",
              "API security basics (rate limiting, injection prevention)",
              "Writing unit & integration tests",
              "Logging & observability basics"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2–3 wks",
            "topics": [
              "Build a REST API with auth, a database, and tests",
              "Containerize it and document the endpoints",
              "Get it reviewed like a real pull request"
            ]
          }
        ],
        "connects": [
          "frontend-engineer",
          "devops-engineer",
          "data-engineer",
          "qa-engineer"
        ]
      },
      {
        "id": "mobile-engineer",
        "name": "Mobile Engineer",
        "tag": "iOS & Android",
        "blurb": "Builds native or cross-platform apps that live on people's phones — where performance and platform quirks both matter.",
        "requirements": [
          "Programming fundamentals in at least one language (Swift, Kotlin, or Dart/JS for cross-platform)",
          "Understanding of mobile UI patterns and platform guidelines (iOS HIG / Material Design)",
          "Comfort working with device constraints — memory, battery, offline states",
          "A published or side-loaded app in a portfolio is a strong signal"
        ],
        "skills": [
          "Swift/Kotlin or React Native/Flutter",
          "Mobile UI patterns & navigation",
          "Local storage & offline-first design",
          "API integration on mobile",
          "App store submission & release process",
          "Push notifications & device APIs"
        ],
        "tools": [
          "Xcode/Android Studio",
          "React Native/Flutter",
          "Firebase",
          "TestFlight/Play Console",
          "Git"
        ],
        "outline": [
          {
            "title": "Foundations",
            "level": "Beginner",
            "dur": "3–4 wks",
            "topics": [
              "Language basics (Swift/Kotlin or Dart)",
              "Mobile UI building blocks & layout systems",
              "Navigation patterns (stacks, tabs, drawers)",
              "Setting up emulators/simulators"
            ]
          },
          {
            "title": "Core App Development",
            "level": "Intermediate",
            "dur": "4 wks",
            "topics": [
              "Consuming REST APIs on mobile",
              "Local persistence (SQLite/Realm/AsyncStorage)",
              "State management for mobile apps",
              "Handling offline & poor-connectivity states"
            ]
          },
          {
            "title": "Platform & Polish",
            "level": "Intermediate → Advanced",
            "dur": "3 wks",
            "topics": [
              "Push notifications & background tasks",
              "Performance profiling on device",
              "Platform-specific guidelines (HIG/Material)",
              "Preparing for app store review"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2–3 wks",
            "topics": [
              "Build and submit an app to TestFlight or a Play Console internal track",
              "Handle at least one offline scenario gracefully",
              "Write release notes and a rollback plan"
            ]
          }
        ],
        "connects": [
          "frontend-engineer",
          "backend-engineer",
          "uiux-designer",
          "qa-engineer"
        ]
      },
      {
        "id": "fullstack-engineer",
        "name": "Full-Stack Engineer",
        "tag": "End-to-End",
        "blurb": "Moves across the whole stack — comfortable wiring a frontend to an API to a database when a small team needs one person who can do it all.",
        "requirements": [
          "Working proficiency across frontend and backend fundamentals",
          "Ability to reason about a feature end-to-end, not just one layer",
          "Comfort context-switching between UI and server-side logic",
          "Prior experience in either frontend or backend helps you ramp faster"
        ],
        "skills": [
          "Frontend framework (React) + backend framework (Node/Django)",
          "Database design & querying",
          "API design across the stack",
          "Deployment basics (CI/CD, hosting)",
          "Debugging across layers",
          "Trade-off judgment (build vs. buy, simplicity vs. scale)"
        ],
        "tools": [
          "React",
          "Node.js/Python",
          "PostgreSQL",
          "Docker",
          "Git/GitHub",
          "Vercel/Render"
        ],
        "outline": [
          {
            "title": "Cross-Stack Foundations",
            "level": "Beginner",
            "dur": "4 wks",
            "topics": [
              "Frontend fundamentals (HTML/CSS/JS/React)",
              "Backend fundamentals (API + database)",
              "Connecting a frontend to a real API",
              "Git workflows for solo & small-team projects"
            ]
          },
          {
            "title": "Building Full Features",
            "level": "Intermediate",
            "dur": "4 wks",
            "topics": [
              "Auth end-to-end (frontend + backend)",
              "Database schema design for a real feature",
              "Handling errors and edge cases across layers",
              "Basic deployment (hosting frontend & backend)"
            ]
          },
          {
            "title": "Shipping Like a Small Team",
            "level": "Intermediate → Advanced",
            "dur": "3 wks",
            "topics": [
              "CI/CD basics for a full-stack app",
              "Monitoring & logging across the stack",
              "Performance trade-offs (client vs. server rendering)",
              "Working with design files & product requirements"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2–3 wks",
            "topics": [
              "Build and deploy a complete feature: UI, API, database, auth, tests",
              "Present the architecture decisions and trade-offs made"
            ]
          }
        ],
        "connects": [
          "frontend-engineer",
          "backend-engineer",
          "product-manager",
          "devops-engineer"
        ]
      }
    ]
  },
  {
    "id": "data-ai",
    "index": "02",
    "icon": "DA",
    "name": "Data & AI",
    "short": "Turns raw data into decisions — and builds the intelligent systems that learn from it.",
    "purpose": "Turn data into insight and build the applied AI/ML systems that power predictions, recommendations, and automation across the product.",
    "functions": [
      "Data analysis & reporting",
      "Data pipeline engineering",
      "Statistical & ML modeling",
      "Applied AI / LLM systems",
      "Data quality & governance"
    ],
    "color": "#4FA382",
    "roles": [
      {
        "id": "data-analyst",
        "name": "Data Analyst",
        "tag": "Analytics",
        "blurb": "Turns raw data into answers — which feature adoption is up, which channel is underperforming, what the trend actually shows.",
        "requirements": [
          "Strong SQL and spreadsheet skills as a baseline",
          "Comfort with at least one visualization tool",
          "Basic statistics — averages, distributions, correlation, not causation traps",
          "Ability to turn a vague business question into a specific data query"
        ],
        "skills": [
          "SQL (joins, aggregations, window functions)",
          "Data visualization (Power BI/Tableau/Looker)",
          "Descriptive statistics",
          "Spreadsheet modeling",
          "Storytelling with data",
          "Python or R basics (a strong plus)"
        ],
        "tools": [
          "SQL",
          "Power BI/Tableau",
          "Excel/Sheets",
          "Python (pandas) — optional"
        ],
        "outline": [
          {
            "title": "Analytics Foundations",
            "level": "Beginner",
            "dur": "3 wks",
            "topics": [
              "SQL from basics to window functions",
              "Statistics fundamentals (mean, distribution, correlation)",
              "Spreadsheet modeling",
              "Turning business questions into queries"
            ]
          },
          {
            "title": "Visualization & Reporting",
            "level": "Intermediate",
            "dur": "3 wks",
            "topics": [
              "Building dashboards in Power BI/Tableau",
              "Choosing the right chart for the story",
              "Automating recurring reports",
              "Presenting to non-technical stakeholders"
            ]
          },
          {
            "title": "Applied Product Analytics",
            "level": "Intermediate",
            "dur": "3 wks",
            "topics": [
              "Funnel & retention analysis",
              "A/B test result interpretation",
              "Segmenting users meaningfully"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2 wks",
            "topics": [
              "Build a product usage dashboard from sample data",
              "Present 3 actionable insights to a mock stakeholder"
            ]
          }
        ],
        "connects": [
          "data-scientist",
          "data-engineer",
          "product-manager"
        ]
      },
      {
        "id": "data-engineer",
        "name": "Data Engineer",
        "tag": "Pipelines & Infra",
        "blurb": "Builds the pipelines that move raw data from apps and services into a warehouse the rest of the company can trust.",
        "requirements": [
          "Strong software engineering fundamentals, especially Python or Java/Scala",
          "Solid SQL and understanding of data modeling (star/snowflake schemas)",
          "Experience with or willingness to learn cloud data platforms",
          "Understanding of ETL/ELT concepts"
        ],
        "skills": [
          "Python/Java for pipeline development",
          "SQL & data warehousing (star schema design)",
          "Orchestration tools (Airflow, dbt)",
          "Cloud data platforms (BigQuery, Redshift, Snowflake)",
          "Data quality & validation",
          "Streaming basics (Kafka) — a plus"
        ],
        "tools": [
          "Airflow",
          "dbt",
          "SQL",
          "Python",
          "Cloud data warehouse"
        ],
        "outline": [
          {
            "title": "Foundations",
            "level": "Beginner",
            "dur": "3 wks",
            "topics": [
              "Advanced SQL & data modeling",
              "Python for automation & scripting",
              "OLTP vs. OLAP concepts",
              "Data warehouse fundamentals"
            ]
          },
          {
            "title": "Pipeline Engineering",
            "level": "Intermediate",
            "dur": "5 wks",
            "topics": [
              "Building ETL/ELT pipelines",
              "Orchestration with Airflow",
              "Data transformation with dbt",
              "Schema changes & data quality checks"
            ]
          },
          {
            "title": "Scale & Reliability",
            "level": "Intermediate → Advanced",
            "dur": "3 wks",
            "topics": [
              "Cloud data warehouses at scale",
              "Incremental loads & change data capture",
              "Monitoring pipeline health & failures"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2–3 wks",
            "topics": [
              "Build a pipeline moving raw event data into a warehouse",
              "Add data quality checks",
              "Document the data lineage"
            ]
          }
        ],
        "connects": [
          "data-analyst",
          "data-scientist",
          "ml-ai-engineer",
          "platform-engineer"
        ]
      },
      {
        "id": "data-scientist",
        "name": "Data Scientist",
        "tag": "Modeling",
        "blurb": "Builds the models that predict churn, recommend products, and score risk — turning historical data into forward-looking decisions.",
        "requirements": [
          "Solid Python (or R) skills including data manipulation and ML libraries",
          "Understanding of statistics and probability at a working level",
          "A portfolio of modeling projects, even from public datasets, is highly valued",
          "Degree in a quantitative field helps, but a strong portfolio can substitute"
        ],
        "skills": [
          "Python (pandas, scikit-learn)",
          "Statistical modeling & hypothesis testing",
          "Machine learning (classification, regression, clustering)",
          "Feature engineering",
          "Model evaluation & explainability",
          "Communicating model results to non-technical audiences"
        ],
        "tools": [
          "Python",
          "Jupyter",
          "scikit-learn",
          "SQL",
          "MLflow"
        ],
        "outline": [
          {
            "title": "Quantitative Foundations",
            "level": "Beginner",
            "dur": "4 wks",
            "topics": [
              "Python for data analysis (pandas, numpy)",
              "Statistics & probability refresher",
              "Exploratory data analysis",
              "Data cleaning & feature engineering"
            ]
          },
          {
            "title": "Machine Learning Core",
            "level": "Intermediate",
            "dur": "5 wks",
            "topics": [
              "Supervised learning: regression & classification",
              "Model evaluation (precision/recall, AUC)",
              "Handling imbalanced data",
              "Model explainability (SHAP, feature importance)"
            ]
          },
          {
            "title": "Applied Modeling",
            "level": "Advanced",
            "dur": "4 wks",
            "topics": [
              "Building an end-to-end predictive model",
              "Fairness & bias considerations",
              "Model monitoring & drift over time"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2–3 wks",
            "topics": [
              "Build an end-to-end model on a real or public dataset",
              "Document assumptions & limitations",
              "Present findings with a recommendation"
            ]
          }
        ],
        "connects": [
          "data-analyst",
          "data-engineer",
          "ml-ai-engineer"
        ]
      },
      {
        "id": "ml-ai-engineer",
        "name": "Machine Learning / AI Engineer",
        "tag": "ML & AI Systems",
        "blurb": "Takes models out of notebooks and puts them into production — building the systems that serve predictions and power AI features at scale.",
        "requirements": [
          "Strong Python and software engineering fundamentals",
          "Understanding of ML fundamentals, even if not the one designing models",
          "Familiarity with how APIs, containers, and cloud services fit together",
          "A fast-growing field — genuine curiosity about LLMs and applied AI systems counts for a lot"
        ],
        "skills": [
          "Python & ML frameworks (PyTorch/TensorFlow)",
          "Model serving & inference APIs",
          "LLM application patterns (RAG, prompting, fine-tuning basics)",
          "MLOps (versioning, monitoring, retraining pipelines)",
          "Vector databases & embeddings",
          "Cost & latency trade-offs in production AI"
        ],
        "tools": [
          "PyTorch",
          "Docker",
          "MLflow/Weights & Biases",
          "Vector DB (Pinecone/pgvector)",
          "Cloud ML services"
        ],
        "outline": [
          {
            "title": "ML Foundations",
            "level": "Beginner",
            "dur": "4 wks",
            "topics": [
              "Python for ML & core ML concepts",
              "Neural network basics",
              "Working with pretrained models",
              "Prompt engineering fundamentals"
            ]
          },
          {
            "title": "Building AI Systems",
            "level": "Intermediate",
            "dur": "5 wks",
            "topics": [
              "Retrieval-augmented generation (RAG)",
              "Embeddings & vector search",
              "Serving models behind an API",
              "Evaluating model output quality"
            ]
          },
          {
            "title": "Production ML/AI",
            "level": "Advanced",
            "dur": "4 wks",
            "topics": [
              "MLOps: versioning, monitoring, retraining",
              "Fine-tuning vs. prompting trade-offs",
              "Cost, latency & reliability at scale",
              "Guardrails & safety for AI features"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "3 wks",
            "topics": [
              "Build and deploy an AI-powered feature (e.g. a RAG assistant)",
              "Add monitoring for output quality and cost",
              "Document failure modes and mitigations"
            ]
          }
        ],
        "connects": [
          "data-scientist",
          "data-engineer",
          "backend-engineer",
          "platform-engineer"
        ]
      }
    ]
  },
  {
    "id": "platform-sre",
    "index": "03",
    "icon": "PS",
    "name": "Platform, Cloud & SRE",
    "short": "Keeps everything running — infrastructure, pipelines, and reliability at scale.",
    "purpose": "Build and operate the infrastructure, pipelines, and reliability practices that let every other team ship fast without things falling over.",
    "functions": [
      "CI/CD & release engineering",
      "Cloud infrastructure",
      "Site reliability & incident response",
      "Observability & monitoring",
      "Infrastructure as code"
    ],
    "color": "#4F86C6",
    "roles": [
      {
        "id": "devops-engineer",
        "name": "DevOps Engineer",
        "tag": "CI/CD & Automation",
        "blurb": "Builds the pipelines and infrastructure that get code from a developer's laptop to production, safely and often.",
        "requirements": [
          "Solid Linux and command-line fundamentals",
          "Understanding of networking basics (DNS, HTTP, load balancing)",
          "Experience with at least one cloud provider (AWS, Azure, or GCP)",
          "Scripting ability (Bash, Python) for automation"
        ],
        "skills": [
          "CI/CD pipelines",
          "Containerization (Docker) & orchestration (Kubernetes)",
          "Infrastructure as Code (Terraform)",
          "Cloud platforms (AWS/Azure/GCP)",
          "Monitoring & alerting",
          "Incident response basics"
        ],
        "tools": [
          "Docker",
          "Kubernetes",
          "Terraform",
          "GitHub Actions/Jenkins",
          "AWS/Azure"
        ],
        "outline": [
          {
            "title": "Foundations",
            "level": "Beginner",
            "dur": "3 wks",
            "topics": [
              "Linux administration & shell scripting",
              "Networking basics",
              "Git workflows for teams",
              "Cloud provider fundamentals"
            ]
          },
          {
            "title": "CI/CD & Containers",
            "level": "Intermediate",
            "dur": "4 wks",
            "topics": [
              "Building CI/CD pipelines",
              "Docker fundamentals & image building",
              "Kubernetes basics — pods, services, deployments",
              "Environment management (dev/staging/prod)"
            ]
          },
          {
            "title": "Infrastructure & Reliability",
            "level": "Advanced",
            "dur": "4 wks",
            "topics": [
              "Infrastructure as Code with Terraform",
              "Monitoring & logging (Prometheus/Grafana)",
              "Incident response & on-call basics",
              "Security hardening for deployed services"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2–3 wks",
            "topics": [
              "Containerize an existing app and deploy via CI/CD",
              "Set up monitoring & alerts",
              "Write a rollback runbook"
            ]
          }
        ],
        "connects": [
          "backend-engineer",
          "platform-engineer",
          "site-reliability-engineer",
          "cloud-engineer"
        ]
      },
      {
        "id": "site-reliability-engineer",
        "name": "Site Reliability Engineer (SRE)",
        "tag": "Reliability",
        "blurb": "Owns uptime — designs systems to fail gracefully, responds when they don't, and turns every incident into something that can't happen the same way twice.",
        "requirements": [
          "Strong systems/software engineering background",
          "Solid Linux, networking, and distributed systems fundamentals",
          "Comfort being on-call and troubleshooting under pressure",
          "Programming ability (Python/Go) for automation and tooling"
        ],
        "skills": [
          "Service level objectives (SLOs/SLIs) & error budgets",
          "Observability (metrics, logs, traces)",
          "Incident response & postmortems",
          "Capacity planning & load testing",
          "Automation & toil reduction",
          "Distributed systems fundamentals"
        ],
        "tools": [
          "Prometheus/Grafana",
          "PagerDuty/Opsgenie",
          "Kubernetes",
          "Terraform",
          "Go/Python"
        ],
        "outline": [
          {
            "title": "Reliability Foundations",
            "level": "Beginner",
            "dur": "3 wks",
            "topics": [
              "Linux & distributed systems basics",
              "SLIs, SLOs, and error budgets explained",
              "Monitoring vs. observability",
              "On-call fundamentals"
            ]
          },
          {
            "title": "Detection & Response",
            "level": "Intermediate",
            "dur": "4 wks",
            "topics": [
              "Building dashboards & alerts that matter",
              "Incident command & communication",
              "Writing blameless postmortems",
              "Reducing alert fatigue"
            ]
          },
          {
            "title": "Engineering for Reliability",
            "level": "Advanced",
            "dur": "4 wks",
            "topics": [
              "Capacity planning & load testing",
              "Chaos engineering basics",
              "Automation to eliminate repetitive toil",
              "Designing for graceful degradation"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2–3 wks",
            "topics": [
              "Define SLOs for a sample service",
              "Run a simulated incident and write the postmortem",
              "Propose an automation to prevent recurrence"
            ]
          }
        ],
        "connects": [
          "devops-engineer",
          "cloud-engineer",
          "platform-engineer",
          "backend-engineer"
        ]
      },
      {
        "id": "cloud-engineer",
        "name": "Cloud Engineer",
        "tag": "Cloud Infrastructure",
        "blurb": "Designs and manages the cloud infrastructure everything else runs on — networks, compute, storage, and the cost of all of it.",
        "requirements": [
          "Hands-on experience with at least one major cloud provider",
          "Understanding of networking (VPCs, subnets, load balancers)",
          "Infrastructure as Code experience, or willingness to learn",
          "A cloud certification (AWS/Azure/GCP associate level) is a strong signal"
        ],
        "skills": [
          "Cloud architecture (compute, storage, networking)",
          "Infrastructure as Code (Terraform/CloudFormation)",
          "Cost optimization & tagging strategy",
          "Identity & access management (IAM)",
          "Multi-region & high-availability design",
          "Cloud security basics"
        ],
        "tools": [
          "AWS/Azure/GCP",
          "Terraform",
          "CloudWatch/Azure Monitor",
          "IAM tooling"
        ],
        "outline": [
          {
            "title": "Cloud Foundations",
            "level": "Beginner",
            "dur": "3 wks",
            "topics": [
              "Core cloud services: compute, storage, networking",
              "IAM & access control fundamentals",
              "Cloud provider certification-aligned study"
            ]
          },
          {
            "title": "Infrastructure as Code",
            "level": "Intermediate",
            "dur": "4 wks",
            "topics": [
              "Terraform fundamentals & state management",
              "Designing VPCs & network topology",
              "High availability & multi-AZ design"
            ]
          },
          {
            "title": "Scale & Cost",
            "level": "Advanced",
            "dur": "4 wks",
            "topics": [
              "Auto-scaling & load balancing",
              "Cost optimization & budget alerts",
              "Multi-region & disaster recovery design"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2–3 wks",
            "topics": [
              "Design and provision infrastructure for a sample app via Terraform",
              "Add auto-scaling and a cost budget alert",
              "Document the architecture diagram"
            ]
          }
        ],
        "connects": [
          "devops-engineer",
          "site-reliability-engineer",
          "cloud-security-engineer",
          "platform-engineer"
        ]
      },
      {
        "id": "platform-engineer",
        "name": "Platform Engineer",
        "tag": "Internal Platforms",
        "blurb": "Builds the internal tools and paved paths that let other engineers ship without reinventing infrastructure every time.",
        "requirements": [
          "Strong software engineering background plus infrastructure experience",
          "Product-minded thinking — engineers are your users",
          "Experience with Kubernetes and cloud-native tooling",
          "Comfort designing APIs and self-service tooling"
        ],
        "skills": [
          "Kubernetes & cloud-native architecture",
          "Internal developer platforms & self-service tooling",
          "API/CLI design for internal tools",
          "Infrastructure as Code",
          "Golden-path & template design",
          "Developer experience (DX) measurement"
        ],
        "tools": [
          "Kubernetes",
          "Terraform",
          "Backstage (or similar)",
          "CI/CD systems",
          "Go/Python"
        ],
        "outline": [
          {
            "title": "Foundations",
            "level": "Beginner",
            "dur": "3 wks",
            "topics": [
              "Kubernetes fundamentals",
              "Cloud-native architecture patterns",
              "Understanding developer workflows end-to-end"
            ]
          },
          {
            "title": "Building Platforms",
            "level": "Intermediate",
            "dur": "4 wks",
            "topics": [
              "Designing self-service infrastructure tooling",
              "Internal developer portals",
              "Templating & golden paths for new services"
            ]
          },
          {
            "title": "Scaling the Platform",
            "level": "Advanced",
            "dur": "4 wks",
            "topics": [
              "Multi-team platform governance",
              "Measuring developer experience & adoption",
              "Cost and reliability trade-offs at platform scale"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2–3 wks",
            "topics": [
              "Build a self-service template for spinning up a new service",
              "Document the golden path",
              "Present adoption metrics to a mock engineering org"
            ]
          }
        ],
        "connects": [
          "devops-engineer",
          "site-reliability-engineer",
          "cloud-engineer",
          "backend-engineer"
        ]
      }
    ]
  },
  {
    "id": "security-engineering",
    "index": "04",
    "icon": "SC",
    "name": "Security Engineering",
    "short": "Protects every system, API, and login from being the weak link.",
    "purpose": "Protect systems, data, and users from attackers — building security into the pipeline instead of bolting it on after launch.",
    "functions": [
      "Application security",
      "Threat detection & response",
      "Offensive security",
      "Cloud & infrastructure security",
      "Governance & compliance"
    ],
    "toolsList": [
      "SIEM systems (e.g. Splunk)",
      "Vulnerability scanners",
      "MFA/IAM tools",
      "Pen-testing kits"
    ],
    "color": "#C9622E",
    "roles": [
      {
        "id": "appsec-engineer",
        "name": "Application Security Engineer",
        "tag": "Application Security",
        "blurb": "Builds security into the software itself — finding and fixing vulnerabilities before attackers do, and helping engineers ship safely by default.",
        "requirements": [
          "Strong software engineering background — you need to read code fluently",
          "Understanding of common vulnerability classes (OWASP Top 10)",
          "Familiarity with secure coding practices in at least one language",
          "Curiosity about how systems break, not just how they work"
        ],
        "skills": [
          "OWASP Top 10 & secure coding",
          "Static & dynamic analysis (SAST/DAST)",
          "Threat modeling",
          "API & authentication security",
          "Dependency & supply chain security",
          "Secure code review"
        ],
        "tools": [
          "Burp Suite",
          "SAST/DAST tools (Semgrep, OWASP ZAP)",
          "Dependency scanners",
          "Git/GitHub"
        ],
        "outline": [
          {
            "title": "Security Foundations",
            "level": "Beginner",
            "dur": "3–4 wks",
            "topics": [
              "OWASP Top 10 & common vulnerability classes",
              "Reading code with a security mindset",
              "Intro to SAST/DAST tooling"
            ]
          },
          {
            "title": "Finding & Fixing Vulnerabilities",
            "level": "Intermediate",
            "dur": "4 wks",
            "topics": [
              "Threat modeling for a feature or service",
              "Secure code review practices",
              "API & authentication security patterns"
            ]
          },
          {
            "title": "Securing the Pipeline",
            "level": "Advanced",
            "dur": "3 wks",
            "topics": [
              "Dependency & supply chain security",
              "Integrating security scans into CI/CD",
              "Working with engineering teams on remediation"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2–3 wks",
            "topics": [
              "Threat-model a sample application",
              "Find and document 3 real vulnerability classes in a test app",
              "Propose fixes and a CI security gate"
            ]
          }
        ],
        "connects": [
          "security-analyst",
          "penetration-tester",
          "backend-engineer",
          "devops-engineer"
        ]
      },
      {
        "id": "security-analyst",
        "name": "Security Analyst (SOC)",
        "tag": "Monitoring & Response",
        "blurb": "Watches systems day to day, catching suspicious activity and responding before small anomalies become real breaches.",
        "requirements": [
          "A foundational certification such as CompTIA Security+ is a strong starting credential",
          "Understanding of networking fundamentals (TCP/IP, firewalls)",
          "Comfort working in a monitoring/alert-driven environment",
          "Curiosity and pattern-recognition instincts"
        ],
        "skills": [
          "Threat monitoring & log analysis",
          "SIEM tools (Splunk, ELK)",
          "Network security fundamentals",
          "Incident triage & response",
          "Vulnerability scanning",
          "Phishing & social engineering detection"
        ],
        "tools": [
          "Splunk",
          "Wireshark",
          "Nessus/OpenVAS",
          "MFA platforms"
        ],
        "outline": [
          {
            "title": "Security Foundations",
            "level": "Beginner",
            "dur": "3–4 wks",
            "topics": [
              "Networking & security fundamentals",
              "CIA triad & common threat types",
              "Intro to SIEM & log analysis",
              "Security+ exam-aligned study"
            ]
          },
          {
            "title": "Detection & Response",
            "level": "Intermediate",
            "dur": "4 wks",
            "topics": [
              "Monitoring dashboards & alert triage",
              "Incident response basics",
              "Vulnerability scanning tools",
              "Phishing & social engineering detection"
            ]
          },
          {
            "title": "Applied Practice",
            "level": "Advanced",
            "dur": "3 wks",
            "topics": [
              "Threat hunting fundamentals",
              "Working with security engineering on remediation",
              "Documenting and escalating incidents"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2–3 wks",
            "topics": [
              "Run a simulated incident response exercise",
              "Write an incident report & remediation plan",
              "Present a security awareness briefing"
            ]
          }
        ],
        "connects": [
          "appsec-engineer",
          "penetration-tester",
          "cloud-security-engineer"
        ]
      },
      {
        "id": "penetration-tester",
        "name": "Penetration Tester",
        "tag": "Offensive Security",
        "blurb": "Thinks like an attacker on purpose — probing systems for real weaknesses before someone with worse intentions finds them first.",
        "requirements": [
          "Solid networking and systems fundamentals",
          "Hands-on practice on platforms like HackTheBox or TryHackMe is highly valued",
          "A certification path (eJPT, OSCP) is a common and respected route in",
          "Ethical grounding — this work requires explicit authorization, always"
        ],
        "skills": [
          "Reconnaissance & enumeration",
          "Web application penetration testing",
          "Network & infrastructure penetration testing",
          "Exploitation frameworks (Metasploit)",
          "Report writing for technical & non-technical audiences",
          "Social engineering awareness (for defense, not offense)"
        ],
        "tools": [
          "Burp Suite",
          "Metasploit",
          "Nmap",
          "Kali Linux",
          "Wireshark"
        ],
        "outline": [
          {
            "title": "Offensive Foundations",
            "level": "Beginner",
            "dur": "4 wks",
            "topics": [
              "Networking, Linux, and scripting fundamentals",
              "Reconnaissance & enumeration techniques",
              "Legal & ethical boundaries of pentesting"
            ]
          },
          {
            "title": "Core Techniques",
            "level": "Intermediate",
            "dur": "4 wks",
            "topics": [
              "Web application testing (OWASP-aligned)",
              "Common exploitation techniques",
              "Using Burp Suite & Metasploit hands-on"
            ]
          },
          {
            "title": "Applied Engagements",
            "level": "Advanced",
            "dur": "4 wks",
            "topics": [
              "Network & infrastructure testing",
              "Privilege escalation techniques",
              "Writing findings as a professional report"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2–3 wks",
            "topics": [
              "Run a full penetration test on a lab environment",
              "Write a client-ready findings report",
              "Present risk ratings and remediation priorities"
            ]
          }
        ],
        "connects": [
          "appsec-engineer",
          "security-analyst",
          "cloud-security-engineer"
        ]
      },
      {
        "id": "cloud-security-engineer",
        "name": "Cloud Security Engineer",
        "tag": "Cloud & Infra Security",
        "blurb": "Locks down the cloud — making sure infrastructure is configured securely by default, not just scanned for problems after the fact.",
        "requirements": [
          "Experience with at least one major cloud provider",
          "Understanding of IAM, networking, and cloud-native security tools",
          "Infrastructure as Code familiarity is a strong plus",
          "A cloud security certification (e.g. AWS Security Specialty) is a strong signal"
        ],
        "skills": [
          "Cloud IAM & least-privilege design",
          "Cloud-native security tooling (GuardDuty, Security Hub)",
          "Infrastructure as Code security scanning",
          "Container & Kubernetes security",
          "Compliance frameworks (SOC 2, ISO 27001)",
          "Incident response in cloud environments"
        ],
        "tools": [
          "AWS Security Hub",
          "Terraform + tfsec",
          "Kubernetes security tools",
          "IAM policy tools"
        ],
        "outline": [
          {
            "title": "Cloud Security Foundations",
            "level": "Beginner",
            "dur": "3 wks",
            "topics": [
              "Cloud IAM & least-privilege principles",
              "Shared responsibility model",
              "Cloud-native security tooling overview"
            ]
          },
          {
            "title": "Securing Infrastructure",
            "level": "Intermediate",
            "dur": "4 wks",
            "topics": [
              "Infrastructure as Code security scanning",
              "Network security in the cloud (security groups, WAF)",
              "Container & Kubernetes security basics"
            ]
          },
          {
            "title": "Compliance & Response",
            "level": "Advanced",
            "dur": "4 wks",
            "topics": [
              "Compliance frameworks (SOC 2, ISO 27001)",
              "Cloud incident response",
              "Automating security guardrails"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2–3 wks",
            "topics": [
              "Audit a sample cloud environment for misconfigurations",
              "Write and apply IaC-based fixes",
              "Present a security posture report"
            ]
          }
        ],
        "connects": [
          "cloud-engineer",
          "appsec-engineer",
          "security-analyst",
          "devops-engineer"
        ]
      }
    ]
  },
  {
    "id": "product-design",
    "index": "05",
    "icon": "PD",
    "name": "Product & Design",
    "short": "Decides what gets built and shapes how it feels to use.",
    "purpose": "Turn user problems into products people actually want — through strategy, research, design, and clear writing.",
    "functions": [
      "Product strategy & roadmapping",
      "UX research",
      "Interface design",
      "Technical & product writing"
    ],
    "color": "#9B72CF",
    "roles": [
      {
        "id": "product-manager",
        "name": "Product Manager",
        "tag": "Product Strategy",
        "blurb": "Decides what gets built next and why — balancing user needs, business strategy, and engineering capacity.",
        "requirements": [
          "Demonstrated ability to prioritize and communicate trade-offs clearly",
          "Comfort reading basic analytics/data to inform decisions",
          "Experience working directly with engineering & design teams is a strong plus",
          "Business, CS, or related background helps, though strong PMs come from many fields"
        ],
        "skills": [
          "Roadmapping & prioritization",
          "Writing clear requirements/user stories",
          "Agile ceremonies (sprint planning, standups, retros)",
          "Basic data analysis & KPI tracking",
          "Stakeholder communication",
          "User research collaboration"
        ],
        "tools": [
          "Jira/Linear",
          "Notion",
          "Figma (read/comment)",
          "Analytics dashboards"
        ],
        "outline": [
          {
            "title": "Product Foundations",
            "level": "Beginner",
            "dur": "2–3 wks",
            "topics": [
              "Product lifecycle & discovery",
              "Writing user stories & acceptance criteria",
              "Prioritization frameworks (RICE, MoSCoW)"
            ]
          },
          {
            "title": "Working the Process",
            "level": "Intermediate",
            "dur": "3 wks",
            "topics": [
              "Agile/Scrum ceremonies",
              "Roadmap communication to leadership",
              "Cross-functional collaboration with design & engineering"
            ]
          },
          {
            "title": "Strategy & Metrics",
            "level": "Advanced",
            "dur": "3 wks",
            "topics": [
              "Defining and tracking KPIs (activation, retention, NPS)",
              "Competitive & market awareness",
              "Balancing user needs with technical constraints"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2 wks",
            "topics": [
              "Write a full PRD for a new feature",
              "Present a roadmap with trade-offs to a mock leadership panel"
            ]
          }
        ],
        "connects": [
          "uiux-designer",
          "frontend-engineer",
          "ux-researcher",
          "fullstack-engineer"
        ]
      },
      {
        "id": "uiux-designer",
        "name": "UI/UX Designer",
        "tag": "Interface Design",
        "blurb": "Shapes how a product looks and feels — turning a rough idea into an interface that's clear, usable, and consistent.",
        "requirements": [
          "A portfolio showing design process, not just final screens",
          "Proficiency with a design tool (Figma is the current standard)",
          "Understanding of visual design principles (typography, color, hierarchy)",
          "Willingness to receive and act on critique"
        ],
        "skills": [
          "UI design & visual systems",
          "Figma (components, auto-layout, prototyping)",
          "Design systems & component libraries",
          "Interaction design & prototyping",
          "Basic usability principles",
          "Collaboration with engineering on handoff"
        ],
        "tools": [
          "Figma",
          "Design systems",
          "Prototyping tools",
          "Whimsical/Miro"
        ],
        "outline": [
          {
            "title": "Design Foundations",
            "level": "Beginner",
            "dur": "3 wks",
            "topics": [
              "Visual design principles: typography, color, layout, hierarchy",
              "Figma fundamentals",
              "Design process: wireframes → mockups → prototypes"
            ]
          },
          {
            "title": "Systems & Interaction",
            "level": "Intermediate",
            "dur": "4 wks",
            "topics": [
              "Building and using a design system",
              "Interaction design & micro-interactions",
              "Prototyping for usability testing"
            ]
          },
          {
            "title": "Working With Product",
            "level": "Advanced",
            "dur": "3 wks",
            "topics": [
              "Collaborating with PMs & engineers",
              "Design handoff & spec documentation",
              "Accessibility in visual design"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2 wks",
            "topics": [
              "Design a complete feature flow with a design system",
              "Prototype it and run a quick usability test",
              "Present the rationale behind key decisions"
            ]
          }
        ],
        "connects": [
          "product-manager",
          "ux-researcher",
          "frontend-engineer"
        ]
      },
      {
        "id": "ux-researcher",
        "name": "UX Researcher",
        "tag": "User Research",
        "blurb": "Finds out what users actually need — before the team spends months building the wrong thing.",
        "requirements": [
          "Understanding of qualitative & quantitative research methods",
          "Comfort conducting interviews and synthesizing findings",
          "A background in psychology, HCI, sociology, or similar is common but not required",
          "Ability to present findings that actually change decisions"
        ],
        "skills": [
          "User interviews & usability testing",
          "Survey design & analysis",
          "Research synthesis & affinity mapping",
          "Persona & journey mapping",
          "Presenting insights to stakeholders",
          "Basic statistics for quantitative research"
        ],
        "tools": [
          "UserTesting/Lookback",
          "Figma (for prototypes)",
          "Survey tools (Typeform)",
          "Miro/FigJam"
        ],
        "outline": [
          {
            "title": "Research Foundations",
            "level": "Beginner",
            "dur": "3 wks",
            "topics": [
              "Qualitative vs. quantitative research methods",
              "Writing a research plan & discussion guide",
              "Recruiting participants"
            ]
          },
          {
            "title": "Running Research",
            "level": "Intermediate",
            "dur": "4 wks",
            "topics": [
              "Conducting user interviews",
              "Usability testing sessions",
              "Survey design & analysis"
            ]
          },
          {
            "title": "Synthesis & Influence",
            "level": "Advanced",
            "dur": "3 wks",
            "topics": [
              "Affinity mapping & thematic analysis",
              "Journey & persona mapping",
              "Presenting findings that drive product decisions"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2 wks",
            "topics": [
              "Run a full research study on a sample product question",
              "Synthesize findings into a report",
              "Present recommendations to a mock product team"
            ]
          }
        ],
        "connects": [
          "product-manager",
          "uiux-designer",
          "data-analyst"
        ]
      },
      {
        "id": "technical-writer",
        "name": "Technical Writer",
        "tag": "Docs & Content",
        "blurb": "Turns complex systems into documentation people can actually follow — API docs, user guides, and internal runbooks.",
        "requirements": [
          "Strong writing skills and the ability to explain technical concepts simply",
          "Comfort reading code or technical specs, even without writing production code",
          "Experience with a documentation tool or static site generator is a plus",
          "A writing portfolio or sample docs matter more than formal credentials"
        ],
        "skills": [
          "Technical writing & information architecture",
          "API documentation (OpenAPI/Swagger)",
          "Markdown & docs-as-code workflows",
          "Style guide development & consistency",
          "Working with SMEs to extract accurate information",
          "Basic understanding of the systems being documented"
        ],
        "tools": [
          "Markdown/Docusaurus",
          "Git/GitHub",
          "Swagger/OpenAPI",
          "Notion/Confluence"
        ],
        "outline": [
          {
            "title": "Writing Foundations",
            "level": "Beginner",
            "dur": "3 wks",
            "topics": [
              "Technical writing principles & plain language",
              "Information architecture for documentation",
              "Docs-as-code workflows (Markdown + Git)"
            ]
          },
          {
            "title": "Documenting Systems",
            "level": "Intermediate",
            "dur": "3 wks",
            "topics": [
              "API documentation with OpenAPI/Swagger",
              "Writing user guides & onboarding docs",
              "Interviewing engineers to extract accurate detail"
            ]
          },
          {
            "title": "Scaling Documentation",
            "level": "Advanced",
            "dur": "3 wks",
            "topics": [
              "Style guides & consistency across a docs set",
              "Versioning docs alongside releases",
              "Measuring documentation effectiveness"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2 wks",
            "topics": [
              "Document a real or sample API end-to-end",
              "Write a getting-started guide for a new user",
              "Get it reviewed by an engineer for accuracy"
            ]
          }
        ],
        "connects": [
          "backend-engineer",
          "product-manager",
          "qa-engineer"
        ]
      }
    ]
  },
  {
    "id": "quality-engineering",
    "index": "06",
    "icon": "QE",
    "name": "Quality Engineering",
    "short": "Makes sure what ships actually works — bugs caught, checks automated, releases predictable.",
    "purpose": "Catch problems before users do, automate the checks that make releases predictable, and keep the whole pipeline honest.",
    "functions": [
      "Manual & exploratory testing",
      "Test automation",
      "Performance testing",
      "Release management"
    ],
    "color": "#C9A227",
    "roles": [
      {
        "id": "qa-engineer",
        "name": "QA Engineer",
        "tag": "Manual & Exploratory",
        "blurb": "Finds the bugs before users do — thinking through edge cases, weird inputs, and the paths nobody planned for.",
        "requirements": [
          "Attention to detail and a systematic, investigative mindset",
          "Understanding of the software development lifecycle",
          "Ability to write clear, reproducible bug reports",
          "No formal degree required — a portfolio of test cases or bug reports helps"
        ],
        "skills": [
          "Test case design & exploratory testing",
          "Bug reporting & triage",
          "Understanding of SDLC & Agile testing",
          "Basic SQL for data verification",
          "Cross-browser/device testing",
          "Regression testing"
        ],
        "tools": [
          "Jira/TestRail",
          "Browser dev tools",
          "Postman",
          "SQL"
        ],
        "outline": [
          {
            "title": "Testing Foundations",
            "level": "Beginner",
            "dur": "2–3 wks",
            "topics": [
              "SDLC & where testing fits in",
              "Test case design techniques",
              "Writing clear, reproducible bug reports"
            ]
          },
          {
            "title": "Structured Testing",
            "level": "Intermediate",
            "dur": "3 wks",
            "topics": [
              "Exploratory testing techniques",
              "Regression & smoke testing",
              "Cross-browser/device testing basics"
            ]
          },
          {
            "title": "Working With the Team",
            "level": "Advanced",
            "dur": "3 wks",
            "topics": [
              "API testing with Postman",
              "Basic SQL for data verification",
              "Collaborating with engineering on fixes"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2 wks",
            "topics": [
              "Write a test plan for a sample feature",
              "Execute it and log bugs with full repro steps",
              "Present a test summary report"
            ]
          }
        ],
        "connects": [
          "automation-engineer",
          "backend-engineer",
          "frontend-engineer",
          "release-manager"
        ]
      },
      {
        "id": "automation-engineer",
        "name": "Automation Engineer (SDET)",
        "tag": "Test Automation",
        "blurb": "Writes the automated tests that catch regressions on every build — turning manual test cases into a safety net that runs itself.",
        "requirements": [
          "Solid programming fundamentals in at least one language",
          "Understanding of testing pyramids (unit, integration, e2e)",
          "Experience with a test automation framework, or strong willingness to learn one",
          "QA experience helps but strong developers can transition in"
        ],
        "skills": [
          "Test automation frameworks (Selenium/Playwright/Cypress)",
          "Programming for test scripts (JavaScript/Python/Java)",
          "API test automation",
          "CI/CD integration for test suites",
          "Test data management",
          "Debugging flaky tests"
        ],
        "tools": [
          "Playwright/Cypress",
          "Selenium",
          "Postman/RestAssured",
          "GitHub Actions/Jenkins"
        ],
        "outline": [
          {
            "title": "Automation Foundations",
            "level": "Beginner",
            "dur": "3 wks",
            "topics": [
              "Programming fundamentals for testing",
              "Testing pyramid: unit, integration, e2e",
              "Intro to a test automation framework"
            ]
          },
          {
            "title": "Building Test Suites",
            "level": "Intermediate",
            "dur": "4 wks",
            "topics": [
              "Writing UI automation with Playwright/Cypress",
              "API test automation",
              "Test data management & fixtures"
            ]
          },
          {
            "title": "Scaling Automation",
            "level": "Advanced",
            "dur": "4 wks",
            "topics": [
              "Integrating tests into CI/CD",
              "Reducing flaky tests",
              "Parallelization & test suite performance"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2–3 wks",
            "topics": [
              "Build an automated test suite for a sample app",
              "Wire it into a CI pipeline",
              "Document flaky test triage steps"
            ]
          }
        ],
        "connects": [
          "qa-engineer",
          "devops-engineer",
          "performance-engineer"
        ]
      },
      {
        "id": "performance-engineer",
        "name": "Performance Engineer",
        "tag": "Performance & Load",
        "blurb": "Makes sure systems hold up under real-world load — finding the breaking point before users do.",
        "requirements": [
          "Programming fundamentals and understanding of system architecture",
          "Familiarity with load testing tools, or willingness to learn one",
          "Understanding of how to read performance metrics (latency, throughput)",
          "Curiosity about how systems behave under stress"
        ],
        "skills": [
          "Load & stress testing (JMeter/k6/Gatling)",
          "Performance metrics & profiling",
          "Identifying bottlenecks (DB, network, app layer)",
          "Capacity planning collaboration with SRE",
          "Reading APM tooling (New Relic/Datadog)",
          "Reporting performance findings clearly"
        ],
        "tools": [
          "k6/JMeter",
          "Grafana",
          "New Relic/Datadog",
          "SQL"
        ],
        "outline": [
          {
            "title": "Performance Foundations",
            "level": "Beginner",
            "dur": "3 wks",
            "topics": [
              "What affects performance: latency, throughput, concurrency",
              "Load testing tool basics (k6/JMeter)",
              "Reading performance dashboards"
            ]
          },
          {
            "title": "Running Load Tests",
            "level": "Intermediate",
            "dur": "4 wks",
            "topics": [
              "Designing realistic load test scenarios",
              "Identifying bottlenecks across the stack",
              "Working with APM tools"
            ]
          },
          {
            "title": "Applied Capacity Planning",
            "level": "Advanced",
            "dur": "3 wks",
            "topics": [
              "Collaborating with SRE on capacity planning",
              "Performance budgets & regression testing",
              "Reporting findings to engineering leadership"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2 wks",
            "topics": [
              "Run a load test against a sample service",
              "Identify and document a real bottleneck",
              "Present a capacity recommendation"
            ]
          }
        ],
        "connects": [
          "automation-engineer",
          "site-reliability-engineer",
          "backend-engineer"
        ]
      },
      {
        "id": "release-manager",
        "name": "Release Manager",
        "tag": "Release Management",
        "blurb": "Owns the process of getting tested code out the door — coordinating who ships what, when, and how it gets rolled back if it breaks.",
        "requirements": [
          "Understanding of software development & release lifecycles",
          "Strong coordination and communication skills across teams",
          "Familiarity with CI/CD concepts and version control",
          "Comfort making calls under time pressure during a release"
        ],
        "skills": [
          "Release planning & coordination",
          "CI/CD pipeline oversight",
          "Version control & branching strategies",
          "Risk assessment for releases",
          "Rollback & incident coordination",
          "Cross-team communication"
        ],
        "tools": [
          "Jira/Linear",
          "GitHub Actions/Jenkins",
          "Slack/release channels",
          "Changelogs & release notes tooling"
        ],
        "outline": [
          {
            "title": "Release Foundations",
            "level": "Beginner",
            "dur": "2–3 wks",
            "topics": [
              "Software release lifecycles",
              "Branching strategies (trunk-based, GitFlow)",
              "Understanding CI/CD pipelines"
            ]
          },
          {
            "title": "Coordinating Releases",
            "level": "Intermediate",
            "dur": "3 wks",
            "topics": [
              "Release planning & scheduling",
              "Go/no-go criteria & risk assessment",
              "Writing clear release notes"
            ]
          },
          {
            "title": "Managing Incidents",
            "level": "Advanced",
            "dur": "3 wks",
            "topics": [
              "Rollback procedures & feature flags",
              "Coordinating incident response during a bad release",
              "Post-release review process"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2 wks",
            "topics": [
              "Plan and coordinate a mock release across teams",
              "Write the go/no-go checklist",
              "Run a simulated rollback and document it"
            ]
          }
        ],
        "connects": [
          "devops-engineer",
          "qa-engineer",
          "site-reliability-engineer"
        ]
      }
    ]
  },
  {
    "id": "it-operations",
    "index": "07",
    "icon": "IO",
    "name": "IT Operations & Support",
    "short": "Keeps the people behind the systems working — networks, tooling, and the first line of help.",
    "purpose": "Keep internal systems, networks, and the people using them running smoothly — often the first job in tech, and the widest door in.",
    "functions": [
      "Technical support",
      "Systems administration",
      "Network engineering",
      "IT asset & access management"
    ],
    "color": "#7A8CA6",
    "roles": [
      {
        "id": "it-support-engineer",
        "name": "IT Support / Helpdesk Engineer",
        "tag": "Helpdesk & Support",
        "blurb": "The first line of technical help — solving day-to-day issues so everyone else can keep working.",
        "requirements": [
          "Comfort troubleshooting hardware, software, and account issues",
          "Strong communication skills — explaining fixes to non-technical people",
          "A CompTIA A+ certification or equivalent is a common (not mandatory) starting point",
          "Patience — this role is often the first job in tech, and that's a feature, not a flaw"
        ],
        "skills": [
          "Hardware & OS troubleshooting (Windows/Mac)",
          "Ticketing systems & SLAs",
          "Basic networking troubleshooting",
          "Account & access management",
          "Customer service & clear communication",
          "Documentation of common fixes"
        ],
        "tools": [
          "Ticketing system (Zendesk/Jira Service Desk)",
          "Remote support tools",
          "Active Directory/Google Workspace admin"
        ],
        "outline": [
          {
            "title": "Support Foundations",
            "level": "Beginner",
            "dur": "2 wks",
            "topics": [
              "OS & hardware fundamentals (Windows/Mac)",
              "Ticketing systems & SLA basics",
              "Communication skills for technical support"
            ]
          },
          {
            "title": "Troubleshooting",
            "level": "Intermediate",
            "dur": "3 wks",
            "topics": [
              "Common hardware & software issue diagnosis",
              "Basic networking troubleshooting (Wi-Fi, VPN)",
              "Account & access issue resolution"
            ]
          },
          {
            "title": "Systems Exposure",
            "level": "Advanced",
            "dur": "3 wks",
            "topics": [
              "Active Directory/Google Workspace admin basics",
              "Escalation paths to sysadmin/network teams",
              "Building a personal knowledge base of fixes"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2 wks",
            "topics": [
              "Resolve a batch of simulated support tickets within SLA",
              "Write documentation for 3 common issues",
              "Present an escalation for one unresolved issue"
            ]
          }
        ],
        "connects": [
          "systems-administrator",
          "network-engineer"
        ]
      },
      {
        "id": "systems-administrator",
        "name": "Systems Administrator",
        "tag": "Systems Administration",
        "blurb": "Keeps servers, accounts, and internal systems running — the quiet, essential work that most people only notice when it breaks.",
        "requirements": [
          "Solid understanding of operating systems (Linux and/or Windows Server)",
          "Networking fundamentals and basic scripting ability",
          "Experience managing user accounts, permissions, and access control",
          "A relevant certification (CompTIA Server+, RHCSA) is a strong plus"
        ],
        "skills": [
          "Linux/Windows Server administration",
          "Scripting for automation (Bash/PowerShell)",
          "Backup & disaster recovery",
          "Identity & access management",
          "Patch management & system hardening",
          "Virtualization basics"
        ],
        "tools": [
          "Linux/Windows Server",
          "Active Directory",
          "Backup tooling",
          "Virtualization (VMware/Hyper-V)"
        ],
        "outline": [
          {
            "title": "Admin Foundations",
            "level": "Beginner",
            "dur": "3 wks",
            "topics": [
              "Linux/Windows Server fundamentals",
              "User & permission management",
              "Scripting basics for automation"
            ]
          },
          {
            "title": "Core Operations",
            "level": "Intermediate",
            "dur": "4 wks",
            "topics": [
              "Backup & disaster recovery planning",
              "Patch management & system hardening",
              "Virtualization fundamentals"
            ]
          },
          {
            "title": "Reliability & Security",
            "level": "Advanced",
            "dur": "3 wks",
            "topics": [
              "Identity & access management at scale",
              "Monitoring system health",
              "Working with security on hardening standards"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2 wks",
            "topics": [
              "Set up and harden a sample server environment",
              "Configure automated backups",
              "Document the disaster recovery plan"
            ]
          }
        ],
        "connects": [
          "it-support-engineer",
          "network-engineer",
          "cloud-security-engineer"
        ]
      },
      {
        "id": "network-engineer",
        "name": "Network Engineer",
        "tag": "Networking",
        "blurb": "Designs and maintains the networks that everything else depends on — from office Wi-Fi to the links between data centers.",
        "requirements": [
          "Strong understanding of networking fundamentals (TCP/IP, routing, switching)",
          "A networking certification (CompTIA Network+, CCNA) is a common and respected path in",
          "Hands-on practice with network hardware or simulators (Packet Tracer, GNS3)",
          "A troubleshooting mindset — networks fail in genuinely weird ways"
        ],
        "skills": [
          "Routing & switching (CCNA-level)",
          "Network security fundamentals (firewalls, VPNs)",
          "Network monitoring & troubleshooting",
          "Wireless network design",
          "Cloud networking basics (VPCs, peering)",
          "Documentation of network topology"
        ],
        "tools": [
          "Cisco/Juniper hardware or simulators",
          "Wireshark",
          "Network monitoring tools",
          "Firewall management"
        ],
        "outline": [
          {
            "title": "Networking Foundations",
            "level": "Beginner",
            "dur": "3–4 wks",
            "topics": [
              "TCP/IP & the OSI model",
              "Routing & switching fundamentals",
              "CCNA-aligned study"
            ]
          },
          {
            "title": "Building Networks",
            "level": "Intermediate",
            "dur": "4 wks",
            "topics": [
              "Network design for offices & data centers",
              "Wireless network configuration",
              "Firewall & VPN configuration"
            ]
          },
          {
            "title": "Cloud & Monitoring",
            "level": "Advanced",
            "dur": "3 wks",
            "topics": [
              "Cloud networking (VPCs, peering, load balancers)",
              "Network monitoring & troubleshooting tools",
              "Documenting network topology"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2–3 wks",
            "topics": [
              "Design a network topology for a sample office/data center",
              "Configure it in a simulator",
              "Document the design and failure recovery plan"
            ]
          }
        ],
        "connects": [
          "systems-administrator",
          "cloud-engineer",
          "cloud-security-engineer"
        ]
      },
      {
        "id": "solutions-engineer",
        "name": "Solutions Engineer",
        "tag": "Pre-Sales & Solutions",
        "blurb": "Sits between sales and engineering — showing prospective customers how the product actually solves their problem, technically and credibly.",
        "requirements": [
          "Technical background (engineering, support, or similar) plus strong communication skills",
          "Comfort presenting to both technical and business audiences",
          "Ability to scope integrations and answer technical questions on the fly",
          "Sales experience is a plus, not a requirement — technical credibility matters more"
        ],
        "skills": [
          "Technical demos & proof-of-concepts",
          "API/integration scoping",
          "Objection handling for technical concerns",
          "Cross-functional work with sales & product",
          "Writing technical proposals",
          "Basic scripting for demo environments"
        ],
        "tools": [
          "CRM (Salesforce)",
          "API testing tools (Postman)",
          "Demo/sandbox environments",
          "Presentation tools"
        ],
        "outline": [
          {
            "title": "Solutions Foundations",
            "level": "Beginner",
            "dur": "2–3 wks",
            "topics": [
              "Understanding the product's technical architecture",
              "Basics of the sales cycle & where solutions engineering fits",
              "Building a first demo script"
            ]
          },
          {
            "title": "Running Engagements",
            "level": "Intermediate",
            "dur": "3 wks",
            "topics": [
              "Delivering technical demos",
              "Scoping integrations & answering technical objections",
              "Working with a sandbox/demo environment"
            ]
          },
          {
            "title": "Complex Deals",
            "level": "Advanced",
            "dur": "3 wks",
            "topics": [
              "Writing technical proposals & SOWs",
              "Handling security & compliance questions from prospects",
              "Partnering with product on customer feedback loops"
            ]
          },
          {
            "title": "Capstone",
            "level": "Applied",
            "dur": "2 wks",
            "topics": [
              "Build and deliver a full demo for a mock prospect",
              "Write a technical proposal addressing their stated needs",
              "Handle a mock objection Q&A"
            ]
          }
        ],
        "connects": [
          "product-manager",
          "backend-engineer",
          "it-support-engineer"
        ]
      }
    ]
  }
];
