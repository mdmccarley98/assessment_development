# SQL

## Claim

Claim 3 (Subqueries and Filtering): Can filter to relevant rows using IN, EXISTS, WITH statements and extract information using window functions.

## Claim Behavior (evidence)

- CTE - https://docs.microsoft.com/en-us/sql/t-sql/queries/with-common-table-expression-transact-sql?view=sql-server-ver15
- OVER (window/analytic function) - https://docs.microsoft.com/en-us/sql/t-sql/queries/select-over-clause-transact-sql?view=sql-server-ver15

## Content Target

`Use of a window function on a CTE to determine top *n* results of a category`

## Cognitive Model

Use

## Item Type

Multiple Choice

## Stem

Complete the query in the code snippet to find the top 10 employees who have the `highest` total sales amount by region.

## Code Snippet (Optional)

```sql
WITH employee_sales AS
(
  SELECT
    e.employee_id,
    e.employee_name,
    s.region,
    sum(s.sales_amt) AS total_sales_amt
  FROM employee e
  LEFT JOIN sales s
  ON e.employee_id = s.salesperson_id
  GROUP BY e.employee_id, e.employee_name, s.region
),
region_rank AS
(
  SELECT
    employee_id,
    employee_name,
    region,
    total_sales_amt,
    -- Answer goes here
  FROM employee_sales
)
SELECT
  employee_id,
  employee_name,
  region,
  total_sales_amt,
  sales_rank
FROM region_rank
WHERE sales_rank <= 10
ORDER BY region, sales_rank DESC
```

## Answer Key

```sql
RANK() OVER (PARTITION BY region ORDER BY total_sales_amt DESC) AS sales_rank
```

## Distractors

### 1.

```sql
RANK() OVER (PARTITION BY region ORDER BY total_sales_amt ASC) AS sales_rank
```

### 2.

```sql
RANK() OVER (PARTITION BY employee_id ORDER BY total_sales_amt DESC) AS sales_rank
```

### 3.

```sql
RANK() OVER (PARTITION BY employee_id ORDER BY total_sales_amt ASC) AS sales_rank
```

## Common errors, misconceptions, or irrelevant information (Optional):

### 1.

This will give the 10 employees with the lowest total sales by region

### 2.

This query contains a logic bug, we want to partition by `region`

### 3.

This query contains a logic bug, we want to partition by `region`

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
