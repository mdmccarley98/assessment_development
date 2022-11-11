# Timed Coding - Interleave

## Item ID
1257

## Claim
Coding Logic

## Claim Behavior (evidence)


## Content Target


## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Interleave

## Category
Debugging

## Stem
Write a function that takes two strings, and interleaves their characters.

## Function Name
interleave

## Argument Details and Return Example
```
{
  "arguments": {
    "str1": "string",
    "str2": "string"
  },
  "return_example": "ssttrriinngg"
}
```

## Time to Complete
300

## Public Test Cases (Seen by Candidate)
```
[
  [
    ["123", "abc"],
    "1a2b3c"
  ],
  [
    ["4567", "d"],
    "4d567"
  ]
]
```

## Private Test Cases (NOT Seen by Candidate)
```
[
  [
    ["", "a"],
    "a"
  ],
  [
    ["b", ""],
    "b"
  ],
  [
    ["1234", "a"],
    "1a234"
  ],
  [
    ["a", "1234"],
    "a1234"
  ],
  [
    ["456", "def"],
    "4d5e6f"
  ]
]
```

## Method Stubs
```
{
  "c": "// return a null terminated malloced string\nchar * interleave(char *str1, char *str2) {\n  $CURSOR\n}",
  "c#": "class UserSolution {\n    public static string interleave(string str1, string str2) {\n        $CURSOR\n    }\n}",
  "c++": "// return a malloced string\nstring interleave(string str1, string str2) {\n  $CURSOR\n}",
  "php": "function interleave($str1, $str2) {\n  $CURSOR\n}",
  "java": "public class UserSolution {\n    public static String interleave(String str1, String str2) {\n        $CURSOR\n    }\n}",
  "ruby": "def interleave(str1, str2)\n  nil$CURSOR\nend",
  "swift": "func interleave(str1: String, _ str2: String) -> String {\n  $CURSOR\n}",
  "golang": "func interleave(str1 string, str2 string) string {\n    $CURSOR\n}",
  "haskell": "interleave :: String -> String -> String\ninterleave str1 str2 = undefined$CURSOR",
  "python2": "def interleave(str1, str2):\n    pass$CURSOR",
  "python3": "def interleave(str1, str2):\n    pass$CURSOR",
  "javascript": "function interleave(str1, str2) {\n  $CURSOR\n}"
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
