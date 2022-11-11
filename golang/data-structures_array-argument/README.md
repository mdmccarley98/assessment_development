# Go Data-Structures array argument

## Item ID
go-data-structures-array-argument


## Claim
2. Be able to manipulate the language’s container objects in whatever form they take.


## Claim Behavior (evidence)
> In particular, if you pass an array to a function, it will receive a copy of the array, not a pointer to it.
> - [Effective Go - Arrays](https://golang.org/doc/effective_go.html#arrays) - golang.org


## Content Target
* arrays
* values
* references


## Cognitive Model
Comprehend


## Item Type
Multiple Choice


## Stem

Arrays and slices behave differently.  There is a function `changeSecondItem` that takes an array of four integers as an argument.

What are the values of the x and y arrays after this program runs?


## Code Snippet (optional)

```golang
func changeSecondItem(arr [4]int) {
	arr[1] = 55
}

func main() {
	x := [...]int{1, 2, 3, 4}
	var y [4]int = x
	changeSecondItem(x)
    // ...
}
```


## Answer Key

* x: [1 2 3 4]
* y: [1 2 3 4]


## Distractors

### 1.
* x: [1 55 3 4]
* y: [1 2 3 4]


### 2.
```
./main.go:11:6: cannot use x (type []int) as type [4]int in assignment
```


### 3.
* x: [1 55 3 4]
* y: [1 55 3 4]


## Common errors, misconceptions, or irrelevant information:

Arrays are passed by value, so they are copied, but slices are passed by reference.
`arr[1] = 55` only changes the local copy of the array inside the `changeSecondItem` function, which has no effect on the `x` array.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

