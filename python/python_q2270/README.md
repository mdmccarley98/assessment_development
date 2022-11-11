# Python 

## Item ID
2270

## Claim
2

## Claim Behavior (evidence)

[Assignment Statements](https://docs.python.org/3/reference/simple_stmts.html#assignment-statements)
[Slice](https://docs.python.org/3/library/functions.html#slice)
[Extended Slices](https://docs.python.org/2.3/whatsnew/section-slices.html)

## Content Target
Lists

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

If `src` and `dest` are both lists of different lengths, which of the four following functions modifies `src` in-place to contain every element of `dest`?


## Code Snippet (optional)
```python

def modify_inplace_A(src, dest):
    src[0:len(dest)] = dest

def modify_inplace_B(src, dest):
    src[:len(dest)] = dest

def modify_inplace_C(src, dest):
    src[::-1] = dest

def modify_inplace_D(src, dest):
    src[0:len(src)] = dest
```

## Answer Key

D

## Distractors

### 1.

A

### 2.

B


### 3.

C


## Common errors, misconceptions, or irrelevant information:

A and B fail if src is longer because only the first `len(dest)` elements are replaced. 
C fails because you can't change the length of the list when using the step parameter.



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

