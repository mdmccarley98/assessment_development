using System;
using System.IO;

namespace Example
{
    class Program
{
        const string SQLITE3_SIG = "SQLite format 3";

        static bool IsSQLite3(string filename) {
            var buffer = new byte[SQLITE3_SIG.Length];
            using (var reader = File.Open(filename, FileMode.Open)) {
                reader.Read(buffer, 0, buffer.Length);
            }
            string result = System.Text.Encoding.UTF8.GetString(buffer);
            return result.StartsWith(SQLITE3_SIG);
        }

        static void Main(string[] args)
        {
            var filename = args.Length > 0 ? args[0] : "../example.db";
            Console.WriteLine($"Testing {filename}");
            Console.WriteLine(IsSQLite3(filename));
        }
    }
}
