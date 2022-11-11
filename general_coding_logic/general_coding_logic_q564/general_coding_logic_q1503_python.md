# programmatic_problem_solving

## Item ID
1503

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is the value of the variable `tree` after the following code runs?

## Code Snippet (optional)
```python
def build_word_tree_from_sentences(sentence_list):
  root = {}
  for sentence in sentence_list:
    base = root
    for word in sentence.split(' '):
      if not base.get(word):
        base[word] = {}
      base = base[word]
  return root

tree = build_word_tree_from_sentences(["Hello world", "Hello there"])
```

## Answer Key
```python
{'Hello': {'world': {}, 'there': {}}}
```

## Distractors

### 1.
```python
['Hello', ['world', 'there']]
```

### 2.
```python
{'Hello': ['world', 'there']}
```

### 3.
```python
{'Hello': {'Hello world': {}, 'Hello there': {}}}
```

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

