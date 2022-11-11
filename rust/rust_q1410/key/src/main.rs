// Copyright (C) 2020, Triplebyte

use std::thread;

fn main() {
    let thread_count = 3;
    let (tx, rx) = std::sync::mpsc::channel();

    for i in 1..=thread_count {
        let tx = tx.clone();
        thread::spawn(move || {
            let result = i * 7;
            let _ = tx.send((i, result));
        });
    }

    for _ in 1..=thread_count {
        let (i, number) = rx.recv().unwrap();
        println!("{} * 7 = {}", i, number);
    }
}
