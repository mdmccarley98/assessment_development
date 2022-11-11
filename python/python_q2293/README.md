# Python Features finally

## Item ID
2293

## Claim
3

## Claim Behavior (evidence)

[Defining Clean-Up Actions](https://docs.python.org/3/tutorial/errors.html#defining-clean-up-actions)

## Content Target
finally

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

What happens in the following code if the user presses Ctrl-C to generate a `KeyboardInterrupt` while the try block is being executed?

## Code Snippet (optional)

```python
def func():
    try:
        ... # irrelevant code here
        return 0
    except KeyboardInterrupt:
        return 1
    finally:
        return 2
```


## Answer Key

The function returns 2

## Distractors

### 1.

The function returns 1

### 2.
The function returns 0

### 3.
A `return` statement inside `finally` is invalid syntax 


## Common errors, misconceptions, or irrelevant information:



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

