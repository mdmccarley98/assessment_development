# SQL

## Claim

Claim 2 (Joins and Unions): Can manipulate data from multiple tables at once using left/right/full JOINs and UNION/UNION ALL. Understands the differences among these operations.

## Claim Behavior (evidence)

JOIN - https://docs.microsoft.com/en-us/sql/relational-databases/performance/joins?view=sql-server-ver15

## Content Target

`Use of JOIN clause`

## Cognitive Model

Comprehend

## Item Type

Multiple Choice

## Stem

Given the following schema `Rental (transaction_number, tenant_id, renter_id) Client (id, full_name)` where `tenant_id` and `renter_id` are both foreign keys to `Client`, what would be the best way to view the list of transactions with the tenant's and renter's full name?

## Code Snippet (Optional)

```

```

## Answer Key

A `JOIN` can be used twice to the same `Client` table to first combine the rows of the tenants and then the rows of the renters.

## Distractors

### 1.

A `JOIN` can be used after a `UNION` to combine the result-set of getting the tenant's full name and getting the renter's full name.

### 2.

A many-to-many `JOIN` can be used after creating another table linking the `Rental` transactions to the different types of `Client`s.

### 3.

A `JOIN` can be used after adding a Composite Key to the `Rental` table consisting of the tenant and renter's full name.

## Common errors, misconceptions, or irrelevant information (Optional):

### 1.

`Union`s are commonly used for combining similar results from the same or different tables, like last names in this case.

### 2.

Restructuring the schema might help in performing a simpler query, however there's nothing wrong with the current schema.

## Triplebyte Review

- Language Review:
- Bias/Fairness Review:
- Content Review:

---
