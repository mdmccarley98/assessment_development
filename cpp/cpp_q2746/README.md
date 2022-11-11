# C++ language: template fold expressions

## Item ID
2746

## Claim
2

## Claim Behavior (evidence)
C++17 added special syntax for /template fold expressions/ ("https://en.cppreference.com/w/cpp/language/fold") over most operators. Fold operations are extremely common in programs, and this new syntax makes writing them much easier and more concise than before C++17.

The template parameter pack expansion below implements a binary left fold:
```cpp
(x + ... xs)
```

This is because the expansion of foldl(0, 1, 2) will be:
```
0 + (1 + (2))
```

...with the recursive expansion on the right and the initial value on the left. This
is the behavior of STL's std::accumulate() (see "return value"):
https://en.cppreference.com/w/cpp/algorithm/accumulate

## Target Skill Level
4

## Content Target
- Templates
- parameter packs
- functional programming
- STL

## Cognitive Model
Recall, Comprehend

## Item Type
Multiple Choice

## Stem
Which example implements a binary left fold (like std::accumulate())?

## Code Snippet (optional)
```cpp
template <typename ...XS>
auto foldl0(XS ...xs) { return (xs + ...); }

template <typename ...XS>
auto foldl1(XS ...xs) { return (... + xs); }

template <typename X, typename ...XS>
auto foldl2(X x, XS ...xs) { return (x + ... + xs); }

template <typename X, typename ...XS>
auto foldl3(X x, XS ...xs) { return (xs + ... + x); }
```

## Answer Key
foldl2

## Distractors
### 1.
foldl0

### 2.
foldl1

### 3.
foldl3 

## Common errors, misconceptions, or irrelevant information:
All of these functions are folds-- and if type X and XS are regular types, will produce identical answers-- however, they process the arguments in different orders. Although fold1 is indeed a left fold, it is an /unary/ left fold, not a /binary/ left fold.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
