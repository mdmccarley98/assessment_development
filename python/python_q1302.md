# Python Containers Class

## Item ID
1302

## Claim
Claim 2

## Claim Behavior (evidence)

* [Super in single inheritance](https://www.geeksforgeeks.org/python-super-in-single-inheritance/)

## Content Target
`classes`

## Cognitive Model 

Comprehension

## Item Type
Multiple choice

## Stem
Assume we have a class `Animal` defined below. Which of the following would create a class `Cat` that inherits from `Animal` with a `talk` method that extends the `talk` method from `Animal`?

## Code Snippet (optional)
```python
class Animal:
    def __init__(self, name):
        self.name = name
    def talk(self):
        return f"My name is {self.name}."
```

## Answer Key
```python
class Cat(Animal):
    def talk(self):
        speech = super().talk()
        return f"Meow! {speech}"

Cat(name="Fido").talk()
```

## Distractors 
### 1.
```python
class Cat(Animal):
    def talk(self):
        speech = super.talk()
        return f"Meow! {speech}"

Cat(name="Fido").talk()
```

### 2.
```python
class Cat(Animal):
    def talk(self):
        speech = self.talk()
        return f"Meow! {speech}"

Cat(name="Fido").talk()
```

### 3.
```python
class Cat(Animal):
    def talk(self):
        speech = talk()
        return f"Meow! {speech}"

Cat(name="Fido").talk()
```

## Common errors, misconceptions, or irrelevant information (optional)

Calling `self.talk()` results in infinite recursion, because it calls the `Cat.talk()` method which is itself, instead of the `Animal.talk()` method.

To call `Animal.talk()` in python you need to use use `super().talk()`.  `super()` can also take the name of the super class, which is useful if the class inherits in a longer chain of ancestors.

## Content Review

- Accuracy: 👎 distractor 2 works
- Alignment: ✅
```
>>> class Animal:
...     def __init__(self, name):
...         self.name = name
...     def talk(self):
...         return f"My name is {self.name}."
... 
>>> class Cat(Animal):
...     def cat_talk(self):
...         speech = self.talk()
...         return f"Meow! {speech}"
... 
>>> fido = Cat(name="Fido")
>>> fido.cat_talk()
'Meow! My name is Fido.'
```

- fixed the distractor by changing it to `super.talk()` because in python you use `super().talk()`
- added content to "common errors"

The claim behavior doesn't mention `super` so here's a different one:
https://www.geeksforgeeks.org/python-super-in-single-inheritance/

Fixed the examples by removing `cat_talk` and instead only using `talk`.
Now distractor 2 causes a `RecursionError`.
