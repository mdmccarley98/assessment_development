# C➕➕ - Set Binary Tree

## Item ID
2664

## Claim
Claim 2

## Claim Behavior (evidence)
> STL Containers 
> 
> https://www.cplusplus.com/reference/set/set/
> 
> A `set` is a container that stores elements that cannot be repeated and are stored in a specific order. `set` implements a binary search tree.

## Target Level
- Level 3

## Content Target
- `std::set`
- Binary Tree

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Andy implemented the data structure shown in the code below for university coursework. He could have used STL to avoid reinventing the wheel and save time. Which data structure from STL is most similar to the one Andy implemented and should have been used to achieve the same complexity on the operations Andy wanted?

## Code Snippet (optional)
```cpp
#include <iostream>
using namespace std;
 
class DataStruct {
    int data;
    DataStruct *a, *b;
 
public:    
    DataStruct();
    DataStruct(int);
    DataStruct* insert(DataStruct*, int);
    void traverse(DataStruct*);
};

DataStruct::DataStruct()
    : data(0)
    , a(nullptr)
    , b(nullptr)
{
}

DataStruct::DataStruct(int value)
{
    data = value;
    a = b = nullptr;
}


DataStruct* DataStruct::insert(DataStruct* c, int value)
{
    if (!c)
        return new DataStruct(value);    
    
    if (value > c->data)
        c->b = insert(c->b, value);    
    else if(value < c->data)
        c->a = insert(c->a, value);    
    else
        return nullptr;

    
    return c;
} 

void DataStruct::traverse(DataStruct* c)
{
    if (!c) {
        return;
    }
    traverse(c->a);
    cout << c->data << endl;
    traverse(c->b);
}

int main()
{
    DataStruct b, *c = nullptr;
    c = b.insert(c, 50);
    b.insert(c, 30);
    b.insert(c, 20);
    b.insert(c, 40);
    b.insert(c, 70);
    b.insert(c, 60);
    b.insert(c, 80);
 
    b.traverse(c);
    return 0;
}
```


## Answer Key
std::set

## Distractors
### 1.
std::unordered_set

### 2.
std::vector

### 3.
std::deque

## Common errors, misconceptions, or irrelevant information:
The structure implemented here is a binary search tree just with the operations of insert and inorder traversal.
- Distractor 1
    - unordered_set is implemented with a hash map
- Distractor 2
    - vector is an array
- Distractor 3
    - is also implemented with an indexed sequence container

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
