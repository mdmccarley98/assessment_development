# Domain Iterator Threes

## Item ID
1629

## Claim
6. Be able to complete everyday coding tasks, particularly ones that relate to the language’s core features.

## Claim Behavior (evidence)

> Once an iterator’s `__next__()` method raises `StopIteration`, it must continue to do so on subsequent calls. Implementations that do not obey this property are deemed broken.
>
> -- [Python iterator.__next__](https://docs.python.org/3/library/stdtypes.html#iterator.__next__) - python.org

> To prevent the iteration to go on forever, we can use the `StopIteration` statement.
>
> -- [Python Iterators](https://www.w3schools.com/python/python_iterators.asp) - w3schools

## Content Target
* iterators

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
The following program will print new numbers forever.

How do you change it so that it will stop after 30?

## Code Snippet (optional)
```python
class Threes:
    def __iter__(self):
        self.v = 0
        return self
    def __next__(self):
        self.v += 3
        return self.v

for i in Threes():
    print(i)
```

## Answer Key
```python
    def __next__(self):
        self.v += 3
        if self.v > 30:
            raise StopIteration
        return self.v
```

## Distractors

### 1.
```python
    def __next__(self):
        self.v += 3
        if self.v > 30:
            return
        yield self.v
```

### 2.
```python
    def __next__(self):
        self.v += 3
        if self.v > 30:
            return
        return self.v
```

### 3.
```python
    def __next__(self):
        self.v += 3
        if self.v > 30:
            raise StopIteration
        yield self.v
```

## Common errors, misconceptions, or irrelevant information:

`__next__` should return values, and raise `StopIteration` when it is done

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

