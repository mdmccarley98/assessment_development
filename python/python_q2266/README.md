# Python

## Item ID
2266

## Claim
2. Be able to manipulate the language’s container objects in whatever form they take.

## Claim Behavior (evidence)
[Python Tutorial 9.6 - Private Variables](https://docs.python.org/3/tutorial/classes.html#private-variables)


## Content Target
private variables

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

If `obj` is an instance of `MyClass`, which of the following expressions evaluates to 1?

## Code Snippet (optional)
```python
class MyClass:
    def __a(self):
        return 1

    def __init__(self):
        self.__b = 1
        setattr(self, '__c', 1)

    @property
    def __d(self):
        return 1

```

## Answer Key
`obj.__c`

## Distractors

### 1.
`obj.__a`

### 2.
`obj.__b`


### 3.
`obj.__d`

## Common errors, misconceptions, or irrelevant information:

Private name mangling applies at compile time to names only. Strings are not considered by the compiler for mangling.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

