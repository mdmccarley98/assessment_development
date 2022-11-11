# programmatic_problem_solving

## Item ID
q177

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
What does the following code do?

## Code Snippet (optional)
```python
def f(x, y, map):
   map.colonize_location(x, y)
   for tx, ty in [(1, 0), (0, 1), (-1, 0), (0, -1)]:
       if map.is_fertile(x + tx, y + ty) and not map.colonized(x + tx, y + ty):
           f(x + tx, y + ty, map)

f(0, 0, bohemia)
```

## Answer Key
This is a depth-first traversal over a 2D grid.

## Distractors

### 1.
This code colonizes Bohemia.

### 2.
This program runs some unspecified operation (colonization) on four locations on a grid passed in as an argument.

### 3.
This code tries to find the shortest path between two points on a map, using a recursive A* traversal.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

