# SQL

## Claim

Claim 2 (Joins and Unions): Can manipulate data from multiple tables at once using left/right/full JOINs and UNION/UNION ALL. Understands the differences among these operations.

## Claim Behavior (evidence)

UNION - https://docs.microsoft.com/en-us/sql/t-sql/language-elements/set-operators-union-transact-sql?view=sql-server-ver15

## Content Target

`Understand the differences between UNION and UNION ALL`

## Cognitive Model

Recall

## Item Type

Multiple Choice

## Stem

What is the difference between the `UNION` and `UNION ALL` operations?

## Code Snippet (Optional)

```

```

## Answer Key

`UNION` drops duplicate records from the dataset, whereas `UNION ALL` does not drop duplicate records

## Distractors

### 1.

`UNION` and `UNION ALL` are synonymous in SQL

### 2.

`UNION` requires all datasets in the `UNION` operation to have the same schema, whereas `UNION ALL` can be used to union datasets with differing schemas

### 3.

`UNION` can only be applied to tables, whereas `UNION ALL` can be used on tables and views

## Common errors, misconceptions, or irrelevant information (Optional):

### 1.

`UNION` and `UNION ALL` are NOT synonymous in SQL

### 2.

Both `UNION` and `UNION ALL` operations require all datasets being unioned to have the same schema

### 3.

Both `UNION` AND `UNION ALL` operations can be performed on tables, views, and `SELECT` statements, as long as all relevant datasets have the same schema

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
