# SQL

## Claim

Claim 4 (troubleshooting): Candidate can check query plans to troubleshoot slow queries.

## Claim Behavior (evidence)

Clustered and Non-clustered Indexes https://docs.microsoft.com/en-us/sql/relational-databases/indexes/clustered-and-nonclustered-indexes-described?view=sql-server-ver15

## Content Target

`Recall the differences between clustered and non-clustered indexes`

## Cognitive Model

Recall

## Item Type

Multiple Choice

## Stem

What is a key difference between clustered and non-clustered indexes?

## Code Snippet (Optional)

```

```

## Answer Key

A table is physically sorted and stored by a clustered index key value, whereas a non-clustered index only contains a reference to the location of a table's row

## Distractors

### 1.

The values of a clustered index key must be unique for a table, whereas there is no uniqueness constraint for the values of a non-clustered index key

### 2.

Only one non-clustered index can be applied to a single table, whereas multiple clustered indexes can be applied to a single table

### 3.

Clustered indexes are only stored in B-trees, whereas non-clustered indexes are only stored in hash tables

## Common errors, misconceptions, or irrelevant information (Optional):

### 1.

Both non-clustered and clustered indexes have a uniqueness constraint

### 2.

The opposite is true

### 3.

The data structure implemented for an index is usually determined at the DBMS level

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
