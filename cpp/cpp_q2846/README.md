# C➕➕ - Implicitly-Declared Move Constructors Preconditions

## Item ID
2846

## Claim
2

## Claim Behavior (evidence)
> The move constructor is typically called when an object is initialized (by direct-initialization or copy-initialization) from rvalue (xvalue or prvalue) (until C++17)xvalue (since C++17) of the same type, including

initialization: T a = std::move(b); or T a(std::move(b));, where b is of type T;
function argument passing: f(std::move(a));, where a is of type T and f is void f(T t);
function return: return a; inside a function such as T f(), where a is of type T which has a move constructor.
When the initializer is a prvalue, the move constructor call is often optimized out (until C++17)never made (since C++17), see copy elision.

Move constructors typically "steal" the resources held by the argument (e.g. pointers to dynamically-allocated objects, file descriptors, TCP sockets, I/O streams, running threads, etc.) rather than make copies of them, and leave the argument in some valid but otherwise indeterminate state. For example, moving from a std::string or from a std::vector may result in the argument being left empty. However, this behavior should not be relied upon. For some types, such as std::unique_ptr, the moved-from state is fully specified.

-- https://en.cppreference.com/w/cpp/language/move_constructor

## Content Target
- move ctors

## Cognitive Model
Recall

## Target Level
4

## Item Type
Multiple Choice

## Stem
Which of the following structs has a move constructor implicitly declared?

## Code Snippet (optional)
```cpp
struct A
{
    ~A(){};
};

struct B
{
    B& operator=(const B& b){return *this;};
};

struct C
{
    C(){};
    C(const C& c){};
};
```

## Answer Key
None of them

## Distractors
### 1.
A

### 2.
B

### 3.
C

## Common errors, misconceptions, or irrelevant information:
If no user-defined move constructors are provided for a class type (struct, class, or union), and all of the following is true:
- there are no user-declared copy constructors;
- there are no user-declared copy assignment operators;
- there are no user-declared move assignment operators;
- there is no user-declared destructor.
then the compiler will declare a move constructor as a non-explicit inline public member of its class with the signature T::T(T&&).

All the structs disobey one of the claims that must be true in order to have a implicitly declared move constructor.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
