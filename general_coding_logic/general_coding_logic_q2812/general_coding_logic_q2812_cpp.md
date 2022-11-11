# GCL: Regex Tests

## Item ID
2812

## Claim
1

## Target Level
4

## Claim Behavior (evidence)
> A regular expression is a sequence of characters that forms a search pattern. When you search for data in a text, you can use this search pattern to describe what you are searching for.

> A regular expression can be a single character, or a more complicated pattern.

> Regular expressions can be used to perform all types of text search and text replace operations.


## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Consider the statements about the code below:

I) Output is
`0 0 1 1`
`1 0 1 0`
II) `regex_match` with `str2_regex` is matching just numbers less than 300 with no more than 3 digits
III) `regex_match` with `str_regex` always begins with an uppercase letter

Which statements are TRUE?

## Code Snippet (optional)
```cpp
#include <iostream>
#include <regex>

int main()
{
    std::regex str_regex("([A-Z]*)[A-Za-z]([0-9]*)(=)[0-9]([a-z]*)([0-9]*)");
    std::cout << std::regex_match("ABCDEFm0=0ABCDEFm0", str_regex) << " "
              << std::regex_match("abedQ0=Q0", str_regex) << " "
              << std::regex_match("g233230=0", str_regex) << " "
              << std::regex_match("T1=8aaaaaaaaaaaa", str_regex) << std::endl;

    std::regex str2_regex("[12]?[0-9]{1,2}");
    std::cout << std::regex_match("267", str2_regex) << " "
              << std::regex_match("0267", str2_regex) << " "
              << std::regex_match("66", str2_regex) << " "
              << std::regex_match("567", str2_regex) << std::endl;
}
```

## Answer Key
I and II

## Distractors

### 1.
I and III

### 2.
II and III

### 3.
I, II and III


## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - I is TRUE but III is false, `a=1` is a valid match for `str_regex`.
- Distractor 2
    - II is TRUE but III is false again.
- Distractor 3
    - III is false.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
