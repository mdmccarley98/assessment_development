# C++ Decltype(Auto) Return

## Item ID
2510

## Claim
Claim 2

## Claim Behavior (evidence)
> Given a name or an expression, `decltype` tells you the name’s or the expression’s type. Typically, what it tells you is exactly what you’d predict. Occasionally however, it provides results that are really hard to predict.
> To better understand the behavior of `decltype(auto)` we need to provide an example where just `auto` is not sufficient.
> 
```cpp
template<typename Container, typename Index>   // C++14;
auto authAndAccess(Container& c, Index i)      // not quite
{                                              // correct
    authenticateUser();
    return c[i]; // return type deduced from c[i]
}
```

> Here the `auto` type deduction will be used and it will strip off the constness and referenceness from the type. Then, for some cases where we need something like
```cpp
std::deque<int> d;
…
authAndAccess(d, 5) = 10;
```

> this will not compile, since we would need `authAndAccess` to return a reference type. Because of this we have `decltype(auto)`, where `decltype` will not remove constness and referenceness.


## Content Target
- decltype
- auto

## Target Level
- Level 4

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Considering the specific implications of C++17, what is the output of the following code?

## Code Snippet (optional)
```cpp
#include <iostream>
#include <memory>

class Cellphone
{
public:
    virtual void myId(){std::cout << "I am a general cellphone" << std::endl;}
};

class Galaxy : public Cellphone
{
public:
    virtual void myId(){std::cout << "I am a Galaxy" << std::endl;}
};

class IPhone : public Cellphone
{
public:
    virtual void myId(){std::cout << "I am an IPhone" << std::endl;}
};

decltype(auto) makeCellphone(const int& type)
{
    auto cellphone_ptr = std::make_unique<Cellphone>();    
    if(type == 1)
    {
        cellphone_ptr.reset(new Galaxy());
    }
    if(type == 2)
    {
        cellphone_ptr.reset(new IPhone());
    }

    return cellphone_ptr;
}

int main()
{
    auto cellphone1 = makeCellphone(1);
    cellphone1->myId();
}
```

## Answer Key
"I am a Galaxy"

## Distractors
### 1.
Code doesn't compile because decltype(auto) is not known by C++

### 2.
Undefined Behavior

### 3.
Code doesn't compile because the return type cannot have two different types at the same time(`std::make_unique<Galaxy>` and `std::make_unique<IPhone>`)

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - Code compiles, but decltype(auto) is not well known among low-level people. It makes them think this is something that cannot ever be used. If they have never seen this, they can easily mark this option.
- Distractor 2
    - The same rationale used for Distractor 1 is used here.
- Distractor 3
    - Since `auto cellphone1` receives a type `std::make_unique<Cellphone>` the type is actually `std::make_unique<Cellphone>` not the ones mentioned in the Distractor 3. Since it has just this return type, then it makes it possible.
      If each cellphone_ptr would be `std::make_unique<Galaxy>` and `std::make_unique<IPhone>`, the function type would be the type of the first return inside the function, and then the other one would be an error caught during compilation.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
