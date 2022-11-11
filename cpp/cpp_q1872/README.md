# C➕➕ Memory: pointer from value

## Item ID
1872

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.40, .65, .80, .90]

## Claim Behavior (evidence)

> we can get the memory address of a variable by using the & operator
-- https://www.w3schools.com/cpp/cpp_pointers.asp

## Content Target
* address of
* pointers
* dereferencing

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
You're working in a function that takes a `Texture &background`.

How do you get a `Texture*` from `background`?


## Code Snippet (optional)
```cpp
void draw(Texture &background) {}
```


## Answer Key
```cpp
Texture* answer = &background;
```

## Distractors
### 1.
```cpp
Texture* answer = *background;
```
### 2.
```cpp
Texture* answer = (Texture*)background;
```
### 3.
```cpp
Texture* answer = *&background;
```

## Common errors, misconceptions, or irrelevant information:
1. `*background` would be used to dereference from a `Texture*` to a `Texture`.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
