# C➕➕ Storage Specifiers

## Item ID
2507

## Claim
Claim 3

## Claim Behavior (evidence)
> The storage class specifiers are a part of the decl-specifier-seq of a name's declaration syntax. Together with the scope of the name, they control two independent properties of the name: its storage duration and its linkage. 

Only one storage class specifier may appear in a declaration except that thread_local may be combined with static or with extern.

> -- https://en.cppreference.com/w/cpp/language/storage_duration

## Content Target
- storage specifiers

## Target Level
Level 4

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
Given the following statements:

- I. The static specifier is only allowed in the declarations of objects, even in function parameter lists, declarations of functions (except at block scope), and declarations of anonymous unions.
- II. The thread_local keyword is only allowed for objects declared at namespace scope, objects declared at block scope, and static data members. It indicates that the object has thread storage duration.
- III. The auto specifier was only allowed for objects declared at block scope or in function parameter lists. It indicated automatic storage duration, which is the default for these declarations. The meaning of this keyword was changed in C++11.

Choose the option that contains all the TRUE statements about storage specifiers?

## Code Snippet (optional)

## Answer Key
II and III

## Distractors
### 1.
I, II, and III

### 2.
I

### 3.
None of them are true.

## Common errors, misconceptions, or irrelevant information:
- Among all the options, just option (I) is the incorrect one. The static specifier is allowed in the declarations of objects, but EXCEPT in function parameter lists.
- The other two options are true. Also, including (I) in two distractors is good because it makes the candidates think that (I) is a true option.
- The way the distractors are organized makes just the people that know these concepts answer this question correctly.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
