# C➕➕ Overriding Advanced

## Item ID
2494

## Claim
Claim 1

## Claim Behavior (evidence)
> Overriding is word in C++ that specifies when a function that belongs to a base class is being overridden by another one with the same signature in the derived class.
This is useful in order to have specialized behavior in the derived class without changing the function signature, thus causing polimorphism to happen during runtime, which
is a huge advantage when programming objects that can turn several things depending of the env conditions.

>
> -- https://en.cppreference.com/w/cpp/language/override

## Content Target
- overriding
- inheritance

## Target Level
Level 3

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Which of the following statements is TRUE about the snippet below?

## Code Snippet (optional)
```cpp
#include <iostream>

class Base {
public:
    virtual void override(){std::cout << "override func Base" << std::endl;};
    virtual void f1(int x){std::cout << "f1" << " " << x << " func Base" << std::endl;};
    virtual void f2() &{std::cout << "f2 func Base" << std::endl;};
    void f3() const{std::cout << "f3 func Base" << std::endl;};
};
class Derived: public Base {
public:
    void override() override{std::cout << "override func Derived" << std::endl;};
    void f1(int x) override{std::cout << "f1" << " " << x << " func Derived" << std::endl;};
    void f2() &&{std::cout << "f2 func Derived" << std::endl;};
    void f3() const{std::cout << "f3 func Derived" << std::endl;};
};

int main()
{
    Derived d;
    d.f1(3);
    d.f2();
    d.f3();
    d.override();
}
```

## Answer Key
None of the other options are true

## Distractors
### 1.
The code outputs the following:
```
f1 3 func Derived
f2 func Derived
f3 func Derived
override func Derived
```

### 2.
The code doesn't compile because override is a reserved word and cannot be used as a function name.

### 3.
The code outputs the following:
```
f1 3 func Derived
f2 func Base
f3 func Derived
override func Derived
```

## Common errors, misconceptions, or irrelevant information:
- Distractor 1:
    - This code is output'd if instead of `d.f2();` we would have `std::move(d).f2();`, since f2 is a function that can be called just by rvalues
- Distractor 2:
    - override can be used normally as a function name
- Distractor 3:
    - Also wrong, since this doesn't even compile and, as said in distractor 1, `std::move(d).f2();` would actually print what distractor 1 prints

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
