# C++ Basics class

## Item ID
1854

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.70, .80, .90, .95]

## Claim Behavior (evidence)
>     class Foo;  // forward declaration of a class
>     class Bar { // definition of a class
>      public:
>        Bar(int i) : m_i(i) {}
>      private:
>        int m_i;
>     };
> -- [C++ keywords: class](https://en.cppreference.com/w/cpp/keyword/class) - cppreference.com

## Content Target
* class
* class definitions

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

Why does example snippet below produce the following error?
```
use of undefined type 'System'
```

## Code Snippet (optional)
```cpp
class System;

System s = System();
```


## Answer Key
`System` was only declared.

## Distractors
### 1.
The keyword `new` needs to be used: `System s = new System();`

### 2.
`System` has no member functions or variables.

### 3.
It needs to use the list initializer: `System s = System{};`

## Common errors, misconceptions, or irrelevant information:

`class System;` is a forward declaration, not a definition.  In C++ definitions and declarations are important to understand as separate.  https://stackoverflow.com/questions/553682/when-can-i-use-a-forward-declaration

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
