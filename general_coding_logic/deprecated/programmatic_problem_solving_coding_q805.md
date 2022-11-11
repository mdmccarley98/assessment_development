# programmatic_problem_solving

## Item ID
q805

## Claim
3

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
The following code snippet walks a directed acyclic graph (DAG).  What is an accurate statement regarding it?

## Code Snippet (optional)
```python
while nodes:
    node = nodes.pop()
    process(node)
    nodes.extend(node.children)
```

## Answer Key
If `nodes` is a queue, it traverses breadth-first; if `nodes` is a stack, it traverses depth-first

## Distractors

### 1.
It assumes the DAG is a tree

### 2.
A node can never be revisited

### 3.
It may get stuck in an infinite loop

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

