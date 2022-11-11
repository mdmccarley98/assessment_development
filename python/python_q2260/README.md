# Python 

## Item ID
2260

## Claim
2

## Claim Behavior (evidence)

[PEP 0255](https://www.python.org/dev/peps/pep-0255/)

## Content Target
Generators

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Consider a generator function with a `try/except Exception/finally` construct. What happens if control flow reaches a `return 0` statement inside the try block?

## Code Snippet (optional)
```python

```

## Answer Key

The finally block runs, then the generator raises StopIteration 


## Distractors

### 1.

The generator yields 0, the finally block runs, then the generator raises StopIteration

### 2.

StopIteration is raised, the except block catches the StopIteration, then the finally block runs

### 3.

The generator yields 0, then the generator is paused. The finally block runs when the generator is garbage collected

## Common errors, misconceptions, or irrelevant information:

D1, D3: The return value is computed, but is not yielded to the consumer of the generator.
D2: Return does translate into StopIteration, but a special one that is not caught.



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

