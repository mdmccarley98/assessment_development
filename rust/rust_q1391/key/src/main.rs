// Copyright (C) 2020, Triplebyte
// Key - use Box<T>

#[derive(Debug)]
enum Staff {
    CEO,
    Employee { boss: Box<Staff> },
}

fn main() {
    let the_boss = Staff::CEO;
    let manager = Staff::Employee { boss: Box::new(the_boss) };
    println!("{:#?}", manager);
}
