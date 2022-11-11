# C++ - Template Full Specialization

## Item ID
2703

## Claim
Claim 2 (Modern C++): Candidates know the most used features of STL and modern C++.

## Claim Behavior (evidence)
Understands both the behavior of a primary template in template specialization (i.e. that it
is the "default case" selected if there is no more-specialized match).

See-also:
https://en.cppreference.com/w/cpp/language/template_specialization

## Target Level
Level 3

## Content Target
Language mechanisms, templates

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
```cpp
template <typename T>
struct pick_favorite
{};

template <>
struct pick_favorite<std::string>
{
    string operator()() { return "to say hello"; }
};

template <typename T>
struct show_favorite
{
    void operator()()
    {
        cout << "I sure like " << pick_favorite<T>{}() << "!\n";
    }
};
```

Given the above code snippet, what will happen after the folliwing code is executed?

```cpp
show_favorite<int> sf;
sf();
```

Choose the correct answer from the options below.

## Code Snippet (optional)

## Answer Key
It will not compile with an error in `show_favorite` because the primary template has no operator().

## Distractors

### 1.
It will print "I sure like to say hello" because `std::string` is the most-specialized type.

### 2.
It will compile and print nothing because Substitution Failure Is Not An Error (SFINAE).

### 3.
It will execute in an infinite loop because `<T>` can never be deduced.

## Common errors, misconceptions, or irrelevant information:
- Distractor 1: Being the most-specialized type has nothing to do with this error.
- Distractor 2: This is the sneakiest, as template mechanisms have a lot of terminology and SFINAE almost seems like it could be related. However, here the behavior does not depend on SFINAE and is pretty simple: there's no operator() defined for the primary template, so when show_favorite is expanded the compiler sees nothing and issues an error explaining exactly that (i.e., it won't compile at all):
```
example.cpp: In instantiation of ‘void show_favorite<T>::operator()() [with T = int]’:
example.cpp:33:4:   required from here
example.cpp:23:53: error: no match for call to ‘(pick_favorite<int>) ()’
```
- Distractor 3: This is nonsense, but a developer less than familiar with templates in C++ might indeed mistake them for a runtime mechanism.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
