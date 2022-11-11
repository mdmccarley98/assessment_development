# Go Domain duck typing

## Item ID
go-domain-duck-typing

## Claim
6. Be able to complete everyday coding tasks, particularly ones that relate to the language’s core features.

## Claim Behavior (evidence)
- [Interface in Go](https://golangbyexample.com/interface-in-golang/) - golangbyexample.com

## Content Target
interface

## Cognitive Model
Comprehension

## Item Type
Multiple Choice

## Stem

You are writing a shopping cart for an online store.

Which of the two functions `registerCheckout` or `finishCheckout` can take a `Cart` as a parameter?


## Code Snippet (optional)

```golang
type Register interface {
	Checkout() int32
}

type Finisher interface {
	Checkout() int32
}

type Cart struct {
	Total int32
}

func (c Cart) Checkout() int32 {
	return c.Total
}

func registerCheckout(register Register) {
	fmt.Println("register", register.Checkout())
}

func finishCheckout(finisher Finisher) {
	fmt.Println("finisher", finisher.Checkout())
}
```


## Answer Key

`registerCheckout` and `finishCheckout`


## Distractors

### 1.
only `registerCheckout`

### 2.
only `finishCheckout`

### 3.
neither function


## Common errors, misconceptions, or irrelevant information:

Go language has "duck typing", so you don't have to explicitly say that `Cart` implements an interface as long as the function signature matches.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

