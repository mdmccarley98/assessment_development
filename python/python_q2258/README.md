# Python Containers data descriptors

## Item ID
2258

## Claim
2. Be able to manipulate the language’s container objects in whatever form they take.

## Claim Behavior (evidence)

> The property() function is implemented as a data descriptor. Accordingly, instances cannot override the behavior of a property.

- [Invoking Descriptors](https://docs.python.org/3/library/functions.html#property)


## Content Target
Descriptors

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Consider two objects `obj` and `obj2` from different classes. The statement `obj.attribute = obj2.attribute2` will "monkey-patch" `obj` so that accessing or calling `obj.attribute` will use the behavior of `obj2.attribute2`, but with the self parameter set to `obj`.

For which type will monkey-patching in this manner fail?

## Code Snippet (optional)

## Answer Key

It will fail if `attribute` is a writable property

## Distractors

### 1.
It will fail if `attribute` is an instance method

### 2.
It will fail if `attribute` is a static method

### 3.
It will fail if `attribute` is a class method


## Common errors, misconceptions, or irrelevant information:

D is a data descriptor, so the setter is called instead of modifying the instance dictionary.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

