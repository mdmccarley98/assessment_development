using System;

namespace Example
{
    class Program
    {
        static int Value(int n)
        {
            return n;
        }

        static float Value(float n)
        {
            return n;
        }

        static string Value(string n)
        {
            return n;
        }

        static void Main(string[] args)
        {
            var v = Value(88.0f);
            Console.WriteLine(v is float);
        }
    }
}
