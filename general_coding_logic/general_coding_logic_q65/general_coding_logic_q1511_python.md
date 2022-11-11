# programmatic_problem_solving

## Item ID
1511

## Claim
2

## Claim Behavior (evidence)
```python
# function recursively reverses a string
def recursive_string_reverse(string):
    if len(string) <= 1:
        return string

    first_char = string[0]
    last_chars = string[1:len(string)]
    # MISSING LINE
    return recursive_string_reverse(last_chars) + first_char

print(recursive_string_reverse("tin"))
print(recursive_string_reverse("triplebyte"))
```
```
% python example.py
nit
etybelpirt
```

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Select the line of code that completes the function

## Code Snippet (optional)
```python
# function recursively reverses a string
def recursive_string_reverse(string):
    if len(string) <= 1:
        return string

    first_char = string[0]
    last_chars = string[1:len(string)]
    # MISSING LINE
```

## Answer Key
```python
return recursive_string_reverse(last_chars) + first_char
```


## Distractors

### 1.
```python
return recursive_string_reverse(last_chars)
```


### 2.
```python
return first_char + recursive_string_reverse(last_chars)
```


### 3.
```python
return last_chars + first_char
```


## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

