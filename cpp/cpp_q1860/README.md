# C++ Composite: enum

## Item ID
1860

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.15, .40, .60, .85]

## Claim Behavior (evidence)
> Each enumerator is associated with a value of the underlying type. When initializers are provided in the enumerator-list, the values of enumerators are defined by those initializers. If the first enumerator does not have an initializer, the associated value is zero. For any other enumerator whose definition does not have an initializer, the associated value is the value of the previous enumerator plus one. 
```cpp
enum Foo { a,     b,     c = 10, d,      e = 1, f,     g = f + c };
//         a = 0, b = 1, c = 10, d = 11, e = 1, f = 2, g = 12
```
-- https://en.cppreference.com/w/cpp/language/enum

```cpp
$ ./example
DEVICE_1: 1
DEVICE_2: 2
DEVICE_2_R: 2
DEVICE_2_G: 4
DEVICE_2_B: 8
DEVICE_3: 9
DEVICE_4: 10
```
-- [example.cpp](./example.cpp)

## Content Target
* enum
* bit shifting
* `&` operator

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
You are writing a driver for an RGB component in a PC.
The device has some flags defined below.

What is the value of `DEVICE_3`?

## Code Snippet (optional)

```cpp
enum Flag {
    DEVICE_1 = 1,
    DEVICE_2,
    DEVICE_2_R = 1<<1,
    DEVICE_2_G = 1<<2,
    DEVICE_2_B = 1<<3,
    DEVICE_3,
    DEVICE_4,
};
```

## Answer Key
* `DEVICE_3` is 9 because the previous enum was 8
## Distractors

### 1.
* `DEVICE_3` is 6 because it's the 6th enum from DEVICE_1


### 2.
* `DEVICE_3` is 5 starting from 0 it's index is 5


### 3.
* `DEVICE_3` is 3 because it's continuing the iteration from DEVICE_2


## Common errors, misconceptions, or irrelevant information:
* If a value is not specified for an enum, then it's value is the previous value plus one.
* Expressions for previously defined values are allowed in C++.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
