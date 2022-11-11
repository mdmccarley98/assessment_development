package main

import "fmt"

type Register interface {
	Checkout() int32
}

type Finisher interface {
	Checkout() int32
}

type Cart struct {
	Total int32
}

func (c Cart) Checkout() int32 {
	return c.Total
}

func registerCheckout(register Register) {
	fmt.Println("register", register.Checkout())
}

func finishCheckout(finisher Finisher) {
	fmt.Println("finisher", finisher.Checkout())
}

func main() {
	cart := Cart{Total: 15}
	registerCheckout(cart)
	finishCheckout(cart)
}
