// Copyright (C) 2020, Triplebyte

fn main() {
    a();
    b();
    c();
    d();
}

fn a() {
    // let green_plants = 1;
    // if green_plants {
    //     println!("There are green plants.");
    // }
}

fn b() {
    let green_plants = true;
    if green_plants {
        println!("There are green plants.");
    }
}

fn c() {
    let green_plants = true;
    if green_plants == true {
        println!("There are green plants.");
    }
}

fn d() {
    let green_plants = 1;
    if green_plants >= 1 {
        println!("There are green plants.");
    }
}
