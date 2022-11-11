import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.TreeSet;

public class Example {
    public static void main(String[] args) {
        Set<String> ts = new TreeSet<>();
        Set<String> lhs = new LinkedHashSet<>();

        ts.addAll(Arrays.asList("Charlie", "Alice", "Bob"));
        lhs.addAll(Arrays.asList("Charlie", "Alice", "Bob"));

        System.out.println("TreeSet: " + String.join(", ", ts));
        System.out.println("LinkedHashSet: " + String.join(", ", lhs));
    }
}