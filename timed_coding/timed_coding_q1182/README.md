# Timed Coding - Stock Price Run

## Item ID
1182

## Claim
Coding Logic

## Claim Behavior (evidence)


## Content Target


## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Stock Price Run

## Category
Debugging

## Stem
Write a function that takes a list of daily stock prices (the price of one stock measured once a day for N days) and returns the length of the longest number of days over which the price of the stock continually rose or continually fell (strictly rose or strictly fell).

## Function Name
stock_runs

## Argument Details and Return Example
```
{
  "arguments": {
    "prices": [1, 2]
  },
  "return_example": 2
}
```

## Time to Complete
900

## Public Test Cases (Seen by Candidate)
```
[
  [
    [
      [1, 2, 3]
    ],
    3
  ],
  [
    [
      [2, 3, 4, 3, 2, 1]
    ],
    4
  ],
  [
    [
      [3, 2, 2, 1]
    ],
    2
  ]
]
```

## Private Test Cases (NOT Seen by Candidate)
```
[
  [
    [
      [1, 2, 2, 2]
    ],
    2
  ],
  [
    [
      [2, 3, 4, 5, 3, 2]
    ],
    4
  ],
  [
    [
      [2, 3, 4, 4, 5, 3, 2]
    ],
    3
  ],
  [
    [
      [1, 1, 2, 3, 3]
    ],
    3
  ],
  [
    [
      [1, 1, 2, 2, 1]
    ],
    2
  ],
  [
    [
      [1, 2, 2, 3, 4]
    ],
    3
  ],
  [
    [
      [1, 2, 1, 3, 4]
    ],
    3
  ]
]
```

## Method Stubs
```
{
  "c": "int stock_runs(int *prices, int prices_length) {\n  $CURSOR\n}",
  "c#": "class UserSolution {\n    public static int stock_runs(int[] prices) {\n        $CURSOR\n    }\n}",
  "c++": "int stock_runs(int *prices, int prices_length) {\n  $CURSOR\n}",
  "php": "function stock_runs($prices) {\n  $CURSOR\n}",
  "java": "public class UserSolution {\n    public static int stock_runs(int[] prices) {\n        $CURSOR\n    }\n}",
  "ruby": "def stock_runs(prices)\n  nil$CURSOR\nend",
  "swift": "func stock_runs(prices: Array<Int>) -> Int {\n  $CURSOR\n}",
  "golang": "func stock_runs(prices []int) int {\n    $CURSOR\n}",
  "haskell": "stock_runs :: [Int] -> Int\nstock_runs prices = undefined$CURSOR",
  "python2": "def stock_runs(prices):\n    pass$CURSOR",
  "python3": "def stock_runs(prices):\n    pass$CURSOR",
  "javascript": "function stock_runs(prices) {\n  $CURSOR\n}"
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
