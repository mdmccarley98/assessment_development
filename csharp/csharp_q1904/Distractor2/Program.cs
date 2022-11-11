using System;

namespace Distractor2
{
    abstract class BaseLogger
    {
        public abstract void Log(string message)
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
            example.Log("Distractor2");
            var optional = new OptionalLogger();
            optional.Log("Distractor2 Optional");
        }
    }
}
