using System;
using System.Collections.Generic;

namespace Example
{
    class Texture : IDisposable
    {
        public int Id;
        public Texture(int id, Context context)
        {
            Id = id;
            context.Textures.Add(this);
        }

        public void Dispose()
        {
            Console.WriteLine($"Dispose {Id}");
        }
    }
    class Context: IDisposable
    {
        public List<Texture> Textures = new List<Texture>();

        public void Dispose()
        {
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            {
                int x = 0;
                using (var context = new Context())
                {
                    for (var i = 0; i < 3; i++)
                    {
                        using (var t = new Texture(i, context))
                        {
                            x += t.Id;
                        }
                    }
                    Console.WriteLine($"count: {context.Textures.Count}");
                }
                Console.WriteLine($"x: {x}");
            }

        }
    }
}
