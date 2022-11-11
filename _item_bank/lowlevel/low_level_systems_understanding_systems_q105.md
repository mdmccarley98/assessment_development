# low_level_systems_understanding

## Item ID
q105

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
What's wrong with this code?

## Code Snippet (optional)
```c
// allocate and return a 2D array 
// (array of arrays) 
int ** allocate2DArray(int width, int height) {
    int **array = malloc(sizeof(int *) * width);
    array[1] = malloc(sizeof(int) * height);
    return array;
}
```

## Answer Key
This only allocates a single column. All the columns need to be allocated in a loop

## Distractors

### 1.
The width and height parameters are backwards. Height should come first

### 2.
The two calls to malloc should be combined. It is redundant

### 3.
This looks like the right way to allocate a 2D array in C

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

