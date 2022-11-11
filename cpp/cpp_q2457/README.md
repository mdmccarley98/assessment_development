# C++ Template Type Deducing

## Item ID
2457

## Claim
Claim 2

## Claim Behavior (evidence)
>     const int& x1 = 10;
>     const int x2 = 10;
>     int x3 = 10;
> 
>     auto y1 = x1;  // y1 is deduced simply as int, const and ref are ignored. The user has to explicitly say when constness and referenceness need to be maintained for this case
>     auto y2 = x2;  // same as y1, int
>     auto y3 = x3;  // same as y1, int
> -- [C++ keywords: class](https://en.cppreference.com/w/cpp/keyword/class) - cppreference.com

## Content Target
- class
- class definitions

## Cognitive Model
Recall

## Target Level
Level 2

## Item Type
Multiple Choice

## Stem
What is the deduced type of `foo_return`?

## Code Snippet (optional)
```cpp
#include <iostream>

template<typename T>
decltype(auto) foo(T&& param)
{
    return param;
}

int main()
{
    const int x = 5.0;
    auto foo_return = foo(x);
    std::cout << foo_return << std::endl;
}
```

## Answer Key
int

## Distractors
### 1.
const int&

### 2.
int&

### 3.
int&&

## Common errors, misconceptions, or irrelevant information:
- `foo` type is deduced to be `const int &`, this leads the user into thinking that `foo_return` will also have the same type. This would be true if foo_return had been declared as `decltype(auto) foo_return`, but because it was declared with `auto`, then the deduced type is just `int`. The other distractors are for people that either think that `foo_return` would resolve to `int&`, thinking `auto` just remove constness and not ref or people that think `foo` would return `int&&` because of param type being `T&&` in `foo` definition.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
