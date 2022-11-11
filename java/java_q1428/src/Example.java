// Copyright (C) 2020 Triplebyte

interface Reader {
    String getContents();
}

class StringReader implements Reader {
    String source;
    StringReader(String source) {
        this.source = source;
    }

    // @Override
    public String read() {
        return source;
    }

    @Override
    public String getContents() {
        return source;
    }
}
public class Example {
    public static void main(String[] args) {
        Reader reader = new StringReader("example data");
        String result = reader.getContents();
        System.out.println(result);
    }
}
