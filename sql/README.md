# SQL - Summary of Claims

A candidate who _passes_ the language assessment and receives the SQL language badge has demonstrated evidence for all three claims.

**_Note: questions should be DBMS-agnostic if at all possible. If necessary, questions can be specific to one of the common DBMSs (e.g., MySQL, Microsoft SQL Server), but this should be explicitly specified whenever it is the case._**

- Claim 1 (db_design): Understands database design basics and can manage schema objects.
- Claim 2 (queries_and_supporting_constructs): Understands and can implement queries and supporting constructs.
- Claim 3 (optimization): Understands and can implement basic optimization techniques.

## Claim 1: Understands database design basics and can manage schema objects.

### Cognitive Models:

- _Recall_ - can recall/recognize knowledge (e.g., definitions); can recall a memorized procedure to perform a task
- _Comprehend_ - can comprehend/understand knowledge (e.g., how? why?); comprehend procedures to perform a task
- _Use_ - can use or apply knowledge in complex task; perform a task

### Content Targets:

- Tables 
- Views
- Data types and domains
- Entity integrity
- Referential integrity
- ALTER / DROP
- Foreign Keys
- Unique Keys

## Claim 2: Understands and can implement basic queries and supporting constructs.

### Cognitive Models:

- _Recall_ - can recall/recognize knowledge (e.g., definitions); can recall a memorized procedure to perform a task
- _Comprehend_ - can comprehend/understand knowledge (e.g., how? why?); comprehend procedures to perform a task
- _Use_ - can use or apply knowledge in complex task; perform a task

### Content Targets:

#### Basic concepts
- Filtering rows and groups
- Table and expression aliases 
- INSERT / UPDATE / DELETE
- Grouping
- Ordering and limiting result sets 
- Logical operators
- Data type specific functions
- CROSS, INNER, and OUTER joins

#### Advanced concepts
- Window functions
- Ordered set functions 
- Subquery processing
- Set operators
- Query determinism
- Lateral joins
- Cursors
- WITH clause

#### Handling of NULL cases
- COALESCE
- IS NULL
- SQL treatment of NULLs
- DISTINCT FROM


## Claim 3: Understands and can implement basic optimization techniques.

### Cognitive Models:

- _Recall_ - can recall/recognize knowledge (e.g., definitions); can recall a memorized procedure to perform a task
- _Comprehend_ - can comprehend/understand knowledge (e.g., how? why?); comprehend procedures to perform a task
- _Use_ - can use or apply knowledge in complex task; perform a task

### Content Targets:

- Indexes
- Physical implementation of tables
- Materialized views
- SARG
- Processing order performance impact
- Architectural considerations
- Partitioning
- function indexes

## Score-Level Definitions

Candidates with the following scores demonstrate the associated understanding and abilities:

- **Level 1:** The candidate knows the basics of some fundamental concepts, e.g., what a table is and how to query its rows. But they can't answer specific questions about database internals and can't work well with table relationships.
- **Level 2:** The candidate has a high-level understanding of more concepts. They know how to work with multiple tables and understand concepts such as Foreign Keys, work with joins, and some other more advanced constructs according to their practical experience. They can't yet work with subqueries or window functions. They probably can retrieve the needed information most of the time but have no expertise in optimizing or creating new structures well.
- **Level 3:** The candidate has solid practical knowledge of SQL and can achieve goals using multiple approaches. They can create suitable table structures well for simple domains. They know the high-level concept of indexes and try to use them when available. They have no difficulty with subqueries or grouping results.
- **Level 4:** The candidate knows many relevant concepts in-depth and can produce high-quality work autonomously. They can optimize structures or queries for better performance. They use advanced features such as window functions, CTE, or grouping rollup with little difficulty.
- **Level 5:** The candidate has in-depth conceptual and practical knowledge across all assessed areas. They know the ins and outs of advanced topics like index methods, partitioning, and materialized views. They can understand `explain` results to accomplish better results. They can anticipate and act on issues before they turn into problems. They will likely pay attention to commonly overlooked or seemingly nonessential things, arriving at robust and optimal solutions by default. They have experience with multiple databases and adapt to new ones easily.
