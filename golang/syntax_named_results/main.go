package main

import (
	"errors"
	"fmt"
)

func main() {
	fmt.Println("isOne(5)", isOne(5))
}

func isOne(n int) (err error) {
	if n != 1 {
		err = errors.New("n is not one")
	}
	return err
}

// syntax_named_results/main.go:19:6: missing function body
// func isOne(n int) err error {
// 	if n != 1 {
// 		err = errors.New("n is not one")
// 	}
// 	return err
// }
