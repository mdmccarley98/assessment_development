# Timed Coding - Deletion Distance

## Item ID
1181

## Claim
Coding Logic

## Claim Behavior (evidence)


## Content Target


## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Deletion distance

## Category
Debugging

## Stem
The deletion distance between two strings is the minimum number of characters that you need to delete in the two strings in order to have the same string. The deletion distance between "cat" and "at" is 1, because you can just delete the first character of cat. The deletion distance between "cat" and "bat" is 2, because you need to delete the first character of both words. Of course, the deletion distance between two strings can't be greater than the sum of their lengths, because you can always just delete both of the strings entirely.

Implement an efficient function to find the deletion distance between two strings.

You can refer to the Wikipedia article on the algorithm for edit distance if you want to. The algorithm there is not quite the same as the algorithm required here, but it involves similar ideas.

## Function Name
deletion_distance

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
    1
  ],
  [
    ["boat", "got"],
    3
  ],
  [
    ["thought", "sloughs"],
    6
  ]
]
```

## Private Test Cases (NOT Seen by Candidate)
```
[
  [
    ["hello", "whatsfd"],
    10
  ],
  [
    ["abcabcabcacabacbaabccbbcacb", "bcacbacbaccabcbbcbaccbcbcba"],
    16
  ],
  [
    ["thought", "sloughs"],
    6
  ],
  [
    ["abcabc", "bcacba"],
    4
  ]
]
```

## Method Stubs
```
{
  "c": "int deletion_distance(char *str1, char *str2) {\n  $CURSOR\n}",
  "c#": "class UserSolution {\n    public static int deletion_distance(string str1, string str2) {\n        $CURSOR\n    }\n}",
  "c++": "int deletion_distance(string str1, string str2) {\n  $CURSOR\n}",
  "php": "function deletion_distance($str1, $str2) {\n  $CURSOR\n}",
  "java": "public class UserSolution {\n    public static int deletion_distance(String str1, String str2) {\n        $CURSOR\n    }\n}",
  "ruby": "def deletion_distance(str1, str2)\n  nil$CURSOR\nend",
  "swift": "func deletion_distance(str1: String, _ str2: String) -> Int {\n  $CURSOR\n}",
  "golang": "func deletion_distance(str1 string, str2 string) int {\n    $CURSOR\n}",
  "haskell": "deletion_distance :: String -> String -> Int\ndeletion_distance str1 str2 = undefined$CURSOR",
  "python2": "def deletion_distance(str1, str2):\n    pass$CURSOR",
  "python3": "def deletion_distance(str1, str2):\n    pass$CURSOR",
  "javascript": "function deletion_distance(str1, str2) {\n  $CURSOR\n}"
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
