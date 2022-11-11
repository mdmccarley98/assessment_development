# programmatic_problem_solving

## Item ID
q962

## Claim
4

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What does the following code output?

## Code Snippet (optional)
```swift
func walk(ints: [Int]) -> Int {
  var (i, ints) = (ints[0], ints)
  while i != ints[i] {
    (ints[i], i) = (i, ints[i])
  }
  return i
}

print(walk(ints: [1, 2, 3, 2, 5]))
```

## Answer Key
`2`

## Distractors

### 1.
`5`

### 2.
`Fatal error: Index out of range`

### 3.
It never terminates

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

