# programmatic_problem_solving

## Item ID
q635

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
Assuming a tree data structure with child nodes, what does the following code do?

## Code Snippet (optional)
```python
def func(tree):
    nodes = [tree]
    for node in nodes:
        yield node
        nodes += node.children
```

## Answer Key
a breadth-first traversal of the tree

## Distractors

### 1.
a depth-first traversal of the tree

### 2.
a shallow copy of the tree

### 3.
a binary search of the tree

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

