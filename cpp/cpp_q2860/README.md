# C➕➕ - Move and Copy Ctor Calls

## Item ID
2860

## Claim
2

## Target Skill Level
3

## Claim Behavior (evidence)
The following code snippet has 3 push_back calls
```cpp
  vec.push_back(Car{ 1, "tesla x", "white" });
  vec.push_back(Car{ 2,  "prius", "blue"});
  vec.push_back(Car{ 3, "ferrari", "red" });
```

Each one calls Car ctor when constructing the parameter, and then the move constructor is called by `push_back`
-- https://en.cppreference.com/w/cpp/container/vector/push_back

after this, when the `push_back` operation finishes, the destructor is called for the temporary Car object.

But the code snippet in our question has one special feature, before the `push_back` calls, we have this line
```cpp
vec.reserve(2);
```

We are including 3 elements, but we reserved just 2 elements, considering the vector now has capacity = 2, as stated by the stem, 
additional memory is allocated and the contents of vec will be copied to this new location, showing that increasing the vector size 
after a `reserve` will be a costly operation due to the number of additional copies of the current elements that will be made.

-- https://en.cppreference.com/w/cpp/container/vector/reserve

What happens now is that, after the inclusion of 2 elements, we try to include a third one and a new reallocation is made because the size of 
the new vector is now greater than 2. With this reallocation the new element is created then a ctor call followed by a move ctor call are made, then after this, all elements from the original vector are copied to the new allocated space.

After this, program finishes and all vector elements are destroyed.

## Content Target
- move ctors
- copy ctors
- reserve

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
What is the output of the following code snippet considering that vec will have capacity equals 2 after the `reserve(2)` operation?

## Code Snippet (optional)
```cpp
#include <iostream>
#include <vector>
using namespace std;

class Car {
private:    
  int id_;
  std::string name_;
  std::string color_;

public:  
  Car(const int id, const std::string& name, const std::string& color)
    : id_(id), name_(name), color_(color)
  {
      cout << "ctor called " << id << endl;
  }; 
  
  Car(const Car& source)
    : id_(source.id_), name_(source.name_), color_(source.color_)
  {
    cout << "copy ctor called: " << id_ << endl;
  };

  Car(Car&& source)
    : id_(std::move(source.id_)), name_(std::move(source.name_)), color_(std::move(source.color_))
  {
    cout << "move ctor called: " << id_ << endl;
  };
    
  ~Car()
  {
    if (id_ != 0)
      cout << "destructor is called: " << id_ << endl;
    else
      cout << "destructor is called: no id" << endl;
  }
};
 
int main()
{    
  vector<Car> vec;
  vec.reserve(2);
  
  vec.push_back(Car{ 1, "tesla x", "white" });
  vec.push_back(Car{ 2,  "prius", "blue"});
  vec.push_back(Car{ 3, "ferrari", "red" });
  
  return 0;
}
```

## Answer Key
```
ctor called 1
move ctor called: 1
destructor is called: 1
ctor called 2
move ctor called: 2
destructor is called: 2
ctor called 3
move ctor called: 3
copy ctor called: 1
copy ctor called: 2
destructor is called: 1
destructor is called: 2
destructor is called: 3
destructor is called: 1
destructor is called: 2
destructor is called: 3
```

## Distractors
### 1.
```
ctor called 1
move ctor called: 1
destructor is called: 1
ctor called 2
move ctor called: 2
destructor is called: 2
ctor called 3
move ctor called: 3
destructor is called: 3
destructor is called: 1
destructor is called: 2
destructor is called: 3
```

### 2.
```
ctor called 1
move ctor called: 1
destructor is called: 1
ctor called 2
move ctor called: 2
copy ctor called: 1
destructor is called: 1
destructor is called: 2
ctor called 3
move ctor called: 3
copy ctor called: 1
copy ctor called: 2
destructor is called: 1
destructor is called: 2
destructor is called: 3
destructor is called: 1
destructor is called: 2
destructor is called: 3
```

### 3.
```
ctor called 1
move ctor called: 1
destructor is called: 1
ctor called 2
move ctor called: 2
destructor is called: 2
Segmentation fault (Core dumped)
```

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - Would happen if `vec.reserve(3)`
- Distractor 2
    - Should happen if `vec.reserve` line was erased
- Distractor 3
    - To confuse the candidate about the vec.reserve(2) pushing back 3 elements. This is a non-sense distractor, the code works fine.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
