import java.io.Closeable;
import java.io.IOException;

class MyResource implements Closeable {
    public void doStuff() {
        System.out.println("Using resource.");
    }

    @Override
    public void close() throws IOException {
        System.out.println("Closing...");
    }
}

public class Example {
    public static void main(String[] args) {
        try (MyResource res = new MyResource()) {
            System.out.println("Inside Try Block.");

            res.doStuff();

        } catch (Exception e) {
            System.out.println("Inside Catch Block.");
        } finally {
            System.out.println("Inside Finally Block.");
        }
    }
}