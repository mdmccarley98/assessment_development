# C➕➕ 6 coding: map

## Item ID
1880

## Claim
- Claim 2 (Modern C++): Candidates know the most used features of STL and modern C++.

## Threshold Probabilities
[.05, .35, .55, .75]

## Claim Behavior (evidence)
```
% ./example
example.cpp
blue : 15
green : 12
red : 9
```
-- [example.cpp](./example.cpp)

## Content Target
* std::map
* std::iota
* std::vector

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
You have a vector of the colors: `{"green", "red", "green", "blue"}`.

What is the result of running the function `example(colors)`?

## Code Snippet (optional)
```cpp
std::map<std::string, int> example(std::vector<std::string> &colors) {
    std::map<std::string, int> result;

    std::vector<int> numbers(colors.size());
    std::iota(numbers.begin(), numbers.end(), 0);
    for (auto& i : numbers) {
        i = (i + 2) * 3;
    }

    auto c = colors.begin();
    auto n = numbers.begin();
    for (; c != colors.end() && n != numbers.end(); ++c, ++n) {
        result[*c] = *n;
    }

    return result;
}
```


## Answer Key
* blue: 15
* green: 12
* red: 9


## Distractors

### 1.
* blue: 15
* green: 6
* green: 12
* red: 9


### 2.
* blue: 15
* green: 72
* red: 9


### 3.
* blue: 6
* green: 9
* green: 12
* red: 15


## Common errors, misconceptions, or irrelevant information:
* `*n` dereferences the iterator over numbers, it does not multiply by `n`
* `std::map` has unique keys

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
