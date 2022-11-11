# SQL

## Claim

Claim 4 (troubleshooting): Candidate can check query plans to troubleshoot slow queries.

## Claim Behavior (evidence)

Indexes https://docs.microsoft.com/en-us/sql/relational-databases/indexes/clustered-and-nonclustered-indexes-described?view=sql-server-ver15

## Content Target

`Use an index to optimize a MERGE query`

## Cognitive Model

Use

## Item Type

Multiple Choice

## Stem

Given the table `orders (order_id, order_quantity, order_dt, customer_id, product_id)`, which column should be indexed to optimize the performance of *updates* for the query in the code snippet?

## Code Snippet (Optional)

```sql
MERGE INTO orders o
USING source s
ON o.order_id = s.order_id
WHEN MATCHED
  THEN UPDATE SET
    o.order_quantity = s.order_quantity
WHEN NOT MATCHED BY TARGET
  THEN INSERT (order_id, order_quantity, order_dt, customer_id, product_id) VALUES (s.order_id, s.order_quantity, s.order_dt, s.customer_id, s.product_id)
```

## Answer Key

order_id

## Distractors

### 1.

order_quantity

### 2.

product_id

### 3.

order_dt

## Common errors, misconceptions, or irrelevant information (Optional):

### 1.

Indexing `order_quantity` does not improve this query's performance, furthermore, as `order_quantity` is not a unique value, the column is unable to be indexed

### 2.

Indexing `product_id` should improve performance during a join to the product table, but is not relevant to the merge query given

### 3.

Indexing `order_dt` does not improve this query's performance, furthermore, as `order_dt` is not a unique value, the column is unable to be indexed

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
