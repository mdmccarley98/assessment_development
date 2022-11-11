using System;
using System.Collections;
using System.Collections.Generic;

// Example based on:
// https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerator?view=net-5.0

namespace Example
{
    // Simple business object.
    public class Person
    {
        public Person(string fName, string lName)
        {
            this.firstName = fName;
            this.lastName = lName;
        }

        public string firstName;
        public string lastName;
    }

    // Collection of Person objects. This class
    // implements IEnumerable so that it can be used
    // with ForEach syntax.
    public class People : IEnumerable
    {
        private Person[] _people;
        public People(Person[] pArray)
        {
            _people = new Person[pArray.Length];

            for (int i = 0; i < pArray.Length; i++)
            {
                _people[i] = pArray[i];
            }
        }

    // Implementation for the GetEnumerator method.
        IEnumerator IEnumerable.GetEnumerator()
        {
        return (IEnumerator) GetEnumerator();
        }

        public PeopleEnum GetEnumerator()
        {
            return new PeopleEnum(_people);
        }
    }

    // When you implement IEnumerable, you must also implement IEnumerator.
    public class PeopleEnum : IEnumerator
    {
        public Person[] _people;

        // Enumerators are positioned before the first element
        // until the first MoveNext() call.
        int position = -1;

        public PeopleEnum(Person[] list)
        {
            _people = list;
        }

        public bool MoveNext()
        {
            position++;
            return (position < _people.Length);
        }

        public void Reset()
        {
            position = -1;
        }

        object IEnumerator.Current
        {
            get
            {
                return Current;
            }
        }

        public Person Current
        {
            get
            {
                try
                {
                    return _people[position];
                }
                catch (IndexOutOfRangeException)
                {
                    throw new InvalidOperationException();
                }
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Person[] peopleArray = new Person[3]
            {
                new Person("A", "Adams"),
                new Person("B", "Bao"),
                new Person("C", "Cordova"),
            };

            People peopleList = new People(peopleArray);
            foreach (Person p in peopleList)
                Console.WriteLine(p.firstName + " " + p.lastName);
            Console.WriteLine();

            PeopleEnum peopleEnum = new PeopleEnum(peopleArray);

            Console.WriteLine("Distractor 1:");
            Console.WriteLine("1: IEnumerable can foreach? " + true + " 👆 just printed all the names");
            Console.WriteLine("2: IEnumerator is enum? " + peopleEnum.GetType().IsEnum);

            Console.WriteLine();

            Console.WriteLine("Distractor 2:");
            Console.WriteLine("1: ArrayList is IEnumerable? " + ((new ArrayList()) is IEnumerable));
            Console.WriteLine("2: List<T> is IEnumerator? " + ((new List<Person>()) is IEnumerator));

            Console.WriteLine();

            Console.WriteLine("Distractor 3:");
            Console.WriteLine("1: IEnumerable is enum? " + peopleList.GetType().IsEnum);
            Console.WriteLine("2: IEnumerator can foreach? " + false); // 👇 does not compile
            // foreach (Person p in peopleEnum)
            //     Console.WriteLine(p.firstName + " " + p.lastName);

        }
    }
}
