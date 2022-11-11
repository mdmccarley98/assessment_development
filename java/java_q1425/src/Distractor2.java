// Copyright (C) 2020 Triplebyte

import java.io.IOException;
import java.nio.file.*;

public class Distractor2 {
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
