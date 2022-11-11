# C➕➕ - Make Unique C++ 11

## Item ID
2663

## Claim
Claim 2

## Claim Behavior (evidence)
> Constructs an object of type T and wraps it in a std::unique_ptr.

> 1) Constructs a non-array type T. The arguments args are passed to the constructor of T. This overload participates in overload resolution only if T is not an array type. The function is equivalent to:
`unique_ptr<T>(new T(std::forward<Args>(args)...))`
> 2) Constructs an array of the given dynamic size. The array elements are value-initialized. This overload participates in overload resolution only if T is an array of unknown bound. The function is equivalent to:
`unique_ptr<T>(new std::remove_extent_t<T>[size]())`
> 3) Same as (1), except that the object is default-initialized. This overload participates in overload resolution only if T is not an array type. The function is equivalent to:
`unique_ptr<T>(new T)`
> 4) Same as (2), except that the array is default-initialized. This overload participates in overload resolution only if T is an array of unknown bound. The function is equivalent to:
`unique_ptr<T>(new std::remove_extent_t<T>[size])`

-- https://en.cppreference.com/w/cpp/memory/unique_ptr/make_unique

## Content Target
- compiler optimization

## Target Level
Level 5

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
Laura is using C++11, but wants to use the `make_unique` function for non-array types that is present only in C++14.
<br><br>
How should she implement `make_unique` so it behaves similar to the one in C++14?

## Code Snippet (optional)
```cpp
#include <memory>
#include <iostream>
#include <type_traits>

template<typename>
constexpr bool is_unbounded_array = false;

template<typename Type>
constexpr bool is_unbounded_array<Type[]> = true;
 
template<typename>
constexpr bool is_bounded_array = false;

template<typename Type, std::size_t N>
constexpr bool is_bounded_array<Type[N]> = true;

// template arguments
std::unique_ptr<T> make_unique(/* arguments */)
{
    // Implementation
}

int main()
{
    auto ptr = make_unique<int>(3);
    std::cout << *ptr << std::endl;
}
```

## Answer Key
```cpp
template<class T, class... Ts>
typename std::enable_if<!std::is_array<T>::value, std::unique_ptr<T>>::type
make_unique(Ts&&... params)
{
    return std::unique_ptr<T>(new T(std::forward<Ts>(params)...));
}

template<class T>
typename std::enable_if<is_unbounded_array<T>, std::unique_ptr<T>>::type
make_unique(std::size_t n)
{
    return std::unique_ptr<T>(new std::remove_extent_t<T>[n]());
}

template<class T, class... Ts>
typename std::enable_if<is_bounded_array<T>>::type 
make_unique(Ts&&...) = delete;
```

## Distractors
### 1.
```cpp
template<class T, class... Ts>
typename std::enable_if<!std::is_array<T>::value, std::unique_ptr<T>>::type
make_unique(const Ts&&... params)
{
    return std::unique_ptr<T>(new T(std::forward<Ts>(params)...));
}

template<class T>
typename std::enable_if<is_unbounded_array<T>, std::unique_ptr<T>>::type
make_unique(const std::size_t n)
{
    return std::unique_ptr<T>(new T[n]());
}

template<class T, class... Ts>
typename std::enable_if<is_bounded_array<T>>::type
make_unique(Ts&&...) = delete;
```

### 2.
```cpp
template<class T, class... Ts>
typename std::enable_if<!std::is_array<T>::value, std::unique_ptr<T>>::type
make_unique(Ts&... params)
{
    return std::unique_ptr<T>(new T(std::forward<Ts>(params)...));
}

template<class T>
typename std::enable_if<is_unbounded_array<T>, std::unique_ptr<T>>::type
make_unique(std::size_t& n)
{
    return std::unique_ptr<T>(new std::remove_extent_t<T>[n]());
}

template<class T, class... Ts>
typename std::enable_if<is_bounded_array<T>>::type
make_unique(Ts&...) = delete;
```

### 3.
```cpp
template<class T, class... Ts>
typename std::enable_if<!std::is_array<T>::value, std::unique_ptr<T>>::type
make_unique(Ts&&... params)
{
    return std::unique_ptr<T>(new T(params...));
}

template<class T>
typename std::enable_if<is_unbounded_array<T>, std::unique_ptr<T>>::type
make_unique(std::size_t n)
{
    return std::unique_ptr<T>(new std::remove_extent_t<T>[n]());
}

template<class T, class... Ts>
typename std::enable_if<is_bounded_array<T>>::type
make_unique(std::size_t n)
{
    return std::unique_ptr<T>(new T[n]());
}
```

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - 
    ```cpp
    example.cpp: In instantiation of ‘typename std::enable_if<(! std::is_array< <template-parameter-1-1> >::value), std::unique_ptr<_Tp> >::type make_unique(const Ts&& ...) [with T = int; Ts = {int}; typename std::enable_if<(! std::is_array< <template-parameter-1-1> >::value), std::unique_ptr<_Tp> >::type = std::unique_ptr<int, std::default_delete<int> >]’:
example.cpp:37:34:   required from here
example.cpp:21:53: error: binding reference of type ‘std::remove_reference<int>::type&’ {aka ‘int&’} to ‘const int’ discards qualifiers
   21 |     return std::unique_ptr<T>(new T(std::forward<Ts>(params)...));
      |                                     ~~~~~~~~~~~~~~~~^~~~~~~~
In file included from /usr/include/c++/9/bits/stl_pair.h:59,
                 from /usr/include/c++/9/bits/stl_algobase.h:64,
                 from /usr/include/c++/9/memory:62,
                 from example.cpp:1:
/usr/include/c++/9/bits/move.h:74:56: note:   initializing argument 1 of ‘constexpr _Tp&& std::forward(typename std::remove_reference<_Tp>::type&) [with _Tp = int; typename std::remove_reference<_Tp>::type = int]’
   74 |     forward(typename std::remove_reference<_Tp>::type& __t) noexcept
      |             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~
    ```
- Distractor 2
    - 
    ```cpp
    example.cpp: In function ‘int main()’:
example.cpp:37:34: error: no matching function for call to ‘make_unique<int>(int)’
   37 |     auto ptr = make_unique<int>(3);
      |                                  ^
example.cpp:19:1: note: candidate: ‘typename std::enable_if<(! std::is_array< <template-parameter-1-1> >::value), std::unique_ptr<_Tp> >::type make_unique(Ts& ...) [with T = int; Ts = {int}; typename std::enable_if<(! std::is_array< <template-parameter-1-1> >::value), std::unique_ptr<_Tp> >::type = std::unique_ptr<int, std::default_delete<int> >]’ <near match>
   19 | make_unique(Ts&... params)
      | ^~~~~~~~~~~
example.cpp:19:1: note:   conversion of argument 1 would be ill-formed:
example.cpp:37:33: error: cannot bind non-const lvalue reference of type ‘int&’ to an rvalue of type ‘int’
   37 |     auto ptr = make_unique<int>(3);
      |                                 ^
example.cpp:26:1: note: candidate: ‘template<class T> typename std::enable_if<is_unbounded_array<T>, std::unique_ptr<_Tp> >::type make_unique(std::size_t&)’
   26 | make_unique(std::size_t& n)
      | ^~~~~~~~~~~
example.cpp:26:1: note:   template argument deduction/substitution failed:
example.cpp: In substitution of ‘template<class T> typename std::enable_if<is_unbounded_array<T>, std::unique_ptr<_Tp> >::type make_unique(std::size_t&) [with T = int]’:
example.cpp:37:34:   required from here
example.cpp:26:1: error: no type named ‘type’ in ‘struct std::enable_if<false, std::unique_ptr<int, std::default_delete<int> > >’
example.cpp:33:1: note: candidate: ‘template<class T, class ... Ts> typename std::enable_if<is_bounded_array<T> >::type make_unique(Ts& ...)’ <deleted>
   33 | make_unique(Ts&...) = delete;
      | ^~~~~~~~~~~
example.cpp:33:1: note:   template argument deduction/substitution failed:
example.cpp: In substitution of ‘template<class T, class ... Ts> typename std::enable_if<is_bounded_array<T> >::type make_unique(Ts& ...) [with T = int; Ts = <missing>]’:
example.cpp:37:34:   required from here
example.cpp:33:1: error: no type named ‘type’ in ‘struct std::enable_if<false, void>’
    ```
- Distractor 3
    - Bounded array make_unique has to be deleted.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
