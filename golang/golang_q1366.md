## Item ID
1366

## Claim 3

Candidates understand distinguishing features of the language

## Claim Behavior (evidence)

- methods https://golang.org/doc/effective_go.html#methods

## Cognitive Model

- Recall

## Item Type

Multiple Choice

## Stem

Which is the correct function signature of a method that updates a place rating

## Code Snippet (optional)

```go
type Place struct {
  id int
  rating int
}
```

## Answer Key

- `func (p *Place) UpdateRating(rating int)`

## Distractors

- `func (p Place) UpdateRating(rating int)`
- `func UpdateRating(p Place, rating int)`
- `Place { func UpdateRating(rating int) }`

## Common errors, misconceptions, or relevant information (optional)

- The receiver needs to be a pointer in this case to properly update rating

---

# Triplebyte Review

## Language Review

## Bias/Fairness Review

## Content Review
