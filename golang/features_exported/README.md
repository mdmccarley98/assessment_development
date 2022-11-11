# Go Features Exported

## Item ID
go-features-exported

## Claim
3. Understand distinguishing features of that language as opposed to others.

## Claim Behavior (evidence)
> An identifier may be exported to permit access to it from another package  An identifier is exported if both:
> 1. the first character of the identifier's name is a Unicode upper case letter (Unicode class "Lu"); and
> 2. the identifier is declared in the package block or it is a field name or method name.
>
> All other identifiers are not exported.
> - [Go Language Spec - Exported identifiers](https://golang.org/ref/spec#Exported_identifiers) - golang.org

## Content Target
* exporting
* packages

## Cognitive Model
Understanding

## Item Type
Multiple Choice

## Stem

You're writing an app to count how many Android phones or iPhones you see.
In the `phones` package you have a `PhoneCount` struct.

In the main application, you are able to add `Android` phones, but there is an error when trying change the `iPhone` variable.

```
./main.go:12:7: count.iPhone undefined
```

Why do you get this error?

## Code Snippet (optional)
```golang
// phones/count.go
package phones

type PhoneCount struct {
	Android uint
	iPhone  uint
}
```


## Answer Key

* The 'i' needs to be capitalized.

## Distractors

### 1.
* The package cannot be named "phones", it must be named "main".

### 2.
* `iPhone` needs to be initialized before adding.

### 3.
* The type `PhonesCount` must be in a file named `phones_count.go`.

## Common errors, misconceptions, or irrelevant information:

To export a type or member variable, the first letter must be capitalized.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

