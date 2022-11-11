# programmatic_problem_solving

## Item ID
1515

## Claim
2

## Claim Behavior (evidence)
```python
class O:
  def __init__(self, name, date):
    self.name = name
    self.date = date
  def __repr__(self):
    return f"O({self.name}:{self.date})"
```
```
>>> objs = [O('apple', '2021-05-01'), O('bubble', '2021-02-28'), O('art', '2021-04-01'), O('bubble', '2021-03-01')]


>>> sorted(sorted(objs, key=lambda o: o.date, reverse=True), key=lambda o: o.name)
[O(apple:2021-05-01), O(art:2021-04-01), O(bubble:2021-03-01), O(bubble:2021-02-28)]


>>> sorted(objs, key=lambda o: (o.name, o.date))
[O(apple:2021-05-01), O(art:2021-04-01), O(bubble:2021-02-28), O(bubble:2021-03-01)]


>>> sorted(sorted(objs, key=lambda o: o.name), key=lambda o: o.date, reverse=True)
[O(apple:2021-05-01), O(art:2021-04-01), O(bubble:2021-03-01), O(bubble:2021-02-28)]


>>> sorted(objs, key=lambda o:(o.date, o.name))
[O(bubble:2021-02-28), O(bubble:2021-03-01), O(art:2021-04-01), O(apple:2021-05-01)]
```

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Given objects with `name` and `date` fields, the task is to sort the objects alphabetically by name, using most recent date as a tie-breaker. Which call(s) to a stable sort method would implement this correctly?


## Code Snippet (optional)

## Answer Key
```python
sorted(sorted(objs, key=lambda o: o.date, reverse=True), key=lambda o: o.name)
```

## Distractors

### 1.
```python
sorted(objs, key=lambda o: (o.name, o.date))
```

### 2.
```python
sorted(sorted(objs, key=lambda o: o.name), key=lambda o: o.date, reverse=True)
```

### 3.
```python
sorted(objs, key=lambda o:(o.date, o.name))
```

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

