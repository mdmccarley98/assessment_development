# programmatic_problem_solving

## Item ID
q614

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
Consider a class `Point` which implements a custom equals method.  Which implementation of a custom hash method would correctly support using points in unordered sets.

## Code Snippet (optional)
```python
def __eq__(self, other):
    return self.x == other.x and self.y == other.y
def __hash__(self):
    # ????
```

## Answer Key
`return hash((self.x, self.y))`

## Distractors

### 1.
`return int(self.x + self.y)`

### 2.
`return int(min(self.x, self.y))`

### 3.
None: sets only support builtin types.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

