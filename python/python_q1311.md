# Python std json input

## Item ID
1311

## Claim
Claim 4

## Claim Behavior (evidence)

[Source](https://docs.python.org/3/library/json.html). Use the `json` module, to load data from a file into a Python dictionary.

## Content Target
`read-json`

## Cognitive Model 

Recall

## Item Type
Multiple choice

## Stem
I have a json file saved at `./data/day_1.json`. Which of the following will load the json data into a Python dictionary?

## Code Snippet (optional)
```python
import json
f = open("./data/day_1.json")
data = f.read()
```

## Answer Key
```python
data_dict = json.loads(data)
```

## Distractors 
### 1.
```python
data_dict = json.load(data)
```

### 2.
```python
data_dict = json.dumps(data)
```

### 3.
```python
data_dict = json.dump(data)
```

## Common errors, misconceptions, or irrelevant information (optional)
* `json.load()` opens a file but does not translate a string into a Python dictionary and would need the following syntax to work here:
```python
json.load(open("./data/day_1.json"))
```
* `json.dumps()` serializes an object into a JSON formatted string 
* `json.dump()` writes a Python dictionary into a file

## Content Review

- Accuracy: 👎 The stem asked about loading a file, the snippet read the file into a string, but then the distractor used a file and the key used a string.
    - fixed stem to ask about loading "data" instead of "string" or "file" so the candidate has to understand it is a string.
    - removed irrelevant mention of relative file paths
    - moved `import json` to the code sample
    - fixed `<code>` formatting to ` ```python `
    - fixed stem grammar
    - fixed "common" section formatting, and typos
    - fixed "common" `json.load()` description to use `read("file")` instead of (correct but irrelevant) `read("file", "r")`
- Alignment: ✅

