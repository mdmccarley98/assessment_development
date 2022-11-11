# Duplicated Number

## Item ID
1447

## Claim

## Claim Behavior (evidence)

## Content Target

## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Duplicated Number

## Category
Debugging

## Stem
The input `nums` is supposed to be an array of unique integers ranging from 1 to `nums.length` (inclusive). However, there is a mistake: one of the numbers in the array is duplicated, which means another number is missing.

Find and return the **sum** of the duplicated number and the missing number.

Example: in the array `[4, 3, 3, 1]`, 3 is present twice and 2 is missing, so 3 + 2 = `5` should be returned.

## Function Name
find_mistake

## Argument Details ("arg_name" : default_input)
"nums" : [1,2,3]

## Return Example ("return_example" : return_value)
"return_example" : 3

## Time to Complete
450

## Public Test Cases (Seen by Candidate)
### 1.
[[[1,1,3,4]],3]

### 2.
[[[2,2]],3]

### 3.
[[[4,3,3,1]],5]

### 4.
[[[6,3,2,4,3,1]],8]

### 5.
[[[10,2,3,4,5,6,7,8,9,10]],11]

## Private Test Cases (NOT Seen by Candidate)
### 1.
[[5,4,3,2,2]],3]

### 2.
[[[3,1,2,3,5]],7]

### 3.
[[[2,1,3,3,5]],7]

### 4.
[[[5,4,3,2,2]],3]

### 5.

### 6.

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
