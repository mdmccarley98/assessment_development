using System;
using System.Threading.Tasks;

namespace Example
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Start");

            var task = new Task(() => Console.WriteLine("Task"));

            Console.WriteLine("End");
        }
    }
}
