# programmatic_problem_solving

## Item ID
1516

## Claim
2

## Claim Behavior (evidence)
```java
// Copyright (C) 2020 Triplebyte

import java.util.*;
import static java.util.Arrays.asList;

class O {
	public String name;
	public String date;
	public int correctOrder;
	public O(String name, String date, int correctOrder) {
		this.name = name;
		this.date = date;
		this.correctOrder = correctOrder;
	}

	@Override
	public String toString() {
		return "O{" +
				correctOrder +
				'}';
	}
}

public class Example {

	public static List<O> makeList() {
		return asList(
				new O("C", "2021-04-05", 5),
				new O("A", "2021-04-06", 1),
				new O("B", "2021-04-07", 2),
				new O("B", "2021-04-05", 4),
				new O("B", "2021-04-06", 3)
		);
	}

	public static void main(String[] args) throws java.io.IOException {
		{
			List<O> objs = makeList();
			Comparator<O> compareName = Comparator.comparing(a->a.name);
			Comparator<O> compareDate = Comparator.comparing(a->a.date);
			objs.sort(compareName.thenComparing(compareDate.reversed()));
			System.out.println("Answer:");
			System.out.println(objs);
		}

		{
			List<O> objs = makeList();
			objs.sort((a, b) -> a.name.compareTo(b.name) | a.date.compareTo(b.date));
			System.out.println("D1:");
			System.out.println(objs);
		}

		{
			List<O> objs = makeList();
			Comparator<O> compareName = Comparator.comparing(a->a.name);
			Comparator<O> compareDate = Comparator.comparing(a->a.date);
			objs.sort(compareDate.thenComparing(compareName).reversed());
			System.out.println("D2:");
			System.out.println(objs);
		}

		{
			List<O> objs = makeList();
			objs.sort((a, b) -> a.date.compareTo(b.date) | a.name.compareTo(b.name));
			System.out.println("D3:");
			System.out.println(objs);
		}
	}
}
```
```
Answer:
[O{1}, O{2}, O{3}, O{4}, O{5}]
D1:
[O{4}, O{1}, O{3}, O{2}, O{5}]
D2:
[O{2}, O{3}, O{1}, O{5}, O{4}]
D3:
[O{4}, O{1}, O{3}, O{2}, O{5}]
```

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
Given objects with `name` and `date` fields, the task is to sort the objects alphabetically by name, using most recent date as a tie-breaker. Which call(s) to the sort method would implement this correctly?


## Code Snippet (optional)

## Answer Key
```java
Comparator<O> compareName = Comparator.comparing(a->a.name);
Comparator<O> compareDate = Comparator.comparing(a->a.date);
objs.sort(compareName.thenComparing(compareDate.reversed()));
```

## Distractors

### 1.
```java
objs.sort((a, b) -> a.name.compareTo(b.name) | a.date.compareTo(b.date));
```

### 2.
```java
Comparator<O> compareName = Comparator.comparing(a->a.name);
Comparator<O> compareDate = Comparator.comparing(a->a.date);
objs.sort(compareDate.thenComparing(compareName).reversed());
```

### 3.
```java
objs.sort((a, b) -> a.date.compareTo(b.date) | a.name.compareTo(b.name));
```

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

