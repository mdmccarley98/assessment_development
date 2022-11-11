// Copyright (C) 2020, Triplebyte

async fn double(x: f32) -> f32 {
    println!("doubling {}", x);
    let result = x * 2.0;
    result
}

async fn main() {
    let answer = double(21.0).await;
    println!("answer: {}", answer);
}

