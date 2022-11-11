# Python Std Functional

## Item ID
1638

## Claim
4. Be able to use common components of the language’s standard library.

## Claim Behavior (evidence)
[example.py](./example.py)

## Content Target
* sum
* functools.reduce
* itertools.accumulate
* operator.iadd

## Cognitive Model

## Item Type
Multiple Choice

## Stem
Calculating compound interest is a common task.

For example, starting with $30.00 and 3% interest 2 times equals $31.827:
* $30 + ($30 * 3%) = $30.90
* $30.90 + ($30.90 * 3%) = $31.827

Which of the following answers is NOT equivalent to the python below:

## Code Snippet (optional)
```python
def interest(start, rate, times):
    for _ in range(times):
        start += start * rate
    return round(start, 2)
```

## Answer Key

```python
def interest(start, rate, times):
    acc = lambda acc: acc + acc * rate
    subtotal = sum(acc(start) for _ in range(times))
    return round(subtotal, 2)
```

## Distractors

### 1.
```python
import functools
def interest(start, rate, times):
    subtotal = functools.reduce(lambda acc, _: acc + (acc * rate),
                               range(times),
                               start)
    return round(subtotal, 2)
```

### 2.
```python
import itertools
def interest(start, rate, times):
    *_, last = itertools.accumulate(range(times),
                                    lambda acc, _: acc + (acc * rate),
                                    initial=start)
    return round(last, 2)
```

### 3.
```python
import operator
def interest(start, rate, times):
    for _ in range(times):
        start = operator.iadd(start, start * rate)
    return round(start, 2)
```

## Common errors, misconceptions, or irrelevant information:

The incorrect answer doesn't accumulate results, and just sums the same calculation over and over.

Even better: `start * (1.0 + (rate / 1)) ** times`

Also using `decimal.Decimal` would be a better choice when dealing with money for better precision.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

