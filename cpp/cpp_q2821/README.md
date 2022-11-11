# C➕➕ Lambda Esoteric

## Item ID
2821

## Claim
2

## Claim Behavior (evidence)
> For every parameter in params whose type is specified as auto, an invented template parameter is added to template-params, in order of appearance. The invented template parameter may be a parameter pack if the corresponding function member of params is a function parameter pack.
> I is then correct in the Stem.
>
> Since C++17, if auto is used as a type of a parameter or an explicit template parameter list is provided (since C++20), the lambda is a generic lambda.
> III is then correct.

-- https://en.cppreference.com/w/cpp/language/lambda

## Target Level
5

## Content Target
- Lambda expressions
- operator()

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Consider the following statements about the code snippet:
<br>
I) `[](auto a, auto&& b) { return a < b; };`, for every parameter here an invented template parameter is added to template params, in order of appearance
<br>
II) Output of this code is `113.14`
<br>
III) This code doesn't compile because parameter packs as lambda function parameters are not allowed
<br>
IV) Because auto is used as the type for the params of the lambda expressions, the lambda is a generic lambda
<br><br>
Choose the answer option that includes only the TRUE statements.

## Code Snippet (optional)
```cpp
#include <iostream>

int main()
{
    auto glambda = [](auto a, auto&& b) { return a < b; };
    bool b = glambda(3, 3.14);    
    
    auto vglambda = [](auto printer)
    {
        return [=](auto&&... ts)
        { 
            printer(std::forward<decltype(ts)>(ts)...);
            return [=] { printer(ts...); }; 
        };
    };
    auto p = vglambda([](auto v1, auto v2, auto v3) { std::cout << v1 << v2 << v3 << std::endl; });
    auto q = p(1, b, 3.14); // outputs 1a3.14
    q();       
}
```

## Answer Key
I and IV

## Distractors
### 1.
II and III

### 2.
I and II

### 3.
II and IV

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - II is wrong because the output is
    ```
    113.14
    113.14
    ```
- Distractor 2
    - Also wrong because II is wrong. III is completely wrong, you can use parameter packs in a lambda function.
- Distractor 3
    - III is wrong.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
