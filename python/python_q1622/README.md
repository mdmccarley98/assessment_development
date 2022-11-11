# Python Containers dict iter

## Item ID
1622

## Claim
2. Be able to manipulate the language’s container objects in whatever form they take.

## Claim Behavior (evidence)
- [Iterating Through Keys Directly](https://realpython.com/iterate-through-dictionary-python/#iterating-through-keys-directly) - realpython.com
- [Django Template iterate items in dictionary](https://stackoverflow.com/a/1175050/92584) - stack overflow

## Content Target
dict.items()

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

You have a dictionary with some months and numbers in it.

```python
months = dict(January=1, February=2, March=3)
```

Which of the following will print the month name and number as follows:

```
January 1
February 2
March 3
```


## Code Snippet (optional)


## Answer Key

```python
for k, v in months.items():
    print(k, v)
```


## Distractors

### 1.
```python
for k, v in months:
    print(k, v)
```

### 2.
```python
for i in months.values():
    print(i, months[i])
```

### 3.
```python
for i in range(months):
    print(i, months[i])
```


## Common errors, misconceptions, or irrelevant information:

It's good to remember the .items() function for other python related things like django templates:
```
{% for key, value in dict.items %}
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

