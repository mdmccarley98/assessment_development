// Copyright (C) 2020, Triplebyte

fn main() {
    let the_numbers = vec!(4, 8, 15, 16, 23, 42);


    let other = [4, 8, 15, 16, 23, 42];
    print_type_of(&other);
    println!("total: {}", &other.iter().sum::<i32>());
}

fn print_type_of<T>(_: &T) {
    println!("{}", std::any::type_name::<T>())
}
