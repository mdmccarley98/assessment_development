// Copyright (C) 2020 Triplebyte
use log::{log, Level, LevelFilter, Metadata, Record, SetLoggerError};

struct Logger;
static LOGGER: Logger = Logger;

impl log::Log for Logger {
    fn enabled(&self, metadata: &Metadata) -> bool {
        metadata.level() <= Level::Info
    }
    fn log(&self, record: &Record) {
        if self.enabled(record.metadata()) {
            println!("{} - {}", record.level(), record.args());
        }
    }
    fn flush(&self) {}
}

fn main() -> Result<(), SetLoggerError> {

    log::set_logger(&LOGGER)
        .map(|_| log::set_max_level(LevelFilter::Warn))?;

    println!("Example");
    log!(Level::Info, "apples");
    log::warn!("bananas");

    Ok(())
}
