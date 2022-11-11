# SQL

## Claim

Claim 3 (Subqueries and Filtering): Can filter to relevant rows using IN, EXISTS, WITH statements and extract information using window functions.

## Claim Behavior (evidence)

HAVING - https://docs.microsoft.com/en-us/sql/t-sql/queries/select-having-transact-sql?view=sql-server-ver15

## Content Target

`Correct use of HAVING to filter aggregated fields`

## Cognitive Model

Recall

## Item Type

Multiple Choice

## Stem

Given a table of products and a table of shipments of those products, the following query aims to find the products customers bought more than 10 of in a shipment, with its total count. What is an error in the following SQL query?

## Code Snippet (Optional)

```sql
  SELECT
      id,
      product_name,
      COUNT( product_id ) AS total
  FROM products p JOIN shipments s ON s.product_id = p.id
  GROUP BY id,
           product_name
  WHERE COUNT( product_id ) > 10
  ORDER BY total;
```

## Answer Key

`WHERE` filters rows before any groupings are made, `HAVING` should be used instead

## Distractors

### 1.

`id` is an repeated column name, to avoid ambiguity error `p.id` should be used instead

### 2.

`AS` is missing to properly alias table names, `products AS p JOIN shipments AS s` should be used instead

### 3.

`total` alias can't be used for ordering before groupings are made, `ORDER BY COUNT( product_id )` should be used instead

## Common errors, misconceptions, or irrelevant information (Optional):

### 1.

Ambiguity error is very common but without knowing the structure of the tables, `id` is not necessarily a column name in both tables and therefore not an error.

### 2.

Aliasing can be done with or without the keyword `AS`. The snippet shows an example with and without

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
