// Copyright (C) 2020, Triplebyte

fn main() {
    let numbers = [1, 3, 6];

    let result: u32 = numbers
        .iter()
        .filter(|&x| x % 2 == 0)
        .map(|x| x * 2)
        .sum();

    assert_eq!(result, 12);
    println!("{}", result);
}
