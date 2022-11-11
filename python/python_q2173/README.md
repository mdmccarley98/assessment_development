# Python Features hashable

## Item ID
2173

## Claim
3

## Claim Behavior (evidence)

[object.__hash__](https://docs.python.org/3/reference/datamodel.html#object.__hash__)

## Content Target
Hashables

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

An object `obj` is considered hashable if `isinstance(obj, collections.abc.Hashable)` returns True.

Which of the four classes below have hashable instances?

## Code Snippet (optional)

```python

class A:
    __hash__ = None

class B:
    def __eq__(self, other): return False

class C:
    def __hash__(self): raise TypeError

class D: pass
```

## Answer Key

`C` and `D`

## Distractors

### 1.

`D`

### 2.

`B`, `C`, and `D`

### 3.

`A`, `B`, `C`, and `D`

## Common errors, misconceptions, or irrelevant information:

`C` reports hashable because there is no static analysis in Python that would detect that it always raises TypeError.

`D` reports hashable because user-defined classes are hashable by default.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

