# Python Containers getattribute

## Item ID
2261

## Claim
2

## Claim Behavior (evidence)

[Special Method Lookup](https://docs.python.org/3/reference/datamodel.html?highlight=iadd#special-method-lookup)

## Content Target
__getattribute__

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Consider a instance `obj` of a custom Python class `MyClass` that implements only `__init__`, `__hash__`, and `__getattribute__`.

Which of the following expressions bypasses `__getattribute__`? 

## Code Snippet (optional)


## Answer Key

`hash(obj)`

## Distractors

### 1.

`obj.__hash__`

### 2.

`obj.nonexistent`

### 3.

`obj.__getattribute__`

## Common errors, misconceptions, or irrelevant information:

Getattribute is called whether the attribute exists or not, even looking up its own name! 

Even though `hash(obj)` calls `obj.__hash__()` and a direct lookup of `obj.__hash__` WOULD trigger `__getattribute__`, this case is treated specially and so are a short list of others like len().

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

