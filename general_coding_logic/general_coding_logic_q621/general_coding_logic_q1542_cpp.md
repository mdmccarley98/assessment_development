# programmatic_problem_solving

## Item ID
1542

## Claim
2

## Claim Behavior (evidence)
```cpp
#include <iostream>
#include <vector>

template<typename Func, typename T>
void example(Func func, std::vector<T>& items)
{
	auto i = 0;
	for(auto& item : items) {
		if (func(item)) {
			items[i] = item;
			i += 1;
		}
	}
	items.erase(items.begin() + i, items.end());
}

int main(int argc, char** argv)
{
	auto f = [](int& i) -> bool {
		return i == 5;
	};
	std::vector<int> arr = {1, 5, 5, 2, 5};
	example(f, arr);
	for (auto const& i : arr) {
		std::cout << i << std::endl;
	}
}
```
```
% ./example
5
5
5
```

## Threshold Probabilities
[.50, .70, .85, .95]


## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What does the following code do?

## Code Snippet (optional)
```cpp
template<typename Func, typename T>
void example(Func func, std::vector<T>& items)
{
	auto i = 0;
	for(auto& item : items) {
		if (func(item)) {
			items[i] = item;
			i += 1;
		}
	}
	items.erase(items.begin() + i, items.end());
}
```

## Answer Key
Filter a sequence in-place for items which satisfy a predicate

## Distractors

### 1.
Remove items which satisfy a predicate

### 2.
Partition the items around a pivot value

### 3.
Return sorted items

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

