# Go Libraries stretchr/testify

## Item ID
go-libraries-stretchr-testify

## Claim
5. Familiarity with major frameworks or libraries associated with the language’s major usages.

## Claim Behavior (evidence)
> Return specifies the return arguments for the expectation.
> - [stretchr/testify mock package Call.Return](https://godoc.org/github.com/stretchr/testify/mock#Call.Return) - godoc.org

## Content Target
* stretchr/testify package
* mock.Call.Return()

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
In the go library "stretchr/testify", what does the `Return` function do on the `Call` type?

## Code Snippet (optional)


## Answer Key

Specifies the return values of the mocked function call.

## Distractors

### 1.

Verifies the return values on a function call.

### 2.

Calls the closure on functions that return a closure.

### 3.

Completes a call to the injected test harness's dependencies.


## Common errors, misconceptions, or irrelevant information:

The `Call` type is returned from the `On` function, which specifies which function to match.  So you can use the fluent interface `.On(...).Return(...)`.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

