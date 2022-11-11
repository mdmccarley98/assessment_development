package main

import "fmt"

// TimeCollection represents timestamps collected from a car counter.
type TimeCollection []int64

// AddData adds one or more timestamps to the collection.
func (col *TimeCollection) AddData(timestamp ...int64) {
	*col = append(*col, timestamp...)
}

func getTimestamps() []int64 {
	return []int64{1604341389001, 1604341389003, 1604341389005}
}

func main() {
	collection := new(TimeCollection)

	// key
	collection.AddData(getTimestamps()...)

	// Distractor 1
	timestamps := getTimestamps()
	collection.AddData(timestamps[0], timestamps[1], timestamps[2])

	// Distractor 2
	//collection.AddData(getTimestamps())

	// Distractor 3
	for _, timestamp := range getTimestamps() {
		collection.AddData(timestamp)
	}

	fmt.Println(*collection)
}
