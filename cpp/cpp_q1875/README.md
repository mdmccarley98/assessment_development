# C➕➕ 5 OOP: friends

## Item ID
1875

## Claim
-   Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.

## Threshold Probabilities
[.20, .45, .65, .85]

## Claim Behavior (evidence)
> ## friend functions
>
> A friend function is a function that is not a member of a class but has access to the class's private and protected members. Friend functions are not considered class members; they are normal external functions that are given special access privileges. Friends are not in the class's scope, and they are not called using the member-selection operators (. and ->) unless they are members of another class. A friend function is declared by the class that is granting access. The friend declaration can be placed anywhere in the class declaration. It is not affected by the access control keywords.  
> -- https://docs.microsoft.com/en-us/cpp/cpp/friend-cpp?view=msvc-160

```log
$ make key
Scanning dependencies of target key
[ 50%] Building CXX object CMakeFiles/key.dir/key.cpp.o
[100%] Linking CXX executable key
[100%] Built target key
$ ./key
Inventory: rope, note, map, 
```
-- [key.cpp](./key.cpp)

```log
$ make example
Scanning dependencies of target example
[ 50%] Building CXX object CMakeFiles/example.dir/example.cpp.o
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/5-oop-friend/example.cpp: In function ‘std::ostream& operator<<(std::ostream&, const Inventory&)’:
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/5-oop-friend/example.cpp:17:33: error: ‘std::vector<std::__cxx11::basic_string<char> > Inventory::items’ is private within this context
     for (auto& item : inventory.items) {
                                 ^~~~~
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/5-oop-friend/example.cpp:5:30: note: declared private here
     std::vector<std::string> items;
                              ^~~~~
CMakeFiles/example.dir/build.make:81: recipe for target 'CMakeFiles/example.dir/example.cpp.o' failed
make[3]: *** [CMakeFiles/example.dir/example.cpp.o] Error 1
CMakeFiles/Makefile2:183: recipe for target 'CMakeFiles/example.dir/all' failed
make[2]: *** [CMakeFiles/example.dir/all] Error 2
CMakeFiles/Makefile2:190: recipe for target 'CMakeFiles/example.dir/rule' failed
make[1]: *** [CMakeFiles/example.dir/rule] Error 2
Makefile:176: recipe for target 'example' failed
make: *** [example] Error 2
```
-- [example.cpp](./example.cpp)

```log
$ make distractor1
Scanning dependencies of target distractor1
[ 50%] Building CXX object CMakeFiles/distractor1.dir/distractor1.cpp.o
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/5-oop-friend/distractor1.cpp: In function ‘std::ostream& operator<<(std::ostream&, const Inventory&)’:
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/5-oop-friend/distractor1.cpp:18:33: error: ‘std::vector<std::__cxx11::basic_string<char> > Inventory::items’ is private within this context
     for (auto& item : inventory.items) {
                                 ^~~~~
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/5-oop-friend/distractor1.cpp:5:30: note: declared private here
     std::vector<std::string> items;
                              ^~~~~
CMakeFiles/distractor1.dir/build.make:81: recipe for target 'CMakeFiles/distractor1.dir/distractor1.cpp.o' failed
make[3]: *** [CMakeFiles/distractor1.dir/distractor1.cpp.o] Error 1
CMakeFiles/Makefile2:156: recipe for target 'CMakeFiles/distractor1.dir/all' failed
make[2]: *** [CMakeFiles/distractor1.dir/all] Error 2
CMakeFiles/Makefile2:163: recipe for target 'CMakeFiles/distractor1.dir/rule' failed
make[1]: *** [CMakeFiles/distractor1.dir/rule] Error 2
Makefile:163: recipe for target 'distractor1' failed
make: *** [distractor1] Error 2
```
-- [distractor1.cpp](./distractor1.cpp)

```log
$ make distractor2
Scanning dependencies of target distractor2
[ 50%] Building CXX object CMakeFiles/distractor2.dir/distractor2.cpp.o
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/5-oop-friend/distractor2.cpp: In function ‘std::ostream& operator<<(std::ostream&, const Inventory&)’:
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/5-oop-friend/distractor2.cpp:18:33: error: ‘std::vector<std::__cxx11::basic_string<char> > Inventory::items’ is private within this context
     for (auto& item : inventory.items) {
                                 ^~~~~
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/5-oop-friend/distractor2.cpp:5:30: note: declared private here
     std::vector<std::string> items;
                              ^~~~~
CMakeFiles/distractor2.dir/build.make:81: recipe for target 'CMakeFiles/distractor2.dir/distractor2.cpp.o' failed
make[3]: *** [CMakeFiles/distractor2.dir/distractor2.cpp.o] Error 1
CMakeFiles/Makefile2:210: recipe for target 'CMakeFiles/distractor2.dir/all' failed
make[2]: *** [CMakeFiles/distractor2.dir/all] Error 2
CMakeFiles/Makefile2:217: recipe for target 'CMakeFiles/distractor2.dir/rule' failed
make[1]: *** [CMakeFiles/distractor2.dir/rule] Error 2
Makefile:189: recipe for target 'distractor2' failed
make: *** [distractor2] Error 2
```
-- [distractor2.cpp](./distractor2.cpp)

```
$ make distractor3
[ 50%] Building CXX object CMakeFiles/distractor3.dir/distractor3.cpp.o
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/5-oop-friend/distractor3.cpp:14:1: error: ‘friend’ used outside of class
 friend std::ostream& operator<<(std::ostream& os, const Inventory& inventory)
 ^~~~~~
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/5-oop-friend/distractor3.cpp: In function ‘std::ostream& operator<<(std::ostream&, const Inventory&)’:
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/5-oop-friend/distractor3.cpp:17:33: error: ‘std::vector<std::__cxx11::basic_string<char> > Inventory::items’ is private within this context
     for (auto& item : inventory.items) {
                                 ^~~~~
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/5-oop-friend/distractor3.cpp:5:30: note: declared private here
     std::vector<std::string> items;
                              ^~~~~
CMakeFiles/distractor3.dir/build.make:81: recipe for target 'CMakeFiles/distractor3.dir/distractor3.cpp.o' failed
make[3]: *** [CMakeFiles/distractor3.dir/distractor3.cpp.o] Error 1
CMakeFiles/Makefile2:102: recipe for target 'CMakeFiles/distractor3.dir/all' failed
make[2]: *** [CMakeFiles/distractor3.dir/all] Error 2
CMakeFiles/Makefile2:109: recipe for target 'CMakeFiles/distractor3.dir/rule' failed
make[1]: *** [CMakeFiles/distractor3.dir/rule] Error 2
Makefile:137: recipe for target 'distractor3' failed
make: *** [distractor3] Error 2
```
-- [distractor3.cpp](./distractor3.cpp)


## Content Target
* friend functions

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem

You're writing an `operator<<` for `Inventory`.
But the function doesn't have access to the private variable `items`.

How do you fix it?

## Code Snippet (optional)
```cpp
#include <iostream>
#include <vector>

class Inventory {
    std::vector<std::string> items;

public:
    void add(std::string item)
    {
        items.push_back(item);
    }
};

std::ostream& operator<<(std::ostream& os, const Inventory& inventory)
{
    os << "Inventory: ";
    for (auto& item : inventory.items) {
        os << item << ", ";
    }
    return os;
}

int main()
{
    auto inventory = Inventory {};
    inventory.add("rope");
    inventory.add("note");
    inventory.add("map");
    std::cout << inventory << std::endl;
    return 0;
}
```

## Answer Key

* Add a `friend` declaration for the function `operator<<` in `Inventory`.

## Distractors
### 1.
* Add the `friend` keyword in front of the `operator<<` function above.


### 2.
* Add a `friend` declaration for the class `std::ostream` in `Inventory`.


### 3.
* Add the `friend` keyword in front of the `items` declaration in `Inventory`.


## Common errors, misconceptions, or irrelevant information:
Friend functions let a function access private variables in a class.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
