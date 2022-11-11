# C➕➕ Memory: copy by value

## Item ID
1870

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probability Estimates
[.60, .78, .85, .95]

## Claim Behavior (evidence)
```cpp
$ ./key
0x7fffdf88a33c   main() start   count: 0
0x7fffdf88a33c   add() start    count: 0
0x7fffdf88a33c   add() end      count: 5
0x7fffdf88a30c   add_10() start count: 5  // ...0c != ...3c
0x7fffdf88a30c   add() start    count: 5  // ...0c
0x7fffdf88a30c   add() end      count: 15 // ...0c
0x7fffdf88a30c   add_10() end   count: 15 // ...0c
0x7fffdf88a33c   main() end     count: 5
```
-- [key.cpp](./key.cpp)

> When the parameter is a value, it is only a copy of the argument, so regardless of what you do to the parameter, the argument remains unchanged.  
> -- https://stackoverflow.com/questions/16728441/why-is-the-copy-constructor-called-when-we-pass-an-object-as-an-argument-by-valu

## Content Target
Know when pointer use is appropriate.

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
The following code does NOT print `15` as expected.

What is the issue?

## Code Snippet (optional)
```cpp
#include <iostream>

class Counter
{
public:
    int count;
    Counter() : count(0) {}
    int add(int plus) {
        count += plus;
        return count;
    }
};

void add_10(Counter counter) {
    counter.add(10);
}

int main() {
    auto counter = Counter{};
    counter.add(5);
    add_10(counter);
    std::cout << counter.count << std::endl;
}
```

## Answer Key
A copy of `Counter` is modified with `add_10` instead of the original `Counter`.

## Distractors
### 1.
The return value of `Counter::add` is never used.

### 2.
`Counter{}` is the wrong constructor.

### 3.
`counter` in `main` should have been heap allocated.

## Common errors, misconceptions, or irrelevant information:
* I said "modified with `add_10`" instead of "modified in `add_10`" because depending on your perspective it's copied *before* being passed to `add_10`, or it's copied *in* the arguments for `add_10`.

3. Even if `counter` was a `Counter*` (heap allocated) `add_10` still takes a copy.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
