# Python Containers Metaclass Registration

## Item ID
2168

## Claim
Claim 2

## Claim Behavior (evidence)

* [Metaclasses](https://docs.python.org/3/reference/datamodel.html#metaclasses)

## Content Target
`metaclasses`

## Cognitive Model 

Comprehension

## Item Type
Multiple choice

## Stem

If we define an empty class `A` using the metaclass `Meta` below, and a second empty class `B` that inherits from `A`, what keys will be in the variable `registry`?


## Code Snippet (optional)
```python
registry = {}

class Meta(type):
    def __new__(meta, name, bases, attrs):
        cls = super().__new__(meta, name, bases, attrs)
        registry[name] = cls
        return cls
```

## Answer Key
A and B

## Distractors 
### 1.
A only

### 2.
B only

### 3.
`registry` will be empty

## Common errors, misconceptions, or irrelevant information (optional)

Metaclasses are inherited, so both A and B are registered.

## Content Review

