// Copyright (C) 2020, Triplebyte

use futures::executor;

async fn double(x: f32) -> f32 {
    println!("doubling {}", x);
    let result = x * 2.0;
    result
}

fn main() {
    let answer = executor::block_on(double(21.0));
    println!("answer: {}", answer);
}
