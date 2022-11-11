# Go Standard Library strconv

## Item ID
go-standard-library-strconv

## Claim
4. Be able to use common components of the language’s standard library.

## Claim Behavior (evidence)

> ParseInt interprets a string s in the given base (0, 2 to 36) and bit size (0 to 64) and returns the corresponding value i.
> - [pkg strconv ParseInt](https://golang.org/pkg/strconv/#ParseInt) - golang.org

## Content Target
* strconv package

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

What is the result of the following statement that uses the standard library's "strconv" package?


## Code Snippet (optional)
```golang
strconv.FormatInt(-17, 16)
```


## Answer Key
-11

## Distractors

### 1.
16

### 2.
-17

### 3.
-1

## Common errors, misconceptions, or irrelevant information:

The second argument "16" indicates the base of the number.  17 goes into 16 1 time, so the tens place is 1, with a remainder of 1, so the ones place is also 1.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

