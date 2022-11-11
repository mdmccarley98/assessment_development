# Rust Libraries Hyper

## Item ID
rust-libraries-hyper

## Claim
5. Familiarity with major frameworks or libraries associated with the language’s major usages.

## Claim Behavior (evidence)
- [hyper::Request](https://docs.rs/hyper/0.13.8/hyper/struct.Request.html) - docs.rs/hyper
- [hyperium/hyper/examples/params.rs](https://github.com/hyperium/hyper/blob/master/examples/params.rs) - github.com/hyperium/hyper

## Content Target
* hyper
* hyper::Request

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem

You're working on a server that can be customized as a landing page for the sales department.
They want a page where it says "Hi Triplebyte!" if the uri is "`/deals?Triplebyte`" or "`/?Triplebyte`" 
but if no query has been specified then it should just say "Hi!".

The following types are available
```rust
use hyper::{Body, Request, Response};
```

Which one of the hyper service functions below does this?

## Code Snippet (optional)


## Answer Key
```rust
async fn sales_service(req: Request<Body>) -> hyper::http::Result<Response<Body>> {
    let body = match req.uri().query() {
        Some(query) => Body::from(format!("Hi {}!", query)),
        None => Body::from("Hi!"),
    };
    Response::builder().body(body)
}
```

## Distractors

### 1.
```rust
async fn sales_service(req: Request<Body>) -> hyper::http::Result<Response<Body>> {
    let body = match req.body().len() {
        _ => format!("Hi {}!", req.body()),
        0 => "Hi!".to_string(),
    };
    Response::new(body)
}
```

### 2.
```rust
async fn sales_service(req: Request<Body>) -> hyper::http::Result<Response<Body>> {
    Ok(match req.uri().query() {
        Some(query) => Body::from(format!("Hi {}!", query)),
        None => Body::from("Hi!"),
    })
}
```

### 3.
```rust
async fn sales_service(req: Request<Body>) -> hyper::http::Result<Response<Body>> {
    let body = format!("{:?}", req.body());
    if body.len() > 0 {
        Ok(Response::new(Body::from(format!("Hi {}!", body))))
    } else {
        Ok(Response::new(Body::from("Hi!")))
    }
}
```

## Common errors, misconceptions, or irrelevant information (optional):

Everything after the "?" in the url is considered the query.
A hyper service function returns a Result type.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

