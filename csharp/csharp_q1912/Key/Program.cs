using System;
using System.Linq;

namespace Key
{
    class Program
    {
        static void Main(string[] args)
        {
            var digits = "62831853071795864769252867665590057683943387987502116419498891846156328125724179972560696506842341359";

            Console.WriteLine("Key:");
            Key(digits);

            Console.WriteLine("Distractor 1");
            Distractor1(digits);

            Console.WriteLine("Distractor 2");
            Distractor2(digits);

            Console.WriteLine("Distractor 3");
            Distractor3(digits);
        }

        static void Key(string digits) {

            var result =
                from c in digits
                select Int32.Parse(c.ToString()) into d
                where d >= 5
                group d by d into g
                orderby g.Count()
                select g;
            var least = result.First()?.Key;
            if (least != null) {
                Console.WriteLine($"Least: {least}");
            }

            foreach (var g in result) {
                Console.WriteLine(string.Join(", ", g));
            }
        }

        static void Distractor1(string digits) {

            var result =
                from c in digits
                where c >= 5
                group c by c into g
                orderby g.Count()
                select g;
            var least = result.First()?.Key;
            if (least != null) {
                Console.WriteLine($"Least: {least}");
            }

            foreach (var g in result) {
                Console.WriteLine(string.Join(", ", g));
            }
        }
        static void Distractor2(string digits) {

            var result =
                from c in digits
                select Int32.Parse(c.ToString()) into d
                group d by d into g
                where g.Count() >= 5
                orderby g.Key
                select g;
            var top = result.First();

            var least = result.First()?.Key;
            if (least != null) {
                Console.WriteLine($"Least: {least}");
            }

            foreach (var g in result) {
                Console.WriteLine(string.Join(", ", g));
            }
        }
        static void Distractor3(string digits) {

            var result =
                from c in digits
                group c by c into g
                select Int32.Parse(g.Key.ToString()) into d
                where d >= 5
                orderby d
                select d;
            var least = result.First();
            Console.WriteLine($"Least: {least}");

            foreach (var g in result) {
                Console.WriteLine(string.Join(", ", g));
            }
        }
    }
}
