# programmatic_problem_solving

## Item ID
1531

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Threshold Probabilities
[.20, .40, .65, .80]

## Item Type
Multiple Choice

## Stem
What does the following code output?

## Code Snippet (optional)
```cpp
int main(int argc, char** argv)
{
	std::promise<int> promise;
	auto future = promise.get_future();
	for (auto& i : { 3, 2, 1 }) {
		std::thread work([&promise, i]() {
			std::this_thread::sleep_for(std::chrono::seconds(i));
			promise.set_value(i);
		});
		work.detach();
	}
	std::cout << future.get() << std::endl;
}
```

## Answer Key
`1`

## Distractors

### 1.
`3`

### 2.
`{3, 2, 1}`

### 3.
`{1, 2, 3}`

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

