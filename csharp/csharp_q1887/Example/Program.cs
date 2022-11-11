using System;
using System.IO;

namespace Example
{
    class Program
    {
        static void Main(string[] args)
        {
            using(var file = new System.IO.StreamWriter("text.txt")) {
                file.WriteLine("Triplebyte");
            }
        }
    }
}
