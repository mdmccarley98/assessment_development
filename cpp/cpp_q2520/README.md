# C++ Loop with continue

## Item ID
2520

## Claim
- Claim 1

## Claim Behavior (evidence)
> https://timsong-cpp.github.io/cppwp/n4659/stmt.cont#1 
> in the standard: "The continue statement (...) causes control to pass to the loop-continuation portion of the smallest enclosing iteration-statement, that is, to the end of the loop." (Not to the beginning.)

## Content Target
- loop
- continue
- break

## Target Level
- Level 4

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
What is the output of the code below?

## Code Snippet (optional)
```cpp
#include <iostream>

int main() {
    int i=1;
    do {
        std::cout << i;
        i++;
        if(i < 10) continue;
        if(i > 8) continue;
    } while(false);
    return 0;
}
```

## Answer Key
1

## Distractors
### 1.
12345678

### 2.
123456789

### 3.
Never stops printing

## Common errors, misconceptions, or irrelevant information:
It's straightforward once the candidate understands the concept, but it's very tricky. `continue` makes you jump to the end of the loop and test the condition again instead of jumping to the beginning.
Since most of the distractors are actually towards the idea that `continue` jumps to the beginning, the user will be confused with the three distractors if he has no clue about this.

# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
