// Copyright (C) 2020 Triplebyte
package distractor2;

import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingDeque;

class Download {
    final String url;
    final boolean done;

    Download(String url) {
        this.url = url;
        this.done = false;
    }

    Download() {
        url = null;
        done = true;
    }
}

public class Example {
    static final BlockingQueue<Download> downloadQueue = new LinkedBlockingDeque<>();

    public static void main(String[] args) {
        try {
            Example example = new Example();
            for (int i = 0; i < 8; i++) {
                downloadQueue.put(new Download("https://api.example.com/" + i));
            }
            // put a blank download to signal the queue is finished
            downloadQueue.put(new Download());
            example.processDownloads();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    static void download(String url) {
        if (url.startsWith("https://api.example.com")) {
            System.out.println("Downloading " + url);
        }
    }

    public void processDownloads() throws InterruptedException {
        while (true) {
            Download download = downloadQueue.take();
            if (download.done) {
                break;
            }
            download(download.url);
        }
    }
}
