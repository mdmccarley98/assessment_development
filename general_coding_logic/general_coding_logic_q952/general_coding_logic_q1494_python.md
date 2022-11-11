# programmatic_problem_solving

## Item ID
q952

## Claim
3

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
The following code attempts to detect whether an array contains positive and negative numbers in a single pass.  Which test input would reveal a bug by producing incorrect output?

## Code Snippet (optional)
```python
def has_pos_neg(nums):
    has_pos = False
    has_neg = False
    for num in nums:
        has_pos = num > 0
        has_neg = num < 0
    return (has_pos, has_neg)
```

## Answer Key
`[-1, 0, 1]`

## Distractors

### 1.
`[]`

### 2.
`[0, 1, 2]`

### 3.
`[0, -1, -2]`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

