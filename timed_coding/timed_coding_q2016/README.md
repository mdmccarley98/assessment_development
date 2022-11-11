# Distance of Shortest Path to Leaf Node

## Item ID
2016

## Claim
3

## Claim Behavior (evidence)

## Content Target

## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Distance of Shortest Path to Leaf Node

## Category
Debugging

## Stem
Given a string that describes a binary tree, return the smallest number of nodes that form a path from the root to any leaf node.

The input string is a comma-delimited list of relationships in the tree. Each relationship is 4 characters: the name of the parent (1 character), the characters `->`, and the name of the child (1 character). There is always at least one relationship, so there are always at least two nodes.

The first character in the input string is always the root node. Beyond that, the relationships can be specified in any order.

## Function Name
`shortest_path`

## Argument Details ("arg_name" : default_input)
{
    "tree_string" : "A->B,A->C,B->D"
}

## Return Example ("return_example" : return_value)
"return_example" : 2

## Time to Complete
900s

## Public Test Cases (Seen by Candidate)
### 1.
["A->B,A->C,B->D"], 2

### 2.
["1->2,2->3,3->4,2->3"], 4

### 3.
["C->D"], 2,

## Private Test Cases (NOT Seen by Candidate)
### 1.
["4->2,4->6,2->1,6->3,6->9,3->0,3->8"], 3

### 2.
["4->2,3->0,3->8,4->6,2->1,6->3,6->9"], 3

### 3.
["A->B,A->C"], 2

### 4.
["A->B,A->C,C->D"], 2

## Method Stubs
```
{
  "c": "int shortest_path(char* tree_string) {\n  $CURSOR\n}",
  "c++": "int shortest_path(char* tree_string) {\n  $CURSOR\n}",
  "golang": "func shortest_path(tree_string string) int {\n    $CURSOR\n}",
  "c#": "class UserSolution {\n    public static int shortest_path(String tree_string) {\n        $CURSOR\n    }\n}",
  "java": "public class UserSolution {\n    public static int shortest_path(String tree_string) {\n        $CURSOR\n    }\n}",
  "swift": "func shortest_path(tree_string: String) -> Int {\n  $CURSOR\n}",
  "haskell": "shortest_path :: String -> Int\nshortest_path tree_string = undefined$CURSOR",
  "php": "function shortest_path($tree_string) {\n  $CURSOR\n}",
  "ruby": "def shortest_path(tree_string)\n  nil$CURSOR\nend",
  "python2": "def shortest_path(tree_string):\n    pass$CURSOR",
  "python3": "def shortest_path(tree_string):\n    pass$CURSOR",
  "javascript": "function shortest_path(tree_string) {\n  $CURSOR\n}"
}
```

## Test case rationale: edge cases, complexity, steps completed.
## Public Test Cases
### 1.
Simple case.

### 2.
Just one path.

### 3.
Minimal case.

## Private Test Cases
### 1.
Slightly bigger tree

### 2.
Same, but different order of input.

### 3.
Just two children.

### 4.
Like the simple case, but the longer path comes from C.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
