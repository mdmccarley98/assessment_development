package main

import (
	"fmt"
	"os"
)

func main() {
	stream, err := os.OpenFile("example.txt", os.O_CREATE, 0755)
	if err != nil {
		fmt.Println("Error Opening File: ", err)
		return
	}
	defer stream.Close()
	if _, err := fmt.Fprintln(stream, "example"); err != nil {
		fmt.Println("Error Writing: ", err)
		return
	}
	fmt.Println("Done")
}
