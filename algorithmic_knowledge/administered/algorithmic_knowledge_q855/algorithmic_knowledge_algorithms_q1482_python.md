# algorithmic_knowledge

## Item ID
1482

## Claim
1: algorithms

## Target Skill Level
3

## Claim Behavior (evidence)
NA

## Content Target
Computational Complexity

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Given a set of values and associated weights, the task is to make weighted random selections. One algorithm is to pre-compute the cumulative sum of the weights, generate a random number, and find the nearest larger cumulative weight. How fast could the find operation be implemented, asymptotically?

## Code Snippet (optional)
```python
values = ["a", "b", "c"]
weights = [0.5, 0.3, 0.2]
cumulative_weights = [0.5, 0.8, 1.0]
```

## Answer Key
O(log n)

## Distractors

### 1.
O(n)

### 2.
O(1)

### 3.
O(n log n)

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

