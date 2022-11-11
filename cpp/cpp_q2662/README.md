# C++ - Variant Printing

## Item ID
2662

## Claim
Claim 2

## Claim Behavior (evidence)
https://stackoverflow.com/questions/61230917/why-im-getting-stdbad-variant-access-with-stdvariant

## Content Target
- variant
- cout

## Cognitive Model
Recall

## Target Level
Level 4

## Item Type
Multiple Choice

## Stem
What is the output of the code snippet below?

## Code Snippet (optional)
```cpp
#include <iostream>
#include <variant>

int main()
{
    std::variant<std::string, int> variant;
    variant = "Man";
    std::cout << std::get<std::string>(variant) << std::endl;
    variant = 2;
    std::cout << std::get<std::string>(variant) << std::endl;
}
```

## Answer Key
```
Man
terminate called after throwing an instance of 'std::bad_variant_access'
```

## Distractors
### 1.
The code does not compile

### 2.
```
Man
2
```

### 3.
```
Man
```

## Common errors, misconceptions, or irrelevant information:
The code compiles normally, but when the user runs the binary generated, he/she gets this:
```cpp
Man
terminate called after throwing an instance of 'std::bad_variant_access'
  what():  Unexpected index
Aborted
```

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
