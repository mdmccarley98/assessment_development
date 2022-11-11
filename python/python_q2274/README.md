# Python Features

## Item ID
2274

## Claim
3

## Claim Behavior (evidence)

[Descriptors](https://docs.python.org/3/howto/descriptor.html)

## Content Target
Methods

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

After the code below executes, which statement causes `obj.method` to be a method bound to `obj`? 

## Code Snippet (optional)

```python
import types

def unbound(self):
    return self.x
class MyClass:
    def __init__(self, x):
        self.x = x

obj = MyClass(1)
```

## Answer Key

`obj.method = types.MethodType(unbound, obj)`

## Distractors

### 1.

`obj.method = unbound`

### 2.
`obj.method = classmethod(unbound, MyClass)`

### 3.
`obj.method = unbound.__get__(None, MyClass)`

## Common errors, misconceptions, or irrelevant information:

Normally method binding (passing self as the first argument) happens automatically using the descriptor protocol when the function is looked up on the class.

D1 won't cause any binding to occur because it's setting the function on the instance, not the class. 

D2 will create a class method, not an instance method.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

