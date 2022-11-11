# programmatic_problem_solving

## Item ID
q822

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
The below code generates a power set given a sequence of values. Fill in the missing line of code.

## Code Snippet (optional)
```python
def powerset(values):
    # (Fill in the missing line here)
    for n in range(1 << len(values)):
        yield [value for mask, value in zip(masks, values) if n & mask]
```

## Answer Key
`masks = [1 \u003c\u003c i for i in range(len(values))]`

## Distractors

### 1.
`masks = [2 * i for i in range(len(values))]`

### 2.
`masks = [values[i] \u0026 i for i in range(len(values))]`

### 3.
`masks = [i for i in range(len(values))]`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

