# Go Standard Library reflect

## Item ID
go-standard-library-reflect

## Claim
4. Be able to use common components of the language’s standard library.

## Claim Behavior (evidence)
>     // ChanDir returns a channel type's direction.
>     // It panics if the type's Kind is not Chan.
>     ChanDir() ChanDir
> - [pkg reflect - Type](https://golang.org/pkg/reflect/#Type) - golang.org

## Content Target
* reflect package
* Type.ChanDir()

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

What is the purpose of `Type.ChanDir` in the `reflect` package?


## Code Snippet (optional)


## Answer Key

To check if a channel is receive, send, or both.

## Distractors

### 1.
To change the current directory.

### 2.
To change a channel's direction from forward to backward or backward to forward.

### 3.
To get the program's current directory.


## Common errors, misconceptions, or irrelevant information:

ChanDir() reports a channels direction.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

