# C➕➕ Coding: nullptr


## Item ID
1881

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.40, .60, .75, .95]

## Claim Behavior (evidence)

> The nullptr keyword represents a null pointer value. Use a null pointer value to indicate that an object handle, interior pointer, or native pointer type does not point to an object.
>
> -- https://docs.microsoft.com/en-us/cpp/extensions/nullptr-cpp-component-extensions?view=msvc-160

> `nullptr` is always a pointer type. 0 (aka. C's `NULL` bridged over into C++) could cause ambiguity in overloaded function resolution, among other things:
>
>     f(int);
>     f(foo *);
>
> -- https://stackoverflow.com/a/20509811/92584


## Content Target
* nullptr


## Cognitive Model
Comprehension


## Item Type
Multiple Choice


## Stem
Your colleague runs the C++ code snippet below and on his computer it prints this:

```
NULL - x: 1, y: 2
3d - x: 3, y: 4, z:0
```

Which of the following best describes why the code behaved the way it did?


## Code Snippet (optional)
```cpp
#include <iostream>

void log(int x, int y, const char* name) {
    std::string label = name ? name : "NULL";
    std::cout << label << " - x: " << x << ", y: " << y << std::endl;
}

void log(int x, int y, int z) {
    std::cout << "3d - x: " << x << ", y: " << y << ", z:" << z << std::endl;
}

int main() {
    log(1, 2, nullptr);
    log(3, 4, NULL);

    return 0;
}
```


## Answer Key
* `NULL` is equivalent to the integer `0`
* `nullptr` is specifically for pointers


## Distractors
### 1.
* `NULL` is equivalent to the integer `0`
* `nullptr` is a const


### 2.
* `NULL` isn't a const
* `nullptr` is a const


### 3.
* `NULL` is defined as: `int NULL = 0;`
* `nullptr` is defined as: `const char* nullptr = "";`


## Common errors, misconceptions, or irrelevant information:
MSVC (Visual Studio 2019 v142) compiles and runs this code.

But clang and gcc produce errors.  Here's GCC 6.3.0's error:
```
[ 50%] Building CXX object CMakeFiles/example.dir/example.cpp.o
example.cpp: In function ‘int main()’:
example.cpp:14:19: error: call of overloaded ‘log(int, int, NULL)’ is ambiguous
     log(3, 4, NULL);
                   ^
example.cpp:3:6: note: candidate: void log(int, int, const char*)
 void log(int x, int y, const char* name) {
      ^~~
example.cpp:8:6: note: candidate: void log(int, int, int)
 void log(int x, int y, int z) {
      ^~~
CMakeFiles/example.dir/build.make:81: recipe for target 'CMakeFiles/example.dir/example.cpp.o' failed
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
