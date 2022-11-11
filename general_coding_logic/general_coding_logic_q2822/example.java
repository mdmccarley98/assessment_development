class Example{
    static int recursion_a(int num)
    {    
        if(num == 0 || num > 1000) return num;    
        if(num > 0)
            return recursion_b((num+1)*(-1));
        return recursion_a(num+1);
    }

    static int recursion_b(int num)
    {    
        if(num == 0 || num > 1000) return num;
        if(num < 0)
            return recursion_a((num-1)*(-1));    
        return recursion_b(num-1);
    }

    public static void main(String args[])
    {
        System.out.print(recursion_a(100));
        System.out.println(recursion_b(100));
    }
}