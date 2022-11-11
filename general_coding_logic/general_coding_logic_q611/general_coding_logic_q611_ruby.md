# programmatic_problem_solving

## Item ID
611

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
Given objects with `name` and `date` fields, the task is to sort the objects alphabetically by name, using most recent date as a tie-breaker. Which call(s) to a stable sort method would implement this correctly?

## Code Snippet (optional)


## Answer Key
`sort_by {|obj| obj.date}.reverse.sort_by {|obj| obj.name}`

## Distractors

### 1.
`sort_by {|obj| [obj.name, obj.date]}`

### 2.
`sort_by {|obj| obj.name}.sort_by {|obj| obj.date}.reverse`

### 3.
`sort_by {|obj| [obj.date, obj.name]}`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

