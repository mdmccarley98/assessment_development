# C++ Unique Ptr Deletion

## Item ID
2512

## Claim
Claim 2

## Claim Behavior (evidence)
> Ownership is all about who cleans up the resource when it is no longer needed.

To be the only owner of a resource means that only you are responsible for deleting the object when it is no longer needed. This implies that nobody else can use the object after your lifetime ended. If others depend on the object still being alive after your lifetime ended you need shared ownership.

In modern C++, raw pointers should not participate in ownership. When you pass a raw pointer to a function you expect that this function will not hold on to this pointer to use it later.

## Content Target
- unique_ptr
- pointer
- double free

## Target Level
- Level 3

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Select the TRUE statement about this code?

## Code Snippet (optional)
```cpp
#include <iostream>
#include <memory>

int main()
{
    auto ptr = std::unique_ptr<std::string>(new std::string("This string belongs to ptr"));

    std::string* ptr_2 = ptr.get();
    delete ptr_2;

    std::cout << *ptr << std::endl;
}
```

## Answer Key
Code will abort because a double free will be detected

## Distractors
### 1.
Code will not compile because `std::string* ptr_2 = ptr.get()` is not allowed

### 2.
Nothing is wrong with this code, and it will output `This string belongs to ptr`

### 3.
Code will not compile because the `get()` function from unique_ptr doesn't return the pointer

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - This operation is allowed. Because unique_ptr is known for unique ownership, it doesn't mean that the address it stores cannot go to another pointer. `unique_ptr` ownership means that the smart pointer who has it is responsible for its resource deallocation and that after its deletion, nobody can use that resource anymore.
- Distractor 2
    - As the answer says, the code has a double free error. If the `delete` line were not there, the code would print `This string belongs to ptr`.
- Distractor 3
    - get() does return the raw pointer.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
