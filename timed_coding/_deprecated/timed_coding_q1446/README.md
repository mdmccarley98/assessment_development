# Tile Jumping

## Item ID
1446

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
There are a number of tiles on the floor, each numbered with a different non-negative integer. Treat this set of tiles as an array.

You are initially standing on the first tile. Each tile in the set represents your maximum jumping distance at that position. (For example, if you are standing on 3, you can jump up to 3 tiles forward).

Find out if you can reach the last tile.

## Function Name
can_reach_end

## Argument Details ("arg_name" : default_input)
"nums" : [1,2,3]

## Return Example ("return_example" : return_value)
"return_example" : true

## Time to Complete
600

## Public Test Cases (Seen by Candidate)
### 1.
[[[1,2,3]],true]

### 2.
[[[5,0,0,0]],true]

### 3.
[[[0]],true]

### 4.
[[[0,2,4]],false]

### 5.
[[[1,2,0,0,1]],false]

## Private Test Cases (NOT Seen by Candidate)
### 1.
[[[6,7,0,0,0,1]],true]

### 2.
[[[10]],true]

### 3.
[[[0,0,5]],false]

### 4.
[[[1,1,1,1,1,1,0]],true]

### 5.
[[[1000,1000,1000,1000,1000]],true]

### 6.

## Test case rationale: edge cases, complexity, steps completed.
## Public Test Cases
### 1.

### 2.

### 3.

## Private Test Cases
### 1.

### 2.

### 3.

### 4.

### 5.

### 6.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
