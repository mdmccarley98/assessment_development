# C➕➕ Compiling Optimization

## Item ID
2603

## Claim
Claim 3

## Claim Behavior (evidence)
> Without any optimization option, the compiler's goal is to reduce the cost of compilation and to make debugging produce the expected results. Statements are independent: if you stop the program with a breakpoint between statements, you can then assign a new value to any variable or change the program counter to any other statement in the function and get exactly the results you would expect from the source code.

> Turning on optimization flags makes the compiler attempt to improve the performance and/or code size at the expense of compilation time and possibly the ability to debug the program.
>
> -- https://gcc.gnu.org/onlinedocs/gcc-4.5.3/gcc/Optimize-Options.html

## Content Target
- compiler optimization

## Target Level
Level 4

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
Consider the code snippet below, example.cpp. If a user runs `g++ example.cpp -O2 -o example`, what should be expected?

## Code Snippet (optional)
```cpp
#include <iostream>
#include <vector>

int main()
{
    std::vector = {0, 1, 2, 3, 4, 5};
    for (const auto& num: vec) std::cout << num << std::endl;
}
```

## Answer Key
GCC performs nearly all supported optimizations that do not involve a space-speed tradeoff.

## Distractors
### 1.
Nothing special will happen. O2 is the default optimization option.

### 2.
Compared to -O, this option decreases compilation time and the performance of the generated code.

### 3.
The compiler should reduce compilation time and make debugging produce the expected results.

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - O0 is the default optimization
- Distractor 2
    - this option increases compilation time and the performance of the generated code
- Distractor 3
    - This is O0.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
