# programmatic_problem_solving

## Item ID
q1084

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
The following function generates the intersection of two lists.  What is an accurate statement regarding it?

## Code Snippet (optional)
```python
def intersect(left, right):
    i = 0
    for x in left:
        for i in range(i, len(right)):
            if right[i] > x:
                break
            if right[i] == x:
                yield x
```

## Answer Key
It assumes both input lists are sorted.

## Distractors

### 1.
It runs in O(n^2) time.

### 2.
It may raise an IndexError.

### 3.
It assumes the input lists are of equal size.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

