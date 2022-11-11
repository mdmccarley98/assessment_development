# Python 

## Item ID
2306

## Claim
2

## Claim Behavior (evidence)

[type hints](https://docs.python.org/3/library/typing.html)

## Content Target
Methods

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Consider a custom class `MyClass`. `MyClass` defines multiple methods of one parameter that are all named `method_name` and differ in the type annotation of the parameter. 

For example, it might have `def method_name(self, parameter: int)` followed by `def method_name(self, parameter: bool)`.

What happens when `MyClass().method_name(parameter)` is called?

## Code Snippet (optional)

## Answer Key

The last `method_name` defined is invoked

## Distractors

### 1.

The first `method_name` defined is invoked

### 2.

It is a compile time error to have multiple methods with the same name

### 3.

The `method_name` with the closest match on the type of parameter is invoked

## Common errors, misconceptions, or irrelevant information:

Type annotations are not considered at runtime, and there is no concept of method overloading like there is in Java. 

Each definition just overwrites the one before it, so the last definition is the only one that exists on the class.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

