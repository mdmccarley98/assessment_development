# Low Level: Memory Speed


## Item ID
low-level-3-memory-speed


## Claim
-   Claim/PI 3: The candidate is well-versed in the basics of both C memory management and concurrency. They also display the ability to reason about trade-offs between different approaches to low-level problems and troubleshoot common issues. However, they may have some difficulty creating implementations from scratch.


## Claim Behavior (evidence)

- https://en.wikipedia.org/wiki/List_of_Intel_processors
- https://www.hardwaretimes.com/difference-between-l1-l2-and-l3-cache-how-does-cpu-cache-work/

## Content Target
memory types


## Cognitive Model
Use


## Item Type
* Multiple Choice
* order list potentially


## Stem
You have a 100x100 grid of 32 bit integers that requires heavy processing between each cell in the grid.

All of the following types of memory are available to the algorithm.
Which type will hold the entire grid and process the data the fastest.

* DDR4
* SSD
* AVX-512 SIMD
* HDD
* L3 Cache

## Code Snippet (optional)



## Answer Key
* L3 Cache


## Distractors
### 1.
* AVX-512 SIMD


### 2.
* DDR4


### 3.
* SSD


## Common errors, misconceptions, or irrelevant information:
100 * 100 * 32 bits = 40 kilobytes
AVX-512 is 32 * 512 bits = 16 kilobytes

AVX-512 SIMD is included from 2017 Core-X Skylake processors with a minimum of 8.25mb L3 cache.
Even without knowing SIMD sizes, a 1997 Pentium II has 512kb of L2 cache which is more than enough room.

Instead of saying "SIMD" and betting Intel/AMD don't make some future AVX-1024, we specified which SIMD spec to limit it at 16k.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
