# Timed Coding - Tile Jumping

## Item ID
2879

## Claim

## Claim Behavior (evidence)

## Content Target

## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Tile Jumping

## Category
Debugging

## Stem
There are a number of floor tiles arranged in a straight two-dimensional grid, each numbered with a non-negative integer. Imagine you were standing on the tile in the top left corner. From there, you can jump through the tiles either down or to the right, but never up or to the left. The number engraved on each tile is the maximum distance you can jump from that position in either direction. (For instance, if you are standing on a tile with the number 5, you can jump up to 5 tiles down or to the right). Figure out if there is a series of jumps that can land you on the tile in the bottom right corner.

    X | ■ | ■ | ■ | ■
    ■ | ■ | ■ | ■ | ■
    ■ | ■ | ■ | ■ | ■
    ■ | ■ | ■ | ■ | ■
    ■ | ■ | ■ | ■ | ?

*Note: that the grid is represented by the input argument "tiles" as a standard two-dimensional array.*

Example:

`tiles = [[1, 2, 0], [3, 2, 1], [5, 1, 1]]`  

<pre>
<b>1</b> | <b>2</b> | 0 
3 | 2 | 1 
5 | <b>1</b> | <b>1</b>
</pre>

`result = true`


## Function Name
canReachExit

## Argument Details ("arg_name" : default_input)
"tiles" : [ [1, 2, 0], [3, 2, 1], [5, 1, 1] ]

## Return Example ("return_example" : return_value)
"return_example" : true

## Time to Complete
600

## Public Test Cases (Seen by Candidate)
### 1.
[[ [1, 2, 0], [3, 2, 1], [5, 1, 1] ],true]

### 2.
[[ [1, 3, 2, 4], [2, 2, 0, 1], [5, 1, 1, 2] ], false]

### 3.
[[ [1, 1, 1, 1, 1], [1, 0, 1, 1, 1], [1, 1, 0, 1, 0], [1, 1, 1, 0, 1], [1, 1, 1, 1, 1] ], true]

### 4.
[[ [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 0], [1, 1, 1, 1, 0], [1, 1, 1, 0, 1]] ], false]

## Private Test Cases (NOT Seen by Candidate)
### 1.
[[ [3, 3, 2], [2, 1, 2], [1, 2, 5], [2, 1, 1] ], true]

### 2.
[[ [0, 1, 2], [2, 5, 2], [1, 4, 5], [2, 1, 1] ], false]

### 3.
[[ [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1] ], true]

### 4.
[[ [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0] ], false]

### 5.
[[ [0] ], true]

### 6.
[[ [1] ], true]

## Test case rationale: edge cases, complexity, steps completed.
## Public Test Cases
### 1.
3x3 grid

### 2.
4x3 grid

### 3.
5x5 grid with multiple paths

### 4.
5x5 grid with diagonal path

## Private Test Cases
### 1.
3x3 grid with multiple paths

### 2.
3x3 grid with starting tile 0

### 3.
5x5 grid with all 1s (2^n paths)

### 4.
5x5 grid with all 0s (0 paths)

### 5.
Entering tile same as exit tile (cannot jump, but irrelevant)

### 6.
Entering tile same as exit tile (can jump, but irrelevant)

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
