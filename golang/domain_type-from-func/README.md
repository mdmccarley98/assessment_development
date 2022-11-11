# Go Domain type from func

## Item ID
go-domain-type-from-func

## Claim
6. Be able to complete everyday coding tasks, particularly ones that relate to the language’s core features.

## Claim Behavior (evidence)
Run [`go run main.go`](./main.go)

## Content Target
* io.Reader
* bytes.Buffer

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem

The following code crashes.  What changes need to be made so that it completes without crashing?

## Code Snippet (optional)
```golang
package main

import (
	"bytes"
	"fmt"
	"io"
)

type ReadFunc func(p []byte) (n int, err error)

func (f ReadFunc) Read(p []byte) (n int, err error) {
	return f(p)
}

func main() {
	var f ReadFunc = func(p []byte) (n int, err error) {
		for i := 0; i < len(p); i++ {
			p[i] = (byte)(i % 256)
		}
		return len(p), nil
	}
	var out *bytes.Buffer
	io.CopyN(out, f, 5)
	fmt.Println(out)
}
```

## Answer Key

Change `out` to a `bytes.Buffer`, instead of a pointer.

```golang
	var out bytes.Buffer
	io.CopyN(&out, f, 5)
```
## Distractors

### 1.

Move the implementation of Read into the definition instead of the closure.

```golang
func (f ReadFunc) Read(p []byte) (n int, err error) {
    for i := 0; i < len(p); i++ {
        p[i] = (byte)(i % 256)
    }
    return len(p), nil
}
```

### 2.

Swap the reader and writer parameters.

```golang
	io.CopyN(f, out, 5)
```

### 3.

Use `io.Copy` instead of `io.CopyN`

```golang
	io.Copy(out, f)
```

## Common errors, misconceptions, or irrelevant information:
This code compiles, but it has a runtime crash.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

