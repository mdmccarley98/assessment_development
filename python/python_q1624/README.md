# Python Containers Private

## Item ID
1624

## Claim
2. Be able to manipulate the language’s container objects in whatever form they take.

## Claim Behavior (evidence)
> “Private” instance variables that cannot be accessed except from inside an object don’t exist in Python.
> ...
> Any identifier of the form `__spam` (at least two leading underscores, at most one trailing underscore) is textually replaced with `_classname__spam`, where `classname` is the current class name with leading underscore(s) stripped.
> -- [Python Tutorial 9.6 - Private Variables](https://docs.python.org/3/tutorial/classes.html#private-variables) - python 3 tutorial

## Content Target
private variables

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

Which of the following will NOT change the user's password?

## Code Snippet (optional)
```python
class User:
    def __init__(self, password):
        self.__password = password

    def set_password(self, password):
        self.__password = password

    def check_password(self, password):
        return self.__password == password


u = User('12345')
```

## Answer Key
```python
u.__password = 'changed'
```


## Distractors

### 1.
```python
u._User__password = 'changed'
```

### 2.
```python
u.set_password('changed')
```


### 3.
```python
User.set_password(u, 'changed')
```

## Common errors, misconceptions, or irrelevant information:

Python doesn't enforce private access, but it does "name mangling" to
make it more difficult to change a private variable.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

