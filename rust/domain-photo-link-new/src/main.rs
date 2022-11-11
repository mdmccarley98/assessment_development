// Copyright (C) 2020 Triplebyte

struct PhotoLink {
    photo_url: String,
    link_url: String,
    width: u32,
    height: u32,
}

impl PhotoLink {
    // key
    fn new(photo_url: &str, link_url:&str, width: u32, height: u32) -> Self {
        PhotoLink {
            photo_url: String::from(photo_url),
            link_url: String::from(link_url),
            width: width,
            height: height,
        }
    }

    // // distractor 1
    // fn new(self, photo_url: &str, link_url:&str, width: u32, height: u32) -> Self {
    //     self.photo_url = String::from(photo_url);
    //     self.link_url = String::from(link_url);
    //     self.width = width;
    //     self.height = height;
    //     self
    // }
    
    // // distractor 2
    // fn PhotoLink(photo_url: &str, link_url:&str, width: u32, height: u32) {
    //     self.photo_url = photo_url;
    //     self.link_url = link_url;
    //     self.width = width;
    //     self.height = height;
    // }

    // // distractor 3
    // fn new(self, photo_url: &str, link_url:&str, width: u32, height: u32) -> Self {
    //     PhotoLink {
    //         photo_url: photo_url,
    //         link_url: link_url,
    //         width: width,
    //         height: height,
    //     }
    // }

}

fn main() {
    let link = PhotoLink::new("https://example.com/images/test.jpg", "https://example.com/test", 1280, 720);
    println!("Link: {} {} {}x{}", link.photo_url, link.link_url, link.width, link.height);
}
