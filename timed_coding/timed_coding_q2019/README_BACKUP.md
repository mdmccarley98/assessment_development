# Count the Most Frequent Letter

## Item ID
2019

## Claim
Claim 2

## Claim Behavior (evidence)


## Content Target


## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Get the highest frequency of any letter

## Category
Debugging

## Stem
Write a function which takes an ASCII string as input and returns the highest frequency a letter has in the string.

Constraints:
* Only consider letters from the English alphabet.  
* Ignore letter case (e.g., "A" and "a" are the same letter).
* Ignore all other characters, including spaces, underscores, punctuation marks, etc.

## Function Name
`getMostFrequentLetterCount`

## Argument Details ("arg_name" : default_input)
{
    "input" : "abcC..."
}

## Return Example ("return_example" : return_value)
"return_example" : 2


## Time to Complete
600s

## Public Test Cases (Seen by Candidate)
### 1.
["abcC..."], 2

### 2.
["CasE InsEnSitIve"], 3

### 3.
["O.n.l.y c.o.u.n.t t.h.e l.e.t.t.e.r.s."], 4

### 4. 
["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ante mauris, iaculis et nisi eget, laoreet tristique sapien."], 15

## Private Test Cases (NOT Seen by Candidate)
### 1.
["Aenean odio ipsum, tempor feugiat condimentum sed, bibendum nec quam. Praesent faucibus risus non erat mattis fringilla."], 11


### 2.
[""], 0



### 3.
["$$$"], 0



### 4.
["AAA"], 3



### 5.
["___"], 0


## Method Stubs
```
{
  "c": "int count_most_frequent(char* input) {\n  $CURSOR\n}",
  "c++": "int count_most_frequent(string input) {\n  $CURSOR\n}",
  "golang": "func count_most_frequent(input string) int {\n    $CURSOR\n}",
  "c#": "class UserSolution {\n    public static int count_most_frequent(String input) {\n        $CURSOR\n    }\n}",
  "java": "public class UserSolution {\n    public static int count_most_frequent(String input) {\n        $CURSOR\n    }\n}",
  "swift": "func count_most_frequent(input: String) -> Int {\n  $CURSOR\n}",
  "haskell": "count_most_frequent :: String -> Int\ncount_most_frequent input = undefined$CURSOR",
  "php": "function count_most_frequent($input) {\n  $CURSOR\n}",
  "ruby": "def count_most_frequent(input)\n  nil$CURSOR\nend",
  "python2": "def count_most_frequent(input):\n    pass$CURSOR",
  "python3": "def count_most_frequent(input):\n    pass$CURSOR",
  "javascript": "function count_most_frequent(input) {\n  $CURSOR\n}"
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
