Spark - Summary of Claims (WIP)
==============================

A candidate who passes the Spark assessments and receives the Spark badge … as demonstrated by evidence for all four (4) claims. 

**Notes:**

- Written in Scala, but should be “scala-as-pseudocode” readable by anyone familiar with Spark

- Quiz should **NOT** assume any advance knowledge; nothing beyond basic syntax

- Do **NOT** assume candidate is a regular functional-programmer

- In cases where the usage is not immediately clear, consider comments like:
`// equivalent to foo.bar() in Python.`

- The quiz should be accessible to primary Python and Java users without any particular knowledge of Scala.

- Three variants of the code snippet may be a solution if absolutely necessary

## Claims:
-   Claim 1: Be able to create, deploy, and use Spark to perform distributed computation

-   Claim 2: Understands common pitfalls setting up and running Spark jobs

-   Claim 3: Has some familiarity with robust security and performance optimization running Spark scripts

-   Claim 4: Be able to complete everyday tasks associated with common applications and major use-cases for Spark


Content and Item Specifications (WIP)
=====================================

## Claim 1: Candidate is able to create, deploy, and use Spark to perform distributed computation

## Claim 2: Candidate can understand common pitfalls setting up and running Spark jobs

## Claim 3: Candidate has some familiarity with robust security and performance optimization running Spark scripts

## Claim 4: Candidate is able to complete everyday tasks associated with common applications and major use-cases for Spark

### ***Cognitive Models***:

-   *Recall* - can recall/recognize knowledge (e.g., definitions); can
    recall a memorized procedure to perform a task

-   *Comprehend* - can comprehend/understand knowledge (e.g., how?
    why?); comprehend procedures to perform a task
    
-   *Use* - can use or apply knowledge in complex task; perform a task

### ***Content Targets:***
Spark architecture model (mix of concept questions + “what does this do”-style questions)
* RDDs
* Drivers, executors, tasks
* Partitions, shuffles, and data skew
* Closures (and avoiding associated bugs), shared variables
* Transformations (e.g. map, filter, join) and actions (e.g. reduce, count)

Basic deployment and configuration
* SparkConf and major settings (e.g. resource constraints); not specifics of specific cluster managers (e.g. don’t assume kubernetes)

Satellite topics
* Basic streaming data handling
* Basic GraphX
* Basic SparkSQL and (Spark, not pandas) data frames