// Copyright (C) 2020, Triplebyte

fn main() {
    let name_1: &str = "Jessie";
    let name_2: String = String::from("Jessie");
    let name_3: String = "Jessie".to_string();
    println!("Their name is {}", name_1);
    assert!(name_1 == name_2 && name_1 == name_3);
}
