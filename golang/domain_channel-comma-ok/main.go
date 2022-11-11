package main

import (
	"fmt"
)

func main() {
	c := make(chan int)

	go func() {
		for i := 0; i < 5; i++ {
			c <- i % 3
		}
		close(c)
	}()

	total := 0
	for {
		if i, ok := <-c; ok {
			total += i
		} else {
			break
		}
	}
	fmt.Println(total)
}
