package main

import "fmt"

func changeSecondItem(arr [4]int) {
	arr[1] = 55
}

func main() {
	x := [...]int{1, 2, 3, 4}
	var y [4]int = x
	changeSecondItem(x)
	fmt.Println(x)
	fmt.Println(y)
}
