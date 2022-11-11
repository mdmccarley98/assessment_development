# C++ Composite: string literal

## Item ID
1862

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.30, .50, .75, .85]

## Claim Behavior (evidence)
> The null character ('\0', L'\0', char16_t(), etc) is always appended to the string literal: thus, a string literal "Hello" is a const char[6] holding the characters 'H', 'e', 'l', 'l', 'o', and '\0'. 
>
> -- https://en.cppreference.com/w/cpp/language/string_literal

## Content Target
* string literal
* null-terminated strings

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem

What is the integer value of `name[10]` in the string below?

## Code Snippet (optional)

```cpp
auto name = "Triplebyte";
```

## Answer Key
* 0

## Distractors
### 1
* Undefined.

### 2
* 101

### 3
* 69

## Common errors, misconceptions, or irrelevant information:
The last character in a string literal is null terminated.  The null character `\0` has a value of 0.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
