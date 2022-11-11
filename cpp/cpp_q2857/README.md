# C➕➕ - Semaphore Bug

## Item ID
2857

## Claim
1

## Target Level
4

## Claim Behavior (evidence)
> In computer science, a semaphore is a variable or abstract data type used to control access to a common resource by multiple threads and avoid critical section problems in a concurrent system such as a multitasking operating system. Semaphores are a type of synchronization primitives. A trivial semaphore is a plain variable that is changed (for example, incremented or decremented, or toggled) depending on programmer-defined conditions.
> A useful way to think of a semaphore as used in a real-world system is as a record of how many units of a particular resource are available, coupled with operations to adjust that record safely (i.e., to avoid race conditions) as units are acquired or become free, and, if necessary, wait until a unit of the resource becomes available.

-- https://en.wikipedia.org/wiki/Semaphore_(programming)

## Content Target
- semaphore

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
Consider this code snippet:

```cpp
// This code doesn't work
#include <atomic>
#include <iostream>
#include <mutex>

struct Semaphore {
    int size;
    std::atomic<int> count = 0;
    std::mutex updateMutex;

    Semaphore(int n) : size(n) { count.store(0); }

    void aquire() {
        while (1) {
            std::lock_guard<std::mutex> lock(updateMutex);
            while (count >= size) {}
            if (count >= size) {
                updateMutex.unlock();
                continue;
            }
            ++count;
            break;
        }
    }

    void release() {
        std::lock_guard<std::mutex> lock(updateMutex);
        if (count > 0) {
            --count;
        }
    }
};
```

Now, consider the following statements about the code snippet:
<br><br>
I) `acquire` function has a bug and can be stuck on `while (count >= size) {}` forever, no matter what happens next.
<br>
II) `release` function does not decrease the counter.
<br>
III) This semaphore allows more than `n` threads to use the resources.
<br><br>
Which statements are TRUE?

## Code Snippet (optional)

## Answer Key
None of them 

## Distractors
### 1.
I

### 2.
II

### 3.
III and I

## Common errors, misconceptions, or irrelevant information:
- Distractor 1:
    - I is false because `while (count >= size) {}` finishes when `count >= size` since count can be decreased when other threads call release.
- Distractor 2:
    - II is just wrong, for obvious reasons.
- Distractor 3:
    - III is false because the maximum allowed thread number to use the resources is `n`. More than this and you stay in busy waiting. I is false as explained in Distractor 1.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
