# C➕➕ STL Structure Fit

## Item ID
2456

## Claim
Claim 2

## Claim Behavior (evidence)
> STL Containers 
> 
> https://www.cplusplus.com/reference/vector/vector/
> https://www.cplusplus.com/reference/set/set/
> 
> In this exercise we want to know the differences between the main properties of `set` and `vector`. 
  Also we want to know if the user knows how they are initialized.
> 
> A `set` is a container that stores elements that cannot be repeated and are stored in a specific order. `set` implements a binary search tree.
> A `vector` is an array-like structure, indexed and can have repeated elements.
>
> We introduce also the `std::make_heap` operation to check if the candidate knows how ordered the vector is after this operation.

## Target Level
Level 2

## Content Target
- `set`
- `vector`

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
What is the output of this code?

## Code Snippet (optional)
```cpp
#include <algorithm>
#include <iostream>
#include <set>
#include <vector>

template<typename T>
void printStl(T container)
{
    for(const auto& number: container)
        std::cout << number << " "; 
    std::cout << std::endl;
}

int main()
{
    std::set<int> numbers_set =       {5, 4, 5, 3, 4, 2, 1};
    std::vector<int> numbers_vector = {1, 2, 3, 4, 5};

    numbers_set.erase(4);    
    std::make_heap(numbers_vector.begin(), numbers_vector.end());
    numbers_vector.erase(numbers_vector.begin() + 4);

    printStl(numbers_set);
    printStl(numbers_vector);
}
```

## Answer Key
```
1 2 3 5
5 4 3 1 
```

## Distractors
### 1.
```
1 2 3 4 5 5
5 4 2 1
```

### 2.
```
1 2 3 5
1 2 3 5
```

### 3.
```
1 2 3 4 5 5
1 2 3 5
```

## Common errors, misconceptions, or irrelevant information:
- `set` will delete all repeated elements from the initialization_list during construction. They will be stored in ascending order.
- A common misconception for anyone that has never used set is that it will maintain the repeated elements but will just not order them (which is also only a property of unordered_set).
- `vector` after `std::make_heap` operation will have the elements in descending order.
A common misconception here is that the order will be swapped.
- Target level is 2 because of these naive misconceptions.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
