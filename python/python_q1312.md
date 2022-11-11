# Python Features static methods

## Item ID
1312

## Claim

Claim 3

## Claim Behavior (evidence)

[Static Methods](https://docs.python.org/3/library/functions.html#staticmethod)

## Content Target
`static methods`

## Cognitive Model 

Recall

## Item Type
Multiple choice

## Stem

Assume we want to add a static method to a class that will print out the phrase "Processing...". Which of the following choices is correct?

## Code Snippet (optional)

## Answer Key

```python
    @staticmethod
    def status():
        print("Processing...")
```

## Distractors 
### 1.
```python
    @staticmethod
    def status(self):
        print("Processing...") 
```

### 2.
```python
    def status(self):
        print("Processing...") 
```

### 3.
```python
    def status():
        print("Processing...") 
```


## Common errors, misconceptions, or irrelevant information (optional)
Static methods require a `staticmethod` decorator and do not take `self` as an argument.

## Content Review

- Accuracy: ✅
- Alignment: ✅

* fixed `<code>` formatting to ` ```python `
