using System;

namespace Example
{
    class Program
    {

        static void Main(string[] args)
        {
            var numbers = new int[]{ 0, 1, 2, 3, 4 };
            try
            {
                var e = numbers.GetEnumerator();
                e.MoveNext();
                Console.WriteLine(e.Current);
                e.Reset();
                Console.WriteLine(e.Current);
            }
            catch (Exception ex)
            {
                Console.WriteLine("error");
                Console.WriteLine(ex.Message);
            }

            {
                // distractor 2 and 3 claim the enumerator is destroyed after reset:
                var e = numbers.GetEnumerator();
                e.MoveNext();
                e.Reset();
                e.MoveNext();
                Console.WriteLine($"current should be 0 after reset and move next: {e.Current}");
                e.MoveNext();
                Console.WriteLine($"enumerator still works after Reset: {e.Current} (should be 1)");

            }
        }
    }
}
