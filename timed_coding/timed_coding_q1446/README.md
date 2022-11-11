# Timed Coding - Tile Jumping

## Item ID
54

## Claim
Coding Logic

## Claim Behavior (evidence)


## Content Target


## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Tile Jumping

## Category
Debugging

## Stem
There are a number of tiles on the floor, each numbered with a different non-negative integer. Treat this set of tiles as an array.
You are initially standing on the first tile. Each tile in the set represents your maximum jumping distance at that position. (For example, if you are standing on 3, you can jump up to 3 tiles forward).
Find out if you can reach the last tile.

## Function Name
can_reach_end

## Argument Details and Return Example
```
{
  "arguments": {
    "nums": [1, 2, 3]
  },
  "return_example": true
}
```

## Time to Complete
600

## Public Test Cases (Seen by Candidate)
```
[
  [
    [
      [1, 2, 3]
    ],
    true
  ],
  [
    [
      [5, 0, 0, 0]
    ],
    true
  ],
  [
    [
      0
    ],
    true
  ],
  [
    [
      [0, 2, 4]
    ],
    false
  ],
  [
    [
      [1, 2, 0, 0, 1]
    ],
    false
  ]
]
```

## Private Test Cases (NOT Seen by Candidate)
```
[
  [
    [
      [6, 7, 0, 0, 0, 1]
    ],
    true
  ],
  [
    [
      10
    ],
    true
  ],
  [
    [
      [0, 0, 5]
    ],
    false
  ],
  [
    [
      [1, 1, 1, 1, 1, 1, 0]
    ],
    true
  ],
  [
    [
      [1000, 1000, 1000, 1000, 1000]
    ],
    true
  ]
]
```

## Method Stubs
```
{
  "c": "bool can_reach_end(int *nums, int nums_length) {\n  $CURSOR\n}",
  "c#": "class UserSolution {\n    public static bool can_reach_end(int[] nums) {\n        $CURSOR\n    }\n}",
  "c++": "bool can_reach_end(int *nums, int nums_length) {\n  $CURSOR\n}",
  "php": "function can_reach_end($nums) {\n  $CURSOR\n}",
  "java": "public class UserSolution {\n    public static bool can_reach_end(int[] nums) {\n        $CURSOR\n    }\n}",
  "ruby": "def can_reach_end(nums)\n  nil$CURSOR\nend",
  "swift": "func can_reach_end(nums: Array<Int>) -> Bool {\n  $CURSOR\n}",
  "golang": "func can_reach_end(nums []int) bool {\n    $CURSOR\n}",
  "haskell": "can_reach_end :: [Int] -> Bool\ncan_reach_end nums = undefined$CURSOR",
  "python2": "def can_reach_end(nums):\n    pass$CURSOR",
  "python3": "def can_reach_end(nums):\n    pass$CURSOR",
  "javascript": "function can_reach_end(nums) {\n  $CURSOR\n}"
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
