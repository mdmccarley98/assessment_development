# Timed Coding - ASCII Deletion Distance

## Item ID
1258

## Claim
Coding Logic

## Claim Behavior (evidence)


## Content Target


## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
ASCII deletion distance

## Category
Debugging

## Stem
The deletion distance between two strings is the minimum sum of ASCII values of characters that you need to delete in the two strings in order to have the same string. The deletion distance between "cat" and "at" is 99, because you can just delete the first character of cat and the ASCII value of 'c' is 99. The deletion distance between "cat" and "bat" is 98 + 99, because you need to delete the first character of both words. Of course, the deletion distance between two strings can't be greater than the sum of their total ASCII values, because you can always just delete both of the strings entirely.

 Implement an efficient function to find the deletion distance between two strings.

 You can refer to the Wikipedia article on the algorithm for edit distance if you want to. The algorithm there is not quite the same as the algorithm required here, but it's similar.

## Function Name
ascii_deletion_distance

## Argument Details and Return Example
```
{
  "arguments": {
    "str1": "(()))",
    "str2": "123"
  },
  "return_example": 1
}
```

## Time to Complete
900

## Public Test Cases (Seen by Candidate)
```
[
  [
    ["at", "cat"],
    99
  ],
  [
    ["boat", "got"],
    298
  ],
  [
    ["thought", "sloughs"],
    674
  ]
]
```

## Private Test Cases (NOT Seen by Candidate)
```
[
  [
    ["hello", "whatsfd"],
    1077
  ],
  [
    ["abcabcabcacabacbaabccbbcacb", "bcacbacbaccabcbbcbaccbcbcba"],
    1559
  ],
  [
    ["abcabc", "bcacba"],
    390
  ]
]
```

## Method Stubs
```
{
  "c": "int ascii_deletion_distance(char *str1, char *str2) {\n  $CURSOR\n}",
  "c#": "class UserSolution {\n    public static int ascii_deletion_distance(string str1, string str2) {\n        $CURSOR\n    }\n}",
  "c++": "int ascii_deletion_distance(string str1, string str2) {\n  $CURSOR\n}",
  "php": "function ascii_deletion_distance($str1, $str2) {\n  $CURSOR\n}",
  "java": "public class UserSolution {\n    public static int ascii_deletion_distance(String str1, String str2) {\n        $CURSOR\n    }\n}",
  "ruby": "def ascii_deletion_distance(str1, str2)\n  nil$CURSOR\nend",
  "swift": "func ascii_deletion_distance(str1: String, _ str2: String) -> Int {\n  $CURSOR\n}",
  "golang": "func ascii_deletion_distance(str1 string, str2 string) int {\n    $CURSOR\n}",
  "haskell": "ascii_deletion_distance :: String -> String -> Int\nascii_deletion_distance str1 str2 = undefined$CURSOR",
  "python2": "def ascii_deletion_distance(str1, str2):\n    pass$CURSOR",
  "python3": "def ascii_deletion_distance(str1, str2):\n    pass$CURSOR",
  "javascript": "function ascii_deletion_distance(str1, str2) {\n  $CURSOR\n}"
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
