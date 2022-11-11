// Copyright (C) 2020, Triplebyte

use std::io;
use std::io::{Error, ErrorKind};

fn main() -> io::Result<()> {
    use std::process::{Command, Stdio};

    let mut echo = Command::new("echo")
        .arg("one two three")
        .stdout(Stdio::piped())
        .spawn()?;
    let wc = Command::new("wc")
        .arg("-w")
        .stdin(Stdio::piped())
        .stdout(Stdio::inherit())
        .spawn()?;

    let mut wc_in = &mut wc.stdin.ok_or_else(|| Error::from(ErrorKind::BrokenPipe))?;
    let echo_out = echo.stdout.as_mut().ok_or_else(|| Error::from(ErrorKind::BrokenPipe))?;
    io::copy(echo_out, &mut wc_in)?;

    echo.wait()?;

    Ok(())
}
