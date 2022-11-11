# C➕➕ 3 Standard: casting

## Item ID
1865

## Claim
-   Claim 2 (Modern C++): Candidates know the most used features of STL and modern C++.

## Threshold Probabilities
[.30, .60, .75, .90]

## Claim Behavior (evidence)
> Dynamic cast of `shared_ptr`
> Returns a copy of `sp` of the proper type with its stored pointer casted dynamically from `U*` to `T*`.
> 
> If `sp` is not empty, and such a cast would not return a null pointer, the returned object shares ownership over `sp`'s resources, increasing by one the use count.
> 
> Otherwise, the returned object is an empty `shared_ptr`.
> 
> The function can only cast types for which the following expression would be valid:
> 
>     dynamic_cast<T*>(sp.get())
> 
> -- http://www.cplusplus.com/reference/memory/dynamic_pointer_cast/

-- https://en.cppreference.com/w/cpp/language/dynamic_cast

```
$ ./example
Example:
cat
dog
```
-- [example.cpp](./example.cpp)

```
$ ./distractor1
Distractor 1:
cat
cat
```
-- [distractor1.cpp](./distractor1.cpp)

```
$ ./distractor2
Distractor 2:
cat
cat
```
-- [distractor2.cpp](./distractor2.cpp)

```
$ make distractor3
[ 50%] Building CXX object CMakeFiles/distractor3.dir/distractor3.cpp.o
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/3-std-cast/distractor3.cpp:31:13: error: 'std::shared_ptr<Cat>' is not a reference or pointer
        if (dynamic_cast<std::shared_ptr<Cat>>(a))
            ^           ~~~~~~~~~~~~~~~~~~~~~~
/mnt/c/Users/Robert/Dev/triplebyte-assessment/cpp/3-std-cast/distractor3.cpp:35:18: error: 'std::shared_ptr<Dog>' is not a reference or pointer
        else if (dynamic_cast<std::shared_ptr<Dog>>(a))
                 ^           ~~~~~~~~~~~~~~~~~~~~~~
2 errors generated.
```
-- [distractor3.cpp](./distractor3.cpp)

## Content Target
* casting
* dynamic_cast
* shared_ptr

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem

You have a vector of shared pointers to a base `Animal` class.
You want to check the type of the pointer using a cast.

Choose the snippet that completes the C++ code below.

## Code Snippet (optional)
```cpp
class Animal {
public:
    virtual std::string sound() = 0;
};

class Cat : public Animal {
public:
    std::string sound() override {
        return "meow";
    }
};

class Dog : public Animal {
public:
    std::string sound() override {
        return "bark";
    }
};

int main()
{
    auto animals = std::vector<std::shared_ptr<Animal>>{
        std::make_shared<Cat>(),
        std::make_shared<Dog>()
    };
    for (auto& a : animals) {
        std::string kind;

        // *** CHOOSE THE CODE THAT GOES HERE ***

        std::cout << kind << std::endl;
    }
}
```

## Answer Key
```cpp
        if (dynamic_cast<Cat *>(a.get()))
        {
            kind = "cat";
        }
        else if (dynamic_cast<Dog *>(a.get()))
        {
            kind = "dog";
        }
```

## Distractors

### 1.
```cpp
        if (static_cast<Cat *>(a.get()))
        {
            kind = "cat";
        }
        else if (static_cast<Dog *>(a.get()))
        {
            kind = "dog";
        }
```


### 2.
```cpp
        if ((Cat *)a.get())
        {
            kind = "cat";
        }
        else if ((Dog *)a.get())
        {
            kind = "dog";
        }
```


### 3.
```cpp
        if (dynamic_cast<std::shared_ptr<Cat>>(a))
        {
            kind = "cat";
        }
        else if (dynamic_cast<std::shared_ptr<Dog>>(a))
        {
            kind = "dog";
        }
```


## Common errors, misconceptions, or irrelevant information:
```cpp
    if (std::dynamic_pointer_cast<Cat>(a))
```
would also work, but it's only referenced in 300k times on github as opposed to `dynamic_cast` which is referenced 4M times.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
