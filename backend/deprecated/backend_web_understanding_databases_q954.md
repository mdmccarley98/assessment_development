# backend_web_understanding

## Item ID
q954

## Claim
5

## Claim Behavior (evidence)
NA

## Content Target
databases

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Which statement accurately distinguishes the following two SQL queries?

## Code Snippet (optional)
```plain
SELECT category, AVG(price)
FROM products
GROUP BY category

SELECT category, AVG(price)
OVER (PARTITION BY category)
FROM products
```

## Answer Key
The first returns unique categories; the second may return duplicate categories.

## Distractors

### 1.
The first is less efficient to compute than the second.

### 2.
The first computes the average price per category; the second does not.

### 3.
The first is invalid SQL; the second is valid.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

