# Go Syntax Redeclaration

## Item ID
go-syntax-redeclaration

## Claim
1. Understand the core syntax of the language itself.

## Claim Behavior (evidence)
> This duplication is legal: err is declared by the first statement, but only re-assigned in the second.
- [Effective Go - Redeclaration and reassignment](https://golang.org/doc/effective_go.html#redeclaration) - golang.org

## Content Target
declaring variables

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
What are the values of a, b, and c?

## Code Snippet
```golang
	a, b := 2, 3
	b, c := 7, 9
```

## Answer Key
* a: 2
* b: 7
* c: 9

## Distractors

### 1.
* a: 2
* b: 3
* c: 9

### 2.
There is an error:

./main.go:7:6: b redeclared in this block

### 3.
There is an error:

/main.go:6:13: syntax error: unexpected literal 3 at end of statement


## Common errors, misconceptions, or irrelevant information:

When using the `:=` shorthand you can redeclare variables.  This is very helpful for redeclaring `err` many times in a function.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

