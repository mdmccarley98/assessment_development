# programmatic_problem_solving

## Item ID
q920

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
The following code is written in a language which evaluates defaults arguments when a function is defined, not when it is called. What does it output?

## Code Snippet (optional)
```python
def push(value, result=[]):
    result.append(value)
    return result

first = push(0)
push(1, first)
print(push(2))
```

## Answer Key
`[0, 1, 2]`

## Distractors

### 1.
`[2]`

### 2.
`[0, 2]`

### 3.
`[1, 2]`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

