# C➕➕ Preprocessor duties

## Item ID
2518

## Claim
Claim 3

## Claim Behavior (evidence)
> The standard first step in processing the source files is running them through the special text processing program
called a preprocessor, which performs one or more of the following actions:
    - Includes the files containing definitions (include/header files) into the source files, as
specified by the #include keyword.
    - Converts the values specified by using #define statements into the constants.
    - Converts the macro definitions into code at the variety of locations in which the macros
are invoked.
    - Conditionally includes or excludes certain parts of the code, based on the position of #if,
#elif, and #endif directives.

> For more on the preprocessor output:
-- https://gcc.gnu.org/onlinedocs/cpp/Preprocessor-Output.html

## Content Target
- preprocessor
- include
- pragma
- define

## Target Level
Level 4

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
Choose the option that makes a TRUE statement about the following code:

## Code Snippet (optional)
```cpp
// example.h
#pragma once

#define MULTIPLY 2

int addNumbers(float x, float y);
int multiply(float x);
```

```cpp
// example.cpp
#include "example.h"

int addNumbers(float x, float y)
{
    return x + y;
}

int multiply(float x)
{
    return MULTIPLY*x;
}
```

## Answer Key
The preprocessor will handle MULTIPLY, and all values will be substituted inside the code

## Distractors
### 1.
All files will merge into one, with the declarations being deleted and just the definitions being left in the output file that goes to the next phase of compilation

### 2.
The # directives will be handled by the compiler later

### 3.
Two files will be generated (one for the .h and another for the .cpp) by the preprocessor and will be passed as inputs to the next phase

## Common errors, misconceptions, or irrelevant information:

This is the output given by the preprocessor
```cpp
# 1 "example.cpp"
# 1 "<built-in>"
# 1 "<command-line>"
# 1 "/usr/include/stdc-predef.h" 1 3 4
# 1 "<command-line>" 2
# 1 "example.cpp"
# 1 "example.h" 1
       



int addNumbers(float x, float y);
int multiply(float x);
# 2 "example.cpp" 2

int addNumbers(float x, float y)
{
    return x + y;
}

int multiply(float x)
{
    return 2*x;
}
```

Not everyone knows the basic preprocessor steps, but this is key for advanced users to know at least what is happening during this phase, so they have any clue that is here where they have to look
if something goes wrong in this phase.
- Distractor 1
    - The declarations are not deleted 
- Distractor 2
    - The # directives are handled in the preprocessor phase
- Distractor 3
    - Just one file is generated.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
