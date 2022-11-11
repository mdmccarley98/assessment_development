// Copyright (C) 2020, Triplebyte

struct Doorbell {
    family: i8,
    friends: i8,
    strangers: i8,
}

fn main() {
    let original = Doorbell { family: 0, friends: 0, strangers: 0 };
    let now = detect_people(original);

    println!("friends original: {}, now: {}", original.friends, now.friends);
}

fn detect_people(doorbell: Doorbell) -> Doorbell {
    Doorbell {
        family: doorbell.family,
        friends: doorbell.friends + 1,
        strangers: doorbell.strangers,
    }
}
