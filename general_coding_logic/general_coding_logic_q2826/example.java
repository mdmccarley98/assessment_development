import java.util.function.IntBinaryOperator;

class Example {

  private static int f1(int a) {
    if (a == 0) return 1;
    return a * f1(a - 1);
  }

  public static void main(String[] args) {
    IntBinaryOperator f2 = (int a, int b) -> Math.abs(2 * a - 3 * b);
    System.out.println(f1(f2.applyAsInt(2, 3)));
  }
}
