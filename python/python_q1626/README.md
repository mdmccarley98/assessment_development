# Python Domain Counter

## Item ID
1626

## Claim
6. Be able to complete everyday coding tasks, particularly ones that relate to the language’s core features.


## Claim Behavior (evidence)
```
$ python example.py 
Counter({'Mon': 4, 'Tue': 2, 'Wed': 1, 'Thu': 1})
[('Mon', 4)]
```

-- https://docs.python.org/3/library/collections.html#collections.Counter.most_common

## Content Target
* Counter
* range
* modulus
* array repeat with * operator

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
What is the `most_common` value in `counter` after running the following python?

## Code Snippet (optional)
```python
from collections import Counter

days = ['Mon', 'Tue', 'Wed', 'Thu']
counter = Counter(days)

for x in range(1, 5, 2):
    d = x % 3
    counter.update([days[d]] * x)
```

## Answer Key
* Mon

## Distractors

* Tue
* Wed
* Thu

## Common errors, misconceptions, or irrelevant information:
* Don't forget the initialization of Counter with `days`.
* `list(range(1, 5, 2)) == [1, 3]`
* `['Hi'] * 3 == ['Hi', 'Hi', 'Hi']`

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

