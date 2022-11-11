# backend_web_understanding

## Item ID
q615

## Claim
4

## Claim Behavior (evidence)
NA

## Content Target
databases

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Suppose the task is to store user data in a SQL database, given there is a `User` table with a unique index on `user_id`.  Users may or may not already exist in the table, but aren't removed.  Which atomic operations correctly implement this without race conditions or transactions?

## Code Snippet (optional)


## Answer Key
INSERT; on duplicate key error UPDATE

## Distractors

### 1.
UPDATE; if 0 rows affected INSERT

### 2.
SELECT matching rows; if count \u003e 0 UPDATE; else INSERT

### 3.
DELETE; then INSERT

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

