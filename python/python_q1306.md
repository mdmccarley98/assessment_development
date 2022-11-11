# Python Containers reverse

## Item ID
1306

## Claim
Claim 2

## Claim Behavior (evidence)

[Source](https://docs.python.org/3/library/string.html). Different methods to reverse a string in Python.

## Content Target
`string`

## Cognitive Model 

Comprehension

## Item Type
Multiple choice

## Stem
Which of the following code snippets will NOT reverse the string `hello` and return `olleh`?

## Code Snippet (optional)

```python
string = "hello"
```

## Answer Key

```python
def reverse(s): 
    str = "" 
    for i in s: 
        str = str + i
    return str
print(reverse(string))
```

## Distractors 
### 1.
```python
print(string[::-1])
```

### 2.
```python
print("".join(reversed(string)))
```

### 3.
```python
def reverse(s): 
    if len(s) == 0: 
        return s 
    else: 
        return reverse(s[1:]) + s[0] 
print(reverse(string))
```

## Common errors, misconceptions, or irrelevant information (optional)
The answer does not return the reversed string but rather returns the original string. To make the answer reverse the string the line `str = str + i` should be replaced with `str = i + str`.

## Content Review

- Accuracy: ✅ 🔸 Fixed grammar in stem
- Alignment: ✅
