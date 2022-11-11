# Datastructure Thread Safety

## Item ID
1598

## Claim
Claim 2: libraries_frameworks

## Claim Behavior (evidence)

* [Class Vector](https://docs.oracle.com/javase/10/docs/api/java/util/Vector.html) - Oracle
* [Class HashMap](https://docs.oracle.com/javase/10/docs/api/java/util/HashMap.html) - Oracle
* [Class HashSet](https://docs.oracle.com/javase/10/docs/api/java/util/HashSet.html) - Oracle
* [Class ArrayList](https://docs.oracle.com/javase/10/docs/api/java/util/ArrayList.html) - Oracle

## Content Target
Thread Safety

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Which of the following data structure implementations is thread-safe?


## Code Snippet (optional)


## Answer Key
`java.util.Vector`


## Distractors

### 1.
`java.util.HashMap`

### 2.
`java.util.HashSet`

### 3.
`java.util.ArrayList`


## Common errors, misconceptions, or irrelevant information (optional):

* It is important to know that the most commonly used data structures in Java are optimized for performance in a single-threaded context, not safety in a multi-threaded context.
* Java has many thread-safe collections available, but some knowledge of their performance characterists is necessary to choose the right one for your application.
* There is also a way of wrapping collections in a synchronious wrapper, but this likely will not perform as well as one of the thread-safe implementations.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)