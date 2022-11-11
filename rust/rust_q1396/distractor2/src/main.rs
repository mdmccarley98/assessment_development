// Copyright (C) 2020, Triplebyte

fn main() {
    let favorite_foods = vec!["potato", "tomato"];

    let mut healthy_foods = favorite_foods.clone();
    healthy_foods.push("carrot");

    let mut grocery_list = favorite_foods.clone();
    grocery_list.push("cookies");

    println!("Healthy Foods:");
    for food in healthy_foods {
        println!("{}", food);
    }

    println!("Grocery List:");
    for food in grocery_list {
        println!("{}", food);
    }
}
