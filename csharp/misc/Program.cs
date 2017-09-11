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
        }

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
    }
}