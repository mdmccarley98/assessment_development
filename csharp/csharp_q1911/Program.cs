using System;
using System.Collections.Generic;

namespace Example
{
    public struct Item
    {
        public string Name;
        public decimal Price;
    }
    public class Register
    {
        public decimal Total { get; private set; }
        private readonly Dictionary<Item, decimal> Items = new Dictionary<Item, decimal>();
        public void Add(Item item) {
            Total += item.Price;
            Items[item] = item.Price;
        }
        public void Remove(Item item) {
            Total -= item.Price;
            Items.Remove(item);
        }
        public decimal CalculateTotal() {
            decimal result = 0m;
            foreach(var pair in Items) {
                result += pair.Value;
            }
            return result;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var register = new Register();
            var tp = new Item{ Name="Toilet Paper", Price=3.22m };
            register.Add(tp);
            register.Add(tp);
            register.Add(tp);
            var soap = new Item{ Name="Soap", Price=1.02m };
            register.Add(soap);
            register.Remove(tp);

            Console.WriteLine($"Total: {register.Total}");
            Console.WriteLine($"Calculate Total: {register.CalculateTotal()}");
        }
    }
}
