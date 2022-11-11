# Python Domain ABC

## Item ID
1625

## Claim
6. Be able to complete everyday coding tasks, particularly ones that relate to the language’s core features.


## Claim Behavior (evidence)

* https://docs.python.org/3/library/abc.html

> While the example demonstrates abstract classes perfectly here are 2 “bad” examples to further elaborate abstract classes:
>
> ...
>
>     TypeError: Can't instantiate abstract class DDD with abstract methods under_construction
>
> You get the above error because you didn’t modify and complete the incomplete abstractmethod inherited from the abstractclass.
> -- [Bonus) Abstract Base Classes: (ABC)](https://holypython.com/100-python-tips-tricks/) - holypython 100 tips and tricks

    % python --version
    Python 3.9.0

[example.py](example.py)

    % python example.py 
    Traceback (most recent call last):
    File "/Users/robert/Dev/triplebyte-assessment/python/domain-abstract-base/example.py", line 19, in <module>
        car = Car('Zippy')
    TypeError: Can't instantiate abstract class Car with abstract method start

[key.py](key.py)

    % python key.py 
    beep beep

[distractor1.py](distractor1.py)

    % python distractor1.py 
    Traceback (most recent call last):
    File "/Users/robert/Dev/triplebyte-assessment/python/domain-abstract-base/distractor1.py", line 19, in <module>
        car = Car('Zippy')
    TypeError: Can't instantiate abstract class Car with abstract method start

[distractor2.py](distractor2.py)

    % python distractor2.py 
    Traceback (most recent call last):
    File "/Users/robert/Dev/triplebyte-assessment/python/domain-abstract-base/distractor2.py", line 19, in <module>
        car = Car('Zippy')
    TypeError: Can't instantiate abstract class Car with abstract method start

[distractor3.py](distractor3.py)

    % python distractor3.py 
    Traceback (most recent call last):
    File "/Users/robert/Dev/triplebyte-assessment/python/domain-abstract-base/distractor3.py", line 14, in <module>
        class Car(ABC, Vehicle):
    File "/usr/local/Cellar/python@3.9/3.9.0_2/Frameworks/Python.framework/Versions/3.9/lib/python3.9/abc.py", line 85, in __new__
        cls = super().__new__(mcls, name, bases, namespace, **kwargs)
    TypeError: Cannot create a consistent method resolution
    order (MRO) for bases ABC, Vehicle

## Content Target
* abstract base classes
* ABC
* @abstractmethod

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

The following code has an error:
```
TypeError: Can't instantiate abstract class Car with abstract method start
```

How do you fix the error?

## Code Snippet (optional)
```python
from abc import ABC, abstractmethod


class Vehicle(ABC):

    def __init__(self, id):
        self.id = id

    @abstractmethod
    def start(self):
        pass


class Car(Vehicle):
    def honk(self):
        print('beep beep')


car = Car('Zippy')
car.honk()

```

## Answer Key
Define `start` in `Car`:
```diff
 class Car(Vehicle):
+    def start(self):
+        pass
+
```

## Distractors

### 1.
Change `@abstractmethod` to `@abstractclassmethod`:
```diff
-    @abstractmethod
+    @abstractclassmethod
     def start(self):
```

### 2.
Use `ABCMeta` to define an ABC through inheritance:
```diff
-class Vehicle(ABC):
+class Vehicle(metaclass=ABCMeta):
 
     def __init__(self, id):
         self.id = id
```

### 3.
Make sure `Car` also inherits from `ABC`:
```diff
-class Car(Vehicle):
+class Car(ABC, Vehicle):
+
     def honk(self):
```

## Common errors, misconceptions, or irrelevant information:
> Using this decorator requires that the class’s metaclass is ABCMeta or is derived from it. A class that has a metaclass derived from ABCMeta cannot be instantiated unless all of its abstract methods and properties are overridden.  
> -- [python docs](https://docs.python.org/3/library/abc.html#abc.abstractmethod)

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

