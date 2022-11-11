## Item ID
timed-coding-histogram

## Claim
Claim 3

## Claim Behavior (evidence)


## Content Target


## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Build a Histogram

## Category
Debugging

## Stem
Given an array of values and a number of bins, build an array that represents a histogram for the array values.  

The range of the histogram is the range between the least and greatest values in the input array.  "Bins" are sub-ranges.  They should be as equal as possible in size and, together, cover the full range of the histogram.

Input constraints:
* `numBins` will never be larger than the size of the input array
* Input values will be between -100 and 100, inclusive
* Input values may be floating-point numbers

Requirements: 
* Round values to the nearest two-decimals.  So 1.345 becomes 1.35.
* Bin ranges should be INCLUSIVE.
* If an input value is equal to a boundary between two bin ranges, it should be counted as belowing to the previous of the two bins.

Return an array, where each element in the array is the number of input values that fell into that respective bin.


## Function Name
`histogram`

## Argument Details ("arg_name" : default_input)
{
    "values" : [-2, -1, 0, 1, 2],
    "num_bins": 2
}

## Return Example ("return_example" : return_value)
"return_example" : [3, 2]


## Time to Complete
900s

## Public Test Cases (Seen by Candidate)
### 1.
[[1,2,3,4,5],2], [3,2]

### 2.
[[-2,-1,0,1,2],2], [3,2]

### 3.
[[-2.66,-1.68,-1.44,-1.33,0.18,1.39,1.68,2.41,5.11,5.29],3], [4,4,2]

### 4.
[[-29.042,-26.295,-24.836,-21.568,-20.995,-18.17,-17.947,-16.452,-13.107,-9.562,-5.483,-4.298,-2.151,4.083],3], [6,4,4]

### 5.
[[],0], []

### 6.
[[1],1], [1]

## Private Test Cases (NOT Seen by Candidate)
### 1.
[[-4.15,-3.29,-3.2,-2.95,-2.75,-2.46,-2.43,-1.79,-1.46,-0.97,-0.56,-0.37,-0.24,-0.22,-0.19,0.1,0.13,0.23,0.37,0.41,0.58,0.65,0.73,0.79,0.88,0.96,0.97,0.98,1.01,1.05,1.22,1.36,1.41,1.57,1.6,1.75,1.82,2.32,2.6,2.76,2.82,2.92,2.96,3.54,3.73,3.82,4.05,4.21,4.26,4.81],5], [7,3,21,12,7]

### 2.
[[-8,-7,-5,-5,-3,-3,-3,-2,-2,0,0,1,2,3,12],3], [9,5,1]

### 3.
[[-10.9,-8.2,-7,-6.5,-3.3,-0.5,2.1,3.8,8.8,9.3],2], [5,5]


## Method Stubs
```
{
  "c": "int histogram(float* values, int values_length, int num_bins) {\n  $CURSOR\n}",
  "c++": "int histogram(std::vector<float> values, int num_bins) {\n  $CURSOR\n}",
  "golang": "func histogram(values []float32, num_bins int) []int {\n    $CURSOR\n}",
  "c#": "class UserSolution {\n    public static int[] histogram(float[] values, int num_bins) {\n        $CURSOR\n    }\n}",
  "java": "public class UserSolution {\n    public static int[] histogram(float[] values, int num_bins) {\n        $CURSOR\n    }\n}",
  "swift": "func histogram(values: [Float], num_bins: Int) -> [Int] {\n  $CURSOR\n}",
  "haskell": "histogram :: [Float] -> Int -> [Int]\nhistogram values num_bins = undefined$CURSOR",
  "php": "function histogram($values, $num_bins) {\n  $CURSOR\n}",
  "ruby": "def histogram(values, num_bins)\n  nil$CURSOR\nend",
  "python2": "def histogram(values, num_bins):\n    pass$CURSOR",
  "python3": "def histogram(values, num_bins):\n    pass$CURSOR",
  "javascript": "function histogram(values, num_bins) {\n  $CURSOR\n}"
}
```


## Test case rationale: edge cases, complexity, steps completed.
## Public Test Cases
### 1.
Simple case.

### 2.
Negative numbers. Might fail if bin boundaries are not as specified.

### 3.
Two decimal places.  Might overshoot array index if there is a floating-point error.

### 4.
Three decimal places.  Might overshoot array index if there is a floating-point error.

### 5.
Empty array of values.

### 6.
Just one value.

## Private Test Cases
### 1.
Random, normal distribution.

### 2.
Random.  Whole numbers.

### 3.
Random.  One decimal.




# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
