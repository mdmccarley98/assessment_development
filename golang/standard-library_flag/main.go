package main

import (
	"flag"
	"fmt"
)

var count = flag.Int("count", 5, "Count")

func main() {
	fmt.Println("Count", *count)
}
