
#[derive(Debug)]
struct Message {
    body: String
}

#[test]
fn example() {
    println!("{:?}", Message{ body: "hi".to_string() });
    let message = Message { body: "hi".to_string() };
    println!("message :? {:?}", message);
    println!("message :#? {:#?}", message);
    assert!(false);
}
