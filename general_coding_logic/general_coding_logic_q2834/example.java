// This code compiles and prints all prime numbers between 2 and 10000
class Example{
    static Boolean is_prime_number(int num)
    {
        int j = 2;
        while(j*j <= num)
        {
            if(num%j == 0)
            {
                return false;
            }
            j++;
        }

        System.out.println(num);
        return true;
    }

    public static void main(String args[])
    {
        for(int i = 2; i <= 10000; i++)
        {
            is_prime_number(i);
        }
    }
}