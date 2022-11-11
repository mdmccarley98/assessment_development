# Timed Coding - Duplicated Number

## Item ID
1447

## Claim
Coding Logic

## Claim Behavior (evidence)


## Content Target


## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Duplicated number

## Category
Debugging

## Stem
The input `nums` is supposed to be an array of unique integers ranging from 1 to `nums.length` (inclusive). However, there is a mistake: one of the numbers in the array is duplicated, which means another number is missing.

Find and return the **sum** of the duplicated number and the missing number.

Example: in the array `[4, 3, 3, 1]`, 3 is present twice and 2 is missing, so 3 + 2 = `5` should be returned.

## Function Name
find_mistake

## Argument Details and Return Example
```
{
  "arguments": {
    "nums": [1, 2, 3]
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
    [
      [1, 1, 3, 4]
    ],
    3
  ],
  [
    [
      [2, 2]
    ],
    3
  ],
  [
    [
      [4, 3, 3, 1]
    ],
    5
  ],
  [
    [
      [6, 3, 2, 4, 3, 1]
    ],
    8
  ],
  [
    [
      [10, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    ],
    11
  ]
]
```

## Private Test Cases (NOT Seen by Candidate)
```
[
  [
    [
      [5, 4, 3, 2, 2]
    ],
    3
  ],
  [
    [
      [3, 1, 2, 3, 5]
    ],
    7
  ],
  [
    [
      [2, 1, 3, 3, 5]
    ],
    7
  ],
  [
    [
      [5, 4, 3, 2, 2]
    ],
    3
  ]
]
```

## Method Stubs
```
{
  "c": "int find_mistake(int *nums, int nums_length) {\n  $CURSOR\n}",
  "c#": "class UserSolution {\n    public static int find_mistake(int[] nums) {\n        $CURSOR\n    }\n}",
  "c++": "int find_mistake(int *nums, int nums_length) {\n  $CURSOR\n}",
  "php": "function find_mistake($nums) {\n  $CURSOR\n}",
  "java": "public class UserSolution {\n    public static int find_mistake(int[] nums) {\n        $CURSOR\n    }\n}",
  "ruby": "def find_mistake(nums)\n  nil$CURSOR\nend",
  "swift": "func find_mistake(nums: Array<Int>) -> Int {\n  $CURSOR\n}",
  "golang": "func find_mistake(nums []int) int {\n    $CURSOR\n}",
  "haskell": "find_mistake :: [Int] -> Int\nfind_mistake nums = undefined$CURSOR",
  "python2": "def find_mistake(nums):\n    pass$CURSOR",
  "python3": "def find_mistake(nums):\n    pass$CURSOR",
  "javascript": "function find_mistake(nums) {\n  $CURSOR\n}"
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
