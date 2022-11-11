# Backend - Programming Paradigms

## Item ID
2884

## Claim
1: architecture_design

## Target Skill Level
2

## Claim Behavior (evidence)
[Functional programming vs. imperative programming](https://docs.microsoft.com/en-us/dotnet/standard/linq/functional-vs-imperative-programming)

[Functional Programming in C#](https://www.manning.com/books/functional-programming-in-c-sharp)

## Content Target
Programming Paradigms (Imperative vs Functional)

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem
Most backend languages support either imperative or functional style of programming, often both. When comparing these two paradigms, which of the following statements is **incorrect**?

## Code Snippet (optional)

## Answer Key
Imperative programming makes it difficult to throw and handle exceptions, as it strives to minimize side effects.

## Distractors
### 1.
Code written in functional style is generally more compact, clean, and concise, as it tends to read like the problem statement itself.

### 2.
Functional programming focuses on "what" needs to be done, while delegating the "how" to underlying APIs and higher-order functions.

### 3.
Code written in imperative style relies on explicit mutation, temporary variables, and low-level instructions.

## Common errors, misconceptions, or irrelevant information:
Most mainstream languages were designed to primarily support and promote imperative (procedural) programming. However, imperative code tends to be too verbose and involve variable mutations, temporary (garbage) variables, and it usually takes more effort to comprehend and maintain.

Functional (declarative) programming is less verbose, more expressive, it avoids variable mutations and temporary variables. It lets programmers focus on what needs to be accomplished while delegating the "how" to underlying APIs and higher-order functions.

Functional programming strives to minimize side effects, so throwing exceptions is generally avoided. Instead, if an operation can fail, it should return a representation of its outcome, or some error data otherwise. In other words, errors in FP are just payload.



# Triplebyte Review

## Language Review: (TB only)

## Bias and Fairness Review: (TB only)

## Content Review: (TB only)
