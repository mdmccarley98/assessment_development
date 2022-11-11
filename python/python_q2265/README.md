# Python Containers

## Item ID
2265

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

At runtime, which of the following expressions evaluate to 1?

## Code Snippet (optional)
```python
class MyClass:
    __a = 1

    def __new__(cls, *args, **kwargs):
        cls.__b = 1
        return super().__new__(*args, **kwargs)
      
    @property
    def __c(self):
        return 1

MyClass.__d = 1        
```

## Answer Key
`MyClass.__d`


## Distractors

### 1.
`MyClass.__a`

### 2.
`MyClass.__b`


### 3.
`MyClass.__c`

## Common errors, misconceptions, or irrelevant information:

Name mangling occurs textually anywhere in the class definition, but not after the class is defined.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

