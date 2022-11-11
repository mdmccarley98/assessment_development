# Clearing Rocks

## Item ID
2021

## Claim
Claim 3

## Claim Behavior (evidence)

## Content Target

## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Clearing Rocks

## Category
Debugging

## Stem
A new highway is under construction in an area with very large and heavy rocks. The rocks form a straight line with random gaps between them. The rocks need to be displaced to clear a path for the highway, and each rock takes a day to clear. 
<br><br>
The line of rocks is represented with the string parameter `rocks`, where `X` is a rock and `_` is a gap between rocks. Write a function that returns the **index of the first element of the largest possible clearing** that can be made in a given number of days, passed to the function as the `days` parameter. 
<br><br>
If there are multiple possible solutions, return the index that appears first in the array.
<br><br>
Constraints:

- 0 <= `rocks.length` <= 50
- 0 <= `days`

## Function Name
`largest_clearing_location`

## Argument Details ("arg_name" : default_input)
{
    "rocks" : "XX_X_X_X_X",
    "days": 3
}

## Return Example ("return_example" : return_value)
"return_example" : 2

## Time to Complete
450s

## Public Test Cases (Seen by Candidate)
### 1.
["___",3], 0

### 2.
["XX_",1], 1

### 3.
["XX_X_X_X_X",3], 2

### 4.
["XXXX_X_XX_",2], 3

## Private Test Cases (N_T Seen by Candidate)
### 1.
["_X_",1], 0

### 2.
["_______X",1], 0

### 3.
["X_X",0], 1

### 4.
["XXXXXXX",1], 0

### 5.
["XXXXXXX",8], 0

### 6.
["XXXXX_X",2], 3

## Method Stubs
```
{
  "c++": "int largest_clearing_location(string rocks, int days) {\n  $CURSOR\n}",
  "golang": "func largest_clearing_location(rocks string, days int) int {\n    $CURSOR\n}",
  "c#": "class UserSolution {\n    public static int largest_clearing_location(String rocks, int days) {\n        $CURSOR\n    }\n}",
  "java": "public class UserSolution {\n    public static int largest_clearing_location(String rocks, int days) {\n        $CURSOR\n    }\n}",
  "swift": "func largest_clearing_location(rocks: String, Int days) -> Int {\n  $CURSOR\n}",
  "haskell": "largest_clearing_location :: String -> Int -> Int\nlargest_clearing_location rocks days = undefined$CURSOR",
  "php": "function largest_clearing_location($rocks, days) {\n  $CURSOR\n}",
  "ruby": "def largest_clearing_location(rocks, days)\n  nil$CURSOR\nend",
  "python2": "def largest_clearing_location(rocks, days):\n    pass$CURSOR",
  "python3": "def largest_clearing_location(rocks, days):\n    pass$CURSOR",
  "javascript": "function largest_clearing_location(rocks, days) {\n  $CURSOR\n}"
}
```

## Test case rationale: edge cases, complexity, steps completed.
## Public Test Cases
### 1.
No stones to clear.

### 2.
Would remove middle stone.

### 3.
Clearing starts with an opening.

### 4.
Clearing starts with a stone.

## Private Test Cases
### 1.
Clears entire wall.

### 2.
Clears entire wall, bigger.

### 3.
Zero days just finds the index of the largest opening.

### 4.
Completely obstructed.

### 5.
Days longer than wall.

### 6.
Clears two before existing opening.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
