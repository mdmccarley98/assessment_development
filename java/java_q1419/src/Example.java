// Copyright (C) 2020 Triplebyte

class Reader {
    String read() {
        return "TODO: read real data";
    }
}

class Writer {
    void write(String message) {
        System.out.println(message);
    }
}

class Transmitter {
    Reader reader = new Reader();
    Writer writer = new Writer();
    public void readAndWrite() {
        writer.write(reader.read());
    }
}


public class Example {
    public static void main(String[] args) {
        new Transmitter().readAndWrite();
    }
}
