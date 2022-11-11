# programmatic_problem_solving

## Item ID
q1001

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
class Iterator : IteratorProtocol {
    var (a, b) = (0, 1)
    func next() -> Int? {
        (a, b) = (b, a + b)
        return a
    }
}
let it = AnySequence{Iterator()}
print(it.first(where: { $0 > 5 }) ?? 0)
```

## Answer Key
`8`

## Distractors

### 1.
`0`

### 2.
`5`

### 3.
`[1, 1, 2, 3, 5]`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

