using System;
using System.IO;
using System.Text;

namespace CreateBigFile
{
    class Program
    {
        const string SQLITE3_SIG = "SQLite format 3";
        static void Main(string[] args)
        {
            CreateBigFile();
        }
        static void CreateBigFile() {
            string filename = "../big-file.db";
            byte[] gigabyte = new byte[1_000_000_000];
            byte[] header = Encoding.ASCII.GetBytes(SQLITE3_SIG);
            using (var file = File.OpenWrite(filename)) {
                Console.WriteLine($"Creating {filename}");
                Console.WriteLine("Writing sqlite header");
                file.Write(header);
                for (var i = 0; i < 24; i++) {
                    Console.WriteLine($"Writing gigabyte {i+1}");
                    file.Write(gigabyte);
                }
            }
        }
    }
}
