# C++ language: template specialization

## Item ID
2811

## Claim
1

## Claim Behavior (evidence)
The candidate is asked to demonstrate understanding of default access specifiers and derivation.

"If access-specifier is omitted, it defaults to public for classes declared with class-key struct and to private for classes declared with class-key class."
Source: https://en.cppreference.com/w/cpp/language/derived_class

## Target Level
2

## Content Target
- object-oriented programming

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Choose the answer that correctly describes the following code snippet:

## Code Snippet (optional)
```cpp
#include <iostream>

struct base
{
    int member = 0;
};

struct derived1 : base {};
class derived2 : base {};

int main()
{
    std::cout << derived1().member << '\n';
    std::cout << derived2().member << '\n';
}
```

## Answer Key
This code will not compile because `base::member` has private access in `derived2`.

## Distractors

### 1.
This code will not compile because `base` is a struct and `derived2` is a class.

### 2.
This code will not compile because `base::member` has private access in `derived1`.

### 3.
This code will not compile because derivation from bases with default-initialized members is not allowed.

## Common errors, misconceptions, or irrelevant information:
Distractor 1: The worst choice: choosing this answer shows an incorrect understanding of derivation, and 
possibly of the relationship between classes and struct in C++. Since `base` is a struct, it's members have
public access by default; since `derived1` is a struct, it's default derivation access is also public, and
any inherited members are also visible with public access.

Distractor 2: `base::member` will have public access, this is not the cause of the failure.

Distractor 3: This program will not compile, because `base::member` is not visible from the instance of `derived2`,
which defaults to private member access since it is declared with the "class" keyword.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
