# programmatic_problem_solving

## Item ID
746

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
The below function attempts to format an integer, using commas as a thousands separator.  Which test case would fail, indicating a bug?

## Code Snippet (optional)
```python
def format(num, sep=','):
    parts = []
    while num:
        num, mod = divmod(num, 1000)
        parts.append(f'{mod:03}')
    return sep.join(reversed(parts)) or '0'
```

## Answer Key
`assert format(1000) == '1,000'`

## Distractors

### 1.
`assert format(0) == '0'`

### 2.
`assert format(100) == '100'`

### 3.
`assert format(100000) == '100,000'`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

