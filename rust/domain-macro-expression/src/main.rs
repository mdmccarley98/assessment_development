macro_rules! one {
    ($example:expr) => {
        format!("{}: {}", stringify!($example), $example)
    };
}
macro_rules! two {
    (<$example:ident $a:ident=($b:expr) />) => {
        format!("{} {}: {}", stringify!($example), stringify!($a), $b)
    };
}

fn main() {
    println!(
        "one: {}",
        one!(7 * 6)
    );
    println!(
        "two: {}", two!(
            <button onclick=(126/3) />
        )
    );
}
