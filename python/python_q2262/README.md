# Python 

## Item ID
2262

## Claim
2

## Claim Behavior (evidence)

[object.__hash__](https://docs.python.org/3/reference/datamodel.html?highlight=__hash__#object.__hash__)


## Content Target
Hash collisions

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Consider a custom string class that implements `__hash__`, making it usable as a dictionary key. This `__hash__` implementation only looks at the first character of the string, meaning any two strings with the same first character have the same hash code. How does this implementation affect dictionary behavior?


## Code Snippet (optional)
```python


```

## Answer Key

Lookup performance is reduced, but correctness is unaffected

## Distractors

### 1.

A lookup could return the value for a different key with the same first character


### 2.

KeyError is raised when a key with the same first character already exists

### 3.

Deleting a key could delete a different key with the same first character


## Common errors, misconceptions, or irrelevant information:

Hash codes are only an optimization - as long as unequal hash codes imply unequal objects everything will work correctly.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

