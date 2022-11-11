# C++ - Reference Lifetime

## Item ID
2700

## Claim
2

## Claim Behavior (evidence)
See "iterator invalidation" table entry for resize():
"If the vector changed capacity, all of them. If not, only end() and any elements erased."

Source:
https://en.cppreference.com/w/cpp/container/vector

## Target Level
Level 2

## Content Target
- STL containers
- object lifetime

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Given the code snippet below, choose the answer that most correctly describes the code.

## Code Snippet (optional)
```cpp
#include <vector>
#include <string>
#include <iostream>

using namespace std;

int main()
{
    vector xs { 10, "hello"s };

    auto& ref = xs[5];

    cout << ref << '\n';

    xs.resize(11);

    cout << ref << '\n'; 
}
```

## Answer Key
The second `cout` operates on an invalidated reference if the capacity of `xs` was changed by `resize()`.

## Distractors
### 1. 
Because we didn't decrease the vector `xs`' capacity, `ref` always remains valid after the `resize()` call.

### 2.
Because no data was accessed, `ref` remains valid after the `resize()` call.

### 3.
Undefined behavior because calling `resize()` invalidates all iterators.

## Common errors, misconceptions, or irrelevant information:
Distractor 1: This /could/ happen, but it is not always guaranteed because resize() /might/ invalidate
"ref". There is no way to know by looking at the code, and so no way to say this statement is always true.

Distractor 2: Any /change/ in the vector's capacity will invalidate ref (as if realloc() were called). Whether
or not we've tried to access the data is immaterial.

Distractor 3: It's true that this /can/ cause undefined behavior, but it also may not: if the vector's
capacity is unchanged, ref is still valid. Additionally, in this case we requested the vector to /grow/,
so ref would not have been consumed by a shortening of the vector. So this answer is incorrect because
it is only sometimes true.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
