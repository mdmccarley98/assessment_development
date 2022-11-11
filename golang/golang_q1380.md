## Item ID
1380

## Claim 5

Candidate has familiarity with major frameworks or libraries associated with the language's major usages

## Claim Behavior (evidence)

- https://godoc.org/github.com/sirupsen/logrus
- https://tour.golang.org/methods/15

## Cognitive Model

- Comprehend

## Item Type

Multiple Choice

## Stem

Given the following example configuration for logrus,
what can we conclude about the library?

## Code Snippet (optional)

```go
var log = logrus.New()
log.Formatter = new(logrus.JSONFormatter)
log.Formatter = new(logrus.TextFormatter)
log.Formatter.(*logrus.TextFormatter).DisableColors = true
```

## Answer Key

- Formatter is of an interface type

## Distractors

- JSONFormatter and TextFormatter are of interface type
- Formatter method receivers are defined as a value instead of as a pointer
- JSONFormatter and TextFormatter implement DisableColors method

## Common errors, misconceptions, or relevant information (optional)

- the example shows a case of type conversion which is a way to access an interface value's underlying concrete value

---

# Triplebyte Review

## Language Review

## Bias/Fairness Review

## Content Review
