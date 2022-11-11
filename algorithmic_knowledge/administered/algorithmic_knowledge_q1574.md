# A*'s Heuristic Function

## Item ID
1574

## Claim
1: algorithms

## Target Skill Level
4

## Claim Behavior (evidence)
> Some common variants of Dijkstra's algorithm can be viewed as a special case of A* where the heuristic h(n) = 0 for all nodes
[Relations to other algorithms](https://en.wikipedia.org/wiki/A*_search_algorithm#Relations_to_other_algorithms)

## Content Target
Shortest Path

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
The A* algorithm requires a heuristic function.  Assume that the graph is finite and that there exists some path between the starting node and the goal node.  What would happen if you provided the A* algorithm a heuristic function that returned 0 for all nodes?

## Code Snippet (optional)

## Answer Key
It would return a solution, but the search would not be directed toward the goal.

## Distractors
### 1.
It would never terminate.

### 2.
It would run out of memory since the state-space becomes infinite when the heuristic function returns 0.

### 3.
It would return, but without finding the solution.

## Common errors, misconceptions, or irrelevant information:
* A* is just a directed variant of Dijkstra's algorithm.  Or, conversely, Dijkstra's algorithm is a special case of A*.
* The heuristic function is what allows A* to be "directed" or "informed" about likely best choices to search first.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
