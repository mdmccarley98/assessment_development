# Python 

## Item ID
2307

## Claim
4

## Claim Behavior (evidence)

[Cyclic imports](https://groups.google.com/g/comp.lang.python/c/HYChxtsrhnw?pli=1)

See test scripts

## Content Target
Modules

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Suppose a module `a.py` imports a module `b.py` and then defines a variable `x = 1`. 

If `b.py` imports `a.py` and tries to print the value of `a.x`, what happens when we run `b.py`?

## Code Snippet (optional)

## Answer Key

`AttributeError` is raised

## Distractors

### 1.

1 is printed

### 2.

None is printed

### 3.

The interpreter enters an infinite loop

## Common errors, misconceptions, or irrelevant information:

Running a.py directly would work, but running b.py causes the following to happen:

b's `import a` executes and initializes an empty module `a` which currently has neither `b` nor `x` defined.
a's `import b` executes, and initializes an empty module `b`
b's `import a` executes AGAIN but this time completes successfully, binding the empty module `a`.
Trying to access `a.x` fails as we haven't reached that line of `a` yet.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

