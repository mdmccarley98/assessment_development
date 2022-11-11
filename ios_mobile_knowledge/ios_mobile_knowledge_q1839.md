# iOS: po $r13


## Item ID
1839

## Claim
-   Claim/PI 5: The candidate displays strong theoretical knowledge of and practical expertise in iOS native development from the simple to the complex. They demonstrate a deep understanding of a wide range of UI development tools, iOS data persistence methods, and memory management techniques. They can create highly-performance, responsive iOS apps and handle advanced profiling and troubleshooting.


## Claim Behavior (evidence)

> The po command (a.k.a. expr --O --) does everything that p does, but instead of printing the result, if the result is a pointer to an ObjC object, it calls that object's "description" method, and prints the string returned by that method(*). Similarly, if the result is a CF object, it will call CFShow and print the result of that. If both these attempts fail, it will go ahead and print the result as p would have.
> - https://stackoverflow.com/a/28841849/92584

> SP (or R13) is the stack pointer. The C and C++ compilers always use SP as the stack pointer. ARM deprecates most uses of SP as a general purpose register. In T32 state, SP is strictly defined as the stack pointer. The instruction pages in the A32 and T32 Instructions chapter describe when SP and PC can be used.
> - https://developer.arm.com/documentation/dui0801/d/Overview-of-AArch32-state/General-purpose-registers-in-AArch32-state?lang=en


## Content Target
* advanced debugging
* lldb
* po
* registers
* ARM


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
What does `po $r13` do?


## Code Snippet (optional)



## Answer Key
Displays a description of the object at the stack pointer.


## Distractors
### 1.
Displays a description of the object at the link register during an exception.


### 2.
Prints out the variable named `r13` from the current stack frame.


### 3.
Prints out the disassembler located at line 13.


## Common errors, misconceptions, or irrelevant information:



# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

