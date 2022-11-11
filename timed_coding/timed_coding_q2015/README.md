# Determine if Go Stones Have Been Captured

## Item ID
2015

## Claim
5

## Claim Behavior (evidence)

## Content Target

## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Determine If Go Stones Have Been Captured

## Category
Debugging

## Stem
This challenge is to implement one of the essential rules in the game of Go, determining whether a group of stones has been captured. In Go, stones form a "group" when they share orthogonally adjacent borders (up, down, left, and right) with same-colored stones. If an unbroken path of orthogonally adjacent connections exists between any two same-colored stones, they are part of the same group. A group of stones is captured if none of the stones in the group share an orthogonally adjacent border with an empty space. Edges of the board do not count as empty spaces.

Write a function that returns true if and only if the stone in the provided "position" is part of a group that has been captured.

The board is described as a string where rows are delimited by new lines, and each position can be 'B' for black, 'W' for white, or '.' for empty. The board will always be square and never larger than a full-size 19x19 board.

Position: 
<ul>
  <li>[row, column]</li>
  <li>Will always be a valid position of a stone</li>
</ul>

## Function Name
`is_captured`

## Argument Details ("arg_name" : default_input)
{
    "board" : "...\nWBW\n.W.",
    "position": [0, 1]
}

## Return Example ("return_example" : return_value)
"return_example" : true

## Time to Complete
1800s

## Public Test Cases (Seen by Candidate)
### 1.
["...\n.B.\n...",[1,1]], false

### 2.
[".W.\nWBW\n.W.",[1,1]], true

### 3.
["...\nWBW\n.W.",[1,1]], false

### 4. 
["...\nWBW\n.W.",[0,1]], false

### 5. 
["WWWWW\nWBBBW\nWB.BW\nWBBBW\nWWWWW",[1,1]], false

### 6.
[".WWW.\nWBBW.\n.WBW.\n.WBW.\n..W..",[1,1]], true

## Private Test Cases (NOT Seen by Candidate)
### 1.
["..W\n.WB\n..W",[1,2]], true

### 2. 
["..W\n.WB\n..W",[0,2]], false

### 3. 
[".BW\nBWW\n.BW",[1,1]], true

### 4. 
[".BW\nBWW\n.B.",[1,1]], false

### 5.
["BBB\nBBB\nBBB",[1,1]], true

### 6.
["....\n..BW\n..WB\n..WB",[2,3]], true

## Method Stubs
```
{
  "c": "bool is_captured(char* board, int* position) {\n  $CURSOR\n}",
  "c++": "bool is_captured(char* board, int* position) {\n  $CURSOR\n}",
  "golang": "func is_captured(board string, position []int) bool {\n    $CURSOR\n}",
  "c#": "class UserSolution {\n    public static bool is_captured(String board, int[] position) {\n        $CURSOR\n    }\n}",
  "java": "public class UserSolution {\n    public static boolean is_captured(String board, int[] position) {\n        $CURSOR\n    }\n}",
  "swift": "func is_captured(board: String, position: Array<Int>) -> Bool {\n  $CURSOR\n}",
  "haskell": "is_captured :: String -> [Int] -> Bool\nis_captured board position = undefined$CURSOR",
  "php": "function is_captured($board, $position) {\n  $CURSOR\n}",
  "ruby": "def is_captured(board, position)\n  nil$CURSOR\nend",
  "python2": "def is_captured(board, position):\n    pass$CURSOR",
  "python3": "def is_captured(board, position):\n    pass$CURSOR",
  "javascript": "function is_captured(board, position) {\n  $CURSOR\n}"
}
```

## Test case rationale: edge cases, complexity, steps completed.
## Public Test Cases
### 1.
Simplest uncaptured case.

### 2.
Simplest captured case.

### 3.
Almost captured.

### 4. 
Captured on top edge.

### 5.
Eye in middle of circular group.

### 6.
L-shaped group captured.

## Private Test Cases
### 1.
Captured on right edge.

### 2.
Same board, other color.

### 3.
Captured group against edge.

### 4.
Almost captured group against edge.

### 5.
Impossible, but captured.

### 6. 
Diagonal stones don't count towards connection.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
