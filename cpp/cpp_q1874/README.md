# C➕➕ 5 OOP: abstract base class

## Item ID
1874

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.50, .75, .85, .95]

## Claim Behavior (evidence)
> A class that contains at least one pure virtual function is considered an abstract class.
> -- https://docs.microsoft.com/en-us/cpp/cpp/abstract-classes-cpp?view=msvc-160

## Content Target
* abstract base classes
* pure virtual functions

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
How do you make `Shape` an abstract base class?

## Code Snippet (optional)
```cpp
class Shape {
public:
    virtual float area() { return 0.0f; }
};

class Square : public Shape {
public:
    float size;

    explicit Square(float size) : size(size) {}

    float area() override {
        return size * size;
    }
};

class Rectangle : public Shape {
public:
    float width, height;

    Rectangle(float width, float height)
            : width(width), height(height) {
    }

    float area() override {
        return width * height;
    }
};
```

## Answer Key
```
    // ...
    virtual float area() = 0;
    // ...
```

## Distractors

### 1.
```
abstract class Shape {
    // ...
};
```

### 2.
```
class Shape {
private:
    Shape() {}
    // ...
};
```

### 3.
```
class Shape: Object {
    // ...
};
```

## Common errors, misconceptions, or irrelevant information:

C++/CLI defines `abstract`, but it's arguably not C++ but a Microsoft variant of C++ for .NET.
It's "managed" C++ on the .NET virtual machine.
https://docs.microsoft.com/en-us/cpp/extensions/abstract-cpp-component-extensions?view=msvc-160

Managed abstract classes have the `abstract` keyword at the end of the declaration, not the beginning.

Microsoft also supports standard C++:  https://docs.microsoft.com/en-us/cpp/cpp/abstract-classes-cpp?view=msvc-160

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
