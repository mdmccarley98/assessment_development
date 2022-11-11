# Sets and Ordering

## Item ID
1582

## Claim
Claim 2: Candidate is able to manipulate the language’s container objects in whatever form they take

## Claim Behavior (evidence)

* [Class LinkedHashSet](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedHashSet.html) - Oracle
* [Class TreeSet](https://docs.oracle.com/javase/8/docs/api/java/util/TreeSet.html) - Oracle

## Content Target
Multiple Exceptions

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
What is the output of the following code snippet?


## Code Snippet (optional)
```java
Set<String> ts = new TreeSet<>();
Set<String> lhs = new LinkedHashSet<>();

ts.addAll(Arrays.asList("Charlie", "Alice", "Bob"));
lhs.addAll(Arrays.asList("Charlie", "Alice", "Bob"));

System.out.println("TreeSet: " + String.join(", ", ts));
System.out.println("LinkedHashSet: " + String.join(", ", lhs));
```

## Answer Key
TreeSet: Alice, Bob, Charlie
LinkedHashSet: Charlie, Alice, Bob


## Distractors

### 1.
TreeSet: Charlie, Alice, Bob
LinkedHashSet: Charlie, Alice, Bob

### 2.
TreeSet: Alice, Bob, Charlie
LinkedHashSet: Alice, Bob, Charlie

### 3.
You cannot know for sure. The order of iteration is undefined for Sets.


## Common errors, misconceptions, or irrelevant information (optional):

* `TreeSet` iterates based on "natural order" (ie. the `Comparable` interface), unless a `Comparator` is provided.
* `LinkedHashSet` iterates based on insertion order.
* The most commonly used Set, `HashSet` does not guarantee any particular iteration order.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)