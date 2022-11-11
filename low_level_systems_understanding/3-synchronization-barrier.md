# Low Level: Synchronization Barrier


## Item ID
low-level-synchronization-barrier


## Claim
-   Claim/PI 3: The candidate is well-versed in the basics of both C memory management and concurrency. They also display the ability to reason about trade-offs between different approaches to low-level problems and troubleshoot common issues. However, they may have some difficulty creating implementations from scratch.


## Claim Behavior (evidence)

> The three main components of this are: (1) dma-buf, representing a sg_table and exposed to userspace as a file descriptor to allow passing between devices, (2) **fence**, which provides a mechanism to signal when one device as finished access, and (3) reservation, which manages the shared or exclusive fence(s) associated with the buffer.
> ...
> To support cross-device and cross-driver synchronization of buffer access implicit **fences** (represented internally in the kernel with struct fence) can be attached to a dma_buf. 
- https://www.kernel.org/doc/html/v4.13/driver-api/dma-buf.html?highlight=synchronize

> Each DMA buffer submitted to the GPU contains a fence identifier.
- https://docs.microsoft.com/en-us/windows-hardware/drivers/display/submitting-a-command-buffer

> A memory barrier (also known as a fence) is a hardware operation, which ensures the ordering of different reads and writes to the globally visible store.
- https://stackoverflow.com/a/10552953/92584


## Content Target
* synchronization
* memory
* drivers


## Cognitive Model
Recall


## Item Type
Multiple Choice


## Stem
This barrier synchronizes access to memory:


## Code Snippet (optional)



## Answer Key
A fence.


## Distractors
### 1.
A context object.


### 2.
The LSM.


### 3.
The GPO.


## Common errors, misconceptions, or irrelevant information:
1. a context is a generic concept, and not related to memory synchronization
2. the Linux Security Module provides "access", but is not related to synchronization.
3. the Group Policy Object secures "access" to system resources, but is not related to synchronization.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

