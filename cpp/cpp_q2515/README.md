# C➕➕ Compiler and Linker tasks

## Item ID
2515

## Claim
Claim 3

## Claim Behavior (evidence)
The concept of virtual addressing is at the very foundation of the virtual memory implementation, and in many ways significantly impacts the design of compilers and linkers.
As a general rule, the program designer is completely relieved of worrying about the addressing range that his program will occupy at runtime (at least this is true for the majority of user space applications; kernel modules are somewhat exceptional in this sense). Instead, the programming model assumes that the address range is between 0 and 2N (virtual address range) and is the same for all programs.
The decision to grant a simple and unified addressing scheme for all programs has a huge positive impact on the process of code development. The following are the benefits:
- Linking is simplified.
- Loading is simplified.
- Runtime process sharing becomes available.
- Memory allocation is simplified.
The actual runtime placement of the program memory in a concrete address range is performed by the operating system through the mechanism of address translation. Its implementation is performed by the hardware module called a memory management unit (MMU), which does not require any involvement of the program itself.

## Target Level
Level 4

## Content Target
- C++ compilation
- C++ linking
- Process memory map

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Consider the following statements:

- I. The program binaries carry the details of the blueprint of the running process memory map.
- II. The skeleton of a binary file is created by the compiler. To complete its task, the compiler combines the binary files created to fill out various memory map sections (code, data, etc.).
- III. The task of the initial creation of the process memory map is performed by the system utility
called the program loader. In the simplest sense, the loader opens the binary executable
file, reads the information related to the sections, and populates the process memory map
structure.

Select the option that contains only TRUE statements.

## Code Snippet (optional)

## Answer Key
I and III

## Distractors

### 1.
II

### 2.
I, II, and III

### 3.
II and III

## Common errors, misconceptions, or irrelevant information:
Option II is the only one wrong. The skeleton of a binary file is created by the LINKER, not by the compiler. The linker combines the binary files created by the COMPILER in order to fill out the variety of memory map sections. The other options are true. Then, the distractors are built in a way where they randomly combine true and false answers.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
