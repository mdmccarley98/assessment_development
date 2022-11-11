import java.util.Map;
import java.util.Optional;
import java.util.TreeMap;

public class MissingAndDuplicateNumbers {

    public static void main(String... args) {
        for (int i = 0; i < TESTS.length; i++) {
            var result = calculateDistance(TESTS[i]);
            assert Objects.equals(RESULTS[i], result);
        }
    }

    static Integer calculateDistance(int[] nums) {
        TreeSet<Integer> numSet = new TreeSet<>();
        Integer duplicate = null, missing = null;

        for (int num : nums) {
            if (!numSet.add(num)) {
                duplicate = num;
            }
        }

        int i = 0, prevKey = 0, diff = 0;

        for (Integer key : numSet) {
            if (i == 0) {
                prevKey = key;
                i++;
                continue;
            }

            int currentDiff = key - prevKey;

            if (diff == 0) {
                diff = currentDiff;
            } else if (diff != currentDiff) {
                missing = key - diff;
                diff = Math.min(diff, currentDiff);
                break;
            }

            prevKey = key;
            i++;
        }

        if (missing == null) {
            Integer firstNum = numSet.pollFirst();
            if (firstNum != null) {
                missing = firstNum - diff;
            }
        }

        if (duplicate == null || missing == null) {
            return null;
        }

        return Math.abs(duplicate - missing);
    }

    static final int[][] TESTS = new int[][]{
            new int[]{1, 1, 3, 4},
            new int[]{6, 3, 9, 18, 6, 12},
            new int[]{-4, 4, 0, 2, 4, 6, 8, 10},
            new int[]{169, 25, 73, 49, 241, 97, 145, 121, 217, 73},
            new int[]{150000, 125000, 100000, 75000, 50000, 25000, 75000, -25000},
            new int[]{-39, -18, -32, -25, -32, -46, -4, -11},
            new int[]{-4, -11, -18, -25, -32, -39, -46, -11},
            new int[]{-46, -11, -18, -25, -32, -39, -46, -53},
            new int[]{-4, -11, -18, -25, -32, -39, -46, -46},
            new int[]{-11, -11, -18, -25, -32, -39, -46, -53},
    };

    static final int[] RESULTS = new int[]{
            1,
            9,
            6,
            120,
            75000,
            21,
            42,
            14,
            7,
            49,
    };
}
