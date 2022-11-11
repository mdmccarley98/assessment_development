# SQL

## Claim

Claim 3 (Subqueries and Filtering): Can filter to relevant rows using IN, EXISTS, WITH statements and extract information using window functions.

## Claim Behavior (evidence)

- CTE - https://docs.microsoft.com/en-us/sql/t-sql/queries/with-common-table-expression-transact-sql?view=sql-server-ver15
- OVER (window/analytic function) - https://docs.microsoft.com/en-us/sql/t-sql/queries/select-over-clause-transact-sql?view=sql-server-ver15

## Content Target

`Use of a window function to determine a 4-week moving average`

## Cognitive Model

Use

## Item Type

Multiple Choice

## Stem

Calculating a moving average is a technique that can be used to smooth out time series data.  Given the code snippet, what code would you use to provide a four week moving average for each week of sales?  For the moving average, we want the average of each week's `week_start_date` sales along with sales from the prior three weeks.

## Code Snippet (Optional)

```sql
SELECT
    week_start_date,
    sales_amt,
    -- INSERT CODE HERE
FROM weekly_sales
```

## Answer Key

```sql
AVG(sales_amt) OVER (ORDER BY week_start_date ROWS BETWEEN 3 PRECEDING AND CURRENT ROW) AS moving_avg
```

## Distractors

### 1.

```sql
AVG(sales_amt) OVER (PARTITION BY week_start_date ROWS BETWEEN 3 PRECEDING AND CURRENT ROW) AS moving_avg
```

### 2.

```sql
AVG(sales_amt) OVER (ORDER BY week_start_date ROWS BETWEEN CURRENT ROW AND 3 FOLLOWING) AS moving_avg
```

### 3.

```sql
AVG(sales_amt) OVER (PARITION BY week_start_date ROWS BETWEEN CURRENT ROW AND 3 FOLLOWING) AS moving_avg
```

## Common errors, misconceptions, or irrelevant information (Optional):

### 1.

This gives an error, as there is no ORDER BY defined in the window

### 2.

This gives the average of this week plus the future 3 weeks of sales, whereas the question asks for the average of this week plus the previous 3 weeks of sales

### 3.

This gives an error, as there is no ORDER BY defined in the window

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
