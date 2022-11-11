using System;

namespace Example
{
    class Program
    {
        static void Example(int arg)
        {
            int zero = 0;
            int result;
            try
            {
                result = arg / zero;
                throw new ArgumentException("Argument Thrown", "arg");
            }
            catch (DivideByZeroException)
            {
                Console.WriteLine("Divide by Zero");
            }
            catch (ArgumentException ex) when (ex.ParamName == "zero")
            {
                Console.WriteLine("Argument when zero");
            }
            catch (Exception)
            {
                Console.WriteLine("Last Catch");
            }
            finally
            {
                throw new Exception("zero");
                Console.WriteLine("Finally");
            }
        }

        static void Main(string[] args)
        {
            Example(1);
        }
    }
}
