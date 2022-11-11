# C➕➕ Trim String

## Item ID
2606

## Claim
Claim 2

## Claim Behavior (evidence)
> Trimming algorithms aim to delete spaces from both sides of the string.
> Left trim
```cpp
result.erase(result.begin(), std::find_if(result.begin(), result.end(), [](unsigned char ch) {
        return !std::isspace(ch);
    }));
```
> 
> Right trim
```cpp
result.erase(std::find_if(result.rbegin(), result.rend(), [](unsigned char ch) {
        return !std::isspace(ch);
    }).base(), result.end());
```

> `.base()` is used to get the forward iterator, since the reverse was used to find the first element that was not a space.

## Target Level
Level 4

## Content Target
- smart pointers

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
What is the output of the code snippet below?

## Code Snippet (optional)
```cpp
#include <iostream>
#include <algorithm>

std::string modifyString(const std::string& str)
{
    auto result = str;
    result.erase(std::find_if(result.rbegin(), result.rend(), [](std::string::value_type ch) {
        return !std::isspace(ch);
    }).base(), result.end());
    return result;
}

int main()
{
    std::cout << modifyString("          everything is fine, maybe") << std::endl;
}
```

## Answer Key
`          everything is fine, maybe`

## Distractors

### 1.
`everything is fine, maybe`

### 2.
`everything is fine,`

### 3.
`          everything is fine,`

## Common errors, misconceptions, or irrelevant information:
The `a` method is just a right trim algorithm, but is using heavy modern c++ syntax. So the result is `          everything is fine, maybe`, since all spaces are on the left side, not right side.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
