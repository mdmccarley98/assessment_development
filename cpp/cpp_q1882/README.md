# C➕➕ coding: sizeof

## Item ID
1882

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.20, .40, .60, .90]

## Claim Behavior (evidence)
```
Scanning dependencies of target example
[ 50%] Building CXX object CMakeFiles/example.dir/example.cpp.o
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/6-coding-sizeof/example.cpp:7:25: warning: sizeof on array function parameter will return size of 'int *' instead of 'int [6]' [-Wsizeof-array-argument]
    for (int i = 0; i < _ARRAY_SIZE(numbers); i++) {
                        ^
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/6-coding-sizeof/example.cpp:4:33: note: expanded from macro '_ARRAY_SIZE'
#define _ARRAY_SIZE(ARR) (sizeof(ARR) / sizeof((ARR)[0]))
                                ^
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/6-coding-sizeof/example.cpp:6:18: note: declared here
void process(int numbers[MAX_NUMBERS]) {
                 ^
1 warning generated
```
-- [example.cpp](./example.cpp)


> One of the "dangerous" types in C++ is an array. Often when passing it to the function, programmers forget that it is passed as a pointer, and try to calculate the number of elements with sizeof.
```cpp
#define RTL_NUMBER_OF_V1(A) (sizeof(A)/sizeof((A)[0]))
#define _ARRAYSIZE(A) RTL_NUMBER_OF_V1(A)
int GetAllNeighbors( const CCoreDispInfo *pDisp,
                     int iNeighbors[512] ) {
  ....
  if ( nNeighbors < _ARRAYSIZE( iNeighbors ) ) 
    iNeighbors[nNeighbors++] = pCorner->m_Neighbors[i];
  .... 
} 
```
-- http://cplusplus.com/articles/y807M4Gy/

## Content Target
* sizeof

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem

The following C++ code prints this:
```
0: 11
1: 22
0: 11
1: 22
2: 33
3: 44
4: 55
5: 66
```

Why does the `for` loop in `process()` stop after 1, but the same `for` loop in `main` iterates through all 6 elements in the array?

## Code Snippet (optional)
```cpp
#include <iostream>

#define MAX_NUMBERS 6
#define _ARRAY_SIZE(ARR) (sizeof(ARR) / sizeof((ARR)[0]))

void process(int numbers[MAX_NUMBERS]) {
    for (int i = 0; i < _ARRAY_SIZE(numbers); i++) {
        std::cout << i << ": " << numbers[i] << std::endl;
    }
}

int main() {
    int numbers[MAX_NUMBERS] = { 11, 22, 33, 44, 55, 66 };

    process(numbers);

    // exactly the same as in process()
    for (int i = 0; i < _ARRAY_SIZE(numbers); i++) {
        std::cout << i << ": " << numbers[i] << std::endl;
    }
}
```

## Answer Key
`sizeof` on array function parameters will return the size of `int *` instead of `int [6]`


## Distractors
### 1.
`_ARRAY_SIZE` should be the other way around: `(sizeof((ARR)[0]) / sizeof(ARR))`


### 2.
Only 6 bytes of the `numbers` array are used in process, and integers are 4 bytes each.  
So `0x0000000B` (11) and `0x0016` (22) are the two numbers displayed.


### 3.
The `numbers` array is on the stack of `main` and is not guaranteed to be accessible in another function.  
When a new stackframe in `process` is pushed, it overwrites the values in `numbers`.


## Common errors, misconceptions, or irrelevant information:
This is a common C++ error, so it has it's own compiler warning: `-Wsizeof-array-argument`

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
