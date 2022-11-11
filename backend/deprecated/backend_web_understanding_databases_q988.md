# backend_web_understanding

## Item ID
q988

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
Which SQL query uses a window function to compute time deltas between when adjacent rows were `created`?

## Code Snippet (optional)


## Answer Key
`SELECT created - lag(created) OVER (ORDER BY created) FROM table`

## Distractors

### 1.
`SELECT created - lag(created) OVER (PARTITION BY created) FROM table`

### 2.
`SELECT created - (SELECT min(created) from table) FROM table ORDER BY created`

### 3.
`SELECT created - first_value(created) OVER (ORDER BY created) FROM table`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

