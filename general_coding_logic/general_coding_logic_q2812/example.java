class Example    
{
    public static void main(String args[])
    {
        String str_regex = "[A-Z]*[a-zA-Z][0-9]*=[0-9][a-z]*[0-9]*";
        System.out.println("ABCDEFm0=0ABCDEFm0".matches(str_regex) + " " +
                           "abedQ0=Q0".matches(str_regex) + " " +
                           "g233230=0".matches(str_regex) + " " +
                           "T1=8aaaaaaaaaaaa".matches(str_regex));

        String str2_regex = "[12]?[0-9]{1,2}";
        System.out.println("267".matches(str2_regex) + " " +
                           "0267".matches(str2_regex) + " " +
                           "66".matches(str2_regex) + " " +
                           "567".matches(str2_regex));
    }
}