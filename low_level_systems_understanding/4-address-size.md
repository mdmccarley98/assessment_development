# Low Level: Address Size


## Item ID
low-level-address-size


## Claim
-   Claim/PI 4: The candidate displays a strong understanding of both C memory management and concurrency. They are comfortable reasoning about different theoretical approaches to low-level problems, and they also demonstrate the practical ability to implement and troubleshoot solutions in a low-level codebase.


## Claim Behavior (evidence)

> A program can use a contiguous range of virtual addresses to access a large memory buffer that is not contiguous in physical memory.
> ...
> Each user-mode process has its own private virtual address space. For a 32-bit process, the virtual address space is usually the 2-gigabyte range 0x00000000 through 0x7FFFFFFF. For a 64-bit process on 64-bit Windows, virtual address space is the 128-terabyte range 0x000'00000000 through 0x7FFF'FFFFFFFF.
>
> - https://docs.microsoft.com/en-us/windows-hardware/drivers/gettingstarted/virtual-address-spaces

https://unix.stackexchange.com/questions/509607/how-a-64-bit-process-virtual-address-space-is-divided-in-linux

> To implement virtual functions, C++ uses a special form of late binding known as the virtual table.
https://www.learncpp.com/cpp-tutorial/the-virtual-table/
[Distractor 2]



## Content Target
* pointers
* operating systems
* memory layout
* virtual addresses


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
When you run your program one time an object's pointer value is:
`0x0053461bef01`

Later when you run it again the same object's pointer value is:
`0x7fffdb3e5081`

You only have 32 GB of RAM on the system, but the pointers are 140 TB apart from each-other.

How is that possible?


## Code Snippet (optional)



## Answer Key
Virtual Address Spaces


## Distractors
### 1.
Direct Memory Access (DMA)


### 2.
Virtual Tables


### 3.
Weak Pointers


## Common errors, misconceptions, or irrelevant information:
Although DMA does [use virtual address spaces](https://docs.microsoft.com/en-us/windows-hardware/drivers/kernel/using-common-buffer-bus-master-dma
), it's not related to why user-mode application's addresses can be so far apart.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

