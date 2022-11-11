## Item ID
1375

## Claim 4

Candidate is able to use common components of the language's standard library

## Claim Behavior (evidence)

- https://golang.org/pkg/bytes/#Buffer

## Cognitive Model

- Use

## Item Type

Multiple Choice

## Stem

When passing a Buffer as an io.Writer, we need to be pass a pointer to the buffer
instead of the buffer itself. Why is this?

## Code Snippet (optional)

```go
func takeReader(b io.Writer) {
  //...
}

func main() {
	var b bytes.Buffer
	takeReader(&b)
}
```

## Answer Key

- the Writer interface is implemented using pointer receivers

## Distractors

- we cannot pass by value to implement interfaces
- the Writer requires a pointer to keep track of the writer head
- passing the value of the buffer will work as well as passing the pointer

## Common errors, misconceptions, or relevant information (optional)

---

# Triplebyte Review

## Language Review

## Bias/Fairness Review

## Content Review
