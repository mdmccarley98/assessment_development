// Copyright (C) 2020, Triplebyte
// Distractor 2.  Tried a second struct
// - won't compile

#[derive(Debug)]
struct Employee {
    boss: Staff
}
#[derive(Debug)]
enum Staff {
    CEO,
    RegularEmployee(Employee),
}

fn main() {
    let the_boss = Staff::CEO;
    let manager = Staff::RegularEmployee(Employee { boss: the_boss });
    println!("{:#?}", manager);
}
