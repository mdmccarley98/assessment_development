# Rust Std Net IPv6

## Item ID
rust-std-net-ipv6

## Claim
4. Be able to use common components of the language’s standard library.

## Claim Behavior (evidence)
- [std::io::Result](https://doc.rust-lang.org/std/io/type.Result.html) - doc.rust-lang.org
- [std::net::ToSocketAddrs](https://doc.rust-lang.org/std/net/trait.ToSocketAddrs.html) - doc.rust-lang.org

## Content Target
std::io::Result
std::io::Error
std::net

## Cognitive Model
Comprehend

## Item Type
Multiple Choice

## Stem

The world has run out of IPv4 addresses, so you're writing a tool to quickly look up if a domain has an IPv6 address.

What does this function do?

## Code Snippet

```rust
use std::net::ToSocketAddrs;
use std::io::{Error, ErrorKind};

fn get_v6(address: &str) -> std::io::Result<String> {
    let socket_address = address
        .to_socket_addrs()?
        .filter(|addr| addr.is_ipv6())
        .next()
        .ok_or(Error::new(
            ErrorKind::AddrNotAvailable,
            "no ipv6 address found",
        ))?;
    Ok(format!("{}", socket_address.ip()))
}
```

## Answer Key

* returns `Ok(String)` with the IPv6 address
* returns `Err(std::io::Error)` if there was an error looking up the IPv6 address
* returns `Err(std::io::Error)` if there were no IPv6 addresses found

## Distractors

### 1.
* returns `Ok(String)` with the IPv6 address
* panics if there was an error looking up the IPv6 address
* panics if there were no IPv6 addresses found

### 2.
* returns `Ok(String)` with the IPv6 address
* returns `Err(String)` if there was an error looking up the IPv6 address
* returns `Err(String)` if there were no IPv6 addresses found

### 3.
* returns `Ok(String)` with the IPv6 address
* returns `Err(String)` if there was an error looking up the IPv6 address
* returns `Err(std::io::Error)` if there were no IPv6 addresses found


## Common errors, misconceptions, or irrelevant information (optional):

Many of the `std` functions return an `std::io::Result<T>` which is a convenience type that maps to a `Result<T, std::io::Error>`.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

