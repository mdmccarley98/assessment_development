# Python

## Item ID
2308

## Claim
4

## Claim Behavior (evidence)

[Pickle](https://docs.python.org/3/library/pickle.html#what-can-be-pickled-and-unpickled)

## Content Target
pickle

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Consider a script `mymodule.py` that defines a class `MyClass`. Alice uses the standard library to pickle an instance of `MyClass` into `file.pickle`, and emails `file.pickle` to Bob. If Bob does not have `mymodule.py` on his system, what happens when Bob tries to unpickle `file.pickle`?

## Code Snippet (optional)

## Answer Key

`ModuleNotFoundError` is raised

## Distractors

### 1.

`AttributeError` is raised

### 2.

The `MyClass` instance is loaded successfully

### 3.

`None` is returned instead of the `MyClass` instance



## Common errors, misconceptions, or irrelevant information:

Classes are pickled by name (e.g. `mymodule.MyClass`), so the unpickling environment attempts to import a module with the corresponding name.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

