// Copyright (C) 2020, Triplebyte

use std::{
    iter::{Filter, Map},
    slice::Iter,
};

fn even(x: &&u32) -> bool {
    *x % 2 == 0
}
fn double(x: &u32) -> u32 {
    x * 2
}
fn even_double(numbers: &[u32]) -> Map<Filter<Iter<u32>, fn(&&u32) -> bool>, fn(&u32) -> u32> {
    numbers
        .iter()
        .filter(even)
        .map(double)
}

fn main() {
    let numbers = [1, 3, 6];

    let result: u32 = even_double(&numbers).sum();

    assert_eq!(result, 12);
    println!("{}", result);
}
