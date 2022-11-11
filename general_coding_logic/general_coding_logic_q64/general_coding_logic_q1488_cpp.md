# programmatic_problem_solving

## Item ID
1488

## Claim
2

## Claim Behavior (evidence)
```cpp
#include <iostream>
#include <vector>

// function returns index of first matching
// element in array
int first_index_of_element_in_array(int element, std::vector<int> array)
{
	for (int i = 0; i < array.size(); i++) {
		int array_element = array[i];
		// MISSING CODE
		if (array_element == element) {
			return i;
		}
	}
	return -1;
}

int main(int argc, char** argv)
{
	std::vector<int> abc = {20, 2, 3, 4, 5, 6, 7, 8};
	std::cout << first_index_of_element_in_array(3, abc) << std::endl;

	std::vector<int> none = {};
	std::cout << first_index_of_element_in_array(3, none) << std::endl;
}
```
```
% ./example
2
-1
```

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
// function returns index of first matching
// element in array
int first_index_of_element_in_array(int element, std::vector<int> array)
{
	for (int i = 0; i < array.size(); i++) {
		int array_element = array[i];
		// MISSING CODE
	}
	return -1;
}
```


## Answer Key
```cpp
		if (array_element == element) {
			return i;
		}
```


## Distractors

### 1.
```cpp
		return array_element == element;
```


### 2.
```cpp
		i += 1;
```


### 3.
```cpp
		if (element == array_element) {
			return i + 1;
		}
```


## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

