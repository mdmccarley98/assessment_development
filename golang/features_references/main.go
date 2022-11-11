package main

import "fmt"

// Point represents a location in 2d space
type Point struct {
	x int
	y int
}

func main() {
	var key Point = Point{x: 3, y: 4}
	distractor1 := &Point{x: 3, y: 4}
	distractor2 := &Point{3, 4}
	distractor3 := new(Point)
	distractor3.x = 3
	distractor3.y = 4
	fmt.Println(key, "\tkey")
	fmt.Println(distractor1, "\tdistractor 1")
	fmt.Println(distractor2, "\tdistractor 2")
	fmt.Println(distractor3, "\tdistractor 3")
}
