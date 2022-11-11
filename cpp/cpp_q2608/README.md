# C➕➕ XOR Operation

## Item ID
2608

## Claim
Claim 1

## Claim Behavior (evidence)
-- https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/

## Content Target
- xor
- shift

## Target Level
Level 5

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Which of the following statements is TRUE when running the code on a 64-bit machine?

## Code Snippet (optional)

## Answer Key
```cpp
#include <iostream>

int main()
{
    long int a = 0x12131416;
    long int b = 0x12131415;    
    std::cout <<  ((a ^ b) << 2) << std::endl;
}
```

The code compiles and the output is `12`

## Distractors
### 1.
```cpp
#include <iostream>

int main()
{
    long int a = 0x12131416;
    long int b = 0x12131415;    
    std::cout <<  ((a ^ b) << 2) << std::endl;
}
```

The code does not compile

### 2.
```cpp
#include <iostream>

int main()
{
    long int a = 0x12131416;
    long int b = 0x12131415;    
    std::cout <<  ((a ^ b) << 2) << std::endl;
}
```

The code compiles but the output overflows

### 3.
```cpp
#include <iostream>

int main()
{
    long int a = 0x12131416;
    long int b = 0x12131415;
    std::cout <<  ((a ^ b) << 2) << std::endl;
}
```

The code compiles and the result is `9`

## Common errors, misconceptions, or irrelevant information:
- Distractor 1:
    - Code compiles normally
- Distractor 2:
    - Code doesn't overflow, and even if the shift operation would overflow, it would print some number.
- Distractor 3:
    - Result is 12, not 9. 9 is a result if the shift would work just with 7th bit from the last byte.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
