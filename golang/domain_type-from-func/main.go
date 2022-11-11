package main

import (
	"bytes"
	"fmt"
	"io"
)

type ReadFunc func(p []byte) (n int, err error)

func (f ReadFunc) Read(p []byte) (n int, err error) {
	return f(p)
}

func main() {
	var f ReadFunc = func(p []byte) (n int, err error) {
		for i := 0; i < len(p); i++ {
			p[i] = (byte)(i % 256)
		}
		return len(p), nil
	}
	// stem:
	// var out *bytes.Buffer
	// io.CopyN(out, f, 5)

	// key:
	var out bytes.Buffer
	io.CopyN(&out, f, 5)

	// distractor 3:
	// var out *bytes.Buffer
	// io.Copy(out, f)

	fmt.Println(out)
}
