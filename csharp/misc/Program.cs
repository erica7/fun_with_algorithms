using System;
using System.Collections.Generic;

namespace misc
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            // // IS PRIME RANGE
            // List<int> testCaseRet = IsPrimeRange(22);
            // testCaseRet.ForEach(item => Console.Write("{0}  ", item));

            // // IS PRIME COUNT
            // List<int> testCaseRet = IsPrimeCount(10);
            // testCaseRet.ForEach(item => Console.Write("{0}  ", item));

            // TRIANGLE TYPE
            Console.WriteLine(TriangleType(2, 4, 6));
            Console.WriteLine(TriangleType(8, 5, 7));
            Console.WriteLine(TriangleType(3, 4, 5));
            Console.WriteLine(TriangleType(7, 12, 8));        }

        static int? IsPrime(int n){
            for (int i = 2; i <= Math.Floor((double) n/2); i++)
            {
                if (n%i == 0)
                {
                    return null;
                }
            }
            return n;
        }

        static List<int> IsPrimeRange(int x)  // finds all the prime numbers up to and including `x`
        {
            List<int> arr = new List<int>();
            for (int n = 2; n <= x; n++)
            {
                if (IsPrime(n) != null) 
                {
                    arr.Add(n);
                }
            }
            return arr;
        }

        static List<int> IsPrimeCount(int x)  // finds the first `x` number of primes 
        {
            List<int> arr = new List<int>();
            int count = 1;
            int n = 2;
            while (count <= x)
            {
                if (IsPrime(n) != null){
                    arr.Add(n);
                    count++;
                }
                n++;
            }
            return arr;
        }

        static int TriangleType(double a, double b, double c) {
            /* Should return ᐃ type:
                0 : if ᐃ cannot be made with given sides
                1 : acute ᐃ
                2 : right ᐃ
                3 : obtuse ᐃ
            */

            double[] sides = {a, b, c};  // put sides into an array to be sorted
            Array.Sort(sides);  // sort the sides so the hypotenuse is known 
            double a2 = Math.Pow(sides[0],2);
            double b2 = Math.Pow(sides[1],2);
            double c2 = Math.Pow(sides[2],2);  // longest side => hypotenuse 

            return sides[0] + sides[1] <= sides[2] ? 0 : a2 + b2 == c2 ? 2 : a2 + b2 > c2 ? 1 : a2 + b2 < c2 ? 3 : 0 ;
            
            // // the following if statements are replaced by inline conditional statement using conditional operator `?` above

            // if (a+b<=c || b+c<=a || a+c<=b)
            // {
            //     return 0;
            // }

            // if (a2 + b2 == c2)
            // {
            //     return 2; 
            // }

            // if (a2 + b2 > c2)
            // {
            //     return 1;
            // }

            // if (a2 + b2 < c2)
            // {
            //     return 3;
            // }

            // return 0;
        }
    }
}