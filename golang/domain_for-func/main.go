package main

import "fmt"

func main() {
	c := make(chan int)

	for id := range []int{1, 2, 3, 4, 5, 6, 7, 8, 9} {
		go func() {
			fmt.Println(id)
			c <- 1
		}()
	}
	for i := 0; i < 9; i++ {
		<-c
	}
}
