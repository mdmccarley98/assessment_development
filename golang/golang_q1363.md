## Item ID
1363

## Claim 2

Candidate is able to manipulate the language’s container objects in whatever form they take

## Claim Behavior (evidence)

- embedding https://golang.org/doc/effective_go.html#embedding

## Cognitive Model

- Comprehend

## Item Type

Multiple Choice

## Stem

What is it called when adding User into the Admin struct?

## Code Snippet (optional)

```go
type User struct {
  Name string
}
type Admin struct {
    User
    Level string
}
```

## Answer Key

- embedding

## Distractors

- inheritance
- inclusion
- containment

## Common errors, misconceptions, or relevant information (optional)

- Embedding is using composition and not inheritance since there is still a distinction between the User and Admin types

---

# Triplebyte Review

## Language Review

## Bias/Fairness Review

## Content Review

https://github.com/ardanlabs/gotraining/tree/master/topics/go/language/embedding
