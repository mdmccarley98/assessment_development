# Python 

## Item ID
2291

## Claim
2

## Claim Behavior (evidence)

[Facts and myths about Python names and values](https://nedbatchelder.com/text/names.html)

## Content Target
Lists

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

If `src` and `dest` are both lists of equal length, which of the four following functions modifies the `src` list in-place to contain every element of `dest`?


## Code Snippet (optional)
```python

def modify_inplace_A(src, dest):
    src = dest[:]

def modify_inplace_B(src, dest):
    for item, item2 in zip(src, dest):
        item = item2

def modify_inplace_C(src, dest):
    for i, item in enumerate(dest):
        src[i] = item

def modify_inplace_D(src, dest):
    for i, item in enumerate(src):
        item = dest[i]
```

## Answer Key

modify_inplace_C

## Distractors

### 1.

modify_inplace_A

### 2.

modify_inplace_B


### 3.

modify_inplace_D


## Common errors, misconceptions, or irrelevant information:

Note Python behaves differently than other languages such as C++. 

In C++ you can iterate by reference and modify the reference, but this is not possible in Python as you just rebind the name instead.
Similarly in C++ you have the copy constructor but Python would again just rebind the name instead.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

