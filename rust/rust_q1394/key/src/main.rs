// Copyright (C) 2020, Triplebyte

fn main() {
    let name: &str = "Smith";
    greet_person(name);
    show_schedule(name);
}

fn greet_person(name: &str) {
    println!("Hello {}.", name);
}

fn show_schedule(name: &str) {
    println!("{}'s schedule is: A, B, C", name);
}
