# Domain For Func

## Item ID
golang-for-func

## Claim
6. Be able to complete everyday coding tasks, particularly ones that relate to the language’s core features.

## Claim Behavior (evidence)

> The bug is that in a Go for loop, the loop variable is reused for each iteration, so the req variable is shared across all goroutines. That's not what we want. We need to make sure that req is unique for each goroutine. 
> - [Effective Go - Channels](https://golang.org/doc/effective_go.html#channels) - golang.org

## Content Target
* go routines
* functions

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem
A work mate is writing a program that runs 9 separate go routines numbered 1 through 9.
Some longer process will be programmed, but for now each go routine just prints its id.

What is the bug?

## Code Snippet (optional)
```golang
c := make(chan int)

for id := range []int{1, 2, 3, 4, 5, 6, 7, 8, 9} {
    go func() {
        // long process here
        fmt.Println(id)
        c <- 1
    }()
}

for i := 0; i < 9; i++ {
    <-c
}
```


## Answer Key

The variable `id` is not captured by the go routine's closure, so the same id is printed.

## Distractors

### 1.
The for loop at the end pulls 10 values off the channel, but there are only 9 values.

### 2.
The for loop at the end pulls only 8 values off the channel, but there are 9 values.

### 3.
The go routines are not saved anywhere and need to be synced before continuing the program.


## Common errors, misconceptions, or irrelevant information:

The `id` variable is reused each loop, and the go routines are asynchronous, so they end up using the same values.
To fix the problem they need to pass the `id` as an argument into the anonymous closure.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

