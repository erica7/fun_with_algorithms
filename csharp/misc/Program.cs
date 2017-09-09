using System;
using System.Collections.Generic;

namespace misc
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine(IsPrimeRange(22));
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

        static List<int> IsPrimeRange(int x)
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
    }
}
