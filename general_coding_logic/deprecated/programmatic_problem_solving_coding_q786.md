# programmatic_problem_solving

## Item ID
q786

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
Given a binary heap type implemented with a dynamic array, what does the following code output?

## Code Snippet (optional)
```swift
func f(n: Int, values: [Int]) -> [Int] {
    var heap = Heap<Int>(sort: <)  // a min-heap
    for value in values {
        heap.push(value)
        if heap.count > n {
            heap.pop()
        }
    }
    return Array(heap)  // the underlying array
}

print(f(n: 2, values: [0, 5, -5, 10, -10]))
```

## Answer Key
`[5, 10]`

## Distractors

### 1.
`[10, 5]`

### 2.
`[-10, -5]`

### 3.
`[0, -5, -10]`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

