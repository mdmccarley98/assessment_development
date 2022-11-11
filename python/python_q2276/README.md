# Python 

## Item ID
2276

## Claim
3

## Claim Behavior (evidence)

[Cost of a Python Function Call](https://ilovesymposia.com/2015/12/10/the-cost-of-a-python-function-call/)
[attrgetter source code](https://github.com/python/cpython/blob/master/Modules/_operator.c)

## Content Target
Data Encoding and Processing

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Consider a large list of Car instances, where each Car has attributes including `brand`, `model`, and `year`. 

In CPython, which of the following expressions is the most efficient way to create a list of tuples of `(brand, model, year)` for each car object?


## Code Snippet (optional)
```python
from operator import attrgetter
cars = [...] # large list of Car objects

# A
[attrgetter('brand', 'model', 'year')(car) for car in cars]

# B
key_fn = attrgetter('brand', 'model', 'year')
[key_fn(car) for car in cars]

# C
[(car.brand, car.model, car.year) for car in cars]

# D
key_fn = lambda car: (car.brand, car.model, car.year)
[key_fn(car) for car in cars]

```

## Answer Key

C

## Distractors

### 1.

A

### 2.

B

### 3.

D


## Common errors, misconceptions, or irrelevant information:

In all versions of CPython, calling a Python function is a complex operation with enough overhead that it typically takes longer to call the function than do the actual work for a small function body.

Calling functions implemented in C like `attrgetter` is faster, but best practice for performance is to inline short functions as in the correct answer.

Answer A is by far the worst because it recreates the attrgetter instance on every iteration.

Timings on two different machines are:

A: 4.65 s
B: 2.37 s
C: 2.18 s
D: 3.51 s

A: 5.29 s
B: 2.18 s
C: 1.93 s
D: 2.89 s

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

