# Low Level: double pointer


## Item ID
low-level-double-pointer


## Claim
-   Claim/PI 4: The candidate displays a strong understanding of both C memory management and concurrency. They are comfortable reasoning about different theoretical approaches to low-level problems, and they also demonstrate the practical ability to implement and troubleshoot solutions in a low-level codebase.


## Claim Behavior (evidence)

> In C++, you can pass by reference, and you do that when you want modifications of the parameter to affect the argument which the caller passed in. That is, passing by reference represents an out or in/out parameter.
> You pass a pointer if the function wants a pointer (obviously), or if you want to signify an optional output parameter - since a reference always has to bind to something, but a pointer can be null.
https://stackoverflow.com/questions/22345628/when-to-pass-a-pointer-to-pointer-as-argument-to-functions-in-c

## Content Target
* pointers


## Cognitive Model
* Use


## Item Type
Multiple Choice


## Stem
Which could be the purpose of using a pointer to a pointer as a function parameter?


## Code Snippet (optional)
```cpp
void Example(Object** ptrptr);
```


## Answer Key
To make `ptrptr` an optional output parameter.


## Distractors
### 1.
To prevent copying the referenced `Object` data.


### 2.
To ensure the `Object` data is on the heap instead of the stack.


### 3.
To make sure `ptrptr` is bound to an actual instance and not `nullptr`.


## Common errors, misconceptions, or irrelevant information:



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
