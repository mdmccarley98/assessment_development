# Python Containers singleton

## Item ID
2269

## Claim
2

## Claim Behavior (evidence)

* [Super](https://docs.python.org/3/library/functions.html#super)

## Content Target
`super`

## Cognitive Model 

Comprehension

## Item Type
Multiple choice

## Stem

Complete the following code so that for each class inheriting from `Singleton`, only a single instance of that class can be instantiated and future attempts to create new instances return the same existing instance.

## Code Snippet (optional)
```python
class Singleton:
    _instances = {}

    def __new__(cls, *args, **kwargs):
        instance = cls._instances.get(cls)
        if instance is None:
            instance = # fill in the missing line here
            cls._instances[cls] = instance
        return instance
```

## Answer Key
`super(Singleton, cls).__new__(cls, *args, **kwargs)`

## Distractors 
### 1.
`super(cls).__new__(cls, *args, **kwargs)`

### 2.
`super(cls, Singleton).__new__(cls, *args, **kwargs)`

### 3.
`__class__.__new__(cls, *args, **kwargs)`

## Common errors, misconceptions, or irrelevant information (optional)

D1 returns an unbound super method which doesn't work.
D2 fails because the arguments to `super` are reversed.
D3 causes infinite recursion because `__class__` is `Singleton`.

## Content Review

