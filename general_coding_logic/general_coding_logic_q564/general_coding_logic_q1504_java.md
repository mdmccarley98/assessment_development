# programmatic_problem_solving

## Item ID
1504

## Claim
1

## Claim Behavior (evidence)
NA

## Content Target
coding

## Cognitive Model
NA

## Item Type
Multiple Choice

## Stem
What is the value of the variable `tree` after the following code runs?

## Code Snippet (optional)
```java
class Tree extends HashMap<String, Tree> {}

public class Example {

	public static Tree buildWordTreeFromSentences(List<String> sentenceList)
	{
		Tree root = new Tree();
		for (String sentence : sentenceList) {
			Tree base = root;
			for (String word : sentence.split(" ")) {
				if (!base.containsKey(word))
					base.put(word, new Tree());
				base = base.get(word);
			}
		}
		return root;
	}

	public static void main(String[] args) {
		Tree tree = buildWordTreeFromSentences(Arrays.asList("Hello world", "Hello there"));
	}
}
```

## Answer Key
```java
{Hello={world={}, there={}}}
```

## Distractors

### 1.
```java
[Hello, [world, there]]
```

### 2.
```java
{Hello={world, there}}
```

### 3.
```java
{Hello={Hello world={}, Hello there={}}}
```

## Common errors, misconceptions, or irrelevant information:
NA

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

