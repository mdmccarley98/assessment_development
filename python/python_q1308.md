# Python Features dictionary comprehension

## Item ID
1308

## Claim
Claim 3

## Claim Behavior (evidence)

[Source](https://www.python.org/dev/peps/pep-0274/). Dictionary Comprehension

## Content Target
`dictionary-comprehension`

## Cognitive Model 

Recall

## Item Type
Multiple choice

## Stem

Say we have the dictionary below called `original_dict` and we want to rename the keys to `new_{original_key_name}` and have the new values be the original values mod 5. Which of the following dictionary comprehension code examples will successfully do so?

## Code Snippet (optional)

```python
    original_dict = {
        "a": 26,
        "b": 63,
        "c": 44
    }
```

```python
    new_dict = {
        "new_a": 1,
        "new_b": 3,
        "new_c": 4
    }   
```

## Answer Key
```python
new_dict = {f"new_{k}": v % 5 for k, v in original_dict.items()}
```

## Distractors 
### 1.
```python
new_dict = ((f"new_{k}", v % 5) for k, v in original_dict.items())
```

### 2.
```python
new_dict = {f"new_{k}", v % 5 for k, v in original_dict.items()}
```

### 3.
```python
new_dict = [(f"new_{k}", v % 5) for k, v in original_dict.items()]
```

## Common errors, misconceptions, or irrelevant information (optional)

the `.items()` is needed to transform the dictionary into a list key-value pair tuples you can iterate through.


## Content Review

- Accuracy: ✅
- Alignment: 🔸 it was half about dict comprehensions, and half about `Dictionary.items()` which are needed in for loops too.

- fixed distractors to be more well aligned with distractors that use `()` generators or `[]` lists
    - key: `{f"new_{k}": v % 5 for k, v in original_dict.items()}`
    1. `((f"new_{k}", v % 5) for k, v in original_dict.items())`
    2. `{f"new_{k}", v % 5 for k, v in original_dict.items()}`
    3. `[(f"new_{k}", v % 5) for k, v in original_dict.items()]`
