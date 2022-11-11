// Copyright (C) 2020, Triplebyte

enum Color {
    Red,
    Green,
}

struct Toy {
    color: Color,
    battery_range: (i32, i32),
    battery: i32,
}

fn main() {
    let toy = Toy {
        color: Color::Red,
        battery_range: (1, 10),
        battery: 5,
    };

    // Key
    match toy {
        Toy { color: Color::Red, battery_range: (min, _), .. } => println!("Red minmum: {}", min),
        _ => println!("Something Else"),
    }

    // Irrelevant Information
    match toy.color {
        Color::Red => println!("Red minmum: {}", toy.battery_range.0),
        _ => println!("Something Else"),
    }


    println!("Battery {}", toy.battery);
}
