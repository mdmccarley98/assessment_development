using System;

namespace Example
{
    public interface IRed {
        void Red();
    }
    public static class Extension {
        public static void Red(this IRed red) {
            Console.WriteLine("Extension Red");
        }
        public static void Blue(this IRed red) {
            Console.WriteLine("Extension Blue");
        }
    }
    public class Colors: IRed {
        public void Red() {
            Console.WriteLine("Colors Red");
        }
        public void Green() {
            Console.WriteLine("Colors Green");
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var example = new Colors();
            example.Red();
            example.Green();
            example.Blue();
        }
    }
}
