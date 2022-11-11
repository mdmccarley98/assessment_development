# Python 

## Item ID
2267

## Claim
2

## Claim Behavior (evidence)

[NotImplemented](https://docs.python.org/3/library/constants.html#NotImplemented)

## Content Target
NotImplemented

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Consider an instance `obj` of the below class `MyClass`. 

The desired behavior for `obj * other` is the following: if `other` is also an instance of `MyClass`, the operation succeeds. Otherwise, if `other.__rmul__` exists then call that. Otherwise, TypeError should be raised. 

Complete the missing line of code to produce the desired behavior.

## Code Snippet (optional)
```python

class MyClass:
    def __mul__(self, other):
        if isinstance(other, MyClass):
            # the operation succeeds
        else:
            # fill in the missing line of code here
```

## Answer Key

`return NotImplemented`

## Distractors

### 1.

`raise NotImplementedError`


### 2.

`raise TypeError(f"unsupported operand type(s) for *: 'MyClass' and '{other.__class__.__name__}'")`

### 3.

`return other.__rmul__(self)`

## Common errors, misconceptions, or irrelevant information:

D1: NotImplementedError is intended for abstract methods and doesn't do anything special here.
D2: This raises TypeError but doesn't dispatch to rmul.
D3: This dispatches to rmul as desired, but raises AttributeError if that doesn't exist instead of TypeError


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

