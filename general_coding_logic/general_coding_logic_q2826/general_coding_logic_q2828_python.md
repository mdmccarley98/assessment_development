# GCL: What is a lambda function

## Item ID
2828

## Claim
Claim 1

## Claim Behavior (evidence)
> In computer programming, an anonymous function (function literal, lambda abstraction, lambda function, lambda expression or block) is a function definition that is not bound to an identifier. Anonymous functions are often arguments being passed to higher-order functions or used for constructing the result of a higher-order function that needs to return a function.[1] If the function is only used once, or a limited number of times, an anonymous function may be syntactically lighter than using a named function. Anonymous functions are ubiquitous in functional programming languages and other languages with first-class functions, where they fulfil the same role for the function type as literals do for other data types.
> 
> Anonymous functions originate in the work of Alonzo Church in his invention of the lambda calculus, in which all functions are anonymous, in 1936, before electronic computers. [2] In several programming languages, anonymous functions are introduced using the keyword lambda, and anonymous functions are often referred to as lambdas or lambda abstractions. Anonymous functions have been a feature of programming languages since Lisp in 1958, and a growing number of modern programming languages support anonymous functions.

## Target Level 
1

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Choose the option that correctly describes the code snippet below.

## Code Snippet (optional)
```python
def f1(a):
    if a == 0:
        return 1
    return a * f1(a - 1)


f2 = lambda a, b: abs(2 * a - 3 * b)
print(f1(f2(2, 3)))
```

## Answer Key
f1 is a recursive function, and f2 is an anonymous function

## Distractors

### 1.
The output is 240

### 2.
This code doesn't work

### 3.
f1 and f2 are created through lambda expressions


## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - Output is 120
- Distractor 2
    - Code compiles
- Distractor 3
    - f1 does not receive a lambda expression

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
