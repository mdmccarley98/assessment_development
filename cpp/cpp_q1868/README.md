# C➕➕ 3 Standard: string replace iterators

## Item ID
1868

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.30, .50, .60, .85]

## Claim Behavior (evidence)
> `string& replace (iterator i1, iterator i2, const string& str);`  
> * first, last  
>     Input iterators to the initial and final positions in a range. The range used is [first,last), which includes all the characters between first and last, including the character > pointed by first but not the character pointed by last.
>     The function template argument InputIterator shall be an input iterator type that points to elements of a type convertible to char.

-- http://www.cplusplus.com/reference/string/string/replace/

```
$ ./example && ./key && ./distractor1 && ./distractor2 && ./distractor3
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/3-std-string/example.cpp
---Triplebyte------

/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/3-std-string/key.cpp
---Triplebyte---

/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/3-std-string/distractor1.cpp
---Triplebyte------

/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/3-std-string/distractor2.cpp
Triplebyte---

/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/3-std-string/distractor3.cpp
---Triplebyte
```
-- [key.cpp](./key.cpp) - [distractor1.cpp](./distractor1.cpp) - [distractor2.cpp](./distractor2.cpp) - [distractor3.cpp](./distractor3.cpp)

## Content Target
* std::string
* std::string::replace()
* std iterators

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
The following c++ prints this:
```
---Triplebyte------
```

But the programmer wanted it to print this:
```
---Triplebyte---
```

Which use of iterators will fix it?


## Code Snippet (optional)
```cpp
std::string triplebyte(15, '-');

triplebyte.replace(
    triplebyte.begin() + 3,
    triplebyte.begin() + 9,
    "Triplebyte"
);

std::cout << triplebyte << std::endl;
```


## Answer Key
```cpp
auto it = triplebyte.begin() + 3;
triplebyte.replace(it, it + 9, "Triplebyte");
```


## Distractors

### 1.
```cpp
auto it = triplebyte.begin();
triplebyte.replace(it + 3, it + 9, "Triplebyte");
```


### 2.
```cpp
auto it = triplebyte.begin();
triplebyte.replace(it, it + 12, "Triplebyte");
```


### 3.
```cpp
auto it = triplebyte.begin() + 3;
triplebyte.replace(it, it + 12, "Triplebyte");
```


## Common errors, misconceptions, or irrelevant information:
The plus operator on an iterator doesn't change the internal iterator, but instead returns a new iterator.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
