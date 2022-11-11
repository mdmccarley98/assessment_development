# C➕➕ coding: transform


## Item ID
1883

## Claim
- Claim 2 (Modern C++): Candidates know the most used features of STL and modern C++.

## Threshold Probabilities
[.10, .30, .60, .80]

## Claim Behavior (evidence)
```cpp
% ./example
example.cpp
1.3
3.6
9.7
```
-- [example.cpp](./example.cpp)


## Content Target
* std::transform
* blocks (lambdas)
* block capturing
* x++ postfix operator

## Cognitive Model
Use


## Item Type
Multiple Choice


## Stem

Using a vector of `numbers`: `1.1f, 2.4f, 7.5f`,
what is the contents of `numbers` after calling `example(numbers, 0.2f)`?


## Code Snippet (optional)
```cpp
void example(std::vector<float>& numbers, float i) {
    std::transform(
        numbers.begin(),
        numbers.end(),
        numbers.begin(),
        [&i](float x) { return x + i++; }
    );
}
```


## Answer Key
* 1.3
* 3.6
* 9.7


## Distractors

### 1.
* 2.3
* 4.6
* 10.7


### 2.
* 1.1
* 2.4
* 7.5


### 3.
* 1.3
* 2.6
* 7.7


## Common errors, misconceptions, or irrelevant information:
* `i++` increments after evaluation, the values of `i` added to `x` are 0.2, 1.2, and 2.2.
* `numbers` is passed by reference, so it is modified.
* Although `float i` is not a reference, a copy of `i` is made, and that copy is incremented in the block.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
