using System;

namespace Example
{
    abstract class BaseLogger
    {
        public abstract void Log(string message);
    }
    class ExampleLogger: BaseLogger
    {
        public override void Log(string message)
        {
            Console.WriteLine($"Example: {message}");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var example = new ExampleLogger();
            example.Log("example");
        }
    }
}
