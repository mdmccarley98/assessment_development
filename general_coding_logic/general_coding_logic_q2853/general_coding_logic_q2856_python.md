# General Coding Logic - Logical Expression Reduction

## Item ID
2856

## Claim
1: `programming_logic`

## Claim Behavior (evidence)
> The outptut of the expression in the code is 
```
0 0 0: 1 
0 0 1: 1 
0 1 0: 1 
0 1 1: 1 
1 0 0: 1 
1 0 1: 0 
1 1 0: 1 
1 1 1: 0
```

## Target Skill Level
1

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Which other expression can substitute `expr` and result in the same output?

## Code Snippet (optional)
```python
for i in range(0, 8):
    is_car = bool(i & 1)
    has_spoiler = bool(i & 2)
    is_lowered = bool(i & 4)

    expr = ((not is_car and not has_spoiler) or (not is_car or not is_lowered))

    print(f'{int(is_lowered)} {int(has_spoiler)} {int(is_car)}: \
            {int(expr)}')
```

## Answer Key
```python
not (is_car and is_lowered)
```

## Distractors
### 1.
```python
(not is_car and is_lowered) or has_spoiler
```

### 2.
```python
(is_car and has_spoiler) or (is_car or not is_lowered)
```

### 3.
```python
(is_car and has_spoiler)
```

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - Output is 
    ```
    0 0 0: 0
    0 0 1: 0
    0 1 0: 1
    0 1 1: 1
    1 0 0: 1
    1 0 1: 0
    1 1 0: 1
    1 1 1: 1
    ```
- Distractor 2
    - Output is
    ```
    0 0 0: 1
    0 0 1: 1
    0 1 0: 1
    0 1 1: 1
    1 0 0: 0
    1 0 1: 1
    1 1 0: 0
    1 1 1: 1
    ```
- Distractor 3
    - Output is
    ```
    0 0 0: 0
    0 0 1: 0
    0 1 0: 0
    0 1 1: 1
    1 0 0: 0
    1 0 1: 0
    1 1 0: 0
    1 1 1: 1
    ```

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
