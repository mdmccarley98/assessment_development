# programmatic_problem_solving

## Item ID
1547

## Claim
2

## Claim Behavior (evidence)
NA

## Threshold Probabilities
[.70, .85, .95, .99]

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Select the line of code that completes the function

## Code Snippet (optional)
```cpp
std::vector<int> map(const std::vector<int>& array, std::function<int(int)> method)
{
	std::vector<int> result;
	for (const int& element : array) {
		int value = method(element);
		// MISSING LINE
	}
	return result;
}
```

## Answer Key
```cpp
		result.push_back(value);
```

## Distractors

### 1.
```cpp
		return value;
```

### 2.
```cpp
		value.push_back(array);
```

### 3.
```cpp
		method(value);
```

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

