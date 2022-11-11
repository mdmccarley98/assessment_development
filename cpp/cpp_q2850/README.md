# C➕➕ - Move Only Types

## Item ID
2850

## Claim
2

## Claim Behavior (evidence)

> Move semantics makes it possible for compilers to replace expensive copying
> operations with less expensive moves. In the same way that copy constructors
> and copy assignment operators give you control over what it means to copy
> objects, move constructors and move assignment operators offer control over the
> semantics of moving.

- Effective Modern C++

Some reference links about the types that are move-only
Check constructors and assignment operators of the types discussed in the choices.
std::unique_ptr:
> https://en.cppreference.com/w/cpp/memory/unique_ptr
std::future:
> https://en.cppreference.com/w/cpp/thread/future
std::thread:
> https://en.cppreference.com/w/cpp/thread/thread/thread

## Content Target
- move only types
- standard library

## Cognitive Model
Recall

## Target Level
Level 2

## Item Type
Multiple Choice

## Stem
Which of the following are move-only types?

## Code Snippet (optional)

## Answer Key
`std::unique_ptr`, `std::future`, and `std::thread`

## Distractors
### 1.
`std::shared_ptr`, `std::future`, and `std::thread`

### 2.
`std::unique_ptr`, `std::shared_future`, and `std::thread`

### 3.
`std::shared_ptr`, `std::shared_future`, and `std::thread`


## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - std::shared_ptr is copyable
- Distractor 2
    - std::shared_future is the version from std::future that can be copied
- Distractor 3
    - To mix both past distractors

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
