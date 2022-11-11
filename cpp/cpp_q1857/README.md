# C++ - typedef and auto-deduction

## Item ID
1857

## Claim
Claim 2

## Threshold Probabilities
[.60, .75, .85, .95]

## Claim Behavior (evidence)
> For variables, specifies that the type of the variable that is being declared will be automatically deduced from its initializer.
> ...
> * in the type specifier of a variable: `auto x = expr;`. The type is deduced from the initializer.
>
> -- [placeholder type specifiers (since C++11)](https://en.cppreference.com/w/cpp/language/auto) - cppreference.com

> So, how do you actually declare a typedef? All you must do is provide the old type name followed by the type that should represent it throughout the code. Here's how you would declare size_t to be an unsigned integer:
>
>     typedef unsigned int size_t;
>
> -- [typedef in C and C++](https://www.cprogramming.com/tutorial/typedef.html) - Cprogramming.com

>     > clang example.cpp -o example.exe && example.exe
>     x: float
> -- [example.cpp](./example.cpp)

## Content Target
- auto
- typedef

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Given the following C++ code, what is the type of `x`?

## Code Snippet (optional)
```cpp
typedef float Pi;
// ...
auto x = Pi(3.141592653589793);
```

## Answer Key
`float`

## Distractors
### 1.
`auto`

### 2.
`x`

### 3.
`Pi`


## Common errors, misconceptions, or irrelevant information:
When using `auto` the type is deduced.

> For JPL's highest accuracy calculations, which are for interplanetary navigation, we use 3.141592653589793.  
> -- https://www.jpl.nasa.gov/edu/news/2016/3/16/how-many-decimals-of-pi-do-we-really-need/

This assessment does not take into account newer C++ features such as "using" or variable template (which are meant in no small part to help with the precision problem).

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
