# Vowels to Front

## Item ID
2017

## Claim
1

## Claim Behavior (evidence)

## Content Target

## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Vowels To Front

## Category
Debugging

## Stem
Given a string of letters, return a string with all the same characters but all of the vowels (A, E, I, O, and U) at the front of the string (regardless of case).  Preserve the relative order of both vowels and consonants.  Preserve the case of all letters.

Input strings will contain 0 or more upper and lowercase characters but no other characters.

## Function Name
`vowels_to_front`

## Argument Details ("arg_name" : default_input)
{
    "input_string" : "AbCde"
}

## Return Example ("return_example" : return_value)
"return_example" : "AebCd"

## Time to Complete
240

## Public Test Cases (Seen by Candidate)
### 1.
["abcde"], "aebcd"

### 2.
["aebcdae"], "aeaebcd"

### 3.
["AbCde"], "AebCd"

## Private Test Cases (NOT Seen by Candidate)
### 1.
["grtHHBklJvexrKUIaDAT"], "eUIaAgrtHHBklJvxrKDT"

### 2.
["NUXqDWBJQoJSYETEcKPG"], "UoEENXqDWBJQJSYTcKPG"

### 3.
["yVkEbDiMEBOZwBmLaHii"], "EiEOaiiyVkbDMBZwBmLH"

### 4.
["gbDAhlnnIVxEwGVxkItc"], "AIEIgbDhlnnVxwGVxktc"

### 5.
["ZPlHGUZtvInfVnZxWrST"], "UIZPlHGZtvnfVnZxWrST"

## Method Stubs
```
{
  "c": "// return a null terminated malloced string\nchar* vowels_to_front(char* input_string) {\n  $CURSOR\n}",
  "c++": "// return a malloced string\nstring vowels_to_front(string input_string) {\n  $CURSOR\n}",
  "golang": "func vowels_to_front(input_string string) string {\n    $CURSOR\n}",
  "c#": "class UserSolution {\n    public static String vowels_to_front(String input_string) {\n        $CURSOR\n    }\n}",
  "java": "public class UserSolution {\n    public static String vowels_to_front(String input_string) {\n        $CURSOR\n    }\n}",
  "swift": "func vowels_to_front(input_string: String) -> String {\n  $CURSOR\n}",
  "haskell": "vowels_to_front :: String -> String\nvowels_to_front input_string = undefined$CURSOR",
  "php": "function vowels_to_front($input_string) {\n  $CURSOR\n}",
  "ruby": "def vowels_to_front(input_string)\n  nil$CURSOR\nend",
  "python2": "def vowels_to_front(input_string):\n    pass$CURSOR",
  "python3": "def vowels_to_front(input_string):\n    pass$CURSOR",
  "javascript": "function vowels_to_front(input_string) {\n  $CURSOR\n}"
}
```

## Test case rationale: edge cases, complexity, steps completed.
## Public Test Cases
### 1.
Simple case.

### 2.
Shifted to beginning in order, not sorted.

### 3.
Capitalization preserved.

## Private Test Cases
### 1.
Random: grtHHBklJvexrKUIaDAT

### 2.
Random: NUXqDWBJQoJSYETEcKPG

### 3.
Random: yVkEbDiMEBOZwBmLaHii

### 4.
Random: gbDAhlnnIVxEwGVxkItc

### 5.
Random: ZPlHGUZtvInfVnZxWrST

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
