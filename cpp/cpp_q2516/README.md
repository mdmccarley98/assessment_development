# C➕➕ Name Mangling

## Item ID
2516

## Claim
Claim 3

## Claim Behavior (evidence)
Name mangling provides a way of encoding additional information in the name of a function, structure, class or another datatype in order to pass more semantic information from the compiler to the linker.
The need for name mangling arises where the language allows different entities to be named with the same identifier as long as they occupy a different namespace (typically defined by a module, class, or explicit namespace directive) or have different signatures (such as in function overloading). It is required in these use cases because each signature might require different, specialized calling convention in the machine code.

## Target Level
Level 3

## Content Target
- C++ Name Mangling

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Select the option that best completes the following statement: "In the context of C++, name mangling is a technique used to..."

## Code Snippet (optional)

## Answer Key
solve the problems caused by the need to resolve unique names for programming entities

## Distractors

### 1.
detect when a reserved keyword can be used or not

### 2.
speed up the linking process by making function names easier to identify

### 3.
to identify each specifier in a variable or function declaration and resolve its semantics

## Common errors, misconceptions, or irrelevant information:

- Distractor 1
    - This is not the role of name mangling. One of the compiler tasks is to emit an error when the identifier that is being used is a reserved keyword. Also, the preprocessor can get this error if the keyword is used in the context of a  preprocessor directive.
- Distractor 2
    - This is a distractor for people that have no clue what name mangling is.
- Distractor 3
    - Also, this is not related to name mangling in any circumstances. 

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
