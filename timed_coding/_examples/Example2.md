## Item ID
example-2

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
Deletion distance

## Category
Debugging

## Stem
The deletion distance between two strings is the minimum number of characters that you need to delete in the two strings in order to have the same string. The deletion distance between "cat" and "at" is 1, because you can just delete the first character of cat. The deletion distance between "cat" and "bat" is 2, because you need to delete the first character of both words. Of course, the deletion distance between two strings can't be greater than the sum of their lengths, because you can always just delete both of the strings entirely.

## Function Name
`deletion_distance`

## Argument Details ("arg_name" : default_input)
{
    "str1" : "(()))", 
    "str2" : "123"
}

## Return Example ("return_example" : return_value)
"return_example" : 1

## Time to Complete
900

## Public Test Cases (Seen by Candidate)
### 1. input, output
["at","cat"],1

### 2. input, output
["boat","got"],3

### 3. input, output
["thought","sloughs"],6

## Private Test Cases (NOT Seen by Candidate)
### 1. input, output
["hello","whatsfd"],10

### 2. input, output
["abcabcabcacabacbaabccbbcacb","bcacbacbaccabcbbcbaccbcbcba"],16

### 3. input, output
["thought","sloughs"],6

### 4. input, output
["abcabc","bcacba"],4


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



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
