using System;

namespace Example
{
    class Example {
        public Example(int value) {
            Console.WriteLine(value);
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            using Example;
            var example = Example(21);
        }
    }
}
