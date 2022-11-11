# Go Features References

## Item ID
go-features-references

## Claim
Claim 3: Candidates understand distinguishing features of the language.

## Claim Behavior (evidence)
> Note that, unlike in C, it's perfectly OK to return the address of a local variable; the storage associated with the variable survives after the function returns.
- [Effective Go - Constructors and Composite Literals](https://golang.org/doc/effective_go.html#composite_literals) - golang.org

## Content Target
references

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

Each of these examples creates a `Point` with the `x` set to 3 and `y` set to 4.

Which one is not equivalent to the rest?

## Code Snippet (optional)

```golang
// Point represents a location in 2d space
type Point struct {
	x int
	y int
}
```

## Answer Key

```golang
var a Point = Point{x: 3, y: 4}
```

## Distractors

### 1.
```golang
a := &Point{x: 3, y: 4}
```

### 2.
```golang
a := &Point{3, 4}
```

### 3.
```golang
a := new(Point)
a.x = 3
a.y = 4
```


## Common errors, misconceptions, or irrelevant information:

`var a Point = Point{3, 4}` is not a pointer to a `Point` struct.
The `new` function returns a pointer.

Printing the 4 different answers out would like this:
```
{3 4}
&{3 4}
&{3 4}
&{3 4}
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

