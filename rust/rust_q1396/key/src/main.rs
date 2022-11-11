// Copyright (C) 2020, Triplebyte

fn main() {
    let mut favorite_foods = vec!["potato", "tomato"];

    let mut healthy_foods = &mut favorite_foods;
    healthy_foods.push("carrot");

    let mut grocery_list = &mut favorite_foods;
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
