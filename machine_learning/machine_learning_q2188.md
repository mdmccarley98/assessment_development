#


## Item ID
2188

## Claim

8

## Claim Behavior (evidence)

[Locality of reference](https://en.wikipedia.org/wiki/Locality_of_reference)


## Content Target

Memory Efficiency

## Cognitive Model

Comprehend

## Item Type

Multiple Choice

## Stem

A common operation in machine learning is to perform the matrix multiplication algorithm on `NxN` square matrixes `A` and `B` stored in row-major order, and write the result to another `NxN` matrix `C`. 

Pseudocode for two ways to do this is shown below, with different ordering of the loops. 

If these algorithms were implemented in a compiled language such as C and run on a typical desktop PC, which of the following is true:


## Code Snippet (optional)

```C
N = 1024;

matrix_multiply_version_1(A, B, C) {
    for(int i = 0; i < N; ++i) {
        for(int j = 0; j < N; ++j) {
            for(int k = 0; k < N; ++k) {
                C[i][j] += A[i][k] + B[k][j];
            }
        }
    }
}

matrix_multiply_version_2(A, B, C) {
    for(int i = 0; i < N; ++i) {
        for(int k = 0; k < N; ++k) {
            for(int j = 0; j < N; ++j) {
                C[i][j] += A[i][k] + B[k][j];
            }
        }
    }
}
```


## Answer Key

Version 2 is significantly faster

## Distractors
### 1.

Version 1 is significantly faster

### 2.

Both are approximately the same speed

### 3.

Version 2 computes the wrong answer 


## Common errors, misconceptions, or irrelevant information:

Given that the arrays are row-major, version 1 reads B[0][0], B[1][0], B[2][0], etc which are N elements apart in memory, causing cache misses.

Version 2 correctly reads B[0][0], B[0][1], B[0][2], etc which are consecutive in memory - on my computer this runs about 5x as quickly.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

