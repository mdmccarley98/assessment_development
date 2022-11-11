# Go Standard Library Flag

## Item ID
go-standard-library-flag

## Claim
4. Be able to use common components of the language’s standard library.

## Claim Behavior (evidence)
> After all flags are defined, call
>
>     flag.Parse()
>
> to parse the command line into the defined flags.
> Flags may then be used directly. If you're using the flags themselves, they are all pointers; if you bind to variables, they're values.
> - [Package flag](https://golang.org/pkg/flag/#hdr-Usage)


## Content Target
* flag

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem

You are writing a command line utility that uses the `flag` library.

What is the output when running the program like this:
```
go run main.go -count 12
```

## Code Snippet (optional)
```golang
// main.go
package main

import (
	"flag"
	"fmt"
)

var count = flag.Int("count", 5, "Count")

func main() {
	fmt.Println("Count", *count)
}
```

## Answer Key

```
Count 5
```


## Distractors

### 1.
```
Count 12
```

### 2.
```
Count 0
```

### 3.
```
./main.go:11:19: invalid indirect of count (type int)
```

## Common errors, misconceptions, or irrelevant information:

The flags will not be parsed until `flag.Parse()` is called.  This program does not call `Parse`.


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

