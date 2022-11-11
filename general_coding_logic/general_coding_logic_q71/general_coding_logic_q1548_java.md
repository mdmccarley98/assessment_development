# programmatic_problem_solving

## Item ID
1548

## Claim
2

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Select the line of code that completes the function

## Code Snippet (optional)
```java
	public static List<Integer> map(List<Integer> array, Function<Integer, Integer> method)
	{
		List<Integer> result = new ArrayList<>();
		for (int element : array) {
			int value = method.apply(element);
			// MISSING LINE
		}
		return result;
	}
```

## Answer Key
```java
		result.add(value);
```

## Distractors

### 1.
```java
		return value;
```

### 2.
```java
		value.add(array);
```

### 3.
```java
		method.apply(value);
```

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

