## Item ID
1369

## Claim 3

Candidates understand distinguishing features of the language

## Claim Behavior (evidence)

## Cognitive Model

- Recall

## Item Type

Multiple Choice

## Stem

Fill in the missing code

## Code Snippet (optional)

```go
func main() {
  c := make(chan int, 1)
  go func() {
      id := requestID()
      // code here
  }()
  select {
  case res := <- c:
      fmt.Println(res)
  case <- time.After(3 * time.Second):
      fmt.Println("time")
  }
}
```

## Answer Key

- `c <- id`

## Distractors

- `return c(id)`
- `c = id`
- `c.Add(id)`

## Common errors, misconceptions, or relevant information (optional)

---

# Triplebyte Review

## Language Review

## Bias/Fairness Review

## Content Review
