# Java Standard Library File Watcher API

## Item ID
1425

## Claim
Claim 2: libraries_frameworks

## Claim Behavior (evidence)
Watching a Directory for Changes
https://docs.oracle.com/javase/tutorial/essential/io/notification.html

Java File IO: Modern APIs to Create, Read, Write & More
https://www.marcobehler.com/guides/java-files

## Cognitive Model
* Comprehend
* Use

## Item Type
Multiple Choice

## Stem
You want to make a program that watches a folder.
While it is watching, if something in the folder changes you do something.
Anytime a file is created, edited, or deleted you want to update your program's state.
For now though, we'll just print to the console.

How do you use the standard Java libraries to make a file watcher?

## Code Snippet


## Answer Key
```java
import java.io.IOException;
import java.nio.file.*;

import static java.nio.file.StandardWatchEventKinds.*;

public class Example {
    public static void main(String[] args) {
        Path path = Paths.get(".");
        WatchService watchService;

        try {
            watchService = FileSystems.getDefault().newWatchService();
            path.register(watchService, ENTRY_CREATE, ENTRY_DELETE, ENTRY_MODIFY);
        } catch (IOException e) {
            e.printStackTrace();
            return;
        }

        while (true) {
            WatchKey key;
            try {
                key = watchService.take();
                for (WatchEvent<?> event: key.pollEvents()) {
                    @SuppressWarnings("unchecked") WatchEvent<Path> pathEvent = (WatchEvent<Path>) event;
                    Path eventPath = pathEvent.context();
                    String eventName = event.kind().name();
                    System.out.format("%s: %s\n", path.resolve(eventPath), eventName);
                }
                key.reset();
            } catch (InterruptedException e) {
                e.printStackTrace();
                return;
            }
        }
    }
}
```

## Distractors

### 1.

```java
import java.io.IOException;
import java.nio.file.*;

import static java.nio.file.StandardWatchEventKinds.*;

public class Example {
    public static void main(String[] args) {
        final Path path = Paths.get(".");
        try {
            WatchService watchService = new WatchService(path, ENTRY_CREATE, ENTRY_DELETE, ENTRY_MODIFY);
            watchService.watch(event -> {
                Path eventPath = event.context();
                String eventName = event.kind().name();
                System.out.format("%s: %s\n", path.resolve(eventPath), eventName);
                event.reset();
            });
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### 2.
```java
import java.io.IOException;
import java.nio.file.*;

public class Example {
    public static void main(String[] args) {
        final Path path = Paths.get(".");
        try {
            Files.list(path).forEach(
                    eventPath -> System.out.format("%s\n", path.resolve(eventPath))
            );
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### 3.
```java
import java.io.IOException;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;

class Watcher extends SimpleFileVisitor<Path> {
    @Override
    public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) {
        System.out.format("%s: %s\n", file, attrs.lastModifiedTime());
        return FileVisitResult.CONTINUE;
    }
}

public class Example {
    public static void main(String[] args) {
        try {
            Path path = Paths.get(".");
            Watcher watcher = new Watcher();
            Files.walkFileTree(path, watcher);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```


## Common errors, misconceptions, or irrelevant information (optional):

### 1.
Unfortunately, this is not the API that the `WatcherService` uses.

### 2.
`Files.list` doesn't continually watch for new, modified, and deleted file events.
It is one way you can list the current files in a folder.
Java has an API called `WatcherService` that will do what we want.

### 3.
`Files.walkFileTree` doesn't continually watch for new, modified, and deleted file events.
It is one way you can list the current files in a folder.
Java has an API called `WatcherService` that will do what we want.

# Triplebyte Review


## Language Review: (TB only)


## Bias and Fairness Review: (TB only)


## Content Review: (TB only)

