using System;
using System.Collections.Generic;

namespace Example
{
    class Program
    {
        void F(int[] arr)
        {
            arr[0] = 4;
        }

        void Run()
        {
            var list = new List<int>() { 1, 2, 3 };
            var list_array = list.ToArray();
            F(list_array);

            int[] array = { 6, 7, 8 };
            F(array);

            Console.WriteLine("list_array: " + string.Join(", ", list_array));
            Console.WriteLine("array: " + string.Join(", ", array));
        }

        static void Main(string[] args)
        {
            new Program().Run();
        }
    }
}
