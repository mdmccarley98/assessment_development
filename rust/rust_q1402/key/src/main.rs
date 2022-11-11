// Copyright (C) 2020, Triplebyte

use libc::{c_char, gethostname};
use std::ffi::CStr;

fn main() {
    let hostname = unsafe {
        let mut buffer = [0u8 as c_char; 2048];
        if 0 == gethostname(buffer.as_mut_ptr(), 2048) {
            Ok(CStr::from_ptr(buffer.as_ptr()).to_string_lossy().into_owned())
        } else {
            Err("Error getting host name.")
        }
    };
    match hostname {
        Ok(hostname) => println!("The hostname is {}", hostname),
        Err(message) => println!("{}", message),
    }
}
