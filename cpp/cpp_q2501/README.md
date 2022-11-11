# C➕➕ Smart Pointer Types

## Item ID
2501

## Claim
Claim 2

## Claim Behavior (evidence)
> Smart pointers are defined in the std namespace in the <memory> header file. They are crucial to the RAII or Resource Acquisition Is Initialization programming idiom. The main goal of this idiom is to ensure that resource acquisition occurs at the same time that the object is initialized, so that all resources for the object are created and made ready in one line of code. In practical terms, the main principle of RAII is to give ownership of any heap-allocated resource—for example, dynamically-allocated memory or system object handles—to a stack-allocated object whose destructor contains the code to delete or free the resource and also any associated cleanup code.

-- https://en.cppreference.com/book/intro/smart_pointers

## Target Level
Level 2

## Content Target
- smart pointers

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
Which one of the following statements about smart pointers is FALSE?

## Code Snippet (optional)

## Answer Key
`std::weak_ptr` does participate in the object's reference count.

## Distractors

### 1.
`std::auto_ptr` is a deprecated leftover from C++98.

### 2.
`std::unique_ptr` automatically deletes what it points to when it is destroyed.

### 3.
A `std::shared_ptr` can tell whether it's the last one pointing to a resource by consulting the resource's reference count.

## Common errors, misconceptions, or irrelevant information:
They are distractors because usually Level 1 people don't know about smart pointers, they have no clue what these statements are telling.
- `std::auto_ptr` is deprecated, and it's use is not encouraged for a long time. `std::unique_ptr` came to substititute this with the addition of the move semantics introduced in C++11
- Since `std::unique_ptr` is pointing one element, once this pointer is destroyed it immediately deletes what it points to without difficulties.
- `std::shared_ptr` uses a reference count to track how many shared pointers are pointing to the object.

For level 2 people, we expect that they know this difference already.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
