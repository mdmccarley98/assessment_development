use clap::{Arg, App};

fn main() {
    let matches = App::new("Animal Counter")
        .version("0.1")
        .about("record the number of animals found in the forest")
        .arg(Arg::with_name("bees")
            .short("b")
            .long("bees")
            .value_name("BEES"))
        .arg(Arg::with_name("bears")
            .value_name("BEARS")
            .multiple(true)
            .index(1))
        .get_matches();

    let bees = matches.value_of("bees").unwrap_or("none");
    let bears = matches.value_of("bears").unwrap_or("none");
    println!("Bees: {}", bees);
    println!("Bears: {}", bears);
}
