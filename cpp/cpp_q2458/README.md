# C++ Constructor Destructor Call Order

## Item ID
2458

## Claim
Claim 1

## Claim Behavior (evidence)
> Constructors are always called in this specific order:
> - First, and only for the constructor of the most derived class, virtual base classes are initialized in the order they appear on a depth-first left-to-right traversal of the directed acyclic graph of base classes, where “left-to-right” is the order of appearance of the base classes in the derived class base-specifier-list..
> - Then, direct base classes are initialized in declaration order as they appear in the base-specifier-list (regardless of the order of the mem-initializers).
> - Then, non-static data members are initialized in the order they were declared in the class definition (again regardless of the order of the mem-initializers).
> - Finally, the compound-statement of the constructor body is executed.
-- https://timsong-cpp.github.io/cppwp/n4659/class.base.init#13
>
> Destructors are called following the rules specified in https://timsong-cpp.github.io/cppwp/n4659/class.dtor#9

## Content Target
- constructor
- destructor
- inheritance

## Target Level
Level 3

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
What is output of the code below?

## Code Snippet (optional)
```cpp
#include <iostream>

class Vehicle
{
public:
  Vehicle()
  { 
    std::cout << "Creating Vehicle" << std::endl; 
  }
  ~Vehicle()
  {
    std::cout << "Destroying Vehicle" << std::endl; 
  }
};

class Carrier
{
public:
  Carrier()
  {
    std::cout << "Creating Carrier" << std::endl; 
  }
  ~Carrier() 
  { 
    std::cout << "Destroying Carrier" << std::endl;
  }
};

class Truck: public Vehicle, public Carrier 
{
public:
  Truck() 
  { 
    std::cout << "Creating Truck" << std::endl;
  }
  ~Truck() 
  { 
    std::cout << "Destroying Truck" << std::endl;
  }
};

int main() 
{ 
  Truck t;  
}
```

## Answer Key
```
Creating Vehicle
Creating Carrier
Creating Truck
Destroying Truck
Destroying Carrier
Destroying Vehicle
```

## Distractors
### 1.
```
Creating Truck
Creating Vehicle
Creating Carrier
Destroying Carrier
Destroying Vehicle
Destroying Truck
```

### 2.
```
Creating Carrier
Creating Vehicle
Creating Truck
Destroying Truck
Destroying Vehicle
Destroying Carrier
```

### 3.
```
Creating Vehicle
Creating Carrier
Creating Truck
Destroying Vehicle
Destroying Carrier
Destroying Truck
```

## Common errors, misconceptions, or irrelevant information:
- The most common error the candidate can make is thinking that the constructor of the child class is called before the parent class. Another mistake is to also think that, inside the base-specifier list, the calling order is the opposite of the correct one. Then, the last distractor is for someone that is distracted and just thinks that the order for the destructors are the same for the constructors.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
