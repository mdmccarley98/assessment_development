# SQL

## Claim

Claim 3 (Subqueries and Filtering): Can filter to relevant rows using IN, EXISTS, WITH statements and extract information using window functions.

## Claim Behavior (evidence)

NOT IN - https://docs.microsoft.com/en-us/sql/t-sql/language-elements/not-transact-sql?view=sql-server-ver15

## Content Target

`Use analytical functions on a window`

## Cognitive Model

Use

## Item Type

Multiple Choice

## Stem

Which function can be used to replace the `FUNC()` function in the code snippet to give a value of `2` for `new_col` for the row where `order_id = 00329` from the given `orders` table?

```sql
/**
orders
order_id  item_id  qty  order_dt
--------  -------  ---  ------------
00324     001347   5    "2021-01-10"
00325     001347   3    "2021-01-10"
00326     001693   7    "2021-01-10"
00327     001991   1    "2021-01-10"
00328     003420   3    "2021-01-11"
00329     001347   4    "2021-01-11"

result
order_id  new_col
--------  -------
...
00329     2
...

**/
--query
SELECT
  order_id,
  FUNC() --replace FUNC() with a function from the options that returns a value of 2 for this new_col for the row where order_id = 00329
    OVER (PARTITION BY item_id ORDER BY order_dt) AS new_col
FROM orders t

```

## Answer Key

DENSE_RANK()

## Distractors

### 1.

NTILE()

### 2.

RANK()

### 3.

ROW_NUMBER()

## Common errors, misconceptions, or irrelevant information (Optional):

### 1.

NTILE() requires an argument

### 2.

RANK() gives a value of `3`

### 3.

ROW_NUMBER() gives a value of `3`

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
