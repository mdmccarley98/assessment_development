## Item ID
15

## Claim
Coding Logic

## Claim Behavior (evidence)


## Content Target


## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Bracket match TEST 2

## Category
Debugging

## Stem
A string of brackets is correctly matched if you can pair every opening bracket up with a later closing bracket, and vice versa. For example, "(()())" is correctly matched, and "(()" and ")(" are not.

Implement a function which takes a string of brackets and returns the minimum number of brackets you'd have to add to the string to make it correctly matched.

For example, "(()" could be correctly matched by adding a single closing bracket at the end, so you'd return 1. ")(" can be correctly matched by adding an opening bracket at the start and a closing bracket at the end, so you'd return 2.

If your string is already correctly matched, you can just return 0.

## Function Name
bracket_match

## Argument Details and Return Example
```
{
  "arguments": {
    "bracket_string": "(()))"
  },
  "return_example": 1
}
```

## Time to Complete
1800

## Public Test Cases (Seen by Candidate)
```
[
  [
    "(()())",
    0
  ],
  [
    "((())",
    1
  ],
  [
    "())",
    1
  ]
]
```

## Private Test Cases (NOT Seen by Candidate)
```
[
  [
    "))((",
    4
  ],
  [
    "(",
    1
  ],
  [
    "()",
    0
  ],
  [
    "",
    0
  ],
  [
    ")",
    1
  ],
  [
    "))))",
    4
  ],
  [
    "()()()",
    0
  ],
  [
    "((((((((((((((((((((",
    20
  ]
]
```

## Method Stubs
```
{
  "c": "int bracket_match(char *bracket_string) {\n  $CURSOR\n}",
  "c#": "class UserSolution {\n    public static int bracket_match(string bracket_string) {\n        $CURSOR\n    }\n}",
  "c++": "int bracket_match(string bracket_string) {\n  $CURSOR\n}",
  "php": "function bracket_match($bracket_string) {\n  $CURSOR\n}",
  "java": "public class UserSolution {\n    public static int bracket_match(String bracket_string) {\n        $CURSOR\n    }\n}",
  "ruby": "def bracket_match(bracket_string)\n  nil$CURSOR\nend",
  "swift": "func bracket_match(bracket_string: String) -> Int {\n  $CURSOR\n}",
  "golang": "func bracket_match(bracket_string string) int {\n    $CURSOR\n}",
  "haskell": "bracket_match :: String -> Int\nbracket_match bracket_string = undefined$CURSOR",
  "python2": "def bracket_match(bracket_string):\n    pass$CURSOR",
  "python3": "def bracket_match(bracket_string):\n    pass$CURSOR",
  "javascript": "function bracket_match(bracket_string) {\n  $CURSOR\n}"
}
```

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
