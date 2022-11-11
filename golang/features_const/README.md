# Go Features Const

## Item ID
go-features-const

## Claim
3. Understand distinguishing features of that language as opposed to others.

## Claim Behavior (evidence)
> Constants in Go are just that—constant. They are created at compile time, even when defined as locals in functions, and can only be numbers, characters (runes), strings or booleans. Because of the compile-time restriction, the expressions that define them must be constant expressions, evaluatable by the compiler.
> - [Effective Go - Constants](https://golang.org/doc/effective_go.html#constants) - golang.org

## Content Target
* const

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

There's a Container type that as an inner array:
```golang
type Container struct {
	Array []int
}
```

What is printed when the following program is run?

## Code Snippet (optional)

```golang
const c Container = Container{Array: []int{1}}
c.Array = []int{2, 3, 4}
fmt.Println(c.Array)
```

## Answer Key
```
./main.go:10:8: const initializer Container literal is not a constant
./main.go:11:10: cannot assign to c.Array
```

## Distractors

### 1.
```
[2 3 4]
```

### 1.
```
[1]
```

### 2.
```
./main.go:11:10: cannot assign to c.Array
```

## Common errors, misconceptions, or irrelevant information:

Effective Go says: constants "[can only be numbers, characters (runes), strings or booleans](https://golang.org/doc/effective_go.html#constants)"

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

