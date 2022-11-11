// Copyright (C) 2020, Triplebyte

fn main() {
    let the_numbers = Vec { 4, 8, 15, 16, 23, 42 };

    println!("total: {}", &the_numbers.iter().sum::<i32>());
}