# C++ Advanced Param Passing Behavior

## Item ID
2523

## Claim
- Claim 1

## Claim Behavior (evidence)
> The postfix-expression is sequenced before each expression in the expression-list and any default argument. The initialization of a parameter, including every associated value computation and side effect, is indeterminately sequenced with respect to that of any other parameter. Note: All side effects of argument evaluations are sequenced before the function is entered. Example:

```cpp
void f() {
  std::string s = "but I have heard it works even if you don't believe in it";
  s.replace(0, 4, "").replace(s.find("even"), 4, "only").replace(s.find(" don't"), 6, "");
  assert(s == "I have heard it works only if you believe in it"); // OK
}
```
If an operator function is invoked using operator notation, argument evaluation is sequenced as specified for the built-in operator. Example:
```cpp
struct S {
  S(int);
};
int operator<<(S, int);
int i, j;
int x = S(i=1) << (i=2);
int y = operator<<(S(j=1), j=2);
```

After performing the initializations, the value of i is 2, but it is unspecified whether the value of j is 1 or 2.

-- https://timsong-cpp.github.io/cppwp/n4659/expr.call#5

## Content Target
- Unspecified Behavior
- Value Increment

## Target Level
- Level 5

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Select the TRUE statement about the code snippet below:

## Code Snippet (optional)
```cpp
#include <iostream>

void print(int i, int j, int k)
{
    std::cout << i << j << k << std::endl;
}

int main()
{
    int i = 0;
    print(++i, i++, i*i*i);
}
```

## Answer Key
It generates an unspecified behavior

## Distractors
### 1.
It outputs 118

### 2.
It outputs 018

### 3.
It outputs 111

## Common errors, misconceptions, or irrelevant information:
All distractors are a combination of operations depending if the candidate knows the order of the operators or not. But the unique thing about this question is that all this doesn't matter. This code generates an unspecified behavior because the evaluation of the parameters is done in a random order, so there's a subset of possible answers.

Note: Since C++17, the order of evaluation for function parameters has been well-defined[1].
http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2016/p0145r3.pdf

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
