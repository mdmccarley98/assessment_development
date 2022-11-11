import java.util.HashSet;
import java.util.Set;

class Coordinate {
    private Integer x;
    private Integer y;

    public Coordinate(Integer x, Integer y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Coordinate)) {
            return false;
        }
        Coordinate other = (Coordinate) o;

        return this.x.equals(other.x) && this.y.equals(other.y);
    }
}

public class Example {
    public static void main(String[] args) {
        Coordinate c1 = new Coordinate(1, 1);
        Coordinate c2 = new Coordinate(1, 1);

        assert c1.equals(c2);

        Set<Coordinate> coords = new HashSet<Coordinate>();

        coords.add(c1);
        coords.add(c2);

        System.out.println("Size of Set: " + coords.size());
    }
}