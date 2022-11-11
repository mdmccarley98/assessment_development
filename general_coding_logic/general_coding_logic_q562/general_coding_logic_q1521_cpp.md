# programmatic_problem_solving

## Item ID
1521

## Claim
1

## Claim Behavior (evidence)
NA

## Threshold Probabilities
[.40, .55, .75, .85]

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is the value of the variable `names` after the following code runs?

## Code Snippet (optional)
```cpp
void deleteBlankItems(std::vector<std::string>& items)
{
    for (int i = 0; i < items.size(); i++) {
        if (items[i].size() == 0) {
            // remove 1 element at index i
            // modifies array in place
            items.erase(items.begin() + i);
        }
    }
}

int main(int argc, char** argv)
{
    std::vector<std::string> names = {"Rachel", "", "Meghana", "", "", "Tim"};
    deleteBlankItems(names);
}
```

## Answer Key
`{"Rachel", "Meghana", "", "Tim"}`

## Distractors

### 1.
`{"Rachel", "", "Meghana", "", "", "Tim"}`

### 2.
`{"Rachel", "", "Meghana", "", "Tim"}`

### 3.
`{"Rachel", "Meghana", "Tim"}`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
