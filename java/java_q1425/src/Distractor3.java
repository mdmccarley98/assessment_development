// Copyright (C) 2020 Triplebyte

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

public class Distractor3 {
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
