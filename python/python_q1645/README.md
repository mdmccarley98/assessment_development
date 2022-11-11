# Python Syntax Pass

## Item ID
1645

## Claim
1. Understand the core syntax of the language itself.

## Claim Behavior (evidence)
- [pass statements](https://docs.python.org/3/tutorial/controlflow.html#pass-statements) - docs.python.org/3/tutorial

## Content Target
pass

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem

What is the value of `a` after this code runs?

```python
a = 0
for i in range(10):
    if i == 2:
        pass
    else:
        a = i
```

## Code Snippet (optional)


## Answer Key
9

## Distractors

### 1.
0

### 2.
1

### 3.
2


## Common errors, misconceptions, or irrelevant information:

The keyword `pass` is a "no-op", it does nothing, it is not the same as `continue` or `break`.
It's meant to be used as placeholder when a statement is required but nothing should happen, like defining an empty class or empty function.

```python
class AceOfHearts:
    pass
```

```python
def complicated():
    pass # TODO: implement this function
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

