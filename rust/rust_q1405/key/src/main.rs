// Copyright (C) 2020, Triplebyte

use tokio::signal;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

    println!("Press Ctrl+C to quit.");

    signal::ctrl_c().await?;

    println!("quitting successfully");
    println!("buh bye!");

    Ok(())
}
