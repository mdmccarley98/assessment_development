# programmatic_problem_solving

## Item ID
q823

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
What is the output of the following multiple dispatch method call?

## Code Snippet (optional)
```plain
func(x::Int, y::Int) = x / y
func(x::Int, y::Number) = func(x, trunc(Int, y))
func(x::Number, y::Number) = func(trunc(Int, x), y)
print(func(1.5, 2.0))
```

## Answer Key
`0.5`

## Distractors

### 1.
`0.0`

### 2.
`0.75`

### 3.
raises an ambiguous `MethodError`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

