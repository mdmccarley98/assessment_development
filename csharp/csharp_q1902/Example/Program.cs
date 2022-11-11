using System;
using System.Collections.Generic;

namespace Example
{
    class Program
    {
        static void Main(string[] args)
        {
            string bad_day = null;
            var months = new Dictionary<string, List<KeyValuePair<int, string>>>();
            months["February"] = new List<KeyValuePair<int, string>>{ new KeyValuePair<int, String>(28, "Last Day") };

            var day = months?["February"]?[29].Value ?? bad_day ?? "Leap Day";

            Console.WriteLine(day);
        }
    }
}
