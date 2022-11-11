# programmatic_problem_solving

## Item ID
1509

## Claim
2

## Claim Behavior (evidence)
```cpp
#include <iostream>
#include <string>

// function recursively reverses a string
std::string recursive_string_reverse(std::string str)
{
	if (str.size() <= 1) {
		return str;
	}
	std::string first_char(1, str[0]);
	std::string last_chars(str.substr(1));
	// MISSING LINE
	return recursive_string_reverse(last_chars) + first_char;
}

int main(int argc, char** argv)
{
	std::cout << (recursive_string_reverse("tin")) << std::endl;
	std::cout << (recursive_string_reverse("triplebyte")) << std::endl;
}
```
```
% ./example
nit
etybelpirt
```

## Threshold Probabilities
[.50, .70, .85, .99]

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
// function recursively reverses a string
std::string recursive_string_reverse(std::string str)
{
	if (str.size() <= 1) {
		return str;
	}
	std::string first_char(1, str[0]);
	std::string last_chars(str.substr(1));
	// MISSING LINE
}
```

## Answer Key
```cpp
return recursive_string_reverse(last_chars) + first_char;
```


## Distractors

### 1.
```cpp
return recursive_string_reverse(last_chars);
```


### 2.
```cpp
return first_char + recursive_string_reverse(last_chars);
```


### 3.
```cpp
return last_chars + first_char;
```


## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

