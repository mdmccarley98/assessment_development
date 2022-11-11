# backend_web_understanding

## Item ID
q690

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
Assume there is an ORM with typical methods on its `query` object: `all`, `count`, `exists`, and `first`.  Which code snippet has the most efficient query usage to determine if any matching row objects satisfy a `predicate`?  Assume the `and` operator short-circuits.

## Code Snippet (optional)


## Answer Key
`any(predicate(row) for row in query.all())`

## Distractors

### 1.
`query.exists() and any(predicate(row) for row in query.all())`

### 2.
`query.count() and any(predicate(row) for row in query.all())`

### 3.
`query.first() is not None and any(predicate(row) for row in query.all())`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

