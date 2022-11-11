# Timed Coding - Longest Palindromic Substring

## Item ID
1260

## Claim
Coding Logic

## Claim Behavior (evidence)


## Content Target


## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Longest palindromic substring

## Category
Debugging

## Stem
A palindrome is a string which reads the same forwards as backwards, for example "abba" or "racecar" or "bob".

Write a function which returns the length of the longest palindromic substring of a given string. For example, the longest palindromic substring of "bobcat" is "bob", so you'd return 3. You do not need to come up with an optimized algorithm for this. A simple search through all substrings is fine.    

## Function Name
longest_palindromic_substring

## Argument Details and Return Example
```
{
  "arguments": {
    "str": "string"
  },
  "return_example": 1
}
```

## Time to Complete
300

## Public Test Cases (Seen by Candidate)
```
[
  [
    "abba",
    4
  ],
  [
    "bobcat",
    3
  ],
  [
    "acyclic",
    3
  ]
]
```

## Private Test Cases (NOT Seen by Candidate)
```
[
  [
    "a",
    1
  ],
  [
    "abacde",
    3
  ],
  [
    "cdeaba",
    3
  ],
  [
    "cabade",
    3
  ],
  [
    "abcdefghijklmnopqrstuvwxzy",
    1
  ],
  [
    "aaaaaaaaaaaaaaaaaaaab",
    20
  ],
  [
    "baaaaaaaaaaaaaaaaaaaa",
    20
  ],
  [
    "baaaaaaaaaaaaaaaaaaaac",
    20
  ]
]
```

## Method Stubs
```
{
  "c": "int longest_palindromic_substring(char *str) {\n  $CURSOR\n}",
  "c#": "class UserSolution {\n    public static int longest_palindromic_substring(string str) {\n        $CURSOR\n    }\n}",
  "c++": "int longest_palindromic_substring(string str) {\n  $CURSOR\n}",
  "php": "function longest_palindromic_substring($str) {\n  $CURSOR\n}",
  "java": "public class UserSolution {\n    public static int longest_palindromic_substring(String str) {\n        $CURSOR\n    }\n}",
  "ruby": "def longest_palindromic_substring(str)\n  nil$CURSOR\nend",
  "swift": "func longest_palindromic_substring(str: String) -> Int {\n  $CURSOR\n}",
  "golang": "func longest_palindromic_substring(str string) int {\n    $CURSOR\n}",
  "haskell": "longest_palindromic_substring :: String -> Int\nlongest_palindromic_substring str = undefined$CURSOR",
  "python2": "def longest_palindromic_substring(str):\n    pass$CURSOR",
  "python3": "def longest_palindromic_substring(str):\n    pass$CURSOR",
  "javascript": "function longest_palindromic_substring(str) {\n  $CURSOR\n}"
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
