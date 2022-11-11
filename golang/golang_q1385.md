## Item ID
1385

## Claim 6

Candidates are able to complete everyday coding tasks that relate to the language’s core features

## Claim Behavior (evidence)

## Cognitive Model

- Use

## Item Type

Multiple Choice

## Stem

Select the line of code that completes the function

## Code Snippet (optional)

```go
// Capitalize the first character of a string
func Capitalize(str string) string {
	if len(str) == 0 {
		return ""
	}
	tmp := []rune(str)
	tmp[0] = unicode.ToUpper(tmp[0])
	// code here
}
```

## Answer Key

- `return string(tmp)`

## Distractors

- `return tmp.(string)`
- `return tmp.Join("")`
- `return strings.Join(tmp, "")`

## Common errors, misconceptions, or relevant information (optional)

---

# Triplebyte Review

## Language Review

## Bias/Fairness Review

## Content Review
