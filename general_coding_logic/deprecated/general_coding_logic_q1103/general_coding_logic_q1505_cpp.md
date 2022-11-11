# programmatic_problem_solving

## Item ID
1505

## Claim
2

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Threshold Probabilities
[.40, .55, .70, .85]

## Item Type
Multiple Choice

## Stem
The below code implements the `quickselect` algorithm for finding the kth smallest element in an unordered list.  Fill in the missing line of code.

## Code Snippet (optional)
```cpp
std::random_device g_random_device;

template<typename T>
T select(const std::vector<T>& values, int k)
{
	// randomly select a pivot
	const int r = std::uniform_int_distribution<int>(0, values.size())(g_random_device);
	const T& pivot = values[r];

	std::vector<T> low, high;
	for (const T& value : values) {
		if (value < pivot) {
			low.push_back(value);
		} else if (value > pivot) {
			high.push_back(value);
		}
	}
	if (k < low.size()) {
		return select(low, k);
	}

	// MISSING LINE

	if (k < 0) {
		return pivot;
	}
	return select(high, k);
}
```

## Answer Key
`k += high.size() - values.size();`

## Distractors

### 1.
`k -= values.size();`

### 2.
`k -= low.size();`

### 3.
`k = values.size() - high.size() - low.size();`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

