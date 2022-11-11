# Features Ellipsis Expansion

## Item ID
feature-ellipsis-expansion

## Claim
3. Understand distinguishing features of that language as opposed to others.

## Claim Behavior (evidence)
> But what if we wanted to do what our Append does and append a slice to a slice? Easy: use ... at the call site, just as we did in the call to Output above. This snippet produces identical output to the one above.
```golang
x := []int{1,2,3}
y := []int{4,5,6}
x = append(x, y...)
fmt.Println(x)
```
> Without that ..., it wouldn't compile because the types would be wrong; y is not of type int.
> - [Effective Go - Append](https://golang.org/doc/effective_go.html#append) - golang.org

## Content Target
* ellipsis expansion

## Cognitive Model
Recall

## Item Type
Multiple Choice

## Stem
You are writing a program to count traffic on a road.
There is a hose across the road connected to a small computer running your code.
When a wheel goes over the hose a timestamp is generated.
Cars usually have front and back wheels, but some trucks have even more, so many timestamps are generated quickly.

There is a `getTimestamps` function that returns multiple timestamps:
```golang
func getTimestamps() []int64
```

There is a `TimeCollection` type with a method `AddData`:
```golang
// AddData adds one or more timestamps to the collection.
func (col *TimeCollection) AddData(timestamp ...int64)
```

What is the best way to add timestamps to the collection using these functions?

## Code Snippet (optional)


## Answer Key
```golang
collection.AddData(getTimestamps()...)
```

## Distractors

### 1.
```golang
timestamps := getTimestamps()
collection.AddData(timestamps[0], timestamps[1], timestamps[2])
```

### 2.
```golang
collection.AddData(getTimestamps())
```

### 3.
```golang
for _, timestamp := range getTimestamps() {
    collection.AddData(timestamp)
}
```

## Common errors, misconceptions, or irrelevant information:

Using the `timestamps[0], timestamps[1]` method is buggy, because getTimestamps may return a different number of timestamps than were coded.

Using the for loop to add them one at a time is slower because the function needs to be called multiple times, instead of once.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

