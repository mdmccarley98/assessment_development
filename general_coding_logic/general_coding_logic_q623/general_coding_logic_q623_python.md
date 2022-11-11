# programmatic_problem_solving

## Item ID
623

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
The following code implements a random sample of items in a single pass.  Fill in the missing line of code.

## Code Snippet (optional)
```python
def sample(items, n):
    result = []
    for i, item in enumerate(items):
        if i < n:
            result.append(item)
        else:
            j = randint(0, i) # random integer, inclusive
            if j < n:
                # (Fill in the missing line here)
    return result
```

## Answer Key
`result[j] = item`

## Distractors

### 1.
`result[i] = item`

### 2.
`result.append(item)`

### 3.
`del result[j]`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

