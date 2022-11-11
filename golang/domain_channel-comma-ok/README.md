# Go Domain Channel Comma Ok

## Item ID
go-domain-channel-comma-ok

## Claim
6. Be able to complete everyday coding tasks, particularly ones that relate to the language’s core features.

## Claim Behavior (evidence)
-[go run main.go](./main.go)

## Content Target
* channels
* channel receive ok
* closing channels

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem

What is the value of `total`?

## Code Snippet (optional)
```golang
c := make(chan int)

go func() {
    for i := 0; i < 5; i++ {
        c <- i % 3
    }
    close(c)
}()

total := 0
for {
    if i, ok := <-c; ok {
        total += i
    } else {
        break
    }
}
```

## Answer Key

4

## Distractors

### 1.
5

### 2.
this code does not compile

### 3.
fatal error: all goroutines are asleep - deadlock!

## Common errors, misconceptions, or irrelevant information:

`for i := range c` would be better than using the comma-ok pattern

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

