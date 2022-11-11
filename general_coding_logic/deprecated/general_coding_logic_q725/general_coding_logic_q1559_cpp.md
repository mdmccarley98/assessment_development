# programmatic_problem_solving

## Item ID
1559

## Claim
1

## Claim Behavior (evidence)
NA

## Threshold Probabilities
[.40, .60, .85, .95]

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is the value of the variable `words` after the following code runs?

## Code Snippet (optional)
```cpp
std::string words[] = {"Hello", "World"};
for (auto& word : words) {
	std::reverse(word.begin(), word.end());
	for (auto& c : word)
		std::tolower(c);
}
```

## Answer Key
`{"olleH", "dlroW"}`

## Distractors

### 1.
`{"olleh", "dlrow"}`

### 2.
`{"Hello", "World"}`

### 3.
`{"hello", "world"}`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

