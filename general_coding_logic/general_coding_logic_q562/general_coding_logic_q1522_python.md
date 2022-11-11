# programmatic_problem_solving

## Item ID
1522

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
What is the value of the variable `names` after the following code runs?

## Code Snippet (optional)
```python
def deleteBlankItems(items):
  i = 0
  while i < len(items):
    if len(items[i]) == 0:
      # remove element at index i
      del items[i]
    i += 1

names = ['Rachel', '', 'Meghana', '', '', 'Tim'];
deleteBlankItems(names)
```

## Answer Key
`['Rachel', 'Meghana', '', 'Tim']`

## Distractors

### 1.
`['Rachel', '', 'Meghana', '', '', 'Tim']`

### 2.
`['Rachel', '', 'Meghana', '', 'Tim']`

### 3.
`['Rachel', 'Meghana', 'Tim']`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

