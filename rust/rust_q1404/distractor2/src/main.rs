// Copyright (C) 2020, Triplebyte

use std::io::Result;

fn main() -> Result<()> {
    let json_string = r#"{
        "time": "2020-09-17T20:49+07:00",
        "temperature": 28,
        "unit": "c"
    }"#;

    struct Reading {
        time: String,
        temperature: i32,
        unit: String
    }

    let reading: Reading = serde::Deserialize<Reading>(json_string)?;

    println!("It's {}°{} outside.", reading.temperature, reading.unit);

    Ok(())
}
