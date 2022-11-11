# C++ Composite: private constructor

## Item ID
1861

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.55, .75, .85, .99]

## Claim Behavior (evidence)
> If no user-declared constructors of any kind are provided for a class type (struct, class, or union), the compiler will always declare a default constructor as an inline public member of its class. 
> -- https://en.cppreference.com/w/cpp/language/default_constructor

## Content Target
* class
* default constructor
* private


## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
You're working on a thermostat control.  But the class below says it's "inaccessible".

What's wrong?


## Code Snippet (optional)
```cpp
class Thermostat {
    int settingC;

    Thermostat()
    {
        settingC = 21;
    }

    void update(int c)
    {
        settingC = c;
    }
};
```


## Answer Key
The constructor is private.

## Distractors
### 1.
The header is not included correctly.

### 2.
The `Thermostat()` function is missing a `void` return type.

### 3.
The members needs to be initialized using `Thermostat() : settingC(21)`


## Common errors, misconceptions, or irrelevant information:
Members of classes are `private` by default.  A class needs at least one public constructor to be created outside itself.

If the constructor was missing, then you could create an instance of Thermostat, but since it's been defined, and the 
default access specifier of class members is `private`, it's no longer accessible.

Note: Default ctors of classes have public access.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
