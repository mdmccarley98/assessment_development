# Python Syntax types

## Item ID
1298

## Claim
Claim 1

## Claim Behavior (evidence)
* [StackOverflow: should I use `is` or `==`](https://stackoverflow.com/questions/14247373/python-none-comparison-should-i-use-is-or)

## Content Target
`type comparison`

## Cognitive Model 
Comprehension

## Item Type
Multiple choice

## Stem

You're writing a program that looks at images of food and classifies them.
The designers decided that cupcakes are equivalent to a cake, if the cake only has 1 layer.

Which of the following code examples will return `True`?

## Code Snippet (optional)

```python
class Cake:
    def __init__(self, layers):
        self.layers = layers

class Cupcake:
    def __eq__(self, other):
        if type(other) == Cupcake:
            return True
        elif isinstance(other, Cake):
            return other.layers == 1
        return False
```

## Answer Key

```python
Cake(layers = 1) == Cupcake()
```

## Distractors 
### 1.
```python
Cake(layers = 2) is Cake(layers = 2)
```

### 2.
```python
Cake(layers = 1) is Cupcake()
```

### 3.
```python
Cupcake() is Cupcake()
```

## Common errors, misconceptions, or irrelevant information (optional)

This example probably isn't the best way to use types in python.  But it does show how `is` and `==` work.

All of the `is` answers result in `False` because they are different instances of the item, and `__eq__` is never called.
In the correct answer, `__eq__` is called, and the number of layers is checked.

`is` would only return true if it was the same instance, like so:
```python
cake_a = Cake(layers = 2)
cake_b = cake_a
cake_b.layers = 1
assert(cake_a is cake_b)
assert(cake_a.layers == 1)
assert(cake_b.layers == 1)
assert(cake_a == cake_b)
```
Both `cake_a` and `cake_b` now have 1 layer, because they are the same instance of `Cake`.

## Content Review

- Accuracy: 👎 distractor 1 also printed out "True"
    - None of the examples *return* `True` but they *print* `True`
    - changed the stem to Cake/Cupcake
    - changed the key and distractors to be about `is` usage and `__eq__` being defined
- Alignment: 👎 maybe it's more about "values" than "variables"

Here's some supporting evidence for what this item is trying to test:
https://stackoverflow.com/questions/14247373/python-none-comparison-should-i-use-is-or

It would be more fair if the `__eq__` function was defined on the value like the example in the SO article.
