// Reduction of logical expression 
class Example
{
    static int toInt(Boolean b){
        return b ? 1 : 0;
    }

    public static void main(String args[])
    {
        boolean is_car, has_spoiler, is_lowered;
        for(int i=0; i < 8; i++)
        {
            is_car = (i & 1) > 0;
            has_spoiler = (i & 2) > 0;
            is_lowered = (i & 4) > 0;
            
            boolean expanded = ((!is_car && !has_spoiler) || (!is_car || !is_lowered));
            boolean reducted = !(is_car && is_lowered);

            System.out.println(toInt(is_lowered) + " " + toInt(has_spoiler) + " " + toInt(is_car) + ": " + toInt(expanded) + " " + toInt(reducted));
        }
    }
}