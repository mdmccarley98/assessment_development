class MyClass {

    // Baseline
    public Integer myMethod(Integer i) {
        return i;
    }
    
    // Change modifiers and arg type
    protected static Integer myMethod(Float f) {
        return Math.round(f);
    }

    // Superclass Arg
    public Integer myMethod(Number n) {
        return n.intValue();
    }

    // Add arg
    public Integer myMethod(String value, Integer i) {
        return i;
    }
    
    // Change return type
    // public String myMethod(Integer i) {
    //     return i.toString();
    // }
}

public class Example {
    public static void main(String[] args) {
        MyClass myClass = new MyClass();

        Integer r0 = myClass.myMethod(10);

        Integer r1 = MyClass.myMethod(100f);
        Integer r2 = myClass.myMethod(Double.parseDouble("100"));
        Integer r3 = myClass.myMethod("message", 100);
        // String r4 = myClass.myMethod(100);
    }
}