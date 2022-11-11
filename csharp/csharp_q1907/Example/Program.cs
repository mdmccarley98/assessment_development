using System;

namespace OOP_Generics
{
    class Geo<N, L>
    {
        public N Name { get; set; }
        public L Longitude { get; set; }
        public L Latitude { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var x = new Geo<string, float> { Name = "Center of the World", Longitude=0.0f, Latitude=0.0f };
            var y = new Geo<Guid, decimal> { Name = Guid.NewGuid(), Longitude = 0.0m, Latitude = 0.0m };

            Console.WriteLine($"{x.Name}: {x.Longitude}, {x.Latitude}");
            Console.WriteLine($"{y.Name}: {y.Longitude}, {y.Latitude}");
        }
    }
}
