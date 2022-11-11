// Copyright (C) 2020, Triplebyte

fn main() {
    let name: String = String::from("Smith");
    greet_person(name);
    show_schedule(name);
}

fn greet_person(name: String) {
    println!("Hello {}.", name);
}

fn show_schedule(name: String) {
    println!("{}'s schedule is: A, B, C", name);
}
