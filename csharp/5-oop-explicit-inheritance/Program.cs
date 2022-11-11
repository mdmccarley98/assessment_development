using System;
using System.Drawing;
using System.Drawing.Printing;

public interface IPrinter {
    void Print(string message);
}
public interface IConsole {
    void Print(string message);
}
public class Example : IPrinter, IConsole {
    // STEM: ---------------------------------------------
    // public void Print(string message) {
    //     // var doc = new PrintDocument();
    //     // ...
    //     // doc.Print();
    //     Console.WriteLine(message);
    // }

    // KEY: -----------------------------------------------
    //void IPrinter.Print(string message) {
    //    Console.WriteLine($"IPrinter.Print({message})");
    //    // var doc = new PrintDocument();
    //    // ...
    //    // doc.Print();
    //}
    //void IConsole.Print(string message) {
    //    Console.WriteLine($"IConsole.Print({message})");
    //}

    // D1: ------------------------------------------------
    //public void Print(string message)
    //{
    //    if (this is IPrinter) // always is true
    //    {
    //        Console.WriteLine($"IPrinter Print({message})");
    //        // var doc = new PrintDocument();
    //        // ...
    //        // doc.Print();
    //    }
    //    else if (this is IConsole)
    //    {
    //        Console.WriteLine($"IConsole Print({message})");
    //    }
    //}

    // D2: ------------------------------------------------
    //public void Print(string message)
    //{
    //    if (this as IPrinter != null) // always is true
    //    {
    //        Console.WriteLine($"IPrinter Print({message})");
    //        // var doc = new PrintDocument();
    //        // ...
    //        // doc.Print();
    //    }
    //    else if (this as IConsole != null)
    //    {
    //        Console.WriteLine($"IConsole Print({message})");
    //    }
    //}

    // D3: ------------------------------------------------
    //void Print<IPrinter>(string message)
    //{
    //    Console.WriteLine($"IPrinter.Print({message})");
    //    // var doc = new PrintDocument();
    //    // ...
    //    // doc.Print();
    //}
    //void Print<IConsole>(string message)
    //{
    //    Console.WriteLine($"IConsole.Print({message})");
    //}

}
class Program
{
    static void Main(string[] args)
    {
        var example = new Example();
        var printer = (IPrinter)example;
        var console = (IConsole)example;
        printer.Print("printer");
        console.Print("console");
    }
}
