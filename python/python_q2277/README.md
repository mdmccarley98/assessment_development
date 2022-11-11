# Python 

## Item ID
2277

## Claim
3

## Claim Behavior (evidence)

[Lambdas](https://docs.python.org/3/reference/expressions.html#lambda)
[Lambdas or nested functions (def)](https://stackoverflow.com/a/49520604)

## Content Target
Data Encoding and Processing

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Consider sorting a large list of Car objects by a numerical `year` attribute.

In CPython, which version of the below code will execute more quickly, and why?


## Code Snippet (optional)
```python
cars = [...] # large list of Car objects

# Version A
key_fn = lambda car: car.year
sorted(cars, key=key_fn)

# Version B
def key_fn(car): return car.year
sorted(cars, key=key_fn)

```

## Answer Key

They are exactly equal in speed because lambdas and regular functions have the same bytecode

## Distractors

### 1.

Version A is faster because the lambda will be inlined at compile time

### 2.

Version B is faster because named functions have lower function call overhead than lambdas

### 3.

Version A is faster because lambdas do not allocate a stack frame



## Common errors, misconceptions, or irrelevant information:

A common misconception is that lambdas are somehow different than functions created with `def`. 

For example:

> Lambda functions are inline functions and thus execute comparatively faster.

-- [GeeksForGeeks](https://www.geeksforgeeks.org/overuse-of-lambda-expressions-in-python/)

They are the same type and their function bodies have identical bytecode.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

