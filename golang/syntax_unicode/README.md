# Go Syntax Unicode

## Item ID
go-syntax-unicode

## Claim
1. Understand the core syntax of the language itself.

## Claim Behavior (evidence)
> For strings, the range does more work for you, breaking out individual Unicode code points by parsing the UTF-8. 
- [Effective Go - for](https://golang.org/doc/effective_go.html#for) - golang.org

- [Length of string in Go](https://golangbyexample.com/length-of-string-golang/) - golangbyexample.com

## Content Target
for

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

The string "日本語" contains three Japanese characters.  It's byte length is nine bytes.

What does the following program print?

## Code Snippet (optional)

```golang
	japanese := "日本語"
	if len(japanese) != 9 {
		panic("length is not 9")
	}

	i := 0
	for range japanese {
		i++
	}
	fmt.Println("length is", i)
```

## Answer Key

```
3
```

## Distractors

### 1.
```
9
```

### 2.
```
length is not 9
```

### 3.
```
10
```

## Common errors, misconceptions, or irrelevant information:

The `range` operator iterates over string runes not bytes.  There are three runes, or characters in the string "日本語"


# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

