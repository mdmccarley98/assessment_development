# C++ Typedef Caviats

## Item ID
2499

## Claim
Claim 2

## Claim Behavior (evidence)
> The `typedef` in C/C++ is a keyword used to assign alternative names to the existing datatypes. It is mostly used with user-defined datatypes when the naming of the predefined datatypes becomes slightly complicated to use in programs.
> In C++11 and beyond, the `using` keyword when used for type alias is identical to typedef in almost all cases.

> In particular, alias declarations may be templatized (in which case they’re called alias templates), while typedefs cannot. This gives C++11 programmers a straightforward mechanism for expressing things that in C++98 had to be hacked together with typedefs nested inside templatized structs.

## Content Target
- template declaration
- typedef keyword
- using keyword

## Target Level
- Level 5

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Which of the following snippets of code will compile?

## Code Snippet (optional)

## Answer Key
```cpp
#include <iostream>
#include <map>
#include <type_traits>

template<typename EngineCoreType>
struct EngineCoreMap
{
    typedef std::map<long double, EngineCoreType> type; 
};

template<typename EngineCoreType>
class Car {
public: 
    Car(typename EngineCoreMap<EngineCoreType>::type engine_cores): engine_cores_(engine_cores) {std::cout << std::is_same<EngineCoreMap<int>::type, decltype(engine_cores)>::value << std::endl; }
private:
    typename EngineCoreMap<EngineCoreType>::type engine_cores_;
};

int main()
{
    EngineCoreMap<int>::type engine_cores = {{1.0, 1}, {2.0, 2}};
    Car<int> car(engine_cores);
}
```

## Distractors
### 1.
```cpp
#include <iostream>
#include <map>
#include <type_traits>

template<typename EngineCoreType>
struct EngineCoreMap
{
    typedef std::map<long double, EngineCoreType> type; 
};

template<typename EngineCoreType>
class Car {
public: 
    Car(EngineCoreMap<EngineCoreType>::type engine_cores): engine_cores_(engine_cores) {std::cout << std::is_same<EngineCoreMap<int>::type, decltype(engine_cores)>::value << std::endl; }
private:
    EngineCoreMap<EngineCoreType>::type engine_cores_;
};

int main()
{
    EngineCoreMap<int>::type engine_cores = {{1.0, 1}, {2.0, 2}};
    Car<int> car(engine_cores);
}
```

### 2.
```cpp
#include <iostream>
#include <map>
#include <type_traits>

template<typename EngineCoreType>
using EngineCoreMap = std::map<long double, EngineCoreType>; 

template<typename EngineCoreType>
class Car {
public: 
    Car(EngineCoreMap<EngineCoreType> engine_cores): engine_cores_(engine_cores) {std::cout << std::is_same<EngineCoreMap<int>, decltype(EngineCoreMap<EngineCoreType>)>::value << std::endl;}
private:
    EngineCoreMap<EngineCoreType> engine_cores_;
};

int main()
{
    EngineCoreMap<int> engine_cores = {{1.0, 1}, {2.0, 2}};
    Car<int> car(engine_cores);
}
```

### 3.
```cpp
#include <iostream>
#include <map>
#include <type_traits>

template<typename EngineCoreType>
using EngineCoreMap = std::map<long double, EngineCoreType>; 

template<typename EngineCoreType>
class Car {
public: 
    Car(EngineCoreMap<EngineCoreType> engine_cores): engine_cores_(engine_cores) {std::cout << std::is_same<EngineCoreMap<int>, decltype(engine_cores)>::value << std::endl; }
private:
    EngineCoreMap<EngineCoreType>::type engine_cores_;
};

int main()
{
    EngineCoreMap<int> engine_cores = {{1.0, 1}, {2.0, 2}};
    Car<int> car(engine_cores);
}
```

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - Code doesn't compile because `EngineCoreMap<EngineCoreType>::type engine_cores_` needs `typename` before it, since this `type` is a dependent type, in other words, is a type that depends on a template type parameter (`EngineCoreType`)
- Distractor 2
    -
    ```    
    example.cpp:11:167: error: argument to decltype must be an expression
       11 |     Car(EngineCoreMap<EngineCoreType> engine_cores): engine_cores_(engine_cores) {std::cout << std::is_same<EngineCoreMap<int>, decltype(EngineCoreMap<EngineCoreType>)>::value << std::endl;}
          |                                                                                                                                                                       ^
    ```
- Distractor 3
    - 
    ```
    example.cpp:13:5: error: need ‘typename’ before ‘EngineCoreMap<EngineCoreType>::type’ because ‘EngineCoreMap<EngineCoreType>’ is a dependent scope
       13 |     EngineCoreMap<EngineCoreType>::type engine_cores_;
          |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ```

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
