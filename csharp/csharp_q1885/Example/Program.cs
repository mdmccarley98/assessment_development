using System;
using System.Collections.Generic;
using System.Linq;

namespace Example
{
    class Program
    {
        void LogDays(IEnumerable<string> days) {
            // key:
            foreach(var i in days) {
            // d1: for (var i = 0; i < days.Count; i++) {
            // d2: for (var i : days) {
            // d3: from i in days select i => {
                Console.WriteLine(i);
            }; // semicolon added to make distractor 3's linq expression complete
        }

        static void Main(string[] args)
        {
            var days = new List<string>{"Monday", "Tuesday", "Wednesday", "Thursday", "Friday"};
            new Program().LogDays(days);
        }
    }
}
