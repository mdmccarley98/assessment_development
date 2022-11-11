# Timed Coding - Find the Most Frequently Used Letter in a String

## Item ID
2019

## Claim
2

## Claim Behavior (evidence)

## Content Target

## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Find the most frequently used letter in a string

## Category
Debugging

## Stem
Write a function that takes an ASCII string as input and returns the letter with the highest frequency.

Requirements:
* Only consider letters from the English alphabet.
* Ignore letter case (e.g., `A` and `a` are the same letter).
* Ignore all other characters, including numbers, spaces, underscores, punctuation marks, etc.
* If there is more than one letter with the same frequency, return the one that precedes the others alphabetically (e.g., for the string `wanderer`, return `e`).
* If there are no English letters in the string, return `null` (or the equivalent in your programming language of choice).

## Function Name
`getMostFrequentLetter`

## Argument Details ("arg_name" : default_input)
{
    "input" : "abCc..."
}

## Return Example ("return_example" : return_value)
"return_example" : "c"


## Time to Complete
600s

## Public Test Cases (Seen by Candidate)
### 1.
["abCc..."], "c"

### 2.
["CasE InsEnSitIve"], "e"

### 3.
["O.n.l.y c.o.u.n.t t.h.e l.e.t.t.e.r.s."], "t"

### 4.
["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ante mauris, iaculis et nisi eget, laoreet tristique sapien."], "i"

## Private Test Cases (NOT Seen by Candidate)
### 1.
["Aenean odio ipsum, tempor feugiat condimentum sed, bibendum nec quam. Praesent faucibus risus non erat mattis fringilla."], "e"

### 2.
[""], null

### 3.
["$$$"], null

### 4.
["AAA"], "a"

### 5.
["___"], null

## Method Stubs
```
{
  "c": "int getMostFrequentLetter(char* input) {\n  $CURSOR\n}",
  "c++": "int getMostFrequentLetter(string input) {\n  $CURSOR\n}",
  "golang": "func getMostFrequentLetter(input string) int {\n    $CURSOR\n}",
  "c#": "class UserSolution {\n    public static int getMostFrequentLetter(String input) {\n        $CURSOR\n    }\n}",
  "java": "public class UserSolution {\n    public static int getMostFrequentLetter(String input) {\n        $CURSOR\n    }\n}",
  "swift": "func getMostFrequentLetter(input: String) -> Int {\n  $CURSOR\n}",
  "haskell": "getMostFrequentLetter :: String -> Int\ngetMostFrequentLetter input = undefined$CURSOR",
  "php": "function getMostFrequentLetter($input) {\n  $CURSOR\n}",
  "ruby": "def getMostFrequentLetter(input)\n  nil$CURSOR\nend",
  "python2": "def getMostFrequentLetter(input):\n    pass$CURSOR",
  "python3": "def getMostFrequentLetter(input):\n    pass$CURSOR",
  "javascript": "function getMostFrequentLetter(input) {\n  $CURSOR\n}"
}
```

## Test case rationale: edge cases, complexity, steps completed.
## Public Test Cases
### 1.
Simple case.

### 2.
Case insensitive.

### 3.
Should only count letters.

### 4.
Lorem ipsum has 15 i's.

## Private Test Cases
### 1.
More lorem ipsum.

### 2.
Empty string.

### 3.
Only non-letters.

### 4.
Only caps.

### 5.
Underscore is sometimes counted as a word character.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
