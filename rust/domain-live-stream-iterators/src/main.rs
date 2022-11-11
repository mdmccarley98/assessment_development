struct ChannelInfo {
    name: String,
    stream_id: u32,
    live: bool,
}

fn split_screen(channels: &mut Vec<ChannelInfo>, right_stream_id: u32) {
    let left_id: Option<u32> = channels
        .iter()
        .find(|x| x.live && x.stream_id != right_stream_id)
        .map(|x| x.stream_id);
    channels
        .iter_mut()
        .filter(|c| match left_id {
            Some(stream_id) => c.stream_id != stream_id,
            None => true,
        })
        .map(|x| x.live = x.stream_id == right_stream_id); // .find(|_| false); // consume the stream
}

fn main() {
    let mut channels = vec![
        ChannelInfo { name: String::from("Face"), stream_id: 930, live: true },
        ChannelInfo { name: String::from("PC"), stream_id: 3080, live: false },
        ChannelInfo { name: String::from("Console"), stream_id: 5, live: false },
    ];
    split_screen(&mut channels, 3080);
    for channel in channels {
        println!("{} is {}", channel.name, channel.live);
    }
}
