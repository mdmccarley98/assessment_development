# Timed Coding - Longest Flat Section

## Item ID
1179

## Claim
Coding Logic

## Claim Behavior (evidence)


## Content Target


## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Longest flat section

## Category
Debugging

## Stem
Write a function which takes a list of numbers and returns the length of the longest continuous stretch of a single number. For example, on the input [1,7,7,3], the correct return is 2, because there are two 7's in a row.  

## Function Name
longest_flat

## Argument Details and Return Example
```
{
  "arguments": {
    "array": 1
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
    [
      [1, 1, 1]
    ],
    3
  ],
  [
    [
      [1, 1, 2, 2, 2]
    ],
    3
  ],
  [
    [
      [1, 1, 2, 2, 2, 2]
    ],
    4
  ]
]
```

## Private Test Cases (NOT Seen by Candidate)
```
[
  [
    [
      [1, 2, 3]
    ],
    1
  ],
  [
    [
      [1, 2, 1]
    ],
    1
  ],
  [
    [
      [4, 4, 4, 8, 8, 8, 8, 8]
    ],
    5
  ],
  [
    [
      [4, 4, 4, 8, 8, 8, 8, 8, 1, 1, 1, 1]
    ],
    5
  ],
  [
    [
      [-2, -2, -2, -2, 8]
    ],
    4
  ],
  [
    [
      [20, 20]
    ],
    2
  ],
  [
    [
      1
    ],
    1
  ]
]
```

## Method Stubs
```
{
  "c": "int longest_flat(int *array, int array_length) {\n  $CURSOR\n}",
  "c#": "class UserSolution {\n    public static int longest_flat(int[] array) {\n        $CURSOR\n    }\n}",
  "c++": "int longest_flat(int *array, int array_length) {\n  $CURSOR\n}",
  "php": "function longest_flat($array) {\n  $CURSOR\n}",
  "java": "public class UserSolution {\n    public static int longest_flat(int[] array) {\n        $CURSOR\n    }\n}",
  "ruby": "def longest_flat(array)\n  nil$CURSOR\nend",
  "swift": "func longest_flat(array: Array<Int>) -> Int {\n  $CURSOR\n}",
  "golang": "func longest_flat(array []int) int {\n    $CURSOR\n}",
  "haskell": "longest_flat :: [Int] -> Int\nlongest_flat array = undefined$CURSOR",
  "python2": "def longest_flat(array):\n    pass$CURSOR",
  "python3": "def longest_flat(array):\n    pass$CURSOR",
  "javascript": "function longest_flat(array) {\n  $CURSOR\n}"
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
