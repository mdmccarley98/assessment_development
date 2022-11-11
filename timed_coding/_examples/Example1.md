## Item ID
example-1

## Claim
Coding

## Claim Behavior (evidence)
TBD

## Content Target
TBD

## Cognitive Model
Use

## Item Type
Timed Coding Evaluation

## Item Title (Seen by Candidate)
Bracket match TEST

## Category
Debugging

## Stem
A string of brackets is correctly matched if you can pair every opening bracket up with a later closing bracket, and vice versa. For example, "(()())" is correctly matched, and "(()" and ")(" are not.

Implement a function which takes a string of brackets and returns the minimum number of brackets you'd have to add to the string to make it correctly matched.

For example, "(()" could be correctly matched by adding a single closing bracket at the end, so you'd return 1. ")(" can be correctly matched by adding an opening bracket at the start and a closing bracket at the end, so you'd return 2.

If your string is already correctly matched, you can just return 0.

## Function Name
`bracket_match`

## Argument Details ("arg_name" : default_input)
{
    "bracket_string" : "(()))"
}

## Return Example ("return_example" : return_value)
"return_example" : 1

## Time to Complete
1800

## Public Test Cases (Seen by Candidate)
### 1. input, output
["(()())"],0

### 2. input, output
["((())"],1

### 3. input, output
["())"],1

## Private Test Cases (NOT Seen by Candidate)
### 1. input, output
["))(("], 4

### 2. input, output
 ["("],1

### 3. input, output
["()"],0

### 4. input, output
[""],0

### 5. input, output
[")"],1

### 6. input, output
["))))"],4

### 7. input, output
["()()()"],0

### 8. input, output
["(((((((((((((((((((("],20


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
