package main

import "fmt"

const (
	Start = iota
	Roll
	Pat
	MarkWithAB
	PutInOven
)

func main() {
	step := Start
loop:
	for {
		fmt.Println(step)
		switch step {
		case Start:
			step = Roll
		case Roll:
			step = Pat
		case Pat:
			step = MarkWithAB
			break loop
		case MarkWithAB:
			step = PutInOven
		case PutInOven:
			fmt.Println("Baked")
			return
		}
	}
	fmt.Println("Unbaked", step)
}
