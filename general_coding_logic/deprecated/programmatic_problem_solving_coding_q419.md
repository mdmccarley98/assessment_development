# programmatic_problem_solving

## Item ID
q419

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is the problem with the following code?

## Code Snippet (optional)
```swift
// Find the smallest integer in the array,
// and returns the index of that integer.
func findIndexOfMin(_ arr: [Int]) -> Int {
    var minIndex = -1
    var minValue = Int.max
    for (index, val) in arr.enumerated() {
        if val < minValue {
            minIndex = index
        }
    }
    return minIndex
}
```

## Answer Key
Right after line 8, it should set `minValue` to `val`, inside the `if` statement.

## Distractors

### 1.
This looks good. No errors.

### 2.
At line 5, it should assign `minValue` to `Int.min` instead.

### 3.
The `if` statement at line 7 should have an `else` block that sets `minValue` to `val`.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

