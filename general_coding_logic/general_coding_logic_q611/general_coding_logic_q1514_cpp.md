# programmatic_problem_solving

## Item ID
1514

## Claim
2

## Claim Behavior (evidence)
```cpp
#include <algorithm>
#include <iostream>
#include <string>

int main(int argc, char** argv)
{
	struct O {
		std::string name;
		std::string date;
		O(std::string name, std::string date) {
			this->name = name;
			this->date = date;
		}
		O(const O& other) {
			this->name = other.name;
			this->date = other.date;
		}
	};

	O arr[] = {
		O{"apple", "2021-05-01"},
		O{"bubble", "2021-02-28"},
		O{"art", "2021-04-01"},
		O{"bubble", "2021-03-01"},
	};

	// Answer
//	std::stable_sort(std::begin(arr), std::end(arr), [](const O &a, const O &b){
//		return a.name == b.name ? a.date > b.date : a.name < b.name;
//	});

	// D1
//	std::stable_sort(std::begin(arr), std::end(arr), [](const O &a, const O &b){
//		return a.name < b.name || a.date < b.date;
//	});

	// D2
//	std::stable_sort(std::begin(arr), std::end(arr), [](const O &a, const O &b){
//		return a.name == b.name ? a.date < b.date : a.name > b.name;
//	});

	// D3
//	std::stable_sort(std::begin(arr), std::end(arr), [](const O &a, const O &b){
//		return a.date < b.date || a.name < b.name;
//	});

	for (auto& i : arr)
		std::cout << i.name << ":" << i.date << ", ";
	std::cout << std::endl;
}
```

## Threshold Probabilities
[.50, .70, .80, .90]

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Given objects with `name` and `date` fields, the task is to sort the objects alphabetically by name, using most recent date as a tie-breaker. Which call(s) to a stable sort method would implement this correctly?

## Code Snippet (optional)

## Answer Key
```cpp
std::stable_sort(std::begin(arr), std::end(arr), [](const O &a, const O &b){
	return a.name == b.name ? a.date > b.date : a.name < b.name;
});
```

## Distractors

### 1.
```cpp
std::stable_sort(std::begin(arr), std::end(arr), [](const O &a, const O &b){
	return a.name < b.name || a.date < b.date;
});
```

### 2.
```cpp
std::stable_sort(std::begin(arr), std::end(arr), [](const O &a, const O &b){
	return a.name == b.name ? a.date < b.date : a.name > b.name;
});
```

### 3.
```cpp
std::stable_sort(std::begin(arr), std::end(arr), [](const O &a, const O &b){
	return a.date < b.date || a.name < b.name;
});
```

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

