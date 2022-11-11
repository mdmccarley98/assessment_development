// Copyright (C) 2020, Triplebyte

fn main() {
    let numbers = [1, 3, 6];

    let result: u32 = numbers
        .iter()
        .skip(1)
        .take(1)
        .map(|x| x * 2)
        .sum();

    assert_eq!(result, 12);
    println!("{}", result);
}
