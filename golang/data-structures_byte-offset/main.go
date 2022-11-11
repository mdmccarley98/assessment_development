package main

import (
	"fmt"
	"unsafe"
)

type header struct {
	a, b uint8
	c    int16
	d    uint16
	_, e byte
	f    uint32
}

func main() {
	h := new(header)
	fmt.Println("align", unsafe.Alignof(h.f))
	fmt.Println("offset", unsafe.Offsetof(h.f))
}
