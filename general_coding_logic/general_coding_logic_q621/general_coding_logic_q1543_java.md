# programmatic_problem_solving

## Item ID
1543

## Claim
2

## Claim Behavior (evidence)
```java
// Copyright (C) 2020 Triplebyte

import java.util.ArrayList;
import java.util.Arrays;
import java.util.function.Predicate;

public class Example {

	public static void example(Predicate<Integer> func, ArrayList<Integer> items)
	{
		int i = 0;
		for (int item : items) {
			if (func.test(item)) {
				items.set(i, item);
				i += 1;
			}
		}
		items.subList(i, items.size()).clear();
	}

	public static void main(String[] args) {
		ArrayList<Integer> arr = new ArrayList<>(Arrays.asList(1, 2, 5, 5, 5, 1));
		example(i -> i == 5, arr);
		System.out.println(arr);
	}
}
```
```
% javac Example.java && java Example
[5, 5, 5]
```

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What does the following code do?

## Code Snippet (optional)
```java
public void example(Predicate<Integer> func, ArrayList<Integer> items)
{
	int i = 0;
	for (int item : items) {
		if (func.test(item)) {
			items.set(i, item);
			i += 1;
		}
	}
	items.subList(i, items.size()).clear();
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

