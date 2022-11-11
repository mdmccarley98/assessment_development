# Low Level: Deferred Increment


## Item ID
low-level-deferred-increment


## Claim

-   Claim/PI 4: The candidate displays a strong understanding of both C memory management and concurrency. They are comfortable reasoning about different theoretical approaches to low-level problems, and they also demonstrate the practical ability to implement and troubleshoot solutions in a low-level codebase.


## Claim Behavior (evidence)

> Another technique devised by Henry Baker involves deferred increments,[4] in which references which are stored in local variables do not immediately increment the corresponding reference count, but instead defer this until it is necessary. If such a reference is destroyed quickly, then there is no need to update the counter. This eliminates a large number of updates associated with short-lived references (such as the above list-length-counting example). However, if such a reference is copied into a data structure, then the deferred increment must be performed at that time. It is also critical to perform the deferred increment before the object's count drops to zero, resulting in a premature free.
-- https://en.wikipedia.org/wiki/Reference_counting


## Content Target
Multiple Choice


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
A performance consultant is examining a piece of code that may be responsible for slow performance.

They say:
"the references here used deferred increment and immediately decrement,
eliminating any updates to the count,
so I don't think there is a performance hit here"

What system are they talking about?

## Code Snippet (optional)



## Answer Key
Garbage Collection


## Distractors
### 1.
High Performance Timers


### 2.
Big O(n) vs O(n^n)


### 3.
Multi-Process Scaling


## Common errors, misconceptions, or irrelevant information:

The key is understanding they are talking about "reference counting", which is a technique of "garbage collection".

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

