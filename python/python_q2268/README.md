# Python 

## Item ID
2268

## Claim
2


## Claim Behavior (evidence)

[Reflected Arithmetic Operations](https://docs.python.org/3/reference/datamodel.html#object.__radd__)
[Augmented Arithmetic Assignment](https://docs.python.org/3/reference/datamodel.html#object.__imul__)

## Content Target
Arithmetic Operations

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

The following class `Vector2D` represents a vector in two dimensional space. 

Which of the following sets of methods are sufficient for `Vector2D` to pass the three test cases below?

## Code Snippet (optional)
```python

class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y

vec = Vector2D(1, 2)
vec *= 3 
assert vec.x == 3 and vec.y == 6

vec = 3 * Vector2D(1, 2)
assert vec.x == 3 and vec.y == 6


vec = Vector2D(1, 2) * 3
assert vec.x == 3 and vec.y == 6
```

## Answer Key

`__mul__` and `__rmul__`


## Distractors

### 1.

`__mul__`, `__rmul__`, and `__imul__`

### 2.

`__mul__` and `__imul__`

### 3.

`__mul__`


## Common errors, misconceptions, or irrelevant information:

`rmul` must be implemented because int does not know how to `mul` a Vector2D. 

`imul` is just an optional way to do the operation in-place, but in this case it will just fall back to `mul`.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

