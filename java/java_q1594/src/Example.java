public class Example {
    // Which throws an ArithmeticException if an overflow occurs

    public static int answer(int num1, int num2) {
        return Math.addExact(Integer.MAX_VALUE, 1);
    }

    public static int distractor1(int num1, int num2) throws ArithmeticException {
        return num1 + num2;
    }

    public static int distractor2(int num1, int num2) {
        int sum = num1 + num2;

        if (sum > Integer.MAX_VALUE) {
            throw new ArithmeticException();
        }
        return sum;
    }

    public static int distractor3(int num1, int num2) {
        return Integer.sum(num1, num2);
    }

    public static void main(String[] args) {
        System.out.println(distractor1(Integer.MAX_VALUE, 1));
        System.out.println(distractor2(Integer.MAX_VALUE, 1));
        System.out.println(distractor3(Integer.MAX_VALUE, 1));
        System.out.println(answer(Integer.MAX_VALUE, 1));
    }
}