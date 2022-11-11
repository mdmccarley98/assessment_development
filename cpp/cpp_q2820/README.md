# C➕➕ Compiling Multiple Files

## Item ID
2820

## Claim
3

## Claim Behavior (evidence)
One just needs to list the source files after main.cpp 
g++ main.cpp other.cpp etc.cpp 

## Target Level
1

## Content Target
- compilation

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Select the option that shows the only valid way (among these options) to compile these files.

## Code Snippet (optional)
sum.h
```cpp
class Operation
{
public:
    int op(const int a, const int b);
};
```

sum.cpp
```cpp
#include "sum.h"

int Operation::op(const int a, const int b)
{
    return (a*(a+b*b));
}
```

main.cpp
```cpp
#include "sum.h"
#include <iostream>

int main()
{
    Operation operation;
    std::cout << operation.op(3,2) << std::endl;
}
```

## Answer Key
`g++ main.cpp sum.cpp --std=c++17 -o main`

## Distractors
### 1.
`g++ main.cpp sum.h --std=c++17 -o main`

### 2.
`g++ main.cpp sum.cpp --std=c++17 main`

### 3.
`gcc main.cpp --std=c++17 -o main`

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - You have to list the .cpp files or you get this while compiling
    ```
    /usr/bin/ld: /tmp/ccQS5Kpa.o: in function `main':
    main.cpp:(.text+0x2d): undefined reference to `Operation::op(int, int)'
    collect2: error: ld returned 1 exit status
    ```
- Distractor 2
    - This results in `g++: error: unrecognized command line option ‘-f’`
- Distractor 3
    - This results in `g++: error: missing argument to ‘-d’`
    
# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
