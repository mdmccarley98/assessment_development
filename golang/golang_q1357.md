## Item ID
1357

## Claim 1

Candidate can understand the core syntax of the language itself

## Claim Behavior (evidence)

Defer - https://tour.golang.org/flowcontrol/12

## Cognitive Model

- Comprehend

## Item Type

Multiple Choice

## Stem

What's the purpose of `defer` in this function?

## Code Snippet (optional)

```go
func f(ctx context.Context) (*User, error) {
  db, err := connectDB(ctx)
  if err != nil {
    return nil, err
  }
  defer db.Close()

  user := &User{}
  if err := db.Find(user).Error; err != nil {
    return nil, err
  }

  return user, nil
}
```

## Answer Key

- close the DB connection before the function returns

## Distractors

- clean-up potential memory leaks from the DB connection
- ensure proper wait time to close the DB connection after being used
- close the DB connection if any panics occur

## Common errors, misconceptions, or relevant information (optional)

- defer is typically used for clean-up tasks
- defer is typically used to recover from panics

---

# Triplebyte Review

## Language Review

## Bias/Fairness Review

## Content Review
