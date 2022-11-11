package main

import "fmt"

type image struct {
	header [20]float32
}

func main() {
	img := new(image)
	v := img.header[15]
	fmt.Printf("%f\n", v)
}
