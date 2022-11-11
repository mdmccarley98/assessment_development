# Python Containers Metaclass Final

## Item ID
2167

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

Complete the following code so that any class with `metaclass=Final` cannot be subclassed.

## Code Snippet (optional)
```python
class Final(type):
    def __new__(meta, name, bases, attrs):
        if EXPRESSION: # fill in the missing expression here
            raise TypeError
        return super().__new__(meta, name, bases, attrs)

class Sealed(metaclass=Final): pass  # should work
class ShouldFail(Sealed): pass  # should raise TypeError
```

## Answer Key
```python
any(isinstance(b, Final) for b in bases)
```

## Distractors 
### 1.
```python
Final in bases
```

### 2.
```python
issubclass(meta, Final)
```

### 3.
```python
any(issubclass(b, Final) for b in bases)
```

## Common errors, misconceptions, or irrelevant information (optional)

The correct answer works because `ThisShouldFail`'s base class `ThisIsSealed` is an instance of the metaclass (any class is an instance of its metaclass).

D1 and D3 are wrong because `bases` is a list of base classes, not metaclasses.

D2 is wrong because `meta is Final` is True for both `ThisIsSealed` and `ThisShouldFail`


## Content Review
