# Rust Domain Live Stream Iterators

## Item ID
rust-domain-live-stream-iterators

## Claim
6. Be able to complete everyday coding tasks, particularly ones that relate to the language’s core features.

## Claim Behavior (evidence)
> map() is conceptually similar to a for loop. However, as map() is lazy, it is best used when you're already working with other iterators. If you're doing some sort of looping for a side effect, it's considered more idiomatic to use for than map().
> - [std::iter::Iterator::map](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.map) - doc.rust-lang.org/std

## Content Target
std::iter::Iterator::map

## Cognitive Model
Use

## Item Type
Multiple Choice

## Stem

Here is a rust program to control multiple cameras for a live streaming application.

```rust
struct ChannelInfo {
    name: String,
    stream_id: u32,
    live: bool,
}
```

There's a feature to allow them to split the screen, we will test this function:

```rust
fn split_screen(channels: &mut Vec<ChannelInfo>, right_stream_id: u32) {
    let left_id: Option<u32> = channels
        .iter()
        .find(|x| x.live && x.stream_id != right_stream_id)
        .map(|x| x.stream_id);
    channels
        .iter_mut()
        .filter(|c| {
            match left_id {
                Some(stream_id) => c.stream_id != stream_id,
                None => true
            }
        })
        .map(|x| x.live = x.stream_id == right_stream_id)
}
```

There are 3 cameras,
one showing the user's face,
one displaying their PC screen,
and finally one showing their gaming console screen.
Currently the face camera is live:

```rust
let mut channels = vec![
    ChannelInfo { name: String::from("Face"), stream_id: 930, live: true },
    ChannelInfo { name: String::from("PC"), stream_id: 3080, live: false },
    ChannelInfo { name: String::from("Console"), stream_id: 5, live: false },
];
```

Which channels are live after calling split_screen like this:

```rust
split_screen(&mut channels, 3080);
```

## Code Snippet (optional)


## Answer Key
* Face is live


## Distractors

### 1.
* Face is live
* PC is live

### 2.
* PC is live

### 3.
None of the channels are live.


## Common errors, misconceptions, or irrelevant information (optional):

A `map` is lazy, it won't consume iterator.  The final line in `split_screen` is a map, and nothing is done with iterator after that to consume it.  So the map is never executed, leaving only the Face stream live.

The standard library [docs for map](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.map) suggest using a `for` loop in this case.

```
warning: unused `std::iter::Map` that must be used
  --> src/main.rs:12:5
   |
12 | /     channels
13 | |         .iter_mut()
14 | |         .filter(|c| match left_id {
15 | |             Some(stream_id) => c.stream_id != stream_id,
16 | |             None => true,
17 | |         })
18 | |         .map(|x| x.live = x.stream_id == right_stream_id); // .find(|_| false); // consume the stream
   | |__________________________________________________________^
   |
   = note: `#[warn(unused_must_use)]` on by default
   = note: iterators are lazy and do nothing unless consumed
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)
