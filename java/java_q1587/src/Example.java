import java.io.FileNotFoundException;
import java.io.IOException;

public class Example {
    public static void throwsIOException(String message) throws IOException {
        throw new IOException(message);
    }
    public static void throwsFileNotFoundException(String message) throws FileNotFoundException {
        throw new FileNotFoundException(message);
    }

    public static void main(String[] args) {
        try {
            System.out.println("Inside try.");
            throwsIOException("Exception 1");
            System.out.println("After Exception 1.");
            throwsFileNotFoundException("Exception 2");
            System.out.println("After Exception 2.");
        } catch (FileNotFoundException e) {
            System.out.println("Handling: " + e.getMessage() + ".");
        } catch (IOException e) {
            System.out.println("Handling: " + e.getMessage() + ".");
        } finally {
            System.out.println("Inside finally.");
        }

        try {
            System.out.println("Inside second try.");
        } finally {
            System.out.println("Inside second finally.");
        }
    }
}