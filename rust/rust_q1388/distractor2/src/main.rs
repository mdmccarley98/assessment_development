// Copyright (C) 2020, Triplebyte


fn main() {
    let mut items: Vec<Item> = setup();

    for mut item in &items {
        item.is_ordered = true;
    }

    finish(&items);
}

struct Item {
    id: u32,
    price: u32,
    is_ordered: bool,
}

fn setup() -> Vec<Item> {
    vec![
        Item { id: 1, price: 15, is_ordered: false },
        Item { id: 2, price: 4, is_ordered: false },
        Item { id: 3, price: 31, is_ordered: false },
    ]
}

fn finish(items: &Vec<Item>) {
    let mut total = 0;
    for item in items {
        if item.is_ordered {
            println!("{} is ordered", item.id);
        }
        total += item.price;
    }
    println!("total: {}", total);
}