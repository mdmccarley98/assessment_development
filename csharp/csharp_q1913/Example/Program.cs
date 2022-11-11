using System;

namespace Example
{
    public class Example
    {
        public int Counter;
        public int Count => Counter;
        public Example(int count)
        {
            Counter = Count + 1;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            int result = 0;
            Example example;
            for (var i = 3; i < 5; i++)
            {
                example = new Example(i);
                result += example.Counter;
            }

            Console.WriteLine($"result: {result}");
        }
    }
}
