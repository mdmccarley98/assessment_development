// Copyright (C) 2020, Triplebyte
// Distractor 3. Use an Option<T>
// - won't compile

#[derive(Debug)]
enum Staff {
    CEO,
    Employee { boss: Option<Staff> }
}

fn main() {
    let the_boss = Staff::CEO;
    let manager = Staff::Employee { boss: Some(the_boss) };
    println!("{:#?}", manager);
}