## Item ID
51

## Claim
Coding Logic

## Claim Behavior (evidence)


## Content Target


## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Callback Throttler

## Category
Debugging

## Stem
Some user interactions, such as resizing and scrolling, can create a huge number of browser events in a short period of time. If listeners attached to these events take a long time to execute, the user's browser can start to slow down significantly. To mitigate this issue, we want to implement a throttle function that will detect clusters of events and reduce the number of times we call an expensive function.
<br />
<br />
Your function will accept an array representing a stream of event timestamps and return an array representing the times that a callback should have been called. If an event happens within `wait` time of the previous event, it is part of the same cluster. Your function should satisfy the following use cases:
<br />
<br />
1) Firing once on the first event in a cluster, e.g. as soon as the window starts resizing.
<br />
2) Firing once after the last event in a cluster, e.g. after the user window stops resizing.
<br />
3) Firing every `interval` milliseconds during a cluster, e.g. every 100ms while the window is resizing.

## Function Name
throttle

## Argument Details and Return Example
```
{
  "arguments": {
    "wait": 0,
    "onLast": true,
    "onFirst": true,
    "interval": 0,
    "timestamps": 1
  },
  "return_example": true
}
```

## Time to Complete
900

## Public Test Cases (Seen by Candidate)
```
[
  [
    [
      20,
      false,
      true,
      0,
      [0, 10, 20, 30]
    ],
    0
  ],
  [
    [
      20,
      true,
      false,
      0,
      [0, 10, 20, 30]
    ],
    50
  ],
  [
    [
      20,
      false,
      true,
      20,
      [0, 10, 20, 30]
    ],
    [0, 20]
  ],
  [
    [
      20,
      false,
      true,
      0,
      [0, 10, 40]
    ],
    [0, 40]
  ],
  [
    [
      20,
      true,
      false,
      0,
      [0, 10, 40]
    ],
    [30, 60]
  ],
  [
    [
      20,
      true,
      true,
      0,
      [0, 10, 50]
    ],
    [0, 30, 50, 70]
  ],
  [
    [
      20,
      true,
      true,
      10,
      [0, 10, 50]
    ],
    [0, 10, 20, 30, 50, 60, 70]
  ]
]
```

## Private Test Cases (NOT Seen by Candidate)
```
[]
```

## Method Stubs
```
{
  "c": "bool throttle(int wait, bool onLast, bool onFirst, int interval, int *timestamps, int timestamps_length) {\n  $CURSOR\n}",
  "c#": "class UserSolution {\n    public static bool throttle(int wait, bool onLast, bool onFirst, int interval, int[] timestamps) {\n        $CURSOR\n    }\n}",
  "c++": "bool throttle(int wait, bool onLast, bool onFirst, int interval, int *timestamps, int timestamps_length) {\n  $CURSOR\n}",
  "php": "function throttle($wait, $onLast, $onFirst, $interval, $timestamps) {\n  $CURSOR\n}",
  "java": "public class UserSolution {\n    public static bool throttle(int wait, bool onLast, bool onFirst, int interval, int[] timestamps) {\n        $CURSOR\n    }\n}",
  "ruby": "def throttle(wait, onLast, onFirst, interval, timestamps)\n  nil$CURSOR\nend",
  "swift": "func throttle(wait: Int, _ onLast: Bool, _ onFirst: Bool, _ interval: Int, _ timestamps: Array<Int>) -> Bool {\n  $CURSOR\n}",
  "golang": "func throttle(wait int, onLast bool, onFirst bool, interval int, timestamps []int) bool {\n    $CURSOR\n}",
  "haskell": "throttle :: Int -> Bool -> Bool -> Int -> [Int] -> Bool\nthrottle wait onLast onFirst interval timestamps = undefined$CURSOR",
  "python2": "def throttle(wait, onLast, onFirst, interval, timestamps):\n    pass$CURSOR",
  "python3": "def throttle(wait, onLast, onFirst, interval, timestamps):\n    pass$CURSOR",
  "javascript": "function throttle(wait, onLast, onFirst, interval, timestamps) {\n  $CURSOR\n}"
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
