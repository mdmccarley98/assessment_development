// Copyright (C) 2020, Triplebyte

use std::marker::Copy;

#[derive(Copy, Clone)]
struct Config<'a> {
    verbose_mode: bool,
    host: &'a str,
    port: u16,
}

impl<'a> Config<'a> {
    fn localhost() -> Config<'static> {
        Config {
            verbose_mode: false,
            host: "localhost",
            port: 8080,
        }
    }
    fn verbose(self, is_verbose: bool) -> Config<'a> {
        Config { verbose_mode: is_verbose, ..self }
    }
}

fn main() {
    let config = Config::localhost();
    config.verbose(true);
    println!("Server {}:{}", config.host, config.port);
    println!("Verbose Mode: {}", config.verbose_mode);
}
