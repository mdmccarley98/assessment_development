# C++ 2 Composite: array

## Item ID
1859

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.60, .75, .85, .95]

## Claim Behavior (evidence)
>     int x[] = {1,2,3}; // x has type int[3] and holds 1,2,3
> 
> -- https://en.cppreference.com/w/c/language/array_initialization

> Once one realizes this, the next attempt would be:
> 
>     auto z = int[5]{};
> 
> Note that your int y[5] does not have any initializer.
> ...
> Unfortunately this does not work either for obscure syntax reasons.
>
> -- https://stackoverflow.com/questions/16949016/how-to-declare-array-with-auto

## Content Target
array initialization

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

Choose the line that initializes `array` below.

## Code Snippet (optional)
```cpp
// *** COMPLETE THIS LINE ***
int sum = 0;
for (auto i : array) {
    sum += i;
}
```

## Answer Key
```cpp
int array[] = { 1, 2, 3 };
```

## Distractors

### 1.
```cpp
auto array = int[]{ 1, 2, 3 };
```

### 2.
```cpp
int[] array = { 1, 2, 3 };
```

### 3.
```cpp
auto array[] = { 1, 2, 3 };
```

## Common errors, misconceptions, or irrelevant information:

### Distractor 1:
```log
error C2062: type 'int' unexpected
```
gcc:
```log
distractor1.cpp:6:18: error: expected primary-expression before ‘int’
     auto array = int[]{ 1, 2, 3 };
                  ^~~
```

### Distractor 2:
```log
error C2760: syntax error: unexpected token ']', expected 'id-expression'
```
gcc:
```log
/distractor2.cpp:6:8: error: expected unqualified-id before ‘[’ token
     int[] array = { 1, 2, 3 };
        ^
```

### Distractor 3:
MSVC:
```log
error C3318: 'auto []': an array cannot have an element type that contains 'auto'
error C3535: cannot deduce type for 'auto []' from 'initializer list'
```
gcc:
```log
distractor3.cpp:6:16: error: ‘array’ declared as array of ‘auto’
     auto array[] = { 1, 2, 3 };
                ^
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
