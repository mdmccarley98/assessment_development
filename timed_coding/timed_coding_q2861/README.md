# Timed Coding - Distance Between Missing and Duplicate Number

## Item ID
### Code Eval ID
96

### Quiz Question ID
2861

## Claim

## Claim Behavior (evidence)

## Content Target

## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Distance between missing & duplicate numbers

## Category
Debugging

## Stem
Given an unsorted array of equidistant integers `nums` with one missing number `m` and one duplicate number `d`,
return the distance between `m` and `d`, i.e., their absolute difference.

Constraints:

- 4 <= `nums.length` <= 10<sup>^8</sup>
- `nums` may contain negative integers
- `nums` may or may not be ordered (in either direction)
- if `m` cannot be determined, i.e., if it can be at either end of the value range, assume it is the smallest integer in the array
  - e.g., if `nums = [4, 6, 8, 8]` then `m = 2`

Example:

- Given the array `nums = [6, 3, 9, 18, 6, 12]`, the missing number is `m = 15`, and the duplicate number is `d = 6`.
The distance between the missing and the duplicate number is `|15-6|`, i.e., `9`.

## Function Name
`calculateDistance`

## Argument Details ("arg_name" : default_input)
"nums" : [1,2,4,2]

## Return Example ("return_example" : return_value)
"return_example" : 1

## Time to Complete
900s

## Public Test Cases (Seen by Candidate)
### 1.
[[1,1,3,4], 1]

### 2.
[[6, 3, 9, 18, 6, 12], 9]

### 3.
[[-4, 4, 0, 2, 4, 6, 8, 10], 6]

### 4.
[[169, 25, 73, 49, 241, 97, 145, 121, 217, 73], 120]

### 5.
[[150000, 125000, 100000, 75000, 50000, 25000, 75000, -25000], 75000]

## Private Test Cases (NOT Seen by Candidate)
### 1.
[[-39, -18, -32, -25, -32, -11, -46, -4], 21]

### 2.
[[-4, -11, -18, -25, -32, -39, -46, -11], 42]

### 3.
[[-46, -11, -18, -25, -32, -39, -46, -53], 14]

### 4.
[[-4, -11, -18, -25, -32, -39, -46, -46], 7]

### 5.
[[-11, -11, -18, -25, -32, -39, -46, -53], 49]

## Test case rationale: edge cases, complexity, steps completed.
## Public Test Cases
### 1.
Small positive integers in ascending order.

### 2.
Positive integers with a distance of 3.

### 3.
Negative integers and a distance of 2.

### 4.
Unordered array of integers and a distance of 24.

### 5.
Round integers with trailing 0s and a distance of 25000.

## Private Test Cases
### 1.
Unordered negative integers only.

### 2.
Negative integers with "undetectable" missing number.

### 3.
Negative integers with "undetectable" missing number.

### 4.
Negative integers with the smallest duplicate and "undetectable" missing number.

### 5.
Negative integers with the largest duplicate and "undetectable" missing number.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
