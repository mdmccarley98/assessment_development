package main

import "fmt"

func main() {
	japanese := "日本語"
	if len(japanese) != 9 {
		panic("length is not 9")
	}
	i := 0
	for range japanese {
		i++
	}
	fmt.Println("length is", i)
}
