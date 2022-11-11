# Counting Vehicles Across Traffic Sensor

## Item ID
2018

## Claim
2

## Claim Behavior (evidence)

## Content Target

## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Counting Vehicles Across Traffic Sensor

## Category
Debugging

## Stem
Vehicle traffic sensors count the number of times a set of tires roll across a pressure-sensitive strip. The traffic sensor starts a timer when the first set of tires crosses it. Then each time it senses the pressure on the strip, it records the number of milliseconds since the first record. Since most vehicles trigger the sensor two (or more) times, any records after a new vehicle is detected that happen within a given duration are counted as only one vehicle.

For instance, if the record times are `[0, 200, 300, 600, 700]`, then with a threshold of 0, this counts as 5 separate vehicles. With a threshold of 300, the first three records are one vehicle, and the final two are a second vehicle. With a threshold of 700, all five records count as one vehicle.

Write a function that returns a vehicle count based on an array of times and a threshold.

Constraints:
<ul>
  <li>0 <= Time values <= 32767</li>
  <li>0 <= threshold <= 10000</li>
</ul>

## Function Name
`count_vehicles`

## Argument Details ("arg_name" : default_input)
{
    "times": [0, 200, 300, 600, 700],
    "threshold": 300
}

## Return Example ("return_example" : return_value)
"return_example" : 2

## Time to Complete
300s

## Public Test Cases (Seen by Candidate)
### 1.
[[0, 200, 300, 600, 700], 0], 5

### 2.
[[0, 200, 300, 600, 700], 300], 2

### 3.
[[0, 200, 300, 600, 700], 700], 1

### 4.
[[0,4,8],4], 2

## Private Test Cases (NOT Seen by Candidate)
### 1.
[[1,5,10],5], 2

### 2.
[[],10], 0

### 3.
[[0,3,3,3,7],3], 2

### 4.
[[0],5], 1

### 5.
[[0,1],1], 1

### 6.
[[0,3,3,3,7],0], 3

## Method Stubs
```
{
  "c": "int count_vehicles(int* times, int times_length, int threshold) {\n  $CURSOR\n}",
  "c++": "int count_vehicles(std::vector<int> times, int threshold) {\n  $CURSOR\n}",
  "golang": "func count_vehicles(times []int, threshold int) int {\n    $CURSOR\n}",
  "c#": "class UserSolution {\n    public static int count_vehicles(int[] times, int threshold) {\n        $CURSOR\n    }\n}",
  "java": "public class UserSolution {\n    public static int count_vehicles(int[] times, int threshold) {\n        $CURSOR\n    }\n}",
  "swift": "func count_vehicles(times: [Int], threshold: Int) -> Int {\n  $CURSOR\n}",
  "haskell": "count_vehicles :: [Int] -> Int -> Int\ncount_vehicles times threshold = undefined$CURSOR",
  "php": "function count_vehicles($times, $threshold) {\n  $CURSOR\n}",
  "ruby": "def count_vehicles(times, threshold)\n  nil$CURSOR\nend",
  "python2": "def count_vehicles(times, threshold):\n    pass$CURSOR",
  "python3": "def count_vehicles(times, threshold):\n    pass$CURSOR",
  "javascript": "function count_vehicles(times, threshold) {\n  $CURSOR\n}"
}
```

## Test case rationale: edge cases, complexity, steps completed.
## Public Test Cases
### 1.
Zero threshold.  Should count all records.

### 2.
Would count the example semi-truck as two vehicles.

### 3.
A more realistic setting to count semi-trucks as one vehicle.

### 4.
Testing that thresholds are not renewed with new wheels.

## Private Test Cases
### 1.
Two groups.

### 2.
Empty array.

### 3.
Duplicates.

### 4.
Unicycle.

### 5.
Threshold of 1.

### 6.
Threshold of 0, but with duplicates.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
