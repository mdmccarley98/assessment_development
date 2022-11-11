# C➕➕ Unresolved Reference

## Item ID
2509

## Claim
- Claim 3

## Claim Behavior (evidence)
> Consider the code
`function.h`

```cpp
#pragma once
#define FIRST_OPTION
#ifdef FIRST_OPTION
#define MULTIPLIER (3.0)
#else
#define MULTIPLIER (2.0)#endif

float add_and_multiply(float x, float y);
```

`function.cpp`

```cpp
int nCompletionStatus = 0;

float add(float x, float y)
{
    float z = x + y;
    return z;
}

float add_and_multiply(float x, float y)
{
    float z = add(x,y);
    z *= MULTIPLIER;
    return z;
}
```

`main.cpp`

```cpp
#include "function.h"

extern int nCompletionStatus = 0;

int main(int argc, char* argv[])
{
    float x = 1.0;
    float y = 5.0;
    float z;
    z = add_and_multiply(x,y);
    nCompletionStatus = 1;
    return 0;
}
```

> In this particular code example, you have the following situation:

> - The function add_and_multiply calls the function add, which resides in the same source file
(i.e., the same translation unit in the same object file). In this case, the address in the program
memory of function add() is to some extent a known quantity and can be expressed by its
relative offset of the code section of the object file function.o.
> - Now function main calls function add_and_multiply and also references the extern variable
nCompletionStatus and has huge problems figuring out the actual program memory address
at which they reside. In fact, it only may assume that both of these symbols will at some point
in the future reside somewhere in the process memory map. But, until the memory map is
formed, two items cannot be considered as nothing else than unresolved references.

## Content Target
- linker
- unresolved reference

## Target Level
- Level 3

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
What does the output below from the compiler mean?

## Code Snippet (optional)
```cpp
/usr/bin/ld: /tmp/ccxvbQG3.o: in function `main':
example.cpp:(.text+0x55): undefined reference to `Printer::printSpecial(std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > const&)'
collect2: error: ld returned 1 exit status
```

## Answer Key
Linker could not find where the definition of the symbol `Printer::printSpecial` is in the process memory map.

## Distractors
### 1.
The compiler cannot find the declaration of `Printer::printSpecial`.

### 2.
There's no `Printer::printSpecial` in any of the .h passed on the include directives.

### 3.
`Printer::printSpecial` has a syntax error.

## Common errors, misconceptions, or irrelevant information:
- Distractor 1:
    - The declaration is there in the included file. What is missing is the definition of the function
- Distractor 2:
    - The .h has it, as already explained in the past distractor
- Distractor 3:
    - Syntax error is part of the syntax analysis in the compiler; when the user sees the error printed, you already have just linker errors.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
