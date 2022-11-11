# C++ Vector Lambda Initialization

## Item ID
2604

## Claim
Claim 2

## Claim Behavior (evidence)
> One way of initializing vectors is through the function 
```cpp
explicit vector (size_type n, const value_type& val = value_type(),
                 const allocator_type& alloc = allocator_type());
```
-- https://www.cplusplus.com/reference/vector/vector/vector/

> To pass the return of a lambda function as a parameter you have to invoke the lambda function like
```cpp
std::vector<int> vec(0, []()->int {return 2;}());
```
> You can't forget the parenthesis in the end invoking the function.

## Content Target
- lambda functions
- vector initialization

## Target Level
Level 1

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
What is the output of this code?

## Code Snippet (optional)
```cpp
#include <vector>
#include <iostream>

int main()
{
    std::vector<int> vec(0, []()->int {return 2;});

    for(auto num: vec)
        std::cout << num << std::endl;

    return 0;
}
```

## Answer Key
compilation error

## Distractors
### 1.
```
0
0
```

### 2.
nothing is printed

### 3.
```
0
2
```

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - This would be true if it was `std::vector<int> vec([]()->int {return 2;}(), 0);`
- Distractor 2
    - This would be true if it was `std::vector<int> vec(0, []()->int {return 2;}());`
- Distractor 3
    - This would be true if an initialization_list `{0, []()->int {return 2;}()}` was passed in the vector constructor.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
