// Copyright (C) 2020, Triplebyte

/// ```sh
/// $ cargo run
/// Type of meters_in_kilometers:
/// u32
/// Default type of an integer:
/// i32
/// ```
fn main() {
    let meters_in_kilometers: u32 = 1000;
    let default_type = 1000;

    println!("Type of meters_in_kilometers:");
    print_type_of(&meters_in_kilometers);
    println!("Default type of an integer:");
    print_type_of(&default_type);
}

fn print_type_of<T>(_: &T) {
    println!("{}", std::any::type_name::<T>())
}
