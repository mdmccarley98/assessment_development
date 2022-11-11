import java.util.Scanner;

class Example
{
    public static void main(String args[])
    {
        Scanner scanner = new Scanner(System.in);
        char[] expr = scanner.nextLine().toCharArray();        

        int count = 0;

        for (char c: expr)
        {
            if (c == '(')
                count++;
            else if (c == ')')
                count--;
            else
            {
                System.out.println("No ( or ) found");
                return;
            }
        }

        if (count > 0)
            System.out.println(count + " open parenthesis not closed");
        else if (count < 0)
            System.out.println(Math.abs(count) + " closed parenthesis are loose");
        else
            System.out.println("All parenthesis closed");
    }
}