# SQL

## Claim

Claim 2 (Joins and Unions): Can manipulate data from multiple tables at once using left/right/full JOINs and UNION/UNION ALL. Understands the differences among these operations.

## Claim Behavior (evidence)

CROSS JOIN - https://docs.microsoft.com/en-us/u-sql/statements-and-expressions/select/from/joins/cross-join

## Content Target

`Understanding a CROSS JOIN to produce the cartesian product`

## Cognitive Model

Comprehend

## Item Type

Multiple Choice

## Stem

Table `size` has 20 records and table `color` has 15.  If these two tables are joined in a `CROSS JOIN` as shown in the code snippet, how many rows will the result set contain?

## Code Snippet (Optional)

```sql
SELECT s.size, c.color
FROM size s
CROSS JOIN color c
```

## Answer Key

300

## Distractors

### 1.

35

### 2.

20

### 3.

The number of rows is equal to the number of rows with a matching join key

## Common errors, misconceptions, or irrelevant information (Optional):

### 1.

35 is the number of records of each table added together, not the cartesian product

### 2.

20 is the number of records in the `size` table, not the result of a `CROSS JOIN` on the two given tables

### 3.

No join key is used in the code snippet

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
