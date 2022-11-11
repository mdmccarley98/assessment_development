using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Example
{
    class Program
    {
        static void Main(string[] args)
        {
            var days = new[] { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" };
            var times = new[] { "7am", "11am", "4pm" };

            // Example: ------------------

            // var alarms = from d in days
            //             from t in times
            //             select new { Day = d, Time = t };

            // Key: ----------------------
            //var alarms = days.SelectMany(
            //       day => times.Select(
            //           time => new { Day = day, Time = time }
            //       )
            //   );

            // Distractor 1: -------------
            // var alarms = new List<>();
            // foreach (var day in days)
            // {
            //     foreach (var time in times)
            //     {
            //         alarms.Add(new { Day = day, Time = time });
            //     }
            // }

            // Distractor 2: -------------
            //var alarms = days.Reduce(
            //        (acc, days) =>
            //            acc.AddRange(
            //                times.Map(
            //                    time => new { Day = day, Time = time }
            //                )
            //            )
            //        );

            // Distractor 3: -------------
            //var alarms = days.Join(
            //        times,
            //        day => day,
            //        time => time,
            //        (day, time) => new { Day = day, Time = time }
            //    );

            // foreach (dynamic a in alarms)
            foreach (var a in alarms)
            {
                Console.WriteLine($"{a.Day} at {a.Time}");
            }
        }

    }
}
