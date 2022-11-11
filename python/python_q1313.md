# Python std json output

## Item ID
1313

## Claim
Claim 4

## Claim Behavior (evidence)
[The `json` library](https://docs.python.org/3/library/json.html). 

## Content Target
`json`

## Cognitive Model 

Recall

## Item Type
Multiple choice

## Stem
Which of the following options will write a Python dictionary to a `json` file named `output.json`?

## Code Snippet (optional)
```python
output = {
    "mean": 12.34,
    "mode": 2,
    "median": 7
}
```

## Answer Key

```python
import json
with open('output.json', 'w') as fd:
    json.dump(output, fd)
```

## Distractors 
### 1.
```python
import json
with open('output.json', 'w') as fd:
    json.load(output, fd)
```

### 2.
```python
import json
with open('output.json', 'w') as fd:
    json.dumps(output, fd)
```

### 3.
```python
import json
with open('output.json', 'w') as fd:
    json.loads(output, fd) 
```

## Common errors, misconceptions, or irrelevant information (optional)
* `json.load()` opens a file and loads the JSON data into a dictionary
* `json.loads()` loads a JSON string into a dictionary
* `json.dumps()` serializes an object into a JSON formatted string, it doesn't write to a file

## Content Review

- Accuracy: 🤷‍ The key and distractor 1 were the same except `import json`, distractor 2 and distractor 3 were the same except `import json`.  It was correct but the distractors were about loading libraries not using a library.
    * changed distractor 1 from `dump` to `load`
    * changed distractor 3 from `dumps` to `loads`
    * added info to the "misconceptions" section
- Alignment: 👎 It wasn't about generic file writing, but instead about using `json` to write to a file.
    * changed target to `json`

* fixed `<code>` formatting to ` ```python `
