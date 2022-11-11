# C➕➕  - Double-Free or Corruption

## Item ID
2751

## Claim
3

## Target Skill Level
2

## Claim Behavior (evidence)
> When having double-free or corruption error, there are at least two possible situations:

> - you are deleting the same entity twice
> - you are deleting something that wasn't allocated

> Amongst the options, the user can:
> - overload new and delete and track the allocations
> - use gdb -- then you'll get a backtrace from your crash, and that'll probably be very helpful
> - use Valgrind
> - if you're using glibc, you can set the MALLOC_CHECK_ environment variable to 2, this will cause glibc to use an error tolerant version of malloc, which will cause your program to abort at the point where the double free is done.

## Content Target
- double free error
- corruption error

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Considering the statements below, which items describe situations where you have double-free or corruption errors?
<ol>
    <li>I) you are deleting something that wasn't allocated</li>
    <li>II) you are deleting the same entity twice</li>
    <li>III) you are assigning an non-int value to an int variable</li>
    <li>IV) you're applying `delete` to a non pointer value</li>
</ol>

## Code Snippet (optional)

## Answer Key
I and II

## Distractors
### 1.
I, II, and IV

### 2.
I, II, and III

### 3.
II and III

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - III has nothing to do with double-free error. If the type cannot be converted to an int, you get a compilation error.    
- Distractor 2
    - IV has no sense.
- Distractor 3
    - again because III is wrong.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
