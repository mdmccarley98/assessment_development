# SQL

## Claim

Claim 1 (Basics): Can pull simple structured data from a table with SELECT...FROM...WHERE queries, basic operations like sums, averages, DISTINCT, GROUP BY. Can perform basic CRUD operations.

## Claim Behavior (evidence)

VIEW https://docs.microsoft.com/en-us/sql/relational-databases/views/views?view=sql-server-ver15

## Content Target

`Use the knowledge of the difference between a view and a table`

## Cognitive Model

Use

## Item Type

Multiple Choice

## Stem

Which would be the best use case to implement a non-materialized view rather than a table?

## Code Snippet (Optional)

```

```

## Answer Key

When an object is required that joins a fact table with a wide dimensional table of rapidly changing dimensions

## Distractors

### 1.

When a new object is required to store data being imported from an external data source

### 2.

When an object is required that is frequently read by many users that also has compute-intensive logic

### 3.

When a new object is required that receives many inserts and updates during the day

## Common errors, misconceptions, or irrelevant information (Optional):

### 1.

A view cannot physically store data, only reference physical tables -- this new data must be landed in a table

### 2.

This use case is better suited to a table, as you only have to execute the compute-heavy logic once for many readers, whereas if the logic is in a view, the compute-intensive logic must execute with each query of the view

### 3.

This use case is irrelevant to using a view

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
