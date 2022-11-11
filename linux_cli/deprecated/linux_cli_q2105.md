# Linux CLI 3 vmstat

## Item ID
2105

## Claim
Claim 3

## Threshold Probabilities
[0.05, 0.20, 0.30, 0.50]

## Claim Behavior (evidence)
> si, so: Swap-ins and swap-outs. If these are non-zero, you're out of memory.
>
> -- https://netflixtechblog.com/linux-performance-analysis-in-60-000-milliseconds-accc10403c55

Steps to reproduce on machine with 16g of RAM:
```
sudo mount -t tmpfs tmpfs /mnt/big -o size=16g
fallocate -l 16g /mnt/big/f16.data
vmstat 1
sudo umount /mnt/big
```

## Content Target
Troubleshooting

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
The following is printed by `vmstat 1`, what issue does this indicate?

## Code Snippet (optional)
```
procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 2  0 2097148 151968  13068 14952012   44   44 312106    44 15228 31867  0 18 76  6  0
 1  2 2097148 165000  11712 14939020    0    0 260309     0 11504 23421  0 14 83  2  0
 5  0 2097148 169348   8756 14937100    0    0 315461     0 14982 30643  1 17 78  4  0
 2  0 2097132 168252   9824 14936872  184   84 358915    84 16553 34355  1 19 76  4  0
 1  3 2097148 166212   9624 14938112    0   16 348547    16 16078 34285  1 18 78  3  0
```

## Answer Key
The system is out of memory.

## Distractors
### 1.
A system process is causing a high amount of I/O.

### 2.
A user program is saturating 78% of the CPU. 

### 3.
The Virtual Machine is being under utilized.

## Common errors, misconceptions, or irrelevant information:

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)