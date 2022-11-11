# C++ Basics - virtual functions

## Item ID
1858

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.45, .60, .80, .90]

## Claim Behavior (evidence)
> a call to an overridden virtual function would invoke the behavior defined in the derived class. Such a function call is known as virtual function call or virtual call.
> -- https://en.cppreference.com/w/cpp/language/virtual

## Content Target
virtual

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
The `Animal` and `Cat` classes below use `virtual` functions.

```cpp
class Animal {
public:
    virtual std::string name() {
        return "animal";
    }
    std::string noise() {
        return "aaa";
    }
};

class Cat: public Animal {
public:
    std::string name() override {
        return "cat";
    }
    virtual std::string noise() {
        return "meow";
    }
};
```

What is printed when the following code is run?

```cpp
Cat cat;
Animal& animal = cat;
std::cout << "The " << cat.name() << " says: " << cat.noise() << std::endl;
std::cout << "The " << animal.name() << " says: " << animal.noise() << std::endl;
```

## Code Snippet (optional)

## Answer Key
```
The cat says: meow
The cat says: aaa
```

## Distractors

### 1.
```
The cat says: meow
The cat says: meow
```

### 2.
```
The cat says: meow
The animal says: aaa
```

### 3.
```
The cat says: aaa
The animal says: meow
```


## Common errors, misconceptions, or irrelevant information:
A call to a virtual function, uses the derived version of the function.  Cat is the derived class.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
