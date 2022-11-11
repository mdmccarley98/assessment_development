// Copyright (C) 2020, Triplebyte

use std::{
    iter::{Filter, Map},
    slice::Iter,
};

fn even_double(numbers: &[u32]) -> Map<Filter<Iter<u32>, fn(&&u32) -> bool>, fn(&u32) -> u32> {
    numbers
        .iter()
        .filter(|&x| x % 2 == 0)
        .map(|x| x * 2)
}
//    = note: expected struct `Map<Filter<std::slice::Iter<'_, _>, for<'r, 's> fn(&'r &'s u32) -> _       >, for<'r> fn(&'r u32) -> _         >`
//               found struct `Map<Filter<std::slice::Iter<'_, _>, for<'r, 's> fn(&'r &'s u32) -> _ {even}>, for<'r> fn(&'r u32) -> _ {double}>`

fn main() {
    let numbers = [1, 3, 6];

    let result: u32 = even_double(&numbers).sum();

    assert_eq!(result, 12);
    println!("{}", result);
}

