# C++ Composite: struct

## Item ID
1863

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.40, .70, .80, .95]

## Claim Behavior (evidence)
> `struct` *attr-spec-seq*(optional) *name*(optional) `{` *struct-declaration-list* `}`
>
-- https://en.cppreference.com/w/c/language/struct

## Content Target
* struct
* anonymous structs

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem

What errors are in the c++ code below?

## Code Snippet (optional)
```cpp
struct { int x; int y; } point;
point.x = 1;
point.y = 2;
```

## Answer Key
This code compiles correctly.

## Distractors
### 1.
`point` is a type, not a variable.

### 2.
`point` is missing it's type.

### 3.
`x` is private and inaccessible.


## Common errors, misconceptions, or irrelevant information:
Temporary anonymous structs can be useful inside a function.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
