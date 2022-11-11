class Example {
  public static void main(String[] args) {
    int sum = 0;
    int i = 10;
    
    while (i < 1) {
      sum += i;
      sum = sum * 2;
      i--;
    }
    
    System.out.println(sum);
  }
}
