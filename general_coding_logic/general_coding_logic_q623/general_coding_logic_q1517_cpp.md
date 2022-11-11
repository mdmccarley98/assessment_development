# programmatic_problem_solving

## Item ID
1517

## Claim
2

## Claim Behavior (evidence)
NA

## Threshold Probabilities
[.35, .55, .80, .95]

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
The following code implements a random sample of items in a single pass.  Fill in the missing line of code.

## Code Snippet (optional)
```cpp
template<typename T>
void sample(const std::vector<T>& items, const int n, std::vector<T>& result)
{
    std::random_device rd;
    result.clear();
    for (auto i = 0; i < items.size(); i++) {
        if (i < n) {
            result.push_back(items[i]);
        } else {
            int j = std::uniform_int_distribution<int>(0, i)(rd); // random integer, inclusive
            if (j < n) {
                // MISSING CODE
            }
        }
    }
}
```

## Answer Key
```cpp
                result[j] = items[i];
```

## Distractors

### 1.
```cpp
                result[i] = items[i];
```

### 2.
```cpp
                result.push_back(items[i]);
```

### 3.
```cpp
                result.erase(result.begin() + j);
```

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
