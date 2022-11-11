## Item ID
1382

## Claim 6

Candidates are able to complete everyday coding tasks that relate to the language’s core features

## Claim Behavior (evidence)

- https://golang.org/pkg/sync/#WaitGroup.Done

## Cognitive Model

- Use

## Item Type

Multiple Choice

## Stem

Fill in the missing code

## Code Snippet (optional)

```go
sliceLength := len(tasks)

var wg sync.WaitGroup
wg.Add(sliceLength)
for i := 0; i < sliceLength; i++ {
    go func(i int) {
        // ** code here **
        doSomething(tasks[i])
    }(i)
}
wg.Wait()
```

## Answer Key

- `defer wg.Done()`

## Distractors

- `wg.Done()`
- `wg.Done <- true`
- `wg.Done(1)`

## Common errors, misconceptions, or relevant information (optional)

---

# Triplebyte Review

## Language Review

## Bias/Fairness Review

## Content Review
