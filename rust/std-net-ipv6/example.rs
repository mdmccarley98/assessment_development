use std::io::{Error, ErrorKind};
use std::net::ToSocketAddrs;

fn main() {
    for domain in ["example.com:80", "triplebyte.com:80"].iter() {
        match get_v6(domain) {
            Ok(addr) => println!("{}: {}", domain, addr),
            Err(err) => eprintln!("{} not found: {}", domain, err),
        }
    }
}

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
