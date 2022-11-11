# programmatic_problem_solving

## Item ID
q426

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
What's wrong with this code?

## Code Snippet (optional)
```swift
// Take two sorted lists, and return
// both combined in sorted order
func mergeTwoSortedLists(l1: [Int], l2: [Int]) -> [Int] {
    var result: [Int] = []
    if l1[0] < l2[0] {
        result += l1
    }
    result += l2
    return result
}
```

## Answer Key
This code makes no sense. It does something, but not merge two sorted lists

## Distractors

### 1.
This assumes the lists are sorted high to low, not low to high

### 2.
This will break if there are negative values in the lists

### 3.
This looks good. No errors

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

