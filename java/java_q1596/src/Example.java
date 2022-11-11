import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.Serializable;

class FullName implements Serializable {
    private static final long serialVersionUID = 1L;
    private String firstName;
    private String lastName;

    @Override
    public String toString() {
        return this.firstName + " " + this.lastName;
    }

    public FullName(String first, String last) {
        this.firstName = first;
        this.lastName = last;
    }
}

public class Example {
    // Running this will write a file
    public static void main(String[] args) {
        FullName name = new FullName("Bob", "Dobbs");

        try (FileOutputStream file = new FileOutputStream("serializedName.ser");
            ObjectOutputStream out = new ObjectOutputStream(file)) {

            out.writeObject(name);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}