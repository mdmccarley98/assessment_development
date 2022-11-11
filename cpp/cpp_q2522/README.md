# C++ Initialization Advanced

## Item ID
2522

## Claim
- Claim 1

## Claim Behavior (evidence)
> When initializing an object of array type, the initializer must be either a string literal (optionally enclosed in braces) or be a brace-enclosed list of initialized for array members:

> -- https://en.cppreference.com/w/c/language/array_initialization

> About class braced initialization, when a class or struct has no constructor, you provide the list elements in the order that the members are declared in the class. If the class has a constructor, provide the elements in the order of the parameters. If a type has a default constructor, either implicitly or explicitly declared, you can use default brace initialization (with empty braces).

> If a class has non-default constructors, the order in which class members appear in the brace initializer is the order in which the corresponding parameters appear in the constructor, not the order in which the members are declared (as with class_a in the previous example). Otherwise, if the type has no declared constructor, member initializers must appear in the brace initializer in the same order as they're declared. In this case, you can initialize as many of the public members as you wish, but you can't skip any member.

> -- https://docs.microsoft.com/en-us/cpp/cpp/initializing-classes-and-structs-without-constructors-cpp?view=msvc-170

## Content Target
- constructor
- value initialization
- delete

## Target Level
- Level 4

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Select the code snippet that will compile.

## Code Snippet (optional)

## Answer Key
```cpp
#include <iostream>

class A { public: int i; };

int main()
{
    delete[] new A[3]{ {0}, {1}, {2} };
}
```

## Distractors
### 1.
```cpp
#include <iostream>

class A { int a; int b; };

int main()
{
    auto obj_a = new A[3]{{0, 1}, {0, 2}, {0, 4}};
}
```

### 2.
```cpp
#include <iostream>

class A { };

int main()
{
    delete[] new A[3]({}, {}, {});
}
```

### 3.
```cpp
#include <iostream>

class A { };

int main()
{
    auto obj_a = new A[3]{(), (), ()};
}
```

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - Doesn't compile because the classes attributes are not public
- Distractor 2
    - For array initialization, it should be a braced initialization, not with parenthesis
- Distractor 3
    - Each element also should be braced initialized. Compiler gives `error: expected primary-expression before ')' token` 

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
