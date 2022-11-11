# Python Syntax String Concatenation

## Item ID
1299

## Claim

Claim 1

## Claim Behavior (evidence)

[Source](https://www.pythonforbeginners.com/concatenation/string-concatenation-and-formatting-in-python). Different methods to combine strings 

## Content Target
`strings`

## Cognitive Model 

Comprehension

## Item Type
Multiple choice

## Stem
Which of the following will NOT return `greeting = "I need bread, milk, and cheese."`?

## Code Snippet (optional)

## Answer Key
```python
    values = ["I need", "bread", "milk", "and", "cheese"]
    greeting = " ".join(values) 
```

## Distractors 
### 1.
```python
item_1 = "bread"
item_2 = "milk"
item_3 = "cheese"
greeting = f"I need {item_1}, {item_2}, and {item_3}."
```

### 2.
```python
greeting = "I need %s, %s, and %s." % ("bread", "milk", "cheese") 
```

### 3.
```python
item_1 = "bread"
item_2 = "milk"
item_3 = "cheese"
greeting = "I need " + item_1 + ", " + item_2 + ", and " + item_3 + "."
```

## Common errors, misconceptions, or irrelevant information (optional)
The answer, while valid Python, will create the string "I need bread milk and cheese"

## Content Review

- Accuracy: 👎 distractor 1 was missing "and"
- Alignment: ✅
