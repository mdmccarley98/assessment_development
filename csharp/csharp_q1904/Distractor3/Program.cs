using System;

namespace Distractor3
{
    interface BaseLogger
    {
        void Log(string message);
    }
    class ExampleLogger: BaseLogger
    {
        public void Log(string message)
        {
            Console.WriteLine($"Example: {message}");
        }
    }

    class OptionalLogger: BaseLogger
    {
    }

    class Program
    {
        static void Main(string[] args)
        {
            var example = new ExampleLogger();
            example.Log("Distractor3");
            var optional = new OptionalLogger();
            optional.Log("Distractor3 Optional");
        }
    }
}
