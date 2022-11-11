// Copyright (C) 2020, Triplebyte

fn main() {
    let mut updated = 0;
    let mut inc = || {
        updated += 1;
    };
    updated += 1;
    inc();
    inc();
    println!("updated is {}", updated);
}