# programmatic_problem_solving

## Item ID
q656

## Claim
2

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Given the following multiple dispatch methods, which invocation would return `true`?

## Code Snippet (optional)
```plain
func(x::Bool, y::Bool) = x != y
func(x::Bool, y::Any) = func(x, y != 0)
func(x::Any, y::Any) = func(x != 0, y)
```

## Answer Key
`func(0, 3)`

## Distractors

### 1.
`func(0, 0)`

### 2.
`func(1, 3)`

### 3.
`func(true, true)`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

