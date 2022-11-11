import java.util.Arrays;
import java.util.Collections;
import java.util.List;

class Person {
    private String name;

    public Person(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return name;
    }
}

public class Example {
    public static void main(String[] args) {
        List<Person> normalList = Arrays.asList(new Person("Alice"), new Person("Bob"));
        List<Person> unmodifiableList = Collections.unmodifiableList(normalList);

        System.out.println("normalList: " + normalList.toString());

        try {
            unmodifiableList.get(1).setName("Charlie");
            System.out.println("normalList after name change: " + normalList.toString());
            
            unmodifiableList.remove(1);
            System.out.println("normalList after remove: " + normalList.toString());

        } catch (UnsupportedOperationException e) {
            System.out.println("Caught Exception!");
        }
    }
}
