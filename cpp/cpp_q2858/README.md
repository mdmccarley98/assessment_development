# C➕➕ - Array Pointer Type Decay

## Item ID
2858

## Claim
1

## Target Skill Level
2

## Claim Behavior (evidence)
Functions taking pointers can also be called with arrays, and vice versa. So are arrays and pointers the same? No.
If they aren't the same, why can both functions be called with both arguments?
First let's look at takes_pointer(array);. What happens here is usually referred to as the array "decaying" to a pointer. To be a bit more precise, let's have a look at the C++ standard:

-- https://en.cppreference.com/w/cpp/types/decay
-- https://en.cppreference.com/w/cpp/language/implicit_conversion

> "An lvalue or rvalue of type “array of N T” or “array of unknown bound of T” can be implicited converted to a prvalue of type “pointer to T”."
array is of type "array of 1 int", which converts to a prvalue (temporary) of type "pointer to int".
So what happens with `takes_array(pointer);`, does the pointer convert to an array? No, it's actually the other way around. About function parameters:
After determining the type of each parameter, any parameter of type “array of T” (...) is adjusted to be “pointer to T”.
So in void takes_array(int array[]), the type of array is adjusted to be pointer to int.

## Content Target
- array
- pointer
- type decaying

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
How should we substitute all the comments below so that the following code outputs `pp0`?

## Code Snippet (optional)
```cpp
#include <iostream>

void takes_pointer(int* pointer) {
  // Code A
}

void takes_array(int array[]) {
  if (typeid(array) == typeid(int[])) std::cout << 'a';
  if (typeid(array) == typeid(int*)) std::cout << 'p';
}

int main() {
  int* pointer = nullptr;
  int array[1];

  // Code B

  // Code C
}
```

## Answer Key
A: 
```cpp
if (typeid(pointer) == typeid(int[])) std::cout << 'a';
if (typeid(pointer) == typeid(int*)) std::cout << 'p';
```

B:
```cpp
takes_pointer(array);
takes_array(pointer);
```

C: 
```cpp
std::cout << (typeid(int*) == typeid(int[]));
```

## Distractors

### 1.
A: 
```cpp
if (typeid(pointer) != typeid(int[])) std::cout << 'a';
if (typeid(pointer) != typeid(int*)) std::cout << 'p';
```

B:
```cpp
takes_pointer(pointer);
takes_array(array);
```

C: 
```cpp
std::cout << (typeid(int*) == typeid(int[]));
```

### 2.
A: 
```cpp
if (typeid(pointer) == typeid(int[])) std::cout << 'a';
if (typeid(pointer) == typeid(int*)) std::cout << 'p';
```

B:
```cpp
takes_pointer(pointer);
takes_array(array);
```

C: 
```cpp
std::cout << (typeid(int*) != typeid(int[]));
```

### 3.
A: 
```cpp
if (typeid(pointer) == typeid(int[])) std::cout << 'a';
if (typeid(pointer) == typeid(int*)) std::cout << 'p';
```

B:
```cpp
takes_pointer(array);
takes_array(array);
```

C: 
```cpp
std::cout << (typeid(int*) != typeid(int[]));
```

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - A is wrong, should be:    
    ```cpp
    if (typeid(pointer) != typeid(int[])) std::cout << 'a';
    if (typeid(pointer) != typeid(int*)) std::cout << 'p';
    ```
- Distractor 2
    - B is wrong, should be:
    ```cpp
    takes_pointer(array);
    takes_array(pointer);
    ```
    - C is also wrong:
    ```cpp
    std::cout << (typeid(int*) == typeid(int[]));
    ```
- Distractor 3
    - B is wrong, should be:
    ```cpp
    takes_pointer(array);
    takes_array(pointer);
    ```
    - C is also wrong:
    ```cpp
    std::cout << (typeid(int*) == typeid(int[]));
    ```

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
