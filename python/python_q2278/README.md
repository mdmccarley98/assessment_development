# Python 

## Item ID
2278

## Claim
3

## Claim Behavior (evidence)

> Whenever Python encounters a membership test for mutable objects such as lists & sets, they will be replaced by their immutable counterpart during the compilation. That means lists are converted to tuples and sets are converted to frozen sets during the compilation.

-- [Optimization in Python](https://levelup.gitconnected.com/optimization-in-python-peephole-e9dc84cc184d)

Run main.py for disassembly

## Content Target
Data Encoding and Processing

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

In CPython, which of the below functions will execute more quickly and why?

## Code Snippet (optional)
```python

def func_a(x):
    return x in [2, 3, 5, 7, 11]


def func_b(x):
    return x in (2, 3, 5, 7, 11)


```

## Answer Key

The functions are exactly equal in speed because they compile to the same bytecode

## Distractors

### 1.

func_a is faster because Python can detect that the list is sorted and do a binary search


### 2.

func_b is faster because searching an immutable tuple is more efficient than a mutable list

### 3.

func_b is faster because each element of the tuple can be checked in parallel


## Common errors, misconceptions, or irrelevant information:

As you can verify with the `dis` library, the constant list is optimized to a constant tuple at compile time.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

