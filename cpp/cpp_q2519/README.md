# C➕➕ Linguistic Analysis Step

## Item ID
2519

## Claim
Claim 3

## Claim Behavior (evidence)
> During this stage, the compiler first converts the C/C++ code into a form more suitable for processing (eliminating
comments and unnecessary white spaces, extracting tokens from the text, etc.). Such an optimized and compacted
form of source code is lexically analyzed, with the intention of checking whether the program satisfies the syntax
rules of the programming language in which it was written. If deviations from the syntax rules are detected, errors or
warnings are reported. The errors are sufficient cause for the compilation to be terminated, whereas warnings may or
may not be sufficient, depending on the user’s settings.

## Target Level
Level 3

## Content Target
- Parsing

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
This code generates an error during compilation. Which compilation step will report this fault?

## Code Snippet (optional)
```cpp
#include <iostream>

double mathOperation(double a, double b)
{
    return (a+b)/(b-a);
}

int main()
{
    int i = 2;    

    std::string a = mathOperation(i, i+2);

    std::cout << a << std::endl;
}
```

## Answer Key
Semantic Analysis

## Distractors

### 1.
Lexical Analysis

### 2.
Parsing/Syntax Analysis

### 3.
Assembling

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - Lexical analysis breaks the source code into non-divisible tokens, nothing else.
- Distractor 2
    - Parsing/syntax analysis concatenates the extracted tokens into the chains of tokens and verifies that their ordering makes sense from the standpoint of programming language rules.
- Distractor 3
    - The compiler reaches the assembling stage only after the source code is verified to contain no syntax errors. In this stage, the compiler tries to convert the standard language constructs into constructs specific to the actual CPU instruction set.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
