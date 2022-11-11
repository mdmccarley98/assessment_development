# Go Features Unused Import

## Item ID
go-features-unused-import

## Claim
3. Understand distinguishing features of that language as opposed to others.

## Claim Behavior (evidence)
> It is an error to import a package or to declare a variable without using it.
> - [Effective Go - Unused imports and variables](https://golang.org/doc/effective_go.html#blank_unused) - golang.org

## Content Target
import

## Cognitive Model
Understanding

## Item Type
Multiple Choice

## Stem
The following program will not compile.  Why?

## Code Snippet (optional)
```golang
package main

import (
	"fmt"
	"os"
)

func main() {
	os.Exit(0)
}
```

## Answer Key
"fmt" is an unused import


## Distractors

### 1.
Exiting 0 means an error.


### 2.
The program does nothing.


### 3.
The "fmt" package does not exist.


## Common errors, misconceptions, or irrelevant information:

> It is an error to import a package or to declare a variable without using it.
> - [Effective Go - Unused imports and variables](https://golang.org/doc/effective_go.html#blank_unused) - golang.org


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

