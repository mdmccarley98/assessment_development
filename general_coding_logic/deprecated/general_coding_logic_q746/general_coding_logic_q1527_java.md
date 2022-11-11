# programmatic_problem_solving

## Item ID
1527

## Claim
3

## Claim Behavior (evidence)
```java
// Copyright (C) 2020 Triplebyte

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

public class Example {

	public static String format(int num)
	{
		List<String> parts = new ArrayList<>();
		while (num != 0) {
			int mod = num % 1000;
			num = num / 1000;
			parts.add(0, String.format("%03d", mod));
		}
		return parts.isEmpty() ? "0" : String.join(",", parts);
	}

	public static void main(String[] args) {
		assert format(0).equals("0");
		assert format(100).equals("100");
		assert format(100000).equals("100,000");
		assert format(1000).equals("1,000");
		System.out.println(format(1000));
	}
}
```
```
/Users/robert/Library/Java/JavaVirtualMachines/adopt-openjdk-11.0.10/Contents/Home/bin/java -ea -javaagent:/Users/robert/Library/Application Support/JetBrains/Toolbox/apps/IDEA-U/ch-0/203.7717.56/IntelliJ IDEA.app/Contents/lib/idea_rt.jar=65394:/Users/robert/Library/Application Support/JetBrains/Toolbox/apps/IDEA-U/ch-0/203.7717.56/IntelliJ IDEA.app/Contents/bin -Dfile.encoding=UTF-8 -classpath /Users/robert/Dev/Example/out/production/Example Example
Exception in thread "main" java.lang.AssertionError
	at Example.main(Example.java:25)
```

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
The below function attempts to format an integer, using commas as a thousands separator.  Which test case would fail, indicating a bug?

## Code Snippet (optional)
```java
public static String format(int num)
{
	List<String> parts = new ArrayList<>();
	while (num != 0) {
		int mod = num % 1000;
		num = num / 1000;
		parts.add(0, String.format("%03d", mod));
	}
	return parts.isEmpty() ? "0" : String.join(",", parts);
}
```

## Answer Key
`assert format(1000).equals("1,000");`

## Distractors

### 1.
`assert format(0).equals("0");`

### 2.
`assert format(100).equals("100");`

### 3.
`assert format(100000).equals("100,000");`

## Common errors, misconceptions, or irrelevant information:
You need to add `-ea` to the Java VM options to enable assert exceptions
otherwise, the answer will not throw.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

