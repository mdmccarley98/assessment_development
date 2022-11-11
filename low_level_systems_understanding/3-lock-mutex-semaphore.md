# Low Level: lock mutex semaphore


## Item ID
low-level-lock-mutex-semaphore


## Claim
-   Claim/PI 3: The candidate is well-versed in the basics of both C memory management and concurrency. They also display the ability to reason about trade-offs between different approaches to low-level problems and troubleshoot common issues. However, they may have some difficulty creating implementations from scratch.


## Claim Behavior (evidence)

> * A lock (or mutex) has two states (0 or 1). It can be either unlocked or locked. They're often used to ensure only one thread enters a critical section at a time.
> * A semaphore has many states (0, 1, 2, ...). It can be locked (state 0) or unlocked (states 1, 2, 3, ...). One or more semaphores are often used together to ensure that only one thread enters a critical section precisely when the number of units of some resource has/hasn't reached a particular value (either via counting down to that value or counting up to that value).
https://stackoverflow.com/questions/2332765/lock-mutex-semaphore-whats-the-difference


## Content Target
* concurrency - threads and locks


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
Ensuring only one thread can enter a critical section is an important part of multi-threaded programming.
What are the basic differences between a lock, mutex, and a semaphore?


## Code Snippet (optional)


## Answer Key
* A **lock** and a **mutex** can be either locked or unlocked, allowing only one thread access.
* A **semaphore** can be multiple states, 0, 1, 2, 3, ..., allowing thread access when a particular value is reached.


## Distractors
### 1.
* A **lock** can be either locked or unlocked.
* A **mutex** allows multiple threads to read and write data simultaneously.
* A **semaphore** allows multiple threads readonly access to data simultaneously.


### 2.
* A **lock** prevents all threads from accessing data while the OS is updating the value.
* A **mutex** makes data immutable, preventing race conditions.
* A **semaphore** provides atomic access to data, for example an integer to add or subtract 1 in multiple threads.


### 3.
* A **lock** makes data immutable, preventing race conditions.
* A **mutex** makes immutable data mutable.
* A **semaphore** spawns multiple threads and synchronizes them to join them later.


## Common errors, misconceptions, or irrelevant information:
1. Mutexes and semaphores don't directly control readonly or read write access, but instead control thread execution.

2. Locks and Mutexes allow a single thread to access a critical section.  Mutexes don't directly have to do with mutability.  Semaphores and atomic access are different things.

3. Locks and Mutexes don't directly have to do with mutability.  Semaphores don't directly have to do with creating or joining threads.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
