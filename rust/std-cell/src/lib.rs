// Copyright (C) 2020, Triplebyte

use std::cell::{RefCell, RefMut};

#[test]
fn stem() {
    let list = RefCell::new(Vec::new());
    let mut ref_mut_list: RefMut<_> = list.borrow_mut();
    ref_mut_list.push(4);
    ref_mut_list.push(8);
    ref_mut_list.push(15);
    let sum = list.borrow().iter().sum::<i32>();
    assert!(sum == 27, "sum = {}", sum);

    let a = 3;
    let b = &mut a;
    *b = 5;
    println!("{}, {}", a, b);
}

#[test]
fn working() {
    let list = RefCell::new(Vec::new());
    {
        let mut ref_mut_list: RefMut<_> = list.borrow_mut();
        ref_mut_list.push(4);
        ref_mut_list.push(8);
        ref_mut_list.push(15);
    }
    let sum = list.borrow().iter().sum::<i32>();
    assert!(sum == 26, "sum = {}", sum);
}