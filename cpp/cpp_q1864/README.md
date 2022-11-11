# C➕➕ - Standard: async

## Item ID
1864

## Claim
Claim 2

## Threshold Probabilities
[.10, .30, .70, .90]

## Claim Behavior (evidence)
```cpp
    X x;
    // Calls (&x)->foo(42, "Hello") with default policy:
    // may print "Hello 42" concurrently or defer execution
    auto a1 = std::async(&X::foo, &x, 42, "Hello");
    // Calls x.bar("world!") with deferred policy
    // prints "world!" when a2.get() or a2.wait() is called
    auto a2 = std::async(std::launch::deferred, &X::bar, x, "world!");
    // Calls X()(43); with async policy
    // prints "43" concurrently
    auto a3 = std::async(std::launch::async, X(), 43);
    a2.wait();                     // prints "world!"
    std::cout << a3.get() << '\n'; // prints "53"
```
-- https://en.cppreference.com/w/cpp/thread/async

```log
$ make key
[100%] Built target key
$ ./key
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/3-std-async/key.cpp
42
```
-- [key.cpp](./key.cpp)


```log
$ make distractor1
Scanning dependencies of target distractor1
[ 50%] Building CXX object CMakeFiles/distractor1.dir/distractor1.cpp.o
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/3-std-async/distractor1.cpp:10:16: error: cannot assign to a variable captured by copy in a non-mutable lambda
        result = x;
        ~~~~~~ ^
1 error generated.
```
-- [distractor1.cpp](./distractor1.cpp)

```log
$ make distractor2
Scanning dependencies of target distractor2
[ 50%] Building CXX object CMakeFiles/distractor2.dir/distractor2.cpp.o
[100%] Linking CXX executable distractor2
[100%] Built target distractor2
$ ./distractor2
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/3-std-async/distractor2.cpp
0
```
-- [distractor2.cpp](./distractor2.cpp)

```log
$ make distractor3
Scanning dependencies of target distractor3
[ 50%] Building CXX object CMakeFiles/distractor3.dir/distractor3.cpp.o
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/3-std-async/distractor3.cpp:13:9: error: variable 'res' cannot be implicitly captured in a lambda with no capture-default specified
        res.result = x;
        ^
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/3-std-async/distractor3.cpp:10:7: note: 'res' declared here
    } res;
      ^
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/3-std-async/distractor3.cpp:11:50: note: lambda expression begins here
    auto handle = std::async(std::launch::async, [] {
                                                 ^
1 error generated.
```
-- [distractor3.cpp](./distractor3.cpp)


## Content Target
* std::async
* std::future

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
How do you get the result of a function launched by std::async()?

## Code Snippet (optional)
```cpp
int result = 0;
auto handle = std::async(std::launch::async, []{
    int x = 6 * 7;
    result = x;
});

handle.wait();

std::cout << result << std::endl;
```

## Answer Key
Use the get() member of the std::future<> returned by std::async().

```cpp
auto handle = std::async(std::launch::async, []{
    int x = 6 * 7;
    return x;
});

handle.wait();

std::cout << handle.get() << std::endl;
```

## Distractors
### 1.
Capture `result` before you set it:

```cpp
int result = 0;
auto handle = std::async(std::launch::async, [result]{
    int x = 6 * 7;
    result = x;
});
```

### 2.
Pass `result` in as a function parameter:

```cpp
int result = 0;
auto handle = std::async(
    std::launch::async,
    [](int result) {
        int x = 6 * 7;
        result = x;
    },
    result
);
```

### 3.
Make a `struct` and then set the value in the `struct`.

```cpp
struct Result { int result; } res;
auto handle = std::async(std::launch::async, [] {
    int x = 6 * 7;
    res.result = x;
});

handle.wait();
int result = res.result;
```

## Common errors, misconceptions, or irrelevant information:
Distractor 1 does not work because "result" is captured by value, creating a copy. Therefore, no value is modified in the outer function's enviornment.
Distractor 2 does not work because the function's parameter, also called "result", shadows "result" from the outer scope, which is never modified.
Distractor 3 does not compile, because variable "res" is not available inside the lambda's scope.

Capturing "result" into the lambda by reference would work, but also be vulnerable to race conditions (such as when multiple async functions were 
launched), requiring more complex code.

Getting the value from the returned std::future is the most correct and safe means.

Sometimes though, you don't just need to return a value, and in those cases using other synchronization primitives like mutex, locks, or semaphores will be needed.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
