class Example
{
    static boolean lessReverse(String firstPart, String lastPart)
    {
        if(str1.length() != str2.length())
            return false;

        for(int i=0; i < firstPart.length(); i++)
        {
            if(firstPart.charAt(firstPart.length()-i-1) == lastPart.charAt(i))
            {
                continue;
            }
            else
            {
                return firstPart.charAt(firstPart.length()-i-1) < lastPart.charAt(i);
            }
        }

        return true;
    }

    public static void main(String args[])
    {
        System.out.println(lessReverse("818","818"));
    }
}