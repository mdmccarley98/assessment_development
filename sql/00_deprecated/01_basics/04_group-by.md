# SQL

## Claim

Claim 1 (Basics): Can pull simple structured data from a table with SELECT...FROM...WHERE queries, basic operations like sums, averages, DISTINCT, GROUP BY. Can perform basic CRUD operations.

## Claim Behavior (evidence)

GROUP BY - https://docs.microsoft.com/en-us/sql/t-sql/queries/select-group-by-transact-sql?view=sql-server-ver15

## Content Target

`Use of GROUP BY operation`

## Cognitive Model

Recall

## Item Type

Multiple Choice

## Stem

Which of the following SQL queries throws an error?

## Code Snippet (Optional)

```

```

## Answer Key

```sql
  SELECT
    v.vessel_id,
    c.customer_name,
    AVG(v.weight)
  FROM vessels v
  JOIN customers c ON c.id = v.customer_id
  GROUP BY v.vessel_id;
```

## Distractors

### 1.

```sql
    SELECT
      customer_name,
      COUNT(v.vessel_id) AS vessel_count,
      AVG(v.weight) AS average_weight,
      SUM(v.weight) AS total_fleet_weight
    FROM customers c,
         vessels v
    WHERE c.id = v.customer_id
    GROUP BY c.customer_name;
```

### 2.

```sql
    SELECT
      customer_name,
      sum(weight) AS total_weight
    FROM customers,
         vessels
    GROUP BY customer_name
    HAVING COUNT(customer_id) > 2;
```

### 3.

```sql
    SELECT
      MAX(v.weight) max_weight,
      MIN(v.weight) min_weight
    FROM vessels v
    GROUP BY vessel_id;
```

## Common errors, misconceptions, or irrelevant information (Optional):

### 1.

When using aggregators or `GROUP BY` it is a common mistake for a column not contained in either an aggregate function or the GROUP BY clause

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
