# Python Features __name__

## ID
lang_python_22

## Claim

Claim 3

## Claim Behavior (evidence)

[Source](https://docs.python.org/3/library/__main__.html). Using `if __name__ == "__main__"` in a Python script

## Content Target
`name-main`

## Cognitive Model 

Recall

## Item Type
Multiple choice

## Stem

You have a module named `hello.py` below.
What will be the output when executing it using:
```
python hello.py
```

## Code Snippet (optional)

```python
# hello.py
def hi():
    print("hello world!")

if __name__ == "__main__":
    hi()

print(__name__)
```

## Answer Key

```
hello world!
__main__
```

## Distractors 
### 1.
```
hello world!
hello.py
```

### 2.
```
hello.py
hello world!
```

### 3.
```
__main__
hello world!
```

## Common errors, misconceptions, or irrelevant information (optional)

## Content Review

- Accuracy: ✅ It wasn't very clear if it was being loaded or executed directly.  But the distractors were all fine regardless of how it is executed.
    * Adjusted the stem to execute the module directly.
- Alignment: ✅

* fixed `<code>` formatting to ` ```python `
* added formatting around key and distractors
