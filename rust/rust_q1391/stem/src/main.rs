// Copyright (C) 2020, Triplebyte
// Stem - won't compile

#[derive(Debug)]
enum Staff {
    CEO,
    Employee { boss: Staff },
}

fn main() {
    let the_boss = Staff::CEO;
    let manager = Staff::Employee { boss: the_boss };
    println!("{:#?}", manager);
}