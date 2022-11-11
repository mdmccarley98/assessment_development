# C➕➕ OOP: polymorphism

## Item ID
1877

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.40, .50, .80, .90]

## Claim Behavior (evidence)
> A virtual member is a member function that can be redefined in a derived class, while preserving its calling properties through references. The syntax for a function to become virtual is to precede its declaration with the virtual keyword:
>
> https://www.cplusplus.com/doc/tutorial/polymorphism/


## Content Target
* polymorphism
* virtual


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem

The following C++ code prints:
```
square: 0
rect: 0
```

But this was expected:
```
square: 16
rect: 6
```

What needs to be done to make it work as expected?


## Code Snippet (optional)
```cpp
#include <iostream>

class Shape {
public:
    float area() { return 0.0f; }
};

class Square : public Shape {
public:
    float size;

    explicit Square(float size) : size(size) {}

    float area() {
        return size * size;
    }
};

class Rectangle : public Shape {
public:
    float width, height;

    Rectangle(float width, float height)
            : width(width), height(height) {
    }

    float area() {
        return width * height;
    }
};

int main() {
    Shape* square = new Square{ 4.0f };
    Shape* rect = new Rectangle{ 2.0f, 3.0f }

    std::cout << "square: " << square->area() << std::endl;
    std::cout << "rect: " << rect->area() << std::endl;

    return 0;
}
```

## Answer Key
* `Shape::area` needs to be virtual.


## Distractors
### 1.
* `Square::area` and `Rectangle::area` need to be virtual.


### 2.
* `Square::area` and `Rectangle::area` need to have the `override` keyword.


### 3.
* `Square` and `Rectangle` need to be marked as `friend` of `Shape`.


## Common errors, misconceptions, or irrelevant information:


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
