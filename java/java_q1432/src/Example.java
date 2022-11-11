// Copyright (C) 2020 Triplebyte

import java.util.HashMap;

class Customer {
}

public class Example {
    public static void main(String[] args) {
        HashMap<Integer, Customer> customers = new HashMap<>();
        customers.put(41, new Customer());
        customers.put(47, new Customer());
        customers.forEach((id, customer) -> System.out.println(id));
    }
}
