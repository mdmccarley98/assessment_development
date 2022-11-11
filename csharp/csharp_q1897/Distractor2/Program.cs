using System;
using System.IO;

namespace Example
{
    class Program
    {
        const string SQLITE3_SIG = "SQLite format 3";

        static bool IsSQLite3(string filename) {
            try {
                var text = File.ReadAllText(filename);
                return text.StartsWith(SQLITE3_SIG);
            } catch (OutOfMemoryException) {
                return false;
            }
        }

        static void Main(string[] args)
        {
            var filename = args.Length > 0 ? args[0] : "../example.db";
            Console.WriteLine($"Testing {filename}");
            Console.WriteLine(IsSQLite3(filename));
        }
    }
}
