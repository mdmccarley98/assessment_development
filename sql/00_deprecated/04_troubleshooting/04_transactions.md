# SQL

## Claim

Claim 4 (troubleshooting): Candidate can check query plans to troubleshoot slow queries.

## Claim Behavior (evidence)

- TRANSACTION https://docs.microsoft.com/en-us/sql/t-sql/language-elements/begin-transaction-transact-sql?view=sql-server-ver15

## Content Target

`Understand the atomicity of a transaction`

## Cognitive Model

Comprehend

## Item Type

Multiple Choice

## Stem

Consider the following table: `orders (order_id, qty)` where there exists a row with an `order_id` of `00328` with a corresponding `qty` of `3`.  You run the query from the code snippet, which fails during the execution of `UPDATE orders SET qty = 1 WHERE order_id = '00328'`.  After the command fails, what is the resultant value of the `qty` column for `order_id = 00328`

## Code Snippet (Optional)

```sql
/**
Pre-transaction state:
orders
order_id  qty
--------  ---
00328     3

**/

BEGIN TRANSACTION
  UPDATE orders SET qty = 0 WHERE order_id = '00328'
  UPDATE orders SET qty = 1 WHERE order_id = '00328' --SYSTEM FAILURE HERE
  UPDATE orders SET qty = 2 WHERE order_id = '00328'
COMMIT TRANSACTION
```

## Answer Key

3

## Distractors

### 1.

0

### 2.

1

### 3.

2

## Common errors, misconceptions, or irrelevant information (Optional):

When a transaction fails, all values are in the same state as before the transaction began

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
