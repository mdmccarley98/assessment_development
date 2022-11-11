## Item ID
1372

## Claim 4

Candidate is able to use common components of the language's standard library

## Claim Behavior (evidence)

- https://blog.golang.org/context

## Cognitive Model

- Comprehend

## Item Type

Multiple Choice

## Stem

Which is a proper way to timeout an HTTP request?

## Code Snippet (optional)

```go
  request, _ := http.NewRequest("GET", "httpss://golang.org", nil)
```

## Answer Key

- use context with timeout and pass to the request.WithContext

## Distractors

- use request.Cancel and goroutines schedule and cancel request
- use waitgroups to define proper wait time for the request and call request.Cancel
- pass time.Duration to request.WithTimeout

## Common errors, misconceptions, or relevant information (optional)

---

# Triplebyte Review

## Language Review

## Bias/Fairness Review

## Content Review
