## Item ID
6

## Claim
Coding Logic

## Claim Behavior (evidence)


## Content Target


## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Almost palindrome

## Category
Debugging

## Stem
The palindromic score of a string is the number of errors (characters which do not match) when the string is read forwards and backwards. For example, the palindromic score of 'fox' is 2, because 'fox' and 'xof' differ by two characters. Write a function to take a string and return its palindromic score.

## Function Name
almost_palindrome

## Argument Details and Return Example
```
{
  "arguments": {
    "str": "string"
  },
  "return_example": 3
}
```

## Time to Complete
450

## Public Test Cases (Seen by Candidate)
```
[
  [
    "abba",
    0
  ],
  [
    "racecar",
    0
  ],
  [
    "abcdcaa",
    2
  ],
  [
    "aaabbb",
    6
  ],
  [
    "abcdefgh",
    8
  ],
  [
    "a",
    0
  ]
]
```

## Private Test Cases (NOT Seen by Candidate)
```
[
  [
    "aa",
    0
  ],
  [
    "aaa",
    0
  ],
  [
    "abc",
    2
  ],
  [
    "abcd",
    4
  ],
  [
    "aaaaaaaaaaaaabbaaaaaaaaaaaaa",
    0
  ],
  [
    "aaabcde",
    6
  ]
]
```

## Method Stubs
```
{
  "c": "int almost_palindrome(char *str) {\n  $CURSOR\n}",
  "c#": "class UserSolution {\n    public static int almost_palindrome(string str) {\n        $CURSOR\n    }\n}",
  "c++": "int almost_palindrome(string str) {\n  $CURSOR\n}",
  "php": "function almost_palindrome($str) {\n  $CURSOR\n}",
  "java": "public class UserSolution {\n    public static int almost_palindrome(String str) {\n        $CURSOR\n    }\n}",
  "ruby": "def almost_palindrome(str)\n  nil$CURSOR\nend",
  "swift": "func almost_palindrome(str: String) -> Int {\n  $CURSOR\n}",
  "golang": "func almost_palindrome(str string) int {\n    $CURSOR\n}",
  "haskell": "almost_palindrome :: String -> Int\nalmost_palindrome str = undefined$CURSOR",
  "python2": "def almost_palindrome(str):\n    pass$CURSOR",
  "python3": "def almost_palindrome(str):\n    pass$CURSOR",
  "javascript": "function almost_palindrome(str) {\n  $CURSOR\n}"
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
