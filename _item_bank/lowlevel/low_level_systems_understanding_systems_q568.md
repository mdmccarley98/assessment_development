# low_level_systems_understanding

## Item ID
q568

## Claim
5

## Claim Behavior (evidence)
NA

## Content Target
systems

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Which of the statement about `foo()` is **NOT** correct (Suppose all compiler optimization options are disabled)?

## Code Snippet (optional)
```c
#include <stdlib.h>
 
int foo()
{
    int i, sum;
    int *p = (int *) malloc(8);
 
    for (i = 0; i < 8; i++)
        sum += p[i];

    return sum;
}
```

## Answer Key
It crashes the process every time it is called.

## Distractors

### 1.
It leaks memory.

### 2.
It most likely returns an unpredictable value.

### 3.
It violates memory safety by reading beyond its buffer boundary.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

