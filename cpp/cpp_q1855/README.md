# C++ Basics: for range

## Item ID
1855

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.60, .75, .85, .95]

## Claim Behavior (evidence)
```cpp
for (auto i : v) // access by value, the type of i is int
    std::cout << i << ' ';

for (auto&& i : v) // access by forwarding reference, the type of i is int&
    std::cout << i << ' ';
```
-- https://en.cppreference.com/w/cpp/language/range-for

```
cmake-build-debug\example.exe
example.cpp
2
3
4
5

cmake-build-debug\key.exe
key.cpp
4
6
8
10

cmake-build-debug\distractor1.exe
distractor1.cpp
2
3
4
5

cmake-build-debug\distractor2.exe
'cmake-build-debug\distractor2.exe' is not recognized as an internal or external command,
operable program or batch file.

cmake-build-debug\distractor3.exe
distractor3.cpp
2
3
4
5

```
-- [example.cpp](./example.cpp) - [key.cpp](./key.cpp) - [distractor1.cpp](./distractor1.cpp) - [distractor2.cpp](./distractor2.cpp) - [distractor3.cpp](./distractor3.cpp)

## Content Target
* for range loops
* auto

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem

Your teammate wrote some code below that doubles every number.
But it's not working right.

What change will make the following code work as expected?

## Code Snippet (optional)
```cpp
int numbers[] = { 2, 3, 4, 5 };

for (auto i : numbers) {
    i *= 2;
}
```

## Answer Key
Use a reference: 
```cpp
for (auto& i : numbers)
```

## Distractors
### 1.
Use an `int`:
```cpp
for (int i : numbers)
```
### 2.
Use `.items()`:
```cpp
for (auto i : numbers.items())
```
### 3.
Use a classic for loop:
```cpp
for (int i = 0; i < 4; i++)
```

## Common errors, misconceptions, or irrelevant information:
`auto` is often used with for range loops.  But `auto` does not make a reference automatically, so you use `auto&`.

C++ is allowing `i` to be mutated, because a temporary `int i` is created each loop, and then thrown away, the value in the array `numbers` is not modified unless you use a reference.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
