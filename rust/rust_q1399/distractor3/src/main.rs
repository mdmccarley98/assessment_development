// Copyright (C) 2020, Triplebyte

use std::thread;

fn main() {
    let mut vacation_spots = vec!["New York City", "Yosemite", "Monterey"];

    let handle = thread::spawn(|| {
        for spot in vacation_spots {
            println!("{}", spot);
        }
    });

    vacation_spots.remove(1);

    handle.join().unwrap();
}
