// Copyright (C) 2020, Triplebyte

struct Config {
    verbose_mode: bool,
    host: String,
    port: u16,
}

impl Config {
    fn localhost() -> Config {
        Config {
            verbose_mode: false,
            host: String::from("localhost"),
            port: 8080,
        }
    }
    fn verbose(self, is_verbose: bool) -> Config {
        Config { verbose_mode: is_verbose, ..self }
    }
}

fn main() {
    let config = Config::localhost();
    config.verbose(true);
    println!("Server {}:{}", config.host, config.port);
    println!("Verbose Mode: {}", config.verbose_mode);
}
