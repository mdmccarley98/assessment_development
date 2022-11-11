# Go Data-Structures Byte Offset

## Item ID
go-data-structures-byte-offset

## Claim
2. Be able to manipulate the language’s container objects in whatever form they take.

## Claim Behavior (evidence)
> it returns the number of bytes between the start of the struct and the start of the field.
> - [pkg unsafe.Offsetof](https://golang.org/pkg/unsafe/#Offsetof) - golang.org

> For the numeric types, the following sizes are guaranteed:
>     type                                 size in bytes
>     
>     byte, uint8, int8                     1
>     uint16, int16                         2
>     uint32, int32, float32                4
>     uint64, int64, float64, complex64     8
>     complex128                           16
> - [go spec - Size and Alignment Guarantees](https://golang.org/ref/spec#Size_and_alignment_guarantees) - golang.org ref

## Content Target
* struct
* alignment

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

When using the sync/atomic package in the go standard library, it's important to know the memory layout of a go struct.

The `header` struct below has many fields.

The alignment of the `f` field is 4, what is the `f` field's offset?


## Code Snippet (optional)
```golang
type header struct {
	a, b uint8
	c    int16
	d    uint16
	_, e byte
	f    uint32
}
```


## Answer Key
* 8

## Distractors

### 1
* 7

### 2
* 6

### 3
* 64


## Common errors, misconceptions, or irrelevant information:
The byte alignment of these integer types is guaranteed in the go spec.

If you sum the numbers of bytes each field before `f` takes, you'll get the offset 8.

* a = 1
* b = 1
* c = 2
* d = 2
* _ = 1
* e = 1

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

