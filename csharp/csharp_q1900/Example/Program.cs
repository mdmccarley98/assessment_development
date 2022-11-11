using System;

class Example
{
    public event Action<string> ClickEvent;
    public void Click(string message)
    {
        ClickEvent?.Invoke(message);
    }
}

class Program
{
    static void Main(string[] args)
    {
        var example = new Example();
        example.Click("Red");
        example.ClickEvent += (string message) =>
        {
            Console.WriteLine($"onClick: {message}");
        };
        example.Click("Green");
        example.ClickEvent -= (string message) =>
        {
            Console.WriteLine($"onClick: {message}");
        };
        example.Click("Blue");
    }
}
