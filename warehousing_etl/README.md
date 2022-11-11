# Data Warehousing and ETL Pipelining - Summary of Claims (WIP)
A candidate who *passes* the Data Warehousing and ETL pipelining badge should be able to competently structure and discuss the architecture of a basic data warehouse and pipeline as demonstrated by evidence for claims 1 and 2.

**Note: This quiz is focused on conceptual understanding and does NOT evaluate platform-specific knowledge or implementations.**

## Claims

### Data Warehousing
- Claim 1: The candidate can understand data warehouse design, database design, schemas, tables, and constraints, and compare the use-cases of different data warehouse architectures.

### ETL Pipelining
- Claim 2: The candidate can understand the features of scheduling, automating, and monitoring ETL pipelines, and compare the use-cases of different data pipeline designs.

## Cognitive Models
- *Recall:* can recall/recognize knowledge (e.g., definitions); can recall a memorized procedure to perform a task
- *Comprehend:* can comprehend/understand knowledge (e.g., how? why?); comprehend procedures to perform a task
- *Use:* can use or apply knowledge in complex task; perform a task

## Content Targets
- Data modeling
    - Database design
    - Normalization/denormalization tradeoffs
    - Schemas – star/snowflake
- Dimensional modeling
- Efficient/optimized Querying
- Data backfilling
- Data warehouse architecture comparing
- Extract
    - Parsing structured (e.g. json) and unstructured data
    - Parsing legacy data? [SME: thoughts?]
    - Staging tiers / operational data stores
- Transform
    - Scheduling and orchestration (what tools are available? why one over another?)
    - Stream processing vs batch processing (use cases, trade-offs)
    - Common business transforms (e.g. re-coding)
    - Basic data cleaning (e.g., common practices or pitfalls)
- Load
    - Auditability, data provenance
    - Handling failure modes (e.g. duplicate or bad data)
    - Data marts & materialized views (what goes in them? how should it be updated?)
- Use cases
    - When to use ETL vs. ELT
    - Data format requirements and their effects on the best pipelining method
    - Time to value considerations
    - Scalability and flexibility benefits

## Score-Level Definitions
- Level 1: The candidate is unfamiliar with data warehousing and the meaning of ETL or only demonstrates a superficial understanding of components and doesn't fully grasp basic concepts like primary or foreign key.
- Level 2: The candidate can understand and use basic components of ETL and their purpose; they understand the concepts of extracting, transforming, and loading data but may struggle to go beyond basic concepts and understand processes such as scheduling and monitoring batch ETL pipelines with complex dependencies.
- Level 3: The candidate has a working knowledge of ETL pipelining and data warehousing; they have a basic understanding of data partitioning, caching, and parallel processing; they understand table dimensions and facts. They may struggle with data granularity, OLAP vs. OLTP and design concepts.
- Level 4: The candidate has a strong knowledge of data warehousing stages, including correctly building datamarts/Enterprise Data Warehouses. They may struggle with design concepts such as slowly changing dimensions and scheduling the right process.
- Level 5: The candidate has a high level understanding of performance optimization, dimensional modeling, OLAP (On-Line Analytical Processing), types of tables, and their use cases; they can perform data quality checks, standardize data, and understand the architecture; they are aware of the latest developments in this field such as data lakes, data lake houses, and other cloud based data warehousing tools. They may struggle with types of batch architectures and picking the right scheduling job.