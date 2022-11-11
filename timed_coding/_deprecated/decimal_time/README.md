## Item ID
timed-coding-decimal-time

## Claim
Claim 2

## Claim Behavior (evidence)


## Content Target


## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Convert to Decimal Time

## Category
Debugging

## Stem
Decimal Time is a way of specifying a time of day using a 10 hours day, with 100 minutes in an hour and 100 seconds in a minute.  Write a function that converts 24-hour time to decimal time.  The function takes 3 arguments, `hour`, `minute`, and `second`.  It returns an array of `[hour, minute, second]` in decimal time.

Input Contraints:
* 0 <= hour <= 23
* 0 <= minute <= 59
* 0 <= second <= 59


## Function Name
`to_decimal_time`

## Argument Details ("arg_name" : default_input)
{
    "hour": 17,
    "minute": 39,
    "second": 41
}

## Return Example ("return_example" : return_value)
"return_example" : [7, 35, 89]


## Time to Complete
450s

## Public Test Cases (Seen by Candidate)
### 1.
[0,0,0], [0,0,0]

### 2.
[12,0,0], [5,0,0]

### 3.
[3,30,30], [1,46,18]

### 4.
[17,39,41], [7,35,89]

## Private Test Cases (NOT Seen by Candidate)
### 1.
[23,59,59], [9,99,98]

### 2.
[0,0,1], [0,0,1]

### 3.
[0,0,9], [0,0,10]

### 4.
[9,0,23], [3,75,26]

### 5.
[10,25,52], [4,34,62]

### 6.
[12,40,15], [5,27,95]

### 7.
[13,45,37], [5,73,34]

### 8.
[15,15,48], [6,35,97]

## Method Stubs
```
{
  "c": "// return a malloced array of three integers\nint* to_decimal_time(int hour, int minute, int second) {\n  $CURSOR\n}",
  "c++": "// return a vector of three integers\nstd::vector<int> to_decimal_time(int hour, int minute, int second) {\n  $CURSOR\n}",
  "c#": "class UserSolution {\n    public static int[] to_decimal_time(int hour, int minute, int second) {\n        $CURSOR\n    }\n}",
  "php": "function to_decimal_time($hour, $minute, $second) {\n  $CURSOR\n}",
  "java": "public class UserSolution {\n    public static int[] to_decimal_time(int hour, int minute, int second) {\n        $CURSOR\n    }\n}",
  "ruby": "def to_decimal_time(hour, minute, second)\n  nil$CURSOR\nend",
  "swift": "func to_decimal_time(hour: Int, minute: Int, second: Int) -> Array<Int> {\n  $CURSOR\n}",
  "golang": "func to_decimal_time(hour int, minute int, second int) []int {\n    $CURSOR\n}",
  "haskell": "to_decimal_time :: Int -> Int -> Int -> [Int]\nto_decimal_time hour minute second = undefined$CURSOR",
  "python2": "def to_decimal_time(hour, minute, second):\n    pass$CURSOR",
  "python3": "def to_decimal_time(hour, minute, second):\n    pass$CURSOR",
  "javascript": "function to_decimal_time(hour, minute, second) {\n  $CURSOR\n}"
}
```


## Test case rationale: edge cases, complexity, steps completed.
## Public Test Cases
### 1.
Midnight.

### 2.
Noon.

### 3.
Three thirty.

### 4.
5:39:41 PM

## Private Test Cases
### 1.
One second before midnight.

### 2.
One second after midnight.


### 3.
When the seconds diverge.

### 4.
Random.

### 5.
Random.

### 6.
Random.

### 7.
Random.

### 8.
Random.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
