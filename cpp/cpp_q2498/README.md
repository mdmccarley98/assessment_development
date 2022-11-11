# C++ Braced Initialization

## Item ID
2498

## Claim
Claim 2

## Claim Behavior (evidence)
> As a general rule in C++, initialization values may be specified with parentheses, an equals sign, or braces:
> ```cpp
> int x(0); // initializer is in parentheses`
> int y = 0; // initializer follows "="
> int z{ 0 }; // initializer is in braces
> ```

> In many cases, it’s also possible to use an equals sign and braces together:
> ```cpp
> int z = { 0 }; // initializer uses "=" and braces
> ```

> There are some exceptions that happens when braced initialization is used and we are going to explore in this question. 

## Content Target
- parenthesis initialization
- braced initialization
- vector

## Target Level
Level 4

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
What is output of the code below?

## Code Snippet (optional)
```cpp
#include <initializer_list>
#include <iostream>

class Widget
{
public:
    Widget(int i, bool b){std::cout << "A";}
    Widget(int i, double d){std::cout << "B";}
    Widget(std::initializer_list<long double> il){std::cout << "C";}
};

int main()
{
    Widget w1(10, true);
    Widget w2{10, true};
    Widget w3(10, 5.0);
    Widget w4{10, 5.0};
}
```

## Answer Key
ACBC

## Distractors
### 1.
AABB

### 2.
AABC

### 3.
None of the options are correct

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - This answer happens if `Widget(std::initializer_list<long double> il){std::cout << "C";}` would not exist. But because this constructor was declared, C++ makes this constructor to be preferred when the object is initialized with braces.
    If one or more constructors declare a parameter of type std::initializer_list, calls using the braced initialization syntax strongly prefer the overloads taking `std::initializer_list`s.
- Distractor 2
    - This is to distract the user into thinking that `Widget(int i, bool b)` will be called to w2, since the candidate can think that all the braced initialization constructor calls will use `Widget(std::initializer_list<long double> il)` just when the parameters passed on the param list are numbers and don't have any booleans mixed.
- Distractor 3
    - This is to confuse the candidate in case he is not sure about any option. It actually makes this question harder, since besides the other 3 options showed here, every other permutation would not make the candidate confused.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
