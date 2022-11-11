using System;

namespace Example
{
    class C
    {
        public int Value;
    }

    struct S
    {
        public int Value;
    }

    class Program
    {
        static void SetTo5(C c, S s)
        {
            c.Value = 5;
            s.Value = 5;
        }

        static void Main(string[] args)
        {
            var c = new C { Value = 3 };
            var s = new S { Value = 3 };

            SetTo5(c, s);

            var result = c.Value + s.Value;
            Console.WriteLine(result);
        }
    }
}
