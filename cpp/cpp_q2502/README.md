# C➕➕ Linker Execution Rules

## Item ID
2502

## Claim
Claim 3

## Claim Behavior (evidence)
> Linker
> The linker is a program that makes executable files. The linker resolves linkage issues, such as the use of symbols or identifiers which are defined in one translation unit and are needed from other translation units. Symbols or identifiers which are needed outside a single translation unit have external linkage. In short, the linker's job is to resolve references to undefined symbols by finding out which other object defines a symbol in question, and replacing placeholders with the symbol's address. Of course, the process is more complicated than this; but the basic ideas apply.
>
> Linkers can take objects from a collection called a library. Depending on the library (system or language or external libraries) and options passed, they may only include its symbols that are referenced from other object files or libraries. Libraries for diverse purposes exist, and one or more system libraries are usually linked in by default.
> - https://www.amazon.com/Advanced-C-Compiling-Milan-Stevanovic/dp/1430266678

## Target Level
Level 5

## Content Target
* C++ linking

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
What happens with a function during the linking process if it has `extern` on its declaration?

## Code Snippet (optional)

## Answer Key
The linker finds its actual declaration and substitutes the function placeholder inside the .o file with the function address with that name.

## Distractors

### 1.
The linker treats this as the function definition and allocates space for them.

### 2.
The linker doesn't know anything about `extern` functions since they have external linkage. The linker only knows about functions declared with internal linkage. 

### 3.
The linker limits access to the data to the current file.

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - extern variables or functions never have space allocated, as they should be properly defined elsewhere.
- Distractor 2
    - The linker actually doesn't know anything about functions with internal linkage, because, during compilation, the compiler strips out all mentions to the function in the .o file.
- Distractor 3
    - It limits access to the data to the current file when the function is declared with internal linkage.

This is a difficult question I expect just expert people to get this one correct.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
