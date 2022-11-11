# programmatic_problem_solving

## Item ID
1550

## Claim
3

## Claim Behavior (evidence)
```cpp
#include <iostream>
#include <vector>
#include <tuple>

template<typename A, typename Func>
bool find_first_position(A arr, Func fn, std::tuple<int, int>& pos)
{
    bool result = false;
    for (auto i = 0; i < arr.size(); i++) {
        auto row = arr[i];
        for (auto j = 0; j < arr.size(); j++) {
            if (fn(row[j])) {
                pos = std::make_tuple(i, j);
                result = true;
                break;
            }
        }
    }
    return result;
}

int main(int argc, char** argv)
{
	std::vector<std::vector<char>> arr = {
	    {'a', 'b', 'c', 'd', 'd'},
	    {'a', 'b', 'c', 'd', 'd'},
	    {'a', 'b', 'c', 'd', 'd'},
	    {'a', 'b', 'c', 'd', 'd'},
	    {'a', 'b', 'c', 'd', 'd'},
    };

    std::tuple<int, int> pos;
    if (find_first_position(arr, [](char i){ return i == 'b'; }, pos)) {
        std::cout << "b " << std::get<0>(pos) << ", " << std::get<1>(pos) << std::endl;
    }
    if (find_first_position(arr, [](char i){ return i == 'd'; }, pos)) {
        std::cout << "d " << std::get<0>(pos) << ", " << std::get<1>(pos) << std::endl;
    }
    if (find_first_position(arr, [](char i){ return i == 'x'; }, pos)) {
        std::cout << "x " << std::get<0>(pos) << ", " << std::get<1>(pos) << std::endl;
    } else {
        std:: cout << "x not found" << std::endl;
    }
}
```
```
b 4, 1
d 4, 3
x not found
```

## Threshold Probabilities
[.40, .55, .75, .90]

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is wrong with the following code?

## Code Snippet (optional)
```cpp
template<typename A, typename Func>
bool find_first_position(A arr, Func fn, std::tuple<int, int>& pos)
{
    bool result = false;
    for (auto i = 0; i < arr.size(); i++) {
        auto row = arr[i];
        for (auto j = 0; j < arr.size(); j++) {
            if (fn(row[j])) {
                pos = std::make_tuple(i, j);
                result = true;
                break;
            }
        }
    }
    return result;
}
```

## Answer Key
This code will return a position for which `fn` is true, but might not return the *first* occurrence.

## Distractors

### 1.
This code only works for square arrays.

### 2.
This code will return the *last* position for which `fn` is true.

### 3.
`j` is going to be returned incorrectly. It will always be the length of the row.

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

