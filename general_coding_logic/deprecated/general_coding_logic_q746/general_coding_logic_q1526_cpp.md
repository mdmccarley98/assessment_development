# programmatic_problem_solving

## Item ID
1526

## Claim
3

## Claim Behavior (evidence)
```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <vector>
#include <sstream>
#include <iterator>
#include <iomanip>

int main(int argc, char** argv)
{
	assert(format(0) == "0");
	assert(format(100) == "100");
	assert(format(100000) == "100,000");
	assert(format(1000) == "1,000");
}
```

```
Assertion failed: (format(1000) == "1,000"), function main
```

001,000

## Content Target
coding

## Cognitive Model
NA

## Threshold Probabilities
[.20, .40, .70, .80]

## Item Type
Multiple Choice

## Stem
The below function attempts to format an integer, using commas as a thousands separator.  Which test case would fail, indicating a bug?

## Code Snippet (optional)
```cpp
std::string format(int num, std::string sep=",")
{
	std::vector<std::string> parts;
	while (num) {
		std::ostringstream oss;
		int mod = num % 1000;
		num = num / 1000;
		oss << std::setfill('0') << std::setw(3) << mod;
		parts.push_back(oss.str());
	}

	if (parts.empty()) {
		return "0";
	}

	auto first = parts.rbegin();
	std::string result = *first;
	auto second = ++first;
	for (auto i = second; i != parts.rend(); ++i) {
		result += sep + *i;
	}
	return result;
}
```

## Answer Key

`assert(format(1000) == "1,000");`

## Distractors

### 1.
`assert(format(0) == "0");`

### 2.
`assert(format(100) == "100");`

### 3.
`assert(format(100000) == "100,000");`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

