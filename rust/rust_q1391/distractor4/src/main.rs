// Copyright (C) 2020, Triplebyte
// Distractor 4. Don't use an enum, use a struct.
// - won't compile

#[derive(Debug)]
struct Staff {
    boss: Option<Staff>
}

fn main() {
    let the_boss = Staff { boss: None };
    let manager = Staff { boss: Some(the_boss) };
    println!("{:#?}", manager);
}
