# Java Domain Blocking Queue

## Item ID
1439

## Claim
Claim 3: coding_tasks

## Claim Behavior (evidence)

MIT 6.005 Reading 20, Part 2: Message Passing with Threads & Queues
https://web.mit.edu/6.005/www/fa14/classes/20-queues-locks/message-passing/

Message Passing in Java
https://www.geeksforgeeks.org/message-passing-in-java/

Concurrency
https://docs.oracle.com/javase/tutorial/essential/concurrency/index.html

## Cognitive Model
* Use

## Item Type
Multiple Choice

## Stem
You are making a photo app that downloads the latest photo from a server.
The app needs to download multiple photos asynchronously, at the same time, to optimize bandwidth.

It uses a `BlockingQueue`.  The `Download` class keeps track of the URL to download.
To figure out when to stop taking items from the queue, you set the `Download.done` member to true.

Complete the `processDownloads` function below.

## Code Snippet

```java
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

        // Complete the code here.

    }
}
```

## Answer Key
```java
        while (true) {
            Download download = downloadQueue.take();
            if (download.done) {
                break;
            }
            new Thread(() -> download(download.url)).start();
        }
```

## Distractors

### 1.
```java
        while (true) {
            Download download = downloadQueue.take();
            new Thread(() -> download(download.url)).start();
        }
```

### 2.

```java
        while (true) {
            Download download = downloadQueue.take();
            if (download.done) {
                break;
            }
            download(download.url);
        }
```

### 3.

```java
        downloadQueue
                .parallelStream()
                .forEach(d -> download(d.url));
```

## Common errors, misconceptions, or irrelevant information (optional):

### 1.
This program doesn't use the `done` member variable.
So the main thread gets locked on `downloadQueue.take()`.
Also it passes a null string to download, causing a null pointer exception.

### 2.
This program goes through the queue sequentially.  It does not
download each file asynchronously.

### 3.
This program asynchronously downloads the queue, but it also has a null pointer exception.
The final `Download()` has a null URL.  This program does not use the `Download.done` member variable.

To make this parallel stream version work filter the `done` variable:
```java
        downloadQueue
                .parallelStream()
                .filter(d -> !d.done)
                .forEach(d -> download(d.url));
```

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

