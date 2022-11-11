package main

import "fmt"

type Container struct {
	Array []int
}

func main() {
	//const c Container = Container{Array: []int{1}}
	var c Container = Container{Array: []int{1}}
	c.Array = []int{2, 3, 4}
	fmt.Println(c.Array)
}
