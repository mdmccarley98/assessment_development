# GCL: Twin Recursion

## Item ID
2822

## Claim
2

## Claim Behavior (evidence)
This code in the snippet on the question has a slight bug that might confuse candidates.
The correct code in fact is:

```cpp
#include <iostream>

int recursion_a(const int num);
int recursion_b(const int num);

int recursion_a(const int num)
{    
    if(num == 0 || num > 1000) return num;    
    if(num > 0)
        return recursion_b((num+1)*(-1));
    return recursion_a(num+1);
}

int recursion_b(const int num)
{
    if(num == 0 || num < -1000) return num;
    if(num < 0)
        return recursion_a((num-1)*(-1));    
    return recursion_b(num-1);
}

int main()
{
    std::cout << recursion_a(100);
    std::cout << recursion_b(100);
    return 0;
}
```

Depending on the method you call and if the input is positive, negative, even, or odd, the behavior changes. Basically, in the "correct" version of the code:
- recursion_a
    - if positive, the number's _absolute value_ increases until it's greater than 1000
    - if negative, number goes to 0
    - if even, the output is negative
    - if odd, the output is positive
- recursion_b
    - if negative, the number's _absolute value_ increases until it's greater than 1000
    - if positive, number goes to 0
    - if even, the output is positive
    - if odd, the output is negative

But the code in the snippet differs on line 28 `if num == 0 or num > 1000:`, making `recursion_b` 
receive a negative number less than -1000 and still continue to grow the module of the number until `recursion_a` returns `1002`, instead of `-1001`.

## Target Level 
4

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is the output of the code snippet below?

## Code Snippet (optional)
```cpp
#include <iostream>

int recursion_a(const int num);
int recursion_b(const int num);

int recursion_a(const int num)
{
    if(num == 0 || num > 1000) return num;
    if(num > 0)
        return recursion_b((num+1)*(-1));
    return recursion_a(num+1);
}

int recursion_b(const int num)
{
    if(num == 0 || num > 1000) return num;
    if(num < 0)
        return recursion_a((num-1)*(-1));
    return recursion_b(num-1);
}

int main()
{
    std::cout << recursion_a(100);
    std::cout << recursion_b(100);
    return 0;
}
```

## Answer Key
`10020`

## Distractors

### 1.
`10010`

### 2.
`01002`

### 3.
`10011001`

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - Never happens, should happen just if code was corrected and
    ```cpp
    std::cout << std::abs(recursion_a(100));
    std::cout << recursion_b(100);
    ```
- Distractor 2
    - if the code was swapped in `main`
    ```cpp
    std::cout << recursion_b(100);
    std::cout << recursion_a(100);
    ```
- Distractor 3
    - Also never happens, should happen just if code was correct and
    ```cpp
    std::cout << std::abs(recursion_a(100));
    std::cout << std::abs(recursion_a(100));
    ```

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
