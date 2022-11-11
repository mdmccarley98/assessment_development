# Go Syntax Type

## Item ID
go-syntax-type

## Claim
1. Understand the core syntax of the language itself.


## Claim Behavior (evidence)
> A switch can also be used to discover the dynamic type of an interface variable. Such a type switch uses the syntax of a type assertion with the keyword type inside the parentheses. If the switch declares a variable in the expression, the variable will have the corresponding type in each clause. It's also idiomatic to reuse the name in such cases, in effect declaring a new variable with the same name but a different type in each case.
- [Effective Go - Type Switch](https://golang.org/doc/effective_go.html#type_switch) - golang.org


## Content Target
type

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem

There is a `boolValue` function that takes an `interface{}` as an argument.
How can you tell which type it is?

Choose the correct switch that will print:

```
bool true
*bool true
unexpected type int
```

## Code Snippet (optional)

```golang
func main() {
	b := true
	boolValue(b)
	boolValue(&b)
	boolValue(1)
}

func boolValue(t interface{}) {
	/* ### CREATE SWITCH HERE ### */ {
	default:
		fmt.Printf("unexpected type %T\n", t)
	case bool:
		fmt.Printf("bool %t\n", t)
	case *bool:
		fmt.Printf("*bool %t\n", *t)
	}
}
```


## Answer Key

```golang
switch t := t.(type)
```


## Distractors

### 1.
```golang
switch t
```

### 2.
```golang
switch t := type(t)
```

### 3.
```golang
switch t := t.(bool)
```


## Common errors, misconceptions, or irrelevant information:

If you know for sure that `t` is a bool, you can use `t.(bool)` to cast it to a bool.
If you want to know the type then use `t.(type)`.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
