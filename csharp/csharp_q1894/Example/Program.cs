using System;

namespace Example
{
    class Program
    {
        // /// Example
        // static void LogStrings(Object v)
        // {
        //     String s = (String)v;
        //     if (s != null) {
        //         Console.WriteLine("string: " + s);
        //     }
        // }

        // /// Key
        // static void LogStrings(Object v)
        // {
        //     String s = v as String;
        //     if (s != null) {
        //         Console.WriteLine("string: " + s);
        //     }
        // }

        // /// Distractor 1
        // static void LogStrings(Object v)
        // {
        //     try {
        //         String s = (String)v;
        //         if (s != null) {
        //             Console.WriteLine("string: " + s);
        //         }
        //     }
        //     finally {}
        // }

        // /// Distractor 2
        // static void LogStrings(Object v)
        // {
        //     String s = (String)v;
        //     if (s != null) {
        //         Console.WriteLine($"string: {s}");
        //     }
        // }

        // /// Distractor 3
        // static void LogStrings(Object v)
        // {
        //     string s = (string)v;
        //     if (s != null) {
        //         Console.WriteLine("string: " + s);
        //     }
        // }

        static void Main(string[] args)
        {
            LogStrings("Triplebyte");
            LogStrings(555);
        }
    }
}
