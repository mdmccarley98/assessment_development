trait A<T> {}
impl A<char> for i32 {} // correct
impl A for i32 {
    type T = char; // incorrect
}

trait B {
    type T;
}
impl B for i32 {
    type T = char; // correct
}
impl B<char> for i32 {} // incorrect

fn main() {}
