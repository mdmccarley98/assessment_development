# C➕➕ CMakeLists Basics

## Item ID
2459

## Claim
Claim 3

## Claim Behavior (evidence)
> CMake is a tool to manage building of source code. Originally, CMake was designed as a generator for various dialects of Makefile, today CMake generates modern buildsystems such as Ninja as well as project files for IDEs such as Visual Studio and Xcode.

CMake is widely used for the C and C++ languages, but it may be used to build source code of other languages too.

This question aims to test the candidate knowledge about the basic features of CMake.

>
> -- https://cmake.org/cmake/help/v3.23/

## Content Target
- std::exception

## Target Level
Level 1

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
Which of the following statements is TRUE about CMake?

## Code Snippet (optional)

## Answer Key
`add_executable(Triplebyte triplebyte.cpp)` creates an executable called Triplebyte from compiling triplebyte.cpp

## Distractors
### 1.
`set(CMAKE_C++_STANDARD number)` where `number` can be 11, 14, 17, 20, etc... and is used to specify the C++ Standard used by that build.

### 2.
```
mkdir build
cd build
cmake . -DCMAKE_BUILD_TYPE=Debug
```
The snippet above creates a build folder, compiles in debug mode, and generates all build files inside that folder.

### 3.
To link libraries to your executable, you have to use the command: `add_executable(Triplebyte triplebyte.cpp ${NAME_OF_LIBRARY})`


## Common errors, misconceptions, or irrelevant information:
- Distractor 1:
    - `CMAKE_CXX_STANDARD` is the correct word to set the c++ standard 
- Distractor 2:
    - in order to compile in a folder to store all build files, you have to call `cmake ..` to compile the files in the parent folder
- Distractor 3:
    - To link libraries the command is different you just have to:`target_link_libraries(Triplebyte ${NAME_OF_LIBRARY})`

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
