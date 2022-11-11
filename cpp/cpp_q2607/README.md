# C➕➕ Optional Caveats

## Item ID
2607

## Claim
Claim 2

## Claim Behavior (evidence)
-- https://en.cppreference.com/w/cpp/utility/optional

## Target Level
Level 5

## Content Target
- optional
- reference_wrapper
- nullptr

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
To create a `std::optional` to store `"Triplebyte"` as a string ref, a user wrote the code below:

```cpp
#include <iostream>
#include <optional>
#include <string>
#include <functional>

auto create_ref(bool b) {
    static std::string value = "Triplebyte";
    return b ? std::optional<std::reference_wrapper<std::string>>{value}
             : std::nullopt;
}

int main()
{   
    auto str = create_ref(1);    
    std::optional<std::nullopt_t> nullopt_var = create_ref(0);
    std::cout << str->get() << std::endl;
    std::cout << *nullopt_var << std::endl;
}
```

However, the code doesn't compile. How should you change it so that it will compile?

## Code Snippet (optional)

## Answer Key
```cpp
#include <iostream>
#include <optional>
#include <string>
#include <functional>

auto create_ref(bool b) {
    static std::string value = "Triplebyte";
    return b ? std::optional<std::reference_wrapper<std::string>>{value}
             : std::nullopt;
}

int main()
{   
    auto str = create_ref(true);
    auto nullopt_var = create_ref(false);
    if(!nullopt_var)
        std::cout << str->get() << std::endl;
}
```

## Distractors

### 1.
```cpp
#include <iostream>
#include <optional>
#include <string>
#include <functional>

auto create_ref(bool b) {
    static std::string value = "Triplebyte";
    return b ? std::optional<std::string&>{value}
             : std::nullopt;
}

int main()
{   
    auto str = create_ref(true);
    auto nullopt_var = create_ref(false);
        std::cout << str->get() << " " << nullopt_var std::endl;
}
```

### 2.
```cpp
#include <iostream>
#include <optional>
#include <string>
#include <functional>

auto create_ref(bool b) {
    static std::string value = "Triplebyte";
    return b ? std::optional<std::string&>{value}
             : std::nullopt;
}

int main()
{   
    auto str = create_ref(1);    
    auto nullopt_var = create_ref(0);
    std::cout << str->get() << std::endl;
    std::cout << *nullopt_var << std::endl;
}
```

### 3.
```cpp
#include <iostream>
#include <optional>
#include <string>
#include <functional>

auto create_ref(bool b) {
    static std::string value = "Triplebyte";
    return b ? std::optional<std::reference_wrapper<std::string>>{value}
             : std::nullopt;
}

int main()
{   
    auto str = create_ref(true);
    auto nullopt_var = create_ref(false);
    if(!nullopt_var)
        std::cout << *str << std::endl;
}
```

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - Doesn't compile because `std::optional<std::string&>{value}` is an error, optional doesn't accept references in the type.
- Distractor 2
    - Same as distractor 1 with the addition that this `std::cout << *nullopt_var << std::endl;` also doesn't work.
- Distractor 3
    - `std::cout << *str << std::endl;` this doesn't compile, the type in the optional is std::reference_wrapper, you have to access with `get()`

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
