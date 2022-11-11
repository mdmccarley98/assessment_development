# programmatic_problem_solving

## Item ID
1103

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
The below code implements the `quickselect` algorithm for finding the kth smallest element in an unordered list.  Fill in the missing line of code.

## Code Snippet (optional)
```python
def select(values, k):
    pivot = random.choice(values)  # randomly select pivot value
    low, high = [], []
    for value in values:
        if value < pivot:
            low.append(value)
        elif value > pivot:
            high.append(value)
    if k < len(low):
        return select(low, k)
    # MISSING LINE
    if k < 0:
        return pivot
    return select(high, k)
```

## Answer Key
`k += len(high) - len(values)`

## Distractors

### 1.
`k -= len(values)`

### 2.
`k -= len(low)`

### 3.
`k = len(values) - len(high) - len(low)`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

