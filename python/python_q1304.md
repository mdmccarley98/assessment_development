# Python Domain iterators

## Item ID
1304

## Claim

Claim 6

## Claim Behavior (evidence)

[Source](https://anandology.com/python-practice-book/iterators.html). Using an iterator with a class.

## Content Target
`iterators`

## Cognitive Model 

Comprehension

## Item Type
Multiple choice

## Stem

What value will the code below return?

## Code Snippet (optional)

```python
class Evens:
    def __iter__(self):
        self.a = 2
        return self
    def __next__(self):
        x = self.a
        self.a += 2
        return x


my_class = Evens()
my_iter = iter(my_class)

next(my_iter)
next(my_iter)
next(my_iter)

print(next(my_iter))
```

## Answer Key

8

## Distractors 
### 1.
4

### 2.
6

### 3.
10

## Common errors, misconceptions, or irrelevant information (optional)

The value starts at 2 and each time `next()` is called the value of `self.a` is incremented by 2, but the next function returns the value before `self.a` increases by 2.

## Content Review

- Accuracy: ✅
- Alignment: ✅
