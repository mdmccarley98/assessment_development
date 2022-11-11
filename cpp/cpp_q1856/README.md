# C++ Basics - switch

## Item ID
1856

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.50, .65, .80, .90]

## Claim Behavior (evidence)
```
1-basics-switch\cmake-build-debug>example
orangeyellow

1-basics-switch\cmake-build-debug>key
orange

1-basics-switch\cmake-build-debug>distractor1
orangeyellow

1-basics-switch\cmake-build-debug>distractor2
yellow
```
-- [example.cpp](./example.cpp) - [key.cpp](./key.cpp) - [distractor1.cpp](./distractor1.cpp) - [distractor2.cpp](./distractor2.cpp)


```cpp
enum Color { red, green, blue };
Color r = red;
switch(r)
{
    case red  : std::cout << "red\n";   break;
    case green: std::cout << "green\n"; break;
    case blue : std::cout << "blue\n";  break;
}
```
-- https://en.cppreference.com/w/cpp/language/enum


## Content Target
* `switch`
* `break`
* `enum`

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
Your colleague is writing a function to turn an `enum` into a `string`.

After this C++ snippet has executed, `text` is `"orangeyellow"`.

How do they fix it?

## Code Snippet (optional)
```cpp
enum Color { RED, ORANGE, YELLOW };
Color c = ORANGE;
std::string text;
switch (c)
{
    case RED: text += "red";
    case ORANGE: text += "orange";
    case YELLOW: text += "yellow";
}
```


## Answer Key
They should add a `break` to prevent fall through.

## Distractors

### 1.
They should add curly braces: `{ text += "orange"; }`

### 2.
They should remove the `+=` which will make `text` just `"orange"`.

### 3.
The value `c` is evaluated as an `int` so `ORANGE`'s value is off by one.

## Common errors, misconceptions, or irrelevant information:
In C++ case statements fall through by default.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
