# C➕➕ Static Data and Functions

## Item ID
2600

## Claim
Claim 1

## Claim Behavior (evidence)
> "A name used in the definition of a static data member of class X (...) is looked up as if the name was used in a member function of X."

```cpp
#include<iostream>

int return_num()
{
  return 10;
}

struct test
{
  static int x;
  static int return_num()
  {
    return 11;
  }
};

int test::x = return_num();

int main()
{
    std::cout << test::x;
}
```

> Even though the call return_num() occurs outside the class, since return_num is used in the definition of the static data member test::x, it is looked up as if return_num() was called in a member function of test. If return_num() was > called in a member function of test, test::return_num() would be called, not the global return_num().

## Target Level
Level 5

## Content Target
- static data
- static functions
- global functions

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
What is the output of the code snippet below?

## Code Snippet (optional)
```cpp
#include<iostream>

int return_num()
{
  return 10;
}

struct test
{
  static int x;
  static int return_num()
  {
    return 11;
  }
};

int test::x = return_num();

int main()
{
    std::cout << test::x;
}
```

## Answer Key
11

## Distractors

### 1.
10

### 2.
Doesn't compile because these two functions `return_num` cannot have the same name

### 3.
Undefined behavior

## Common errors, misconceptions, or irrelevant information:
As already explained in the Claim Behavior the code returns 11. 
- Distractor 1
    - It would return 10 if we didn't have `static int return_num()`
- Distractor 2
    - Code compiles, because the functions are defined in different namespaces
- Distractor 3
    - A confusing answer, so the user that doesn't know what is happening here has no clue which one of the answers it is.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
