# General Coding Logic - Logical Expression Reduction

## Item ID
2853

## Claim
1: `programming_logic`

## Claim Behavior (evidence)
> The outptut of the expression in the code is 
```
0 0 0: 1 
0 0 1: 1 
0 1 0: 1 
0 1 1: 1 
1 0 0: 1 
1 0 1: 0 
1 1 0: 1 
1 1 1: 0
```

## Target Skill Level
1

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Which other expression can substitute `expr` and result in the same output?

## Code Snippet (optional)
```cpp
#include <iostream>

int main()
{
    bool is_car, has_spoiler, is_lowered;
    for(uint8_t i=0; i < 8; i++)
    {
        is_car = i & 1;
        has_spoiler = i & 2;
        is_lowered = i & 4;
        
        bool expr = ((!is_car && !has_spoiler) || (!is_car || !is_lowered));

        std::cout << is_lowered << " " << has_spoiler << " " << is_car << ": " 
                  << expr << std::endl;
    }
}
```

## Answer Key
```cpp
!(is_car && is_lowered)
```

## Distractors
### 1.
```cpp
(!is_car && is_lowered) || has_spoiler
```

### 2.
```cpp
(is_car && has_spoiler) || (is_car || !is_lowered)
```

### 3.
```cpp
(is_car && has_spoiler)
```

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - Output is 
    ```
    0 0 0: 0
    0 0 1: 0
    0 1 0: 1
    0 1 1: 1
    1 0 0: 1
    1 0 1: 0
    1 1 0: 1
    1 1 1: 1
    ```
- Distractor 2
    - Output is
    ```
    0 0 0: 1
    0 0 1: 1
    0 1 0: 1
    0 1 1: 1
    1 0 0: 0
    1 0 1: 1
    1 1 0: 0
    1 1 1: 1
    ```
- Distractor 3
    - Output is
    ```
    0 0 0: 0
    0 0 1: 0
    0 1 0: 0
    0 1 1: 1
    1 0 0: 0
    1 0 1: 0
    1 1 0: 0
    1 1 1: 1
    ```

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
