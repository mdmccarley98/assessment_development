## Item ID
1384

## Claim 6

Candidates are able to complete everyday coding tasks that relate to the language’s core features

## Claim Behavior (evidence)

## Cognitive Model

- Recall

## Item Type

Multiple Choice

## Stem

JSON Marshal traverses struct values and encodes them as JSON objects.
What is a valid way to generate an Organization JSON without the is_competitor field?

## Code Snippet (optional)

```go
type Organization struct {
	ID           uuid.UUID    `json:"id" db:"id"`
	CreatedAt    time.Time    `json:"created_at" db:"created_at"`
	UpdatedAt    time.Time    `json:"updated_at" db:"updated_at"`
	Name         *string      `json:"name" db:"name"`
	IsCompetitor *bool        `json:"is_competitor" db:"is_competitor"`
	CustomerID   *int         `json:"customer_id" db:"customer_id"`
}
```

## Answer Key

- set IsCompetitor json tag to -

## Distractors

- remove json tag from IsCompetitor
- set IsCompetitor to nil before Marshalling
- add omitempty to IsCompetitor json tag

## Common errors, misconceptions, or relevant information (optional)

---

# Triplebyte Review

## Language Review

## Bias/Fairness Review

## Content Review

https://godoc.org/encoding/json#Marshal
