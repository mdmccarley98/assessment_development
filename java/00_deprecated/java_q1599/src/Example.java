
public class Example {
    public static Integer myCompareToWrapper(Integer num1, Integer num2) {
        return num1.compareTo(num2);
    }

    public static void main(String[] args) {
        Integer result1 = myCompareToWrapper(10, 20);

        int result2 = myCompareToWrapper(Integer.valueOf(10), Integer.valueOf(20));

        int result3 = Integer.valueOf(10).compareTo(Integer.valueOf(20));

        Integer result4 = 10.compareTo(20);
    }
}