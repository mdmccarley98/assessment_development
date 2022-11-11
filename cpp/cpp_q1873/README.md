# C➕➕ 4 Memory: stack vs heap

## Item ID
1873

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.20, .40, .65, .85]

## Claim Behavior (evidence)
>  The heap and the stacks are different parts of the memory of your computer that C++ can use to store data(variables, objects...). They are both parts of your RAM but store data in different ways. Data stored on the stack are accessible very quickly but the downside is that the stack has memory limits. If you store too much data on the stack it will result in a Stack Overflow.
> The heap is like a huge pool of memory. It is slower than the stack but its size is only limited by the amount of memory that the computer has access to. Data stored on the heap are typically larger and can stay there even after the program has stopped.
>
> -- JaSONSmall 5/14/2017
>
> Also, note with the STL, it stores it's data on the heap automatically, so there is no need for one to worry about explicitly putting it there with new One can do a lot just by using the STL. The other advantage is not having to manually doing your own memory management.
>
> -- TheIdeasMan 5/14/2017
> 
> -- http://www.cplusplus.com/forum/general/215646/

## Content Target
stack vs heap allocation

## Cognitive Model
Recall

## Item Type
* Multiple Choice
* possible matching

## Stem
Which of the following `Block` classes are allocated on the stack or heap?

## Code Snippet (optional)
```cpp
auto a = Block{};
auto b = new Block{};
auto c = std::unique_ptr<Block>();
auto d = std::make_shared<Block>();
auto e = std::weak_ptr<Block>(d);
```

## Answer Key
* a: stack
* b: heap
* c: heap
* d: heap
* e: heap

## Distractors
### 1.
* a: stack
* b: heap
* c: stack
* d: heap
* e: heap

### 2.
* a: stack
* b: heap
* c: heap
* d: stack
* e: heap

### 3.
* a: heap
* b: heap
* c: stack
* d: stack
* e: stack

## Common errors, misconceptions, or irrelevant information:
Local values are generally on the stack.  The stack is also generally a fixed size in memory when the program starts.  But the heap can extend basically to the amount of RAM in a system.  I say "generally" and "basically" because there are exceptions depending on hardware, operating systems, and compilers.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
