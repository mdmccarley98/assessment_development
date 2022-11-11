# C➕➕ Smart Pointer Destructors

## Item ID
2513

## Claim
Claim 2

## Claim Behavior (evidence)
> Custom deleters are a way that C++ has to call destructors to do more than just deallocate the object from memory.
> The user might want to make a log, print something on the screen, terminate a connection and so on.
> With this, this custom deletion can be done in a way that, if implemented correctly, makes the code cleaner for people that will use your API.

-- https://www.cppstories.com/2016/04/custom-deleters-for-c-smart-pointers/

## Target Level
Level 5

## Content Target
- smart pointers
- destructors
- operator <<

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
Which one of the following code snippets compiles?

## Code Snippet (optional)

## Answer Key
```cpp
#include <iostream>
#include <memory>

class A
{
public:    
    friend std::ostream& operator<<(std::ostream& os, const A& a);        
};

std::ostream& operator<<(std::ostream& os, const A& a)
{
    os << "This IS class A";
    return os;
}

int main()
{
    auto deleteA = [](A* a) { delete a; };
    
    std::unique_ptr<A, decltype(deleteA)> a_ptr(new A(), deleteA);
    std::cout << *a_ptr << std::endl;
}
```

## Distractors

### 1.
```cpp
#include <iostream>
#include <memory>

class A
{
public:    
    std::ostream& operator<<(std::ostream& os, const A& a);
};

std::ostream& operator<<(std::ostream& os, const A& a)
{
    os << "This IS class A";
    return os;
}

int main()
{   
    std::shared_ptr<A> a_ptr(new A(), [](A* a){delete a;});
    std::cout << *a_ptr << std::endl;
}
```

### 2.
```cpp
#include <iostream>
#include <memory>

class A
{
public:    
    friend std::ostream& operator<<(std::ostream& os, const A& a);        
};

std::ostream& operator<<(std::ostream& os, const A& a)
{
    os << "This IS class A";
    return os;
}

int main()
{
    auto deleteA = [](A* a) { delete a; };
    
    std::unique_ptr<A> a_ptr(nullptr, deleteA);
    std::cout << *a_ptr << std::endl;
}
```

### 3.
```cpp
#include <iostream>
#include <memory>

class A
{
public:    
    friend std::ostream& operator<<(std::ostream& os, const A& a);        
};

std::ostream& operator<<(std::ostream& os, const A& a)
{
    os << "This IS class A";
    return os;
}

int main()
{
    auto deleteA = [](A* a) { delete a; };
    
    std::shared_ptr<A, decltype(deleteA)> a_ptr(nullptr, deleteA);
    std::cout << *a_ptr << std::endl;
}
```

## Common errors, misconceptions, or irrelevant information:
For the code to compile, the `operator<<` has to be implemented as a friend function because the second argument takes the class itself. 
The second remark here is that unique_ptr and shared_ptr declarations differ when specifying the type inside the <>.
For `unique_ptr`, you need to specify the type for the destructor in the template arguments; for `shared_ptr`, you don't need to do this.

So 
- Distractor 1
    - Doesn't have the `friend` specifier for `std::ostream& operator<<(std::ostream& os, const A& a);`
- Distractor 2
    - `std::unique_ptr<A>` is wrong, it should be `std::unique_ptr<A, decltype(deleteA)>`
- Distractor 3
    - `std::shared_ptr<A, decltype(deleteA)>` is wrong, should be `std::shared_ptr<A>`

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
