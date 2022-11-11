## Item ID
1360

## Claim 1

Candidate can understand the core syntax of the language itself

## Claim Behavior (evidence)

## Cognitive Model

- Comprehend

## Item Type

Multiple Choice

## Stem

What's the expected output of the following code?

## Code Snippet (optional)

```go
type User struct {
	name  string
	role  int
}

func makeAdmin(u User) {
  u.role = 1
}

func hasAccess(u *User) bool {
  return u.role == 1
}

func main() {
  u := &User{
    name: "bob",
    role: 0,
  }
  makeAdmin(*u)
  access := hasAccess(u)
  fmt.Print(access)
}
```

## Answer Key

- false

## Distractors

- true
- cannot use u (type \*User) as type User in argument to makeAdmin
- syntax error: unexpected &, expecting expression

## Common errors, misconceptions, or relevant information (optional)

---

# Triplebyte Review

## Language Review

## Bias/Fairness Review

## Content Review
