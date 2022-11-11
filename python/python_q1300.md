# Python Syntax String Slicing

## Item ID
1300

## Claim

Claim 1

## Claim Behavior (evidence)

[Source](https://docs.python.org/3/library/string.html). String splitting and concatenating.

## Content Target
`String`

## Cognitive Model 

Comprehension

## Item Type
Multiple choice

## Stem

Which of the following code snippets will convert the string "I love Python!" into "!nohtyP love I"?

## Code Snippet (optional)

```python
    string = "I love coding in Python!"
```

## Answer Key

```python
    string_list = string.split(" ")
    " ".join([string_list[-1][::-1], string_list[1], string_list[0]])
```

## Distractors 
### 1.
```python
    " ".join([string[-1][::-1], string[1], string[0]])
```

### 2.
```python
    string_list = string.split(" ")
    " ".join(string_list[-1][::-1], string_list[1], string_list[0])
```

### 3.
```python
    string_list = string.split(" ")
    " ".join([string_list[-1], string_list[1], string_list[0]])    
```

## Common errors, misconceptions, or irrelevant information (optional)

## Content Review

- Accuracy: ✅ only one answer works, a bit convoluted
- Alignment: ✅ it's a bit about strings, and also sending an array or arguments to `str.join()`

