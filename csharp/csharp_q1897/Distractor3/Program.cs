using System;
using System.IO;
using System.Threading.Tasks;

namespace Example
{
    class Program
    {
        const string SQLITE3_SIG = "SQLite format 3";

        static bool IsSQLite3(string filename) {
            var task = File.ReadAllTextAsync(filename);
            task.Wait();
            return task.Result.StartsWith(SQLITE3_SIG);
        }

        static void Main(string[] args)
        {
            var filename = args.Length > 0 ? args[0] : "../example.db";
            Console.WriteLine($"Testing {filename}");
            Console.WriteLine(IsSQLite3(filename));
        }
    }
}
