C++ - Summary of Claims
==============================

A candidate who *passes* the language assessment and receives the C++ language badge 
has demonstrated evidence for all three (3) claims.

- Claim 1 (Basics): Candidates know how to apply the basic features of OO applied to C++ and optimize the usage of them in everyday projects.
- Claim 2 (Modern C++): Candidates know the most used features of STL and modern C++.
- Claim 3 (C++ tools, compiling and linking): Candidates know all the tools and instrumentation necessary to help during the development process as well as the process of compiling and linking.

Score-Level definitions
=====================================

Candidates of the following scores demonstrate the associated understanding and abilities:

- **Level 1:** The candidate is learning C++ syntax (Classes and Objects, Polymorphism, Inheritance, Overloading, Overriding, Friendship). They are beginners on how C++ organizes memory and how to manipulate it. They are probably familiar with arrays. They know just the basics of strings and stl containers and probably use them in basic problems. They know how to compile the code on Linux CLI and know some flags you can add to the compilation.
- **Level 2:** The candidate is familiar with the syntax of the main concepts of Object-Oriented Programming in C++ (Classes and Objects, Polymorphism, Inheritance, Overloading, Overriding, Friendship). They know pointers but probably just the most basic usage, such as pointer creation through **new** and dereferencing. They are familiar with Vectors and Arrays (being STL or not) and their internal functions. They know the basics of Maps and what they are suited for. They are familiar with makefiles and cmakes and the basics of using them.
- **Level 3:** The candidate knows some peculiarities from the basic concepts in addition to what the Level 1 candidate knows. They are familiar with Maps, Sets, Hash Tables, Heaps, Queue, and Stacks. They know the time and space complexity of some container operations and how to adequately apply these structures to the problems they encounter. They know how to create smart pointers and the basics of using them. They know `std::sort` and one or another algorithm from `<algorithm>`. They know the basics of debugging with gdb, using breakpoints, and checking variable values. 
- **Level 4:** The candidate knows how to use all basic concepts fluently together with good software development practices like modularization, application of design patterns, and optimizing the code in time and memory consumption. They know the advantages of smart pointers and are comfortable with their usage. They understand how the stack and heap works. Instead of many specialized functions, they can make templates and use them in their projects. They know the concept of lvalue and rvalue and try to optimize the code to copy as little data as possible while making the code readable and reusable. They understand how STL tools help in the development of multi-threading solutions. They are familiar with lambda functions. They can run *valgrind* and check for memory leaks. They understand the basics of profiling the code using *memcheck* or *gperftools*. They know the basics of how the compiler and linker work internally.
- **Level 5:** The candidate can optimize some STL containers and functions for better performance in specific problems. They know a little about the esoteric behaviors of some concepts mentioned. They know a lot about the thread lib in STL and are extremely familiar with applying this during their projects. They are familiar with most concepts of modern C++ that appeared to help accelerate development. They study new functions/containers continuously. They can debug adequately and fast, profile the code with *valgrind* and *gperftools*, and use *massif* and some of the available sanitizers. They are familiar with the underlying operations during C++ compilation and linking.

Cognitive Model
=====================================

- Recall: can recall/recognize knowledge (e.g., definitions); can recall a memorized procedure to perform a task
- Comprehend: can comprehend/understand knowledge (e.g., how? why?); comprehend procedures to perform a task
- Use: can use or apply knowledge in complex task; perform a task

Content Targets
=====================================
- placeholder

## What version of C++ are we using on the quiz?
https://www.jetbrains.com/lp/devecosystem-2019/cpp/
* C++11 61%
* C++14 33%
* C++17 28%
* C++98 13%
* C++03 8%

Rogerio's comment about this:
> Is this here really necessary ? A lot of C++ features that makes the language to evolve and still be used today comes from the fact that C++17 made a lot of changes that made the language appealing for new people, which are people that comes from a functional paradigm and are used to python and fast development. Of course C++11 has the most abrupt change from the previous version to the next, but I think **the candidate needs to know C++17 to be in a good position on the market today**.

Jesse's comment about this:
> Things have changed since 2019. The current JetBrains survey (2021) reports that C++17 has about 42% adoption (to C++11's 40%) and that further migration to C++20 (the current standard) is expected to continue to trend. **I think we will be ok using C++17**. It would nice to be able to use C++20, but my suspicion is that many developers haven't yet had a chance to gain real-world experience with it; compiler support is excellent, but there are still major platforms missing some major aspects of language and library support (as of 4/2022).
> See: https://blog.jetbrains.com/clion/2021/07/cpp-ecosystem-in-2021/#standards

With the above comments in mind, we will be using C++17 for the quiz.