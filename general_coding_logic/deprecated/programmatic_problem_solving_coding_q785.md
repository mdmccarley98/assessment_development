# programmatic_problem_solving

## Item ID
q785

## Claim
5

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Given an array of hash sets, the task is to find the intersection of all the sets.  Which implementation is both correct and the fastest asymptotically?

## Code Snippet (optional)
```plain
fun <T> intersects(vararg sets: Set<T>): Set<T> {
    ...
}
```

## Answer Key
`return sets.fold(sets.minBy( {it.size }) ?: setOf()) { r, s -\u003e r.intersect(s)}`

## Distractors

### 1.
`return sets.reduce { r, s -\u003e r.intersect(s) }`

### 2.
`return sets.fold(sets[0]) { r, s -\u003e r.intersect(s) }`

### 3.
`return sets.fold(setOf()) { r, s -\u003e r.intersect(s) }`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

