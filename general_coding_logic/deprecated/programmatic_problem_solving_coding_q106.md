# programmatic_problem_solving

## Item ID
q106

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
What's wrong with this code?

## Code Snippet (optional)
```python
# Return the length of the longest path
# through a binary tree 
def max_height(node):
    if not node:
        return 0
    left  = max_height(node.left)
    right = max_height(node.right)
    return max(left, right)
```

## Answer Key
This needs to add one to the value it returns

## Distractors

### 1.
This is missing a base case. Infinite recursion!

### 2.
This is calculating the width of the tree, not the height

### 3.
This method is correct

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

