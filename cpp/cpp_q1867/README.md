# C➕➕ - Standard: exceptions

## Item ID
1867

## Claim
Claim 2

## Threshold Probabilities
[.40, .55, .75, .90]

## Claim Behavior (evidence)
> Exception objects
> 
> While objects of any complete type and cv pointers to void may be thrown as exception objects, all standard library functions throw anonymous temporary objects by value, and the types of those objects are derived (directly or indirectly) from std::exception. User-defined exceptions usually follow this pattern.
>
> -- https://en.cppreference.com/w/cpp/language/exceptions

> How should I design my exception classes?
>
> > Derive your exception class from std::exception. Except in *very* rare circumstances where you can't afford the cost of a virtual table, std::exception makes a reasonable exception base class, and when used universally, allows programmers to catch "everything" without resorting to catch(...). 
>
> -- https://www.boost.org/community/error_handling.html

## Content Target
- std::exception

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem
The following code crashes and never prints "end":

```cpp
#include <iostream>
#include <exception>
using namespace std;

void bad()
{
    throw "error here";
}

int main()
{
    try
    {
        bad();
    }
    catch (exception &ex)
    {
        cout << ex.what() << endl;
    }

    cout << "end" << endl;
}
```

Its output is:

```
terminate called after throwing an instance of 'char const*'
Aborted (core dumped)
```

How do you fix it so that it handles the exception correctly?

## Code Snippet (optional)

## Answer Key
Throw a `std::exception`:

```cpp
void bad()
{
    throw logic_error("error here");
}
```

## Distractors
### 1.
Catch an ex (does not compile because "ex" is not a type):

```cpp
catch (ex)
{
    cout << ex << endl;
}
```

### 2.
Catch all (does not compile because identifier "ex" is not bound):

```cpp
catch (...)
{
    cout << ex << endl;
}
```

### 3.
Throw inside the try (does not compile because you can't throw a void object):

```cpp
try
{
    throw bad();
}
```

## Common errors, misconceptions, or irrelevant information:
The standard library throws `std::exception`, and it's easy to derive, so you should also derive from `std::exception` even though you could throw nearly anything. see: https://www.boost.org/community/error_handling.html

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
