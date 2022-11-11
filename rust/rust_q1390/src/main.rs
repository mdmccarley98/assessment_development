// Copyright (C) 2020, Triplebyte

fn main() {
    let mut the_numbers = Vec::new();
    the_numbers.push(4);
    the_numbers.push(8);
    the_numbers.push(15);
    the_numbers.push(16);
    the_numbers.push(23);
    the_numbers.push(42);

    println!("total: {}", &the_numbers.iter().sum::<i32>());
}