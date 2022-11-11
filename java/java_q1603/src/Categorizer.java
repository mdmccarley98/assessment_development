import java.util.ArrayList;
import java.util.List;

enum Shape {
    QUADRILATERAL("quadrilateral"), 
    PARALLELOGRAM("parallelogram"), 
    RECTANGLE("rectangle"), 
    SQUARE("square");

    private String name;

    private Shape(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return name;
    }
}

public class Categorizer {

    public static void categorize(Shape shape) {
        List<String> categories = new ArrayList<>();

        switch (shape) {
            case SQUARE:
                categories.add(Shape.SQUARE.toString());
            case RECTANGLE:
                categories.add(Shape.RECTANGLE.toString());
            case PARALLELOGRAM:
                categories.add(Shape.PARALLELOGRAM.toString());
                break;
            case QUADRILATERAL:
                categories.add(Shape.QUADRILATERAL.toString());
                break;
            default: 
                throw new RuntimeException();
        }

        String first = categories.remove(0);
        System.out.print(String.format("A %s", first));

        if (!categories.isEmpty()) {
            String others = String.join(", and a ", categories);
            System.out.print(String.format(" is also a %s", others));
        }

        System.out.println(".");
    }
    
    public static void main(String[] args) {
        categorize(Shape.SQUARE);
    }
}