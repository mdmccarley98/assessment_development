# Low Level: Alignment


## Item ID
low-level-alignment


## Claim
-   Claim/PI 4: The candidate displays a strong understanding of both C memory management and concurrency. They are comfortable reasoning about different theoretical approaches to low-level problems, and they also demonstrate the practical ability to implement and troubleshoot solutions in a low-level codebase.


## Claim Behavior (evidence)

> Alignment is a restriction on which memory positions a value's first byte can be stored. (It is needed to improve performance on processors and to permit use of certain instructions that works only on data with particular alignment, for example SSE need to be aligned to 16 bytes, while AVX to 32 bytes.)
https://stackoverflow.com/a/21150698/92584

> [The Fine Manual](https://software.intel.com/en-us/articles/intel-sdm) gives details of the properties of each instruction, as does the online intrinsics guide; [here](https://software.intel.com/sites/landingpage/IntrinsicsGuide/#techs=AVX&expand=3585&cats=Load) you can see the properties of AVX load instructions. You will observe that there are both aligned and unaligned loads, for instance :-  
> `_m256d _mm256_load_pd (double const * mem_addr)`  
> Synopsis  
>
>     __m256d _mm256_load_pd (double const * mem_addr)
>     #include "immintrin.h"
>     Instruction: vmovapd ymm, m256
>     CPUID Flags: AVX
> Description
> > Load 256-bits (composed of 4 packed double-precision (64-bit) floating-point elements) from memory into dst. mem_addr must be aligned on a 32-byte boundary or a general-protection exception may be generated.  
https://community.intel.com/t5/Intel-ISA-Extensions/SSE-and-AVX-behavior-with-aligned-unaligned-instructions/td-p/1170000

### Clang 3.8
```
clang % make && ./example
Scanning dependencies of target example
[ 50%] Building CXX object CMakeFiles/example.dir/example.cpp.o
[100%] Linking CXX executable example
[100%] Built target example
A: 0x7fffd54a9941
B: 0x7fffd54a9740
C: 0x7fffd54a9545
D: 0x7fffd54a9340
warming up
timing ..........
results:
A (0x7fffd54a9941): value: 2048.000000 avg:0.597020/s best:0.586864/s
B (0x7fffd54a9740): value: 2048.000000 avg:0.595881/s best:0.586853/s
C (0x7fffd54a9545): value: 2048.000000 avg:0.595655/s best:0.586864/s
D (0x7fffd54a9340): value: 2048.000000 avg:0.595670/s best:0.586853/s
```
-- [./example.cpp](./example.cpp)


### GCC 6.3.0
```
gcc % make && ./example
Scanning dependencies of target example
[ 50%] Building CXX object CMakeFiles/example.dir/example.cpp.o
[100%] Linking CXX executable example
[100%] Built target example
A: 0x7fffdb3e5081
B: 0x7fffdb3e5280
C: 0x7fffdb3e5485
D: 0x7fffdb3e5680
warming up
timing ..........
results:
A (0x7fffdb3e5081): value: 2048.000000 avg:0.595075/s best:0.586818/s
B (0x7fffdb3e5280): value: 2048.000000 avg:0.594986/s best:0.585393/s
C (0x7fffdb3e5485): value: 2048.000000 avg:0.596003/s best:0.586219/s
D (0x7fffdb3e5680): value: 2048.000000 avg:0.594487/s best:0.585393/s
```


### MSVC 2019 16.8.4
```
A: 00000053461BEF01
B: 00000053461BF100
C: 00000053461BF305
D: 00000053461BF500
warming up
timing ..........
results:
A (00000053461BEF01): value: 2048.000000 avg:0.772005/s best:0.712078/s
B (00000053461BF100): value: 2048.000000 avg:0.693443/s best:0.606740/s
C (00000053461BF305): value: 2048.000000 avg:0.689952/s best:0.611841/s
D (00000053461BF500): value: 2048.000000 avg:0.690598/s best:0.606740/s
```



## Content Target
* high performance


## Cognitive Model
* Use


## Item Type
* Multiple Choice


## Stem
There are 4 different arrays, A, B, C, and D.
Each of them contain 64 floats representing four different 4x4 matrices.
These matrices need to be multiplied somewhere in the application.

In a debugger you see this information:
```
A (0x7fffd54a9941) size: 64, value: 2048.000000, ...
B (0x7fffd54a9740) size: 64, value: 2048.000000, ...
C (0x7fffd54a9545) size: 64, value: 2048.000000, ...
D (0x7fffd54a9340) size: 64, value: 2048.000000, ...
```

Which of these statements is likely true?


## Code Snippet (optional)



## Answer Key
* B and D are faster than A and C.


## Distractors
### 1.
* 64 bit doubles would be faster than 32 bit floats.


### 2.
* C and D are faster than A and B.


### 3.
* Keeping values between 0.0f and 1.0f are faster than 2048.0f.


## Common errors, misconceptions, or irrelevant information:
Keeping data aligned is faster for the CPU than unaligned.
And aligned data is needed using SSE.
https://community.intel.com/t5/Software-Tuning-Performance/Why-should-data-be-aligned-to-16-bytes-for-SSE-instructions/td-p/1164004

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

