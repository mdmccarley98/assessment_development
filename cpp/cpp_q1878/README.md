# C➕➕ OOP: templates

## Item ID
1878

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.40, .70, .80, .90]

## Claim Behavior (evidence)
> For example, to create a template function that returns the greater one of two objects we could use:
```cpp
template <class myType>
myType GetMax (myType a, myType b) {
    return ( a > b ? a : b );
}
```
-- http://www.cplusplus.com/doc/oldtutorial/templates/


## Content Target
* templates


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem

The following code has an error:
```log
example.cpp:9:5: error: no matching function for
      call to 'logln'
    logln(88);
    ^~~~~
```

Which answer fixes the code so it can print strings and integers?


## Code Snippet (optional)
```cpp
#include <iostream>

void logln(std::string message) {
    std::cout << message << std::endl;
}

int main() {
    logln("This is text");
    logln(88);
    return 0;
}
```


## Answer Key
```cpp
template <class T>
void logln(T message) {
    std::cout << message << std::endl;
}
```


## Distractors
### 1.
```cpp
template <class T>
class<T> {
    void logln<T>(T message) {
        std::cout << message << std::endl;
    }
};
```


### 2.
```cpp
void logln(T message) : (T: int, std::string) {
    std::cout << message << std::endl;
}
```


### 3.
```cpp
void logln(std::string<T> message) {
    std::cout << message << std::endl;
}
```


## Common errors, misconceptions, or irrelevant information:


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
