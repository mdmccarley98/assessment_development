# Python Features generator yield from close

## Item ID
2299

## Claim
3

## Claim Behavior (evidence)

[PEP 342](https://www.python.org/dev/peps/pep-0342/#new-generator-method-close)
[PEP 380](https://www.python.org/dev/peps/pep-0380/#formal-semantics)

## Content Target
generators

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Suppose `p` is an instance of the `parent` generator below. If `p.close()` is called before `gen` is exhausted, which of the following is called?

## Code Snippet (optional)

```python
class MyGenerator:
    def __init__(self):
        ...

    def __iter__(self):
        return self

    def __next__(self):
        ...
    
    def send(self, value):
        ...

    def throw(self, type, value=None, traceback=None):
        ...

    def close(self):
        ...


def parent(gen: MyGenerator):
    yield from gen
```


## Answer Key

`gen.close()`

## Distractors

### 1.

`gen.send(None)`

### 2.

`gen.throw(StopIteration)`

### 3.

`gen.throw(GeneratorExit)`

## Common errors, misconceptions, or irrelevant information:

`gen` is finalized, even if other code held references to it. This preserves the invariant that closing a factored generator is the same as closing an unfactored generator.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

