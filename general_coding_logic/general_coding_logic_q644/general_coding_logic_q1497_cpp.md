# programmatic_problem_solving

## Item ID
1497

## Claim
1

## Claim Behavior (evidence)
NA

## Threshold Probabilities
[.50, .70, .85, .95]

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What does the following code output?

## Code Snippet (optional)
```cpp
template<typename A, typename B>
void func(A a, B& b)
{
    a += 1;
    b.push_back(1);
}

int main(int argc, char** argv)
{
    int a = 0;
    std::vector<int> b;
    func(a, b);
    std::cout << a << "[";
    for (auto& i : b)
        std::cout << i;
    std::cout << "]" << std::endl;
}
```

## Answer Key
`0[1]`

## Distractors

### 1.
`0[]`

### 2.
`1[1]`

### 3.
`1[]`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

