# Python Containers Multiple-Inheritance

## Item ID
1623

## Claim
2. Be able to manipulate the language’s container objects in whatever form they take.

## Claim Behavior (evidence)
> Python supports a form of multiple inheritance as well. A class definition with multiple base classes looks like this:
> 
```python
class DerivedClassName(Base1, Base2, Base3):
    <statement-1>
    .
    .
    .
    <statement-N>
```
> -- [Classes Inheritance](https://docs.python.org/3/tutorial/classes.html#inheritance) - python 3 tutorial

## Content Target
* classes
* inheritance
* multiple inheritance

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

How do you change the definition of `Cookie` to print:

> After baking the cookie it tastes sweet, and the cookie is baked.


## Code Snippet (optional)
```python
class Treat:
    def description(self):
        return "is a treat"
    def taste(self):
        return "sweet"

class Baked:
    def description(self):
        return "is baked"
    def cook(self):
        return "baking"

class Cookie:
    def __str__(self):
        return "cookie " + self.description()

cookie = Cookie()
print("After {} the cookie it tastes {}, and the {}.".format(
    cookie.cook(), cookie.taste(), cookie
    ))
```


## Answer Key

```
class Cookie(Baked, Treat):
```

## Distractors

### 1.
```
class Cookie(Baked(Treat)):
```

### 2.
```
@Baked
@Treat
class Cookie:
```

### 3.
Python does not support multiple inheritance.


## Common errors, misconceptions, or irrelevant information:

Python searches the class first, then the first base class recursively, then continues to other base classes from left to right.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

