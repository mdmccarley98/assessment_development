use hyper::{service, Body, Request, Response, Server};
use std::net::Ipv4Addr;

async fn sales_service(req: Request<Body>) -> hyper::http::Result<Response<Body>> {
    key(req).await
}

#[tokio::main]
async fn main() -> hyper::Result<()> {
    let svc = service::make_service_fn(move |_conn| async move {
        Ok::<_, hyper::Error>(service::service_fn(sales_service))
    });

    let addr = (Ipv4Addr::LOCALHOST, 3000).into();
    let server = Server::bind(&addr).serve(svc);
    println!("Listening on {}", addr);

    server.await?;

    Ok(())
}

async fn key(req: Request<Body>) -> hyper::http::Result<Response<Body>> {
    let body = match req.uri().query() {
        Some(query) => Body::from(format!("Hi {}!", query)),
        None => Body::from("Hi!"),
    };
    Response::builder().body(body)
}

async fn distractor1(req: Request<Body>) -> hyper::http::Result<Response<Body>> {
    let body = match req.body().len() {
        _ => format!("Hi {}!", req.body()),
        0 => "Hi!".to_string(),
    };
    Response::new(body)
}

async fn distractor2(req: Request<Body>) -> hyper::http::Result<Response<Body>> {
    Ok(match req.uri().query() {
        Some(query) => Body::from(format!("Hi {}!", query)),
        None => Body::from("Hi!"),
    })
}

async fn distractor3(req: Request<Body>) -> hyper::http::Result<Response<Body>> {
    let body = format!("{:?}", req.body());
    if body.len() > 0 {
        Ok(Response::new(Body::from(format!("Hi {}!", body))))
    } else {
        Ok(Response::new(Body::from("Hi!")))
    }
}
