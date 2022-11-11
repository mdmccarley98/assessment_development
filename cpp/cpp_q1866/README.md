# C➕➕ 3 Standard: cout operator

## Item ID
1866

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.45, .75, .90, .99]

## Claim Behavior (evidence)
> To get `cout` to accept a `Date` object after the insertion operator, overload the insertion operator to recognize an `ostream` object on the left and a `Date` on the right. The overloaded `<<` operator function must then be declared as a `friend` of `class Date` so it can access the private data within a `Date` object.  
-- https://docs.microsoft.com/en-us/cpp/standard-library/overloading-the-output-operator-for-your-own-classes?view=msvc-160

-- https://stackoverflow.com/questions/13861235/converting-class-to-string

-- https://stackoverflow.com/questions/33357480/is-there-a-standard-way-to-convert-a-class-to-a-string

## Content Target
* `std::cout`
* `std::ostream &operator<<`

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
You have the following 2D Point class, and you want to use it with `std::cout`.

How do you make Point work with `cout` like this:
```cpp
auto p = Point { 1.1f, 3.0f };
std::cout << p << std::endl;
```

so that it prints this?
```
Point(x: 1.1, y: 3)
```

## Code Snippet (optional)
```cpp
#include <iostream>

class Point {
public:
float x, y;

    Point(float x, float y)
            : x(x), y(y) {
    }
};
```


## Answer Key
Add a `<<` operator:
```cpp
    friend std::ostream &operator<<(std::ostream &os, const Point &p) {
        os << "Point(x: " << p.x << ", y: " << p.y << ")";
        return os;
    }
```

## Distractors

### 1.
Add a `std::string` conversion operator to `Point`:
```cpp
    operator std::string() const {
        std::stringstream s;
        s << "Point(x: " << x << ", y: " << y << ")";
        return s.str();
    }
```


### 2.
Add a `toString` function to `Point`:
```cpp
    std::string toString() const
    {
        std::stringstream s;
        s << "Point(x: " << x << ", y: " << y << ")";
        return s.str();
    }
```


### 3.
Add a `string()` function to `Point`:
```cpp
    std::string string() const
    {
        std::stringstream s;
        s << "Point(x: " << x << ", y: " << y << ")";
        return s.str();
    }
```


## Common errors, misconceptions, or irrelevant information:
* The standard library doesn't use reflection to look for a `toString` function.
* C++11 and C++20 compilers (tested MSVC and gcc) don't automatically convert a class that implements `operator std::string` when using the `<<` operator.  But the following would work with an `operator std::string`:
```cpp
std::string s = p;
std::cout << s << std::endl;
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
