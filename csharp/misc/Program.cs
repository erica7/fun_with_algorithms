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

            // // TRIANGLE TYPE
            // Console.WriteLine(TriangleType(2, 4, 6));
            // Console.WriteLine(TriangleType(8, 5, 7));
            // Console.WriteLine(TriangleType(3, 4, 5));
            // Console.WriteLine(TriangleType(7, 12, 8));

            // // TORTOISE RACE
            // int[] testRes = TortoiseRace(720, 850, 70);  // returns [0, 32, 18]
            // int[] testRes1 = TortoiseRace(80, 91, 37);  // returns [3, 21, 49]
            // int[] testRes2 = TortoiseRace(80, 100, 40);  // returns [2, 0, 0]
            // foreach(var item in testRes) { Console.Write("{0} ", item); }
            // foreach(var item in testRes1) { Console.Write("{0} ", item); }
            // foreach(var item in testRes2) { Console.Write("{0} ", item); }

            // // SUM OF RANGE 
            // Console.WriteLine(SumOfRange(1, 0)); // == 1   // 1 + 0 = 1
            // Console.WriteLine(SumOfRange(1, 2)); // == 3   // 1 + 2 = 3
            // Console.WriteLine(SumOfRange(0, 1)); // == 1   // 0 + 1 = 1
            // Console.WriteLine(SumOfRange(1, 1)); // == 1   // 1 Since both are same
            // Console.WriteLine(SumOfRange(-1, 0)); // == -1 // -1 + 0 = -1
            // Console.WriteLine(SumOfRange(-1, 2)); // == 2  // -1 + 0 + 1 + 2 = 2

            // // CALCULATE YEARS 
            // Console.WriteLine(CalculateYears(1000,0.05,0.18,1000));  // => 0
            // Console.WriteLine(CalculateYears(1000,0.01625,0.18,1200));  // => 14

            // // CIRCLE OF NUMBERS
            // Console.WriteLine(circleOfNumbers(10,2));  // => 7

            // BOUNCING BALL
            Console.WriteLine(bouncingBall(10,0.7, 5)); // => 3
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

        static int TriangleType(double a, double b, double c) 
        {
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

        public static int[] TortoiseRace(int v1, int v2, int g) 
        {
            if (v1 >= v2)
            {
                int[] ret = {-1, -1, -1};
                return ret;
            }
            
            double time = (double) g / (v2 - v1);  // ft / ft/h  => h

            int h = (int) time;

            double min = (time - h) * 60;
            int m = (int) min;
            
            int s = (int) (min % 1 * 60);
            
            int[] hms = {h, m, s};
            return hms;
        }

        public static int SumOfRange(int a, int b) 
        {
            // Given two integers (not ordered; can be positive and negative) find the sum of all numbers between, inclusive. If both numbers are equal return a or b.
            if (a == b)
            {
                return a;
            }
            int sum = 0;
            int min;
            int max;
            if (a < b)
            {
                min = a;
                max = b;
            } 
            else 
            {
                min = b;
                max = a;
            }
            for (int n = min; n <= max; n++)
            {
                sum += n;
            }
            return sum;
        }

        public static int CalculateYears(double principal, double interest,  double tax, double desiredPrincipal)  
        {
            // For sum of money, principal, determine how many years as a whole number this sum has to be kept in the bank in order for this sum of money to amount to desiredPrincipal.
            // The sum is kept for years in the bank where interest is paid yearly, and the new sum is re-invested yearly after paying tax.
            // Note that the principal is not taxed but only the year's accrued interest.
            // Assumptions : desiredPrincipal is always greater than the initial principal
            // Assumptions : if the desiredPrincipal is equal to principal  should return 0 Years.
            int years = 0;
            while (principal < desiredPrincipal)
            {            
                principal = principal * (1 + interest * (1 - tax));
                years++;
            }
            return years;
        }

        public static int circleOfNumbers(int n, int firstNumber) {
          // Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighbouring numbers is equal (note that 0 and n - 1 are neighbouring, too).
          // Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.
          // Example
          // For n = 10 and firstNumber = 2, the output should be
          // circleOfNumbers(n, firstNumber) = 7.
          int temp = (int) Math.Ceiling((double)n/2);
          if (firstNumber < temp) 
          {
            return temp + firstNumber;
          }
          else
          {
            return firstNumber - temp;
          }
        }

        public static int bouncingBall(double h, double bounce, double window){
          if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) 
          {
            return -1;
          }
          
          int count = 0;
          
          if (h >= window) 
          {
            count += 1;
            h = h * bounce;
          } 
          else
          {
            return 0;
          }
          
          while (h >= window) 
          {
            count += 2;
            h = h * bounce;
          }
          
          return count;
        }
    }
}