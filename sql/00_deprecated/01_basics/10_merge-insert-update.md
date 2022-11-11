# SQL

## Claim

Claim 1 (Basics): Can pull simple structured data from a table with SELECT...FROM...WHERE queries, basic operations like sums, averages, DISTINCT, GROUP BY. Can perform basic CRUD operations.

## Claim Behavior (evidence)

MERGE https://docs.microsoft.com/en-us/sql/t-sql/statements/merge-transact-sql?view=sql-server-ver15

## Content Target

`Understand when to use a MERGE statement over others`

## Cognitive Model

Understand

## Item Type

Multiple Choice

## Stem

Suppose you have a requirement to use a source table to make changes to a target table once per day.  The source table contains data that is used to create new records, as well as modify existing records in the target table.  Which SQL statement can be used to solve this requirement?

## Code Snippet (Optional)

```

```

## Answer Key

`MERGE`

## Distractors

### 1.

`INSERT`

### 2.

`UPDATE`

### 3.

`SELECT INTO`

## Common errors, misconceptions, or irrelevant information (Optional):

### 1.

`INSERT` cannot update existing records

### 2.

`UPDATE` cannot insert new records

### 3.

`SELECT INTO` cannot update existing records

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
