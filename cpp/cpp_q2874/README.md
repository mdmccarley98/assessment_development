# C➕➕ - Modern Cast Understanding

## Item ID
2874

## Claim
1: basic_features

## Claim Behavior (evidence)

> const_cast makes it possible to form a reference or pointer to non-const type that is actually referring to a const object or a reference or pointer to non-volatile type that is actually referring to a volatile object. Modifying a const object through a non-const access path and referring to a volatile object through a non-volatile glvalue results in undefined behavior.

-- https://en.cppreference.com/w/cpp/language/const_cast

> Unlike static_cast, but like const_cast, the reinterpret_cast expression does not compile to any CPU instructions (except when converting between integers and pointers or on obscure architectures where pointer representation depends on its type). It is purely a compile-time directive which instructs the compiler to treat expression as if it had the type new-type.

-- https://en.cppreference.com/w/cpp/language/reinterpret_cast

> Safely converts pointers and references to classes up, down, and sideways along the inheritance hierarchy.
> If the cast is successful, dynamic_cast returns a value of type new-type. If the cast fails and new-type is a pointer type, it returns a null pointer of that type. If the cast fails and new-type is a reference type, it throws an exception that matches a handler of type std::bad_cast.

-- https://en.cppreference.com/w/cpp/language/dynamic_cast


## Content Target
* cast
* promotion
* conversion

## Cognitive Model
Recall

## Target Level
Level 3

## Item Type
Multiple Choice

## Stem
Which of the following code snippets compile?

## Code Snippet (optional)

## Answer Key
```cpp
#include <iostream>

int main()
{
    const int* num_ptr = new int(2676);
    std::cout << *num_ptr << std::endl;

    int* num = const_cast<int*>(num_ptr);
    char* str = reinterpret_cast<char*>(num);
    float* num_f = reinterpret_cast<float*>(str);
}
```

## Distractors
### 1.
```cpp
#include <iostream>

int main()
{
    const int* num_ptr = new int(2676);
    std::cout << *num_ptr << std::endl;

    int* num = const_cast<int*>(num_ptr);
    char* str = reinterpret_cast<char*>(num);
    float* num_f = dynamic_cast<float*>(str);
    if(num_f == nullptr) 
    {
        std::cout << "Bad cast" << std::endl;
    }
}
```

### 2.
```cpp
#include <iostream>

int main()
{
    const int* num_ptr = new int(2676);
    std::cout << *num_ptr << std::endl;

    int* num = const_cast<int*>(num_ptr);
    char* str = static_cast<char*>(num);
    float* num_f = dynamic_cast<float*>(str)
    if(num_f == nullptr) 
    {
        std::cout << "Bad cast" << std::endl;
    }
}
```

### 3.
```cpp
#include <iostream>

int main()
{
    const int* num_ptr = new int(2676);

    int* num = const_cast<int*>(num_ptr);
    char* str = static_cast<char*>(num);
    float* num_f = reinterpret_cast<float*>(str);
}
```

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - example.cpp: In function ‘int main()’:
      example.cpp:14:44: error: cannot dynamic_cast ‘str’ (of type ‘char*’) to type ‘float*’ (target is not pointer or reference to class)
        14 |     float* num_f = dynamic_cast<float*>(str);
           | 
- Distractor 2
    - example.cpp: In function ‘int main()’:
      example.cpp:11:39: error: invalid static_cast from type ‘int*’ to type ‘char*’
         11 |     char* str = static_cast<char*>(num);
            |                                       ^
      example.cpp:14:44: error: cannot dynamic_cast ‘str’ (of type ‘char*’) to type ‘float*’ (target is not pointer or reference to class)
         14 |     float* num_f = dynamic_cast<float*>(str);
            |
- Distractor 3
    - example.cpp: In function ‘int main()’:
      example.cpp:11:39: error: invalid static_cast from type ‘int*’ to type ‘char*’
         11 |     char* str = static_cast<char*>(num);
            |                                         

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
