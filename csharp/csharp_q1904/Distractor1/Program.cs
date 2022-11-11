using System;

namespace Distractor1
{
    abstract class BaseLogger
    {
        public void Log(string message)
        {
            Console.WriteLine(message);
        }
    }
    class ExampleLogger: BaseLogger
    {
        public override void Log(string message)
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
            example.Log("Distractor1");
            var optional = new OptionalLogger();
            optional.Log("Distractor1 Optional");
        }
    }
}
