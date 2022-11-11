using System;

class Example
{
    private int _x;
    public int X {
        get { return _x; }
        set {
            if (value > 3)
            {
                _x = value;
            }
        }
    }
}

//class ExampleD1
//{
//    private int _x;
//    public int X {
//        get() { return _x; };
//        set(int value) {
//            if (value > 3)
//            {
//                _x = value;
//            }
//        }
//    }
//}

//class ExampleD2
//{
//    private int _x;
//    public int X => {
//        if (value > 3) {
//            _x = value;
//        }
//    }
//}

//class ExampleD3
//{
//    private int X;
//    public int SetX(int value)
//    {
//        if (value > 3)
//        {
//            return value;
//        }
//    }
//}


class Program
{
    static void Main(string[] args)
    {
        var e = new Example { X = 6 };
        e.X = 2;
        Console.WriteLine(e.X);
    }
}
