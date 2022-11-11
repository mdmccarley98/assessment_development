# Libraries Python requests

## Item ID
1324

## Claim
Claim 5

## Claim Behavior (evidence)

[Source](https://requests.readthedocs.io/en/master/). Requests library to get data from an API url.

## Content Target
`requests`

## Cognitive Model 

Use

## Item Type

Multiple choice

## Stem

Imagine that the server at `http://example.com/sample.json` returns valid json data.
Which of the following choices will get the json data as a Python dictionary?

## Code Snippet (optional)
```python
import requests

res = requests.get("http://example.com/sample.json")
```

## Answer Key

```python
content = res.json()
```

## Distractors 
### 1.
```python
content = res.body
```

### 2.
```python
content = res.text
```

### 3.
```python
content = res.body.json()
```

## Common errors, misconceptions, or irrelevant information (optional)

## Content Review

- Accuracy: 🔸
    * so happy that `example.com` was used instead of `foo.com` 😃😃😃
    * fixed typo: `pythonurl` != `url` by putting the url the function
    * distractor 1 and distractor 3 were identical
    * `get()` or `post()` are irrelevant to the stem, so changed the stem sample to use `get()`
    * added clarification to stem to imagine that example.com/sample.json will return valid json (which it won't in reality)
    * changed distractor 1 from `res.json()` to `res.body`
    * changed distractor 3 from `res.json()` to `res.body.json()` (JavaScript style)

- Alignment: ✅

* fixed `<code>` formatting to ` ```python `
* tested with `requests==2.24.0`
