# C➕➕ Reserved Words

## Item ID
2511

## Claim
Claim 1

## Claim Behavior (evidence)
> -- https://en.cppreference.com/w/cpp/keyword

## Target Level
Level 4

## Content Target
- operator
- auto

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
What is the output of this code?

## Code Snippet (optional)
```cpp
struct override {
  operator auto() noexcept{    
    std::cout << "1";
    return 1;
  }
};

int main() {
  auto&& a = override();
  std::cout << *a << std::endl;
}
```

## Answer Key
None. Code doesn't compile because there is no match for operator *.

## Distractors

### 1.
11.

### 2.
None. Code doesn't compile because override is a reserved word and is being used as the struct name.

### 3.
None. Code doesn't compile because auto is a reserved word and is being used as the function name.

## Common errors, misconceptions, or irrelevant information:
- Distractor 1
    - Code doesn't compile, but if instead of `*a' we would put `a', it would compile, and it would output exactly 11.
- Distractor 2
    - `override` can be used as a name.
- Distractor 3
    - `auto` is a reserved word and is being used correctly in this case, `operator ()` has return `auto`, which will be deduced from the return of this function.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
