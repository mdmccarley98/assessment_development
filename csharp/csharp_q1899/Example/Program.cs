using System;
using System.Threading;
using System.Threading.Tasks;
//using System.Globalization;

namespace Example
{
    class Program
    {
        static async Task Main(string[] args)
        {
            
            Console.WriteLine(DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss.fff tt") + ": Start Main");
            await Example();
            Console.WriteLine(DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss.fff tt") + ": Done Main");
        }

        static async Task Example()
        {
            Thread.Sleep(3000);
            Console.WriteLine(DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss.fff tt") + ": Done Example");
        }
    }
}
