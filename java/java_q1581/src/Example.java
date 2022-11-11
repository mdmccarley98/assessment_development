import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;

public class Example {

    public static long timeAdds(List<Integer> nums) {
        long startTime = System.nanoTime();

        Random rand = new Random();
        for (int i = 0; i < 10000; i++) {
            nums.add(rand.nextInt());
        }

        long endTime = System.nanoTime();

        return endTime - startTime;
    }

    public static void main(String[] args) {
        SortedMap<Long, String> results = new TreeMap<>();
        results.put(timeAdds(new ArrayList<>()), "ArrayList");
        results.put(timeAdds(new LinkedList<>()), "LinkedList");
        results.put(timeAdds(new CopyOnWriteArrayList<>()), "CopyOnWriteArrayList");

        System.out.println(results.values());
    }
}