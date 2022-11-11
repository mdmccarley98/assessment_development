# C++ - Free Function Begin End

## Item ID
2742

## Claim
2

## Claim Behavior (evidence)
The programmer intends to write a generic function that works on sequences, but their function fails when passed an array.

## Target Level
2

## Content Target
Generic Programming

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Why does the `foldr()` function fail to compile when passed an array?

## Code Snippet (optional)
```cpp
#include <vector>
#include <numeric>

template <typename T, typename U>
auto foldr(const T& xs, const U val)
{
  return std::accumulate(xs.begin(), xs.end(), val);
}

int main()
{
  std::vector xs { 1, 2, 3, 4, 5 };

  int ys[] = { 1, 2, 3, 4, 5 };

  auto sum_xs = foldr(xs, 0);
  auto sum_ys = foldr(ys, 0);
}
```

## Answer Key
Because raw arrays do not have `begin()` and `end()` member functions

## Distractors

### 1.
Because array parameters decay to pointers, and the array dimension can't be determined from a single pointer

### 2.
Because the second parameter is not a reference

### 3.
Because the iterator categories supported by `std::accumulate()` don't support random access

## Common errors, misconceptions, or irrelevant information:
### Distractor 1
Array parameters indeed decay to pointers when passed to functions, but std::begin() and std::end() are smart enough to get the dimension back via the type system (which is how this function /could/ be implemented); but here, we never get that far because the real culprit is just that the decayed parameter does not have a begin() or end() member function that can be called.

### Distractor 2
This answer has no relevance and may indicate the candidate is grasping at straws.

### Distractor 3
This is actually true, but it's not the cause of the compilation error.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
