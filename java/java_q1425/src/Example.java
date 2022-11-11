// Copyright (C) 2020 Triplebyte

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
