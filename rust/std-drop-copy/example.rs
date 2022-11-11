#[test]
fn example() {
    #[derive(Copy, Clone)]
    struct Meters(f32);

    let height = Meters(1.6);
    drop(height);
    println!("height: {}", height.0);
    assert!(height.0 == 1.6, "{} == 1.6", height.0);
}

// #[test]
// fn distractor2() {
//     struct Meters(f32);

//     let height = Meters(1.6);
//     drop(height);
//     println!("height: {}", height.0);
// }

// #[test]
// fn distractor3() {
//     struct Meters(f32);

//     let height = Meters(1.6);
//     drop(height);
//     println!("height: {}", height.0);
// }

#[test]
fn example2() {
    #[derive(Copy, Debug)]
    struct Record {
        id: u32,
    }
    impl Clone for Record {
        fn clone(&self) -> Self {
            println!("cloning: {}", self.id);
            Record { id: self.id }
        }
    }
    let record = Record { id: 0 };
    drop(record);
    println!("record: {:?}", record);
    assert!(false);
}
