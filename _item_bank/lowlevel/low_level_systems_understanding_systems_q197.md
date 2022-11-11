# low_level_systems_understanding

## Item ID
q197

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
systems

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Suppose you have the following code which iterates over a large (2000 by 2000) square 2D array and counts the number of non-zero elements in the array.

## Code Snippet (optional)
```c
int total = 0;
for(int x = 0; x < side_length; x++) {
    for(int y = 0; y < side_length; y++) {
        if (array[y][x] != 0) {
            total += 1;
        }
    }
}
```

## Answer Key
It reduces the number of cache misses

## Distractors

### 1.
It reduces the cost of each branch misprediction

### 2.
The compiler is less able to optimize that loop

### 3.
It forces the compiler to use a larger instruction set

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

