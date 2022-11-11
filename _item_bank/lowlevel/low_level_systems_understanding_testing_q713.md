# low_level_systems_understanding

## Item ID
q713

## Claim
5

## Claim Behavior (evidence)
NA

## Content Target
testing

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Consider the following snippet of *test code*.  Which potential criticism of the code is most likely to be hiding a defect?

## Code Snippet (optional)
```python
if is_admin(user):
    assert resp.status_code == 200
else:
    assert resp.status_code == 403
```

## Answer Key
The conditional logic may be duplicated in the implementation

## Distractors

### 1.
It is using magic constants

### 2.
It has multiple assertions

### 3.
It does not mock the `is_admin` function

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

