# Python Domain dict apple/banana

## Item ID
1627

## Claim
6. Be able to complete everyday coding tasks, particularly ones that relate to the language’s core features.

## Claim Behavior (evidence)
```
% python3 example.py 
{'apple': 12, 'banana': 9, 'carrot': 15}
```
-- [example.py](./example.py)

> Let’s say you have 2 Olympics results from 2 separate countries that held the events. Dictionary 1 named: China_olympics and then Japan_olympics and you’d like to make a shallow merge. All you have to do is:
>
>     {**China_olympics, **Japan_olympics}
>
> -- [100 python tips and tricks #2 Dictionary Merge](https://holypython.com/100-python-tips-tricks/) holy python

## Content Target
* dict comprehension
* destructuring

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem

What is the value of `d` after the following python code is executed?

## Code Snippet (optional)
```python
fruits = ['apple', 'banana', 'apple', 'carrot']
numbers = ((i + 2) * 3 for i in range(4))

d = {}
for k,v in zip(fruits, numbers):
    d = {**d, k:v}

d = dict(sorted(d.items(), key=lambda i: i[0]))

print(d)
```

## Answer Key

```
{'apple': 12, 'banana': 9, 'carrot': 15}
```

## Distractors
### 1.
```
{'apple': 6, 'apple': 12, 'banana': 9, 'carrot': 15}
```

### 2.
```
{'apple': 6, 'banana': 9, 'apple': 12, 'carrot': 15}
```

### 3.
```
{{{{'apple': 6}, 'banana': 9}, 'apple': 12}, 'carrot': 15}
```


## Common errors, misconceptions, or irrelevant information:
Dictionaries have unique keys, so 'apple' is replaced with 12.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

