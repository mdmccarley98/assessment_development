using System;
using System.Text.Json;

namespace Example
{
    class Data {
        public int A;
        public int B { get; set; }
        public int C { get; private set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            string json = "{\"a\": 3, \"b\": 11, \"C\": 55}";
            var opts = new JsonSerializerOptions {
                PropertyNameCaseInsensitive  = true,
            };
            Data d = JsonSerializer.Deserialize<Data>(json, opts);
            Console.WriteLine($"A: {d.A}");
            Console.WriteLine($"B: {d.B}");
            Console.WriteLine($"C: {d.C}");
        }
    }
}
