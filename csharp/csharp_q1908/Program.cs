using System;

class Light
{
    // KEY: this must be virtual
    public string Display()
    {
        return "Bright";
    }
}
class SmartLight: Light
{
    public string Color { get; set; }

    public SmartLight(string color)
    {
        Color = color;
    }

    // KEY: this must be override
    public string Display()
    {
        return $"Bright {Color}";
    }
}

class Program
{
    static void Main(string[] args)
    {
        var smartLight = new SmartLight("Blue");
        var light = smartLight as Light;
        Console.WriteLine(light.Display());
    }
}
