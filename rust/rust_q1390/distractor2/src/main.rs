// Copyright (C) 2020, Triplebyte

fn main() {
    let mut the_numbers = Vec::new( [4, 8, 15, 16, 23, 42] );

    println!("total: {}", &the_numbers.iter().sum::<i32>());
}