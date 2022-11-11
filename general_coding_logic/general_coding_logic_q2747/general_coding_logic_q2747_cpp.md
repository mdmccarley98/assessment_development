# General Coding Logic - Comparing Strings

## Item ID
2747

## Claim
2

## Target Skill Level 
2

## Claim Behavior (evidence)
The function `foo` outputs true if the strings are reversed related to the other or if `str1[str1.size()-i-1] < str2[i]` at any moment. When these strings are equal in size, it can be said that it also returns true when the reversed version of `str2` is greater than `str1`.

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
`str1` and `str2` are the string representations of positive integer numbers. What is TRUE about the code snippet below?

## Code Snippet (optional)
```cpp
#include <iostream>

bool foo(const std::string& str1, const std::string& str2)
{    
    if(str1.size() != str2.size())
        return 0;

    for(int i=0; i < str1.size(); i++)
    {
        if(str1[str1.size()-i-1] == str2[i])
        {
            continue;
        }
        else
        {
            return str1[str1.size()-i-1] < str2[i];
        }
    }

    return 1;
}

int main()
{
    std::cout << foo("818","717") << std::endl;
}
```

## Answer Key
None of the other options are TRUE

## Distractors

### 1.
`foo` outputs true if and only if the strings are a palindrome

### 2.
`foo` returns true for all cases where the reversed version of `str2` is greater than `str1`

### 3.
`foo("818","717")` returns true


## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - If they are palindrome `foo` actually returns true, but it's not only in this case.
- Distractor 2
    - `std::cout << foo("816","727") << std::endl;` returns true and `reversed(str2) < str1` 
- Distractor 3
    - `foo("818","717")` is false

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
