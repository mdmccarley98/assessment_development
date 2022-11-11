using System;

namespace Key
{
    abstract class BaseLogger
    {
        public virtual void Log(string message)
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
            example.Log("Key");
            var optional = new OptionalLogger();
            optional.Log("Key Optional");
        }
    }
}
