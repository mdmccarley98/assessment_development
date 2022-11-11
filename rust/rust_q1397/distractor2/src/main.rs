// Copyright (C) 2020, Triplebyte

fn main() {
    #[derive(Debug)]
    struct Window<T> {
        width: T,
        height: T,
        price: T,
    }

    let main_window = Window {
        width: 10.0,
        height: 4.0,
        price: 350,
    };

    let side_window = Window {
        width: 3.5,
        height: 4.0,
        price: 200,
    };

    println!("{:?}", main_window);
    println!("{:?}", side_window);
}
