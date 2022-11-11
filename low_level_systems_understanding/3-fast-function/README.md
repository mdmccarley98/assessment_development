# Low Level: Fast Function


## Item ID
low-level-fast-function


## Claim
-   Claim/PI 3: The candidate is well-versed in the basics of both C memory management and concurrency. They also display the ability to reason about trade-offs between different approaches to low-level problems and troubleshoot common issues. However, they may have some difficulty creating implementations from scratch.


## Claim Behavior (evidence)

```
By Ref: ..........
By Copy: ..........
By __stdcall: ..........
By Class __fastcall: ..........
Ref Time:0.0079189 seconds
Copy time:2.7896 second
__stdcall Time:2.68679 seconds
__fastcall class Time:2.57051 seconds
```
-- [./example.cpp](./example.cpp)


## Content Target
* performance
* references vs values
* pass by reference vs pass by value


## Cognitive Model
* Use


## Item Type
Multiple Choice


## Stem
Which of the following functions is faster?


## Code Snippet (optional)
```cpp
void ALongEnterpriseFunctionName(Object& objectPassedToFunction);

void B(Object b);

void __stdcall CStandardCall(Object s);

class Example {
public:
	void __fastcall DFastCall(Object f);
};
```


## Answer Key
```cpp
void ALongEnterpriseFunctionName(Object& objectPassedToFunction);
```

## Distractors
### 1.
```cpp
void __fastcall Example::DFastCall(Object f);
```


### 2.
```cpp
void __stdcall CStandardCall(Object s);
```


### 3.
```cpp
void B(Object b);
```


## Common errors, misconceptions, or irrelevant information:
The length of the function name doesn't matter, the names are removed by the linker unless they are exported.
__fastcall and __stdcall are red herings.

The real problem is passing a copy of the object in D1, D2 and D3 vs copying a reference to the object.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

