package main

import (
	"fmt"
	"reflect"
)

func whichWay(i interface{}) {
	t := reflect.TypeOf(i)
	dir := t.ChanDir()
	fmt.Println(dir == reflect.BothDir)
}

func main() {
	ch := make(chan int)
	whichWay(ch)
}
