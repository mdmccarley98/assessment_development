package main

import "fmt"

func main() {
	flat := [9]int{
		1, 2, 3,
		4, 5, 6,
		7, 8, 9,
	}
	col1 := flat[0:3]
	col2 := flat[3:6]
	col3 := flat[6:9]
	twoDimensional := [][]int{col1, col2, col3}

	twoDimensional[0][2] = 11
	col2 = append(col2, 10)

	fmt.Println(flat)
}
