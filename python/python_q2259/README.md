# Python 

## Item ID
2259

## Claim
2

## Claim Behavior (evidence)

[PEP 0479](https://www.python.org/dev/peps/pep-0479/)

## Content Target
Generators


## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

In versions of Python prior to 3.7, the call to `list(a)` below runs forever. 

Which of the following is a valid fix so that `my_zip` mimics the behavior of the built-in `zip` function?


## Code Snippet (optional)
```python

def my_zip(*args):
    iterables = [iter(arg) for arg in args]
    while 1:
        gen = (next(it) for it in iterables)
        yield tuple(gen)

a = my_zip([0, 1, 2], [3, 4])
result = list(a) # Desired result is [(0, 3), (1, 4)]
```

## Answer Key

`gen` needs to be a list comprehension instead of a generator expression

## Distractors

### 1.

The call to `tuple(gen)` needs to be wrapped in a `try/except StopIteration` block

### 2.

All iterables must be truncated to equal length before the loop

### 3.

`tuple(gen)` needs to be `tuple(list(gen))` as tuples cannot accept generator expressions


## Common errors, misconceptions, or irrelevant information:

The issue with the code is subtle: on the third iteration of the loop, `next(it)` on the second input argument raises `StopIteration`, which is not caught by `gen`. Thus the `StopIteration` propagates up to `tuple` which considers `StopIteration` to mean that `gen` is exhausted. The `yield` then yields an empty tuple and the loop continues forever.

Because of confusing behaviors like this, Python 3.7 changed the behavior so that this will raise RuntimeError instead.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

