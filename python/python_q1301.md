# Python std Zip

## Item ID
1301

## Claim
Claim 4

## Claim Behavior (evidence)

[Source](https://docs.python.org/3/library/functions.html#zip). `zip()` function, accessing values in a dictionary

## Content Target
`zip`

## Cognitive Model 

Comprehension

## Item Type
Multiple choice

## Stem
Will this code run successfully and if so what will be the type of the output?

## Code Snippet (optional)

```python
list_1 = ["a", "b", "c", "d", "e", "f"]
list_2 = [1, 3.4, "pig", 4, False]
dict_a = dict(zip(list_1, list_2))
print(type(dict_a["f"]))
```

## Answer Key
The code will not run successfully

## Distractors 
### 1.
`Boolean`

### 2.
`integer`

### 3.
`string`

## Common errors, misconceptions, or irrelevant information (optional)
When using `zip()` if the two lists are different length then the missing items are dropped.
In this problem `len(list_1)` is `6` while `len(list_2)` is `5`.

## Content Review

- Accuracy: ✅
- Alignment: ✅

Fixed misconceptions:

When using `zip()` if the two lists are different length then the missing items are dropped.
In this problem `len(list_1)` is `6` while `len(list_2)` is `5`.

The docs say:
> The iterator stops when the shortest input iterable is exhausted.
