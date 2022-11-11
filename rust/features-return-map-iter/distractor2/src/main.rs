// Copyright (C) 2020, Triplebyte

fn even_double(numbers: &[u32]) -> impl Fn(&u32)->u32 {
    numbers
        .iter()
        .filter(|&x| x % 2 == 0)
        .map(|x| x * 2)
}

fn main() {
    let numbers = [1, 3, 6];

    let result: u32 = even_double(&numbers).sum();

    assert_eq!(result, 12);
    println!("{}", result);
}

