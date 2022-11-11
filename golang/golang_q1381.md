## Item ID
1381

## Claim 6

Candidates are able to complete everyday coding tasks that relate to the language’s core features

## Claim Behavior (evidence)

## Cognitive Model

- Use

## Item Type

Multiple Choice

## Stem

What's wrong with this code?

## Code Snippet (optional)

```go
func CopyFile(dstName, srcName string) (written int64, err error) {
    src, err := os.Open(srcName)
    defer src.Close()
    if err != nil {
        return
    }

    dst, err := os.Create(dstName)
    defer dst.Close()
    if err != nil {
        return
    }

    written, err = io.Copy(dst, src)
    return
}
```

## Answer Key

- using `defer` before checking for `nil` error

## Distractors

- missing type declaration for `dstName`
- missing values after `return` statements
- not using shorthand declaration `:=` for `written, err`, i.e. `written, err := io.Copy(dst, src)`

## Common errors, misconceptions, or relevant information (optional)

- `defer` should be called after checking for to error to ensure correct value allocation
- When multiple parameters share the same type, the first declarations can be omitted
- Since `written` and `err` are defined in the function declaration, `return`'s can be empty
- There's no need for shorthand declaration syntax since the variables are already declareed

---

# Triplebyte Review

## Language Review

## Bias/Fairness Review

## Content Review
