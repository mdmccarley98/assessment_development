# algorithmic_knowledge

## Item ID
q150

## Claim
1: algorithms

## Target Skill Level
3

## Claim Behavior (evidence)
NA

## Content Target
Design & Implementation

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
Suppose you need to write a program to solve a maze as represented in ASCII characters as follows. How might you best do this?

## Code Snippet (optional)
```NA
###########
    #     #
#   #  #  #
#      #  
###########
```

## Answer Key
We need to view the maze as a graph where each node (space in the maze) has edges to the spaces beside it. Then we can run A* (or BFS) over this graph.

## Distractors

### 1.
We can apply the left-hand rule to solve this maze. If we start at the entry point and always move toward the left wall if possible, we'll eventually emerge from the exit point.

### 2.
A recursive function that takes an x,y coordinate pair and recursively calls itself with neighboring coordinates will eventually find the optimal path through the maze.

### 3.
We can create a priority queue with a list of active cells (with priority of how far they are from the exit). Then we can just visit the highest priority cell and add its neighbors to the queue.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

