package main

import (
	"fmt"

	"./phones"
)

func main() {
	count := phones.PhoneCount{}
	count.Android += 1
	count.iPhone += 1
	fmt.Println(count)
}
