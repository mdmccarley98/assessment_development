package main

import "fmt"

func main() {
	b := true
	boolValue(b)
	boolValue(&b)
	boolValue(1)
}

func boolValue(t interface{}) {
	switch t := t.(type) {
	default:
		fmt.Printf("unexpected type %T\n", t)
	case bool:
		fmt.Printf("bool %t\n", t)
	case *bool:
		fmt.Printf("*bool %t\n", *t)
	}
}
