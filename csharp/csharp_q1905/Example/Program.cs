using System;
using System.Collections.Generic;

namespace Example
{
    class Checkbook
    {
        public class Entry
        {
            public readonly string Note;
            public readonly decimal Amount;

            public Entry(string note, decimal amount)
            {
                Note = note;
                Amount = amount;
            }

            public override string ToString()
            {
                return $"{Note}: {Amount}";
            }
        }

        private List<Entry> _entries = new List<Entry>();
        private decimal _balance;

        public List<Entry> Entries
        {
            get => _entries;
        }

        public decimal Balance
        {
            get => _balance;
        }

        public Checkbook(decimal openingBalance)
        {
            _balance = openingBalance;
        }

        public void WriteCheck(Entry entry)
        {
            this._entries.Add(entry);
            _balance += entry.Amount;
        }

    }

    class Program
    {
        static void Main(string[] args)
        {
            var checkbook = new Checkbook(2400.00m);
            Console.WriteLine($"Balance: {checkbook.Balance}");

            checkbook.WriteCheck(new Checkbook.Entry("Alice", -2300.00m));

            Console.WriteLine($"Balance: {checkbook.Balance}");
            foreach (var entry in checkbook.Entries)
            {
                Console.WriteLine(entry);
            }

            // this doesn't work
            // checkbook.Entries[0].Amount = 4000m; // CS:0191 readonly

            // unsuspecting code later
            Console.WriteLine("After messing with entries");

            checkbook.Entries[0] = new Checkbook.Entry("Alice", -200.00m);

            Console.WriteLine($"Balance: {checkbook.Balance}");
            foreach (var entry in checkbook.Entries)
            {
                Console.WriteLine(entry);
            }
        }
    }
}
