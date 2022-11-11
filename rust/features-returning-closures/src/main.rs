// Copyright (C) 2020, Triplebyte


#[cfg(feature="key")]
fn add_n(n: i32) -> dyn Fn(i32) -> i32 {
    move |x| x + n
}

#[cfg(feature="distractor1")]
fn add_n(n: i32) -> Box<dyn Fn(i32) -> i32> {
    Box::new(move |x| x + n)
}

#[cfg(feature="distractor2")]
fn add_n<'a>(n: i32) -> impl Fn(i32) -> i32 {
    move |x| x + n
}

#[cfg(feature="distractor3")]
fn add_n<'a>(n: i32) -> impl FnOnce(i32) -> i32 {
    move |x| x + n
}

fn main() {
    let add_5 = add_n(5);
    let result = add_5(10);

    println!("{}", result);
}
